import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Kelgan data:", body);

    // bu yerda DB ga yozish yoki telegram botga yuborish mumkin

    return NextResponse.json(
      {
        success: true,
        message: "Ma'lumot qabul qilindi",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 },
    );
  }
}
