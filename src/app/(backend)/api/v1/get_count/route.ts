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
      existingCount.pledge_count += 1; //on RAM change
      await existingCount.save(); //then save to db

      return NextResponse.json({
        status: 200,
        // message: "pledge count increment successfully",
        total_pledge_count: existingCount.pledge_count,
      });
    }
    const newCount = new Counts({ pledge_count: 0 });
    await newCount.save();
    return NextResponse.json({
      status: 200,
      message: "document in count created successfully",
      total_pledge_count: newCount.pledge_count,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: "Something went wrong on the server",
      // error,
    });
  }
}
