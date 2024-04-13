import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // TODO: Check for user role if it is admin or karyawan
    // const { username, password } = req.json();
    // const res =
  } catch (error) {
    console.log("[LOGIN]", error);
    return new NextResponse("Internarl Error", { status: 500 });
  }
}
