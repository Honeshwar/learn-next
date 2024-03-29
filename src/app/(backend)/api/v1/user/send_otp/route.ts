import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/Configuration/dbSetup";
import OTP from "@/Models/OTP";
import User from "@/Models/User";
import client from "@/Configuration/twillo";
import otpGenerator from "otp-generator";

connectDB();

export async function POST(request: NextRequest) {
  console.log(
    "POST /api/v1/user/send_otp?language=",
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
    if (existingOTP) {
      await OTP.deleteOne({ _id: existingOTP._id });
    }
    //new otp generated
    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    console.log(otp);

    //store otp in database, and it automatically after 5min it will expire
    const userOtp = await OTP.create({
      mobile: formDataObject.mobile,
      otp,
      expireAt: new Date(Date.now() + 5 * 60 * 1000), // 5 min
    });
    await userOtp.save();
    console.log(userOtp);
    let message = null;
    try {
      message = await client.messages.create({
        body:
          (language === "en"
            ? "Hello from Mahathugbandhan. Your OTP is "
            : "महाठगबंधन की ओर से नमस्कार. आपका ओटीपी है ") + userOtp.otp,
        to: "+91" + formDataObject.mobile, // Text this number
        from: process.env.MY_TWILLIO_PHONE_NUMBER,
      });
    } catch (error) {
      console.log("err while sending otp", error);
      return NextResponse.json({
        status: 500,
        error:
          "Error while sending OTP or mobile number is not valid or not a real number",
      });
    }

    console.log("after sending otp success", message?.sid);
    return NextResponse.json({
      status: 200,
      message:
        "OTP sent successfully to " +
        formDataObject.mobile +
        "as " +
        userOtp.otp,
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
