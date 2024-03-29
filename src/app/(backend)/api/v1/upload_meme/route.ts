// import { NextRequest, NextResponse,  } from "next/server";
import { connectDB } from "@/Configuration/dbSetup";
import UploadMeme from "@/Models/UploadMeme";
// import multer from "multer"; //multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

// import upload from "@/dbSetup/multer";
// import {NextApiRequest, NextApiResponse} from "next";

connectDB();

// Configure multer to store uploaded files in the 'uploads' directory
// const upload = multer({ dest: "/uploadMemes/" }); //multer instance many function can use
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;
  console.log(file);
  if (!file) {
    return NextResponse.json({ status: 400, error: "File is required" });
  }
  if (
    file.type !== "image/png" &&
    file.type !== "image/jpeg" &&
    file.type !== "image/jpg"
  ) {
    return NextResponse.json({ status: 400, error: "File type not supported" });
  }
  //binary store img
  const bytes = await file.arrayBuffer(); // return Uint8Array binary
  const buffer = Buffer.from(bytes); // convert Uint8Array to Buffer(representation that is readable by fileReader) for saving to database
  console.log(bytes, buffer); //buffer.write() // existing data replate with new due to limited space temporary
  // with the file data in the buffer, you can do whatever you want with it
  // For this, we'll just write it to the filesystem in a new location
  const path = join(
    "./public/",
    "uploadMemes/",
    String(Date.now()),
    "-",
    file.name
  ); //Date.now()/Date().getTime() both time return in millisecond strat from 1979-01-01 upto current time
  await writeFile(path, buffer);
  console.log(`open ${path} to see the uploaded file`);

  // In conclusion, the code you provided reads the contents of a file into a Buffer object. The Buffer object can then be used to read and write binary data.

  // From the code you've provided, it appears that you're receiving a file from the client as binary data (likely through some kind of file input field in a web form), converting it into an ArrayBuffer, and then further converting it into a Node.js Buffer object using Buffer.from(). This could be part of a process for handling file uploads in a Node.js server environment, for example.

  //1. client send file encoded in base64/ binary data
  //2. read binary data/content of file and convert binary data to Arraybuffer object,  Uint8Array binary
  //3. convert Uint8Array binary to Buffer object , help we can read and write data that we get from client, to any file or new file
  //4. write buffer object data to new file, writeFile(path, buffer)
  const uploadMeme = new UploadMeme({
    name: file.name,
    path: path,
    data: buffer,
    img_url: request.nextUrl.origin + `/${file.name}`,
    type: file.type,
  });
  await uploadMeme.save();
  return NextResponse.json({
    status: 200,
    meme: { uploaded_url: uploadMeme.img_url },
  });
}
