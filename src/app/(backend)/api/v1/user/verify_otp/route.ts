import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/Configuration/dbSetup";
import OTP from "@/Models/OTP";
import User from "@/Models/User";
import client from "@/Configuration/twillo";
import otpGenerator from "otp-generator";

connectDB();

export async function POST(request: NextRequest) {
  console.log(
    "POST /api/v1/user/verify_otp?language=",
    request.nextUrl.searchParams.get("language")
  );

  try {
    const language = request.nextUrl.searchParams.get("language");
    if (!language)
      return NextResponse.json({
        status: 400,
        error: "language as query param is required",
      });

    if (
      request.headers.get("content-type")?.slice(0, 19) !==
      "multipart/form-data"
    ) {
      return NextResponse.json({
        status: 400,
        results:
          "Invalid request, Your content-type should be multipart/form-data",
      });
    }
    const formData = await request.formData();
    console.log("form data", formData);
    const formDataObject = Object.fromEntries(formData);
    console.log("form data object", formDataObject);

    if (!formDataObject.mobile) {
      return NextResponse.json({
        status: 400,
        error: "Mobile number is required",
      });
    } else if ((formDataObject.mobile + "").length !== 10) {
      return NextResponse.json({
        status: 400,
        error: "Mobile number should be 10 digits",
      });
    }

    let existingUser = await User.findOne({ mobile: formDataObject.mobile });

    if (!existingUser) {
      return NextResponse.json({
        status: 400,
        error: "User not found",
      });
    }

    // if (!existingUser.otp_verified_at) {} edge case
    //send otp // twillo api

    const existingOTP = await OTP.findOne({ mobile: formDataObject.mobile });
    console.log(existingOTP);
    if (!existingOTP) {
      return NextResponse.json({
        status: 400,
        error: "OTP not found",
      });
    }
    if (existingOTP.expireAt < new Date()) {
      return NextResponse.json({
        status: 400,
        error: "OTP expired",
      });
    }
    console.log(typeof formDataObject.otp);
    if (existingOTP.otp !== Number(formDataObject.otp)) {
      return NextResponse.json({
        status: 400,
        error: "Invalid OTP",
      });
    }
    //delete otp
    await OTP.deleteOne({ _id: existingOTP._id });

    console.log("before sending otp success", existingOTP.otp);
    let message = null;
    try {
      message = await client.messages.create({
        body:
          language === "en"
            ? "You are marked safe from Mahathugbandhan"
            : "आपको महाठगबंधन से सुरक्षित चिन्हित किया गया है",
        to: "+91" + formDataObject.mobile, // Text this number
        from: process.env.MY_TWILLIO_PHONE_NUMBER,
      });
    } catch (error) {
      console.log("err while sending otp", error);
      return NextResponse.json({
        status: 500,
        error: "Error while sending OTP",
      });
    }

    console.log("after sending otp success", message?.sid);
    return NextResponse.json({
      status: 200,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      error: "Something went wrong on the server",
      // error,
    });
  }
}
