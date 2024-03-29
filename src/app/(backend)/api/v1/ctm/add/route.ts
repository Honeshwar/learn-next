import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/Configuration/dbSetup";
import CTM from "@/Models/CorruptionTellerMachine";

connectDB();

type data = {
  mobile: number;
  party_name: string;
};
type CTM_DATA = {
  users: data[];
};

function isValidBody(body: CTM_DATA) {
  return (
    body &&
    typeof body === "object" &&
    "users" in body &&
    Array.isArray(body.users) &&
    body.users.every(
      (user: any) =>
        typeof user === "object" &&
        "mobile" in user &&
        "party_name" in user &&
        typeof user.mobile === "number" &&
        typeof user.party_name === "string" &&
        user.mobile.toString().length === 10
    )
  );
}
export async function POST(request: NextRequest) {
  if (request.headers.get("content-type") !== "application/json") {
    return NextResponse.json({
      status: 400,
      error: "Invalid request, Your content-type should be application/json",
    });
  }
  let body = (await request.json()) as CTM_DATA;
  if (!isValidBody(body)) {
    return NextResponse.json({
      status: 400,
      error: "Invalid request, your formate should be like below formate",
      formate: {
        users: [
          { mobile: 1234567890, party_name: "name1" },
          { mobile: 3243456789, party_name: "name2" },
        ],
      },
    });
  }
  try {
    const results = [];
    for (let i = 0; i < body.users.length; i++) {
      const existUser = await CTM.findOne({ mobile: body.users[i].mobile });
      if (!existUser) {
        const user = new CTM(body.users[i]);
        await user.save();
        results.push(`user with ${body.users[i].mobile} added successfully`);
        continue;
      }
      results.push(`user with ${body.users[i].mobile} already exist`);
    }
    return NextResponse.json({
      status: 200,
      data: results,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: "Something went wrong on the server",
    });
  }
}
