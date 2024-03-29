import Certificate from "@/Models/Certificate";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

export async function GET(request: NextRequest, response: NextResponse) {
  const mobile = request.nextUrl.searchParams.get("mobile");
  const img_url = request.nextUrl.origin + "/certificates/" + mobile + ".png";
  const filePath = "./public/certificates/" + mobile + ".png";

  //   read file from path
  const imageBuffer = fs.readFileSync(filePath); //Returns the contents of thepath., similar like readFile()
  try {
    const existingCertificate = await Certificate.findOne({ mobile: mobile });
    console.log(existingCertificate);
    if (!existingCertificate) {
      return NextResponse.json({ status: 404, error: "Certificate not found" });
    }
    // image file send to client and download
    return new NextResponse(img_url, {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": `attachment; filename=certificate.png`, //help to download
      },
    });
    // return NextResponse.redirect(img_url, {
    //   headers: {
    //     "Content-Type": "image/png",
    //     "Content-Disposition": `attachment; filename=certificate.png`, //help to download
    //   },
    // });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: "Something went wrong on the server",
    });
  }
}
