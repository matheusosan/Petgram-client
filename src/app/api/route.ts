import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;

  try {
    const res = await fetch("http://localhost:3000/user", {
      credentials: "include",
      headers: {
        Authorization: "Bearer " + token,
        "x-auth-token": `${token}`,

        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
  }
}
