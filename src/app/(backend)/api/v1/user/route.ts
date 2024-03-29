import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../../Configuration/dbSetup";
import User from "../../../../../Models/User";
import { request } from "http";
connectDB();

// export async function POST(request: NextRequest) {
//   //   console.log("POST /api/v1/user", request); //await request.json()
//   //   const body = await request.json(); // json funtion take data from req.body and parse it. return body
//   const formData = await request.formData(); //funtion take data from req.body and parse it. return body, can also use zod, x-www-form-urlencoded also parse by it.
//   const name = formData.get("name");
//   console.log(name, formData);
//   return NextResponse.json({
//     status: 200,
//     data: "OK",
//     // a: body,
//   });
// }

// formdata + zod

// var a = {
//     name: "name1",
//     a:"name2"
// }
// if(request.headers.get("content-type")?.slice(0, 19) !==
// "multipart/form-data" ||request.headers.get("content-type") === "application/x-www-form-urlencoded"){
//     const formData = await request.formData();
// }
// else if(request.headers.get("content-type") === "application/json"){
//     const body = await request.json();
// }

export async function POST(request: NextRequest) {
  console.log(request.headers.get("content-type"));
  try {
    if (
      request.headers.get("content-type")?.slice(0, 19) !==
      "multipart/form-data"
    ) {
      return NextResponse.json({
        status: 400,
        error:
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
    if (existingUser) {
      return NextResponse.json({
        status: 200,
        message: "Mobile number already exists",
      });
    }
    //new user we will create
    const user = new User(formDataObject);
    await user.save();
    return NextResponse.json({
      status: 200,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log("", error);
    return NextResponse.json({
      status: 500,
      error: "Something went wrong on the server",
      // error,
    });
  }
}
