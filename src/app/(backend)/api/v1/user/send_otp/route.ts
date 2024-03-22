import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/dbSetup/configuration";
import OTP from "@/Models/OTP";
import User from "@/Models/User";

connectDB();

export async function POST(request: NextRequest) {
  try {
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
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: "Something went wrong on the server",
      // error,
    });
  }
}
