import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../../Configuration/dbSetup";

connectDB();

export async function GET(request: NextRequest) {
  try {
    console.log(
      "GET /api/v1/image_metamaker?image_url=" +
        request.nextUrl.searchParams.get("image_url"),
      request.nextUrl.password
    );
    const image_url = request.nextUrl.searchParams.get("image_url");
    const title = "Mahathugbandhan";
    const site_url = "https://mahathugbandhan.com";
    const poster = `https://mahathugbandhan.com/img/${image_url}`;
    // const url = `https://mahathugbandhan.com/img/${image_url}`;
    //   <meta http-equiv="Refresh" content="0; url='${poster}" />
    const html_text = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <meta name="description" content="${title}">
      <meta name="title" content="${title}">
      <title>Mahathugbandhan</title>

      <!-- Facebook, Pinterest, Google Plus and others make use of open graph metadata -->
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${site_url}" />
      <meta property="fb:app_id" content="426143525108418" />
      <meta property="og:image" content="${poster}" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="MTB" />
      <meta property="og:image:width" content="640" />
      <meta property="og:image:height" content="442" />

    </head>
    <body>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0&appId=426143525108418&autoLogAppEvents=1" nonce="ePK6rqFM"></script>
    <img src="${poster}" style="width: 100%" loading="eager">
    </body>
    </html>`;

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
