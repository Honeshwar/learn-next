import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../../Configuration/dbSetup";

connectDB();

export async function GET(request: NextRequest) {
  try {
    console.log(
      "GET /api/v1/image_metamaker?video_url=" +
        request.nextUrl.searchParams.get("video_url"),
      request.nextUrl.searchParams.get("language")
    );
    const language = request.nextUrl.searchParams.get("language") || "hi";
    const video_url = request.nextUrl.searchParams.get("video_url");

    const data = {
      hi: {
        desc: "Check out the link below and know more about Shri Narendra Modi's visionary and transformative leadership",
        url: `https://mahathugbandhan.com/img/${video_url}`,
        image_url: "https://mahathugbandhan.com/img/hindi_logo.png",
      },
      en: {
        desc: "Check out the link below and know more about Shri Narendra Modi's visionary and transformative leadership",
        url: `https://mahathugbandhan.com/img/${video_url}`,
        image_url: "https://mahathugbandhan.com/img/english_logo.png",
      },
    } as any;

    // # desc = "Check out the link below and know more about Shri Narendra Modi's visionary and transformative leadership"
    // # url = "https://mahathugbandhan.com/img/#{video_name}"
    // # image_url = "https://mahathugbandhan.com/img/Desktop/1%20Page%20Till%20Pledge%20counter/PNGS/MTB%20logo.png"
    // #if user.present? && !user.otp_verified_at.nil?
    const title = data[language].desc;
    const site_url = "https://mahathugbandhan.com";
    const image_url = data[language].image_url;
    const url = data[language].url;
    const html_text = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <meta name="description" content=${title}">
      <meta name="title" content=${title}">
    <meta http-equiv="Refresh" content="0; url='${url}" />
      <title>Mahathugbandhan</title>

      <!-- Facebook, Pinterest, Google Plus and others make use of open graph metadata -->
      <meta property="og:title" content=${title}" />
      <meta property="og:description" content=${site_url}" />
      <meta property="fb:app_id" content="426143525108418" />
      <meta property="og:image" content=${image_url}" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="MTB" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

    </head>
    <body>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0&appId=426143525108418&autoLogAppEvents=1" nonce="ePK6rqFM"></script>
    </body>
    </html>`;
    // <img src=${image_url}">

    // Create a new NextResponse with the HTML content
    const response = new NextResponse(html_text, {
      headers: {
        "Content-Type": "text/html",
      },
    });

    // Return the response
    return response;
  } catch (error) {
    console.log("error in metamaker", error);
    return NextResponse.json({
      status: 500,
      error: "Something went wrong on the server",
    });
  }
}
