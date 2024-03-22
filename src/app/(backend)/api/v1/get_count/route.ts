import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../../dbSetup/configuration";
import pledge_Counts from "../../../../../Models/Count";
//connect to db
connectDB();

export async function GET(request: NextRequest) {
  console.log("GET /api/v1/get_count");
  try {
    const existingCount = await pledge_Counts.findOne({});
    if (existingCount) {
      existingCount.pledge_Counts += 1; //on RAM change
      await existingCount.save(); //then save to db

      return NextResponse.json({
        status: 200,
        total_pledge_counts: existingCount.pledge_Counts,
      });
    }
    const newCount = new pledge_Counts({ pledge_Counts: 0 });
    await newCount.save();
    return NextResponse.json({
      status: 200,
      total_pledge_counts: newCount.pledge_Counts,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong on the server",
      error,
    });
  }
}
