import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../../Configuration/dbSetup";
import Counts from "../../../../../Models/Counts";
//connect to db
connectDB();

export async function GET(request: NextRequest) {
  console.log("GET /api/v1/get_count");
  try {
    const existingCount = await Counts.findOne({});
    if (existingCount) {
      //if null collection is empty
      existingCount.spin_the_wheel_count += 1; //on RAM change
      await existingCount.save(); //then save to db

      return NextResponse.json({
        status: 200,
        // message: "spin_the_wheel count increment successfully",
        total_spin_the_wheel_count: existingCount.spin_the_wheel_count,
      });
    }
    const newCount = new Counts({ spin_the_wheel_count: 0 });
    await newCount.save();
    return NextResponse.json({
      status: 200,
      message: "document in count created successfully",
      total_spin_the_wheel_count: newCount.spin_the_wheel_count,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: "Something went wrong on the server",
      // error,
    });
  }
}
