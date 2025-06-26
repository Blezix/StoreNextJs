import { NextRequest, NextResponse } from "next/server";
import { readData, writeData } from "@/utils/dataHandler"; // or wherever your readData is

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  const carts = await readData("carts.json");

  const userCart = carts.find((c: any) => c.email === email);
  return NextResponse.json(userCart?.items || []);
}

export async function POST(req: NextRequest) {
  const { email, items } = await req.json();
  const carts = await readData("carts.json");

  const index = carts.findIndex((c: any) => c.email === email);

  if (index !== -1) {
    carts[index].items = items;
  } else {
    carts.push({ email, items });
  }

  await writeData("carts.json", carts);
  return NextResponse.json({ success: true });
}
