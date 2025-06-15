import { NextResponse,NextRequest } from "next/server";
import { readData } from "@/utils/dataHandler";
import { User } from "@/app/types";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    const users = await readData<User[]>("users.json");

    const existingUser = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!existingUser) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    console.log(existingUser.role)

    const { password: _, ...safeUser } = existingUser; // Poprawiono destrukturyzację

    return NextResponse.json(safeUser);
}


