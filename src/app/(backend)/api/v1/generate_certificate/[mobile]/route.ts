import { NextRequest, NextResponse } from "next/server";
import User from "@/Models/User";
import generateCertificate from "@/Configuration/canvas_rendering_context_2D";
import Certificate from "@/Models/Certificate";

// Example usage
export async function GET(
  request: NextRequest,
  params: { params: { mobile: string } }
) {
  // const { origin, search, searchParams } = new URL(request.url);
  // const mobile = searchParams.get("mobile");
  // const mobile = request.nextUrl.searchParams.get("mobile");
  // console.log(new URL(request.url), request.nextUrl);
  // console.log(request.nextUrl.searchParams.get("mobile"));

  const language = request.nextUrl.searchParams.get("language") || "hi";
  const mobile = params.params.mobile;
  console.log(
    "[parmas]: ",
    params,
    mobile,
    language,
    request.nextUrl.searchParams.get("language")
  );

  try {
    let certificate_url: any;
    const user = await User.findOne({ mobile: mobile });
    console.log("after user find one", user, mobile);
    if (!user) {
      return NextResponse.json({
        status: 404,
        error: "User not found",
      });
    }
    try {
      certificate_url = await generateCertificate(
        user.name === "" || !user.name
          ? "Mahathugbandhan Supporter"
          : user.name,
        mobile,
        language
      );
      console.log("after generate certificate await", certificate_url);
      certificate_url = request.nextUrl.origin + certificate_url.slice(8);

      //db store certificate_url
      try {
        const existingCertificate = await Certificate.findOne({
          mobile: mobile,
        });
        if (existingCertificate) {
          //update
          existingCertificate.certificate_url = certificate_url;
          await existingCertificate.save();
        } else {
          const certificate = await Certificate.create({
            mobile: mobile,
            certificate_url: certificate_url,
          });
          console.log("certificate", certificate);
        }
      } catch (error) {
        console.log("error while storing certificate_url", error);
        return NextResponse.json({
          status: 500,
          error: "Something went wrong while storing certificate_url",
        });
      }
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        status: 500,
        error: "Something went wrong while generating certificate",
      });
    }

    return NextResponse.json({
      status: 200,
      message: `Certificate generated successfully ${certificate_url}`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      error: "Something went wrong on the server",
    });
  }
}
