import { NextRequest, NextResponse } from "next/server";
import { readData, writeData } from "@/utils/dataHandler";
import { User } from "@/app/types";

export async function POST(req: NextRequest) {
    const { email, password,role } = await req.json();

    const users = await readData<User[]>("users.json");

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const newUser: User = { email, password,role };
    users.push(newUser);

    await writeData("users.json", users);

    return NextResponse.json({ success: true });
}