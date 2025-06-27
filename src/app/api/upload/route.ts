import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const filePath = path.join(process.cwd(), "public/assets");
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true });
        }

        const fileName = req.headers.get("x-file-name");
        if (!fileName) {
            return NextResponse.json({ error: "File name is required" }, { status: 400 });
        }

        const fileBuffer = await req.arrayBuffer();
        const fullPath = path.join(filePath, fileName);

        fs.writeFileSync(fullPath, Buffer.from(fileBuffer));

        return NextResponse.json({ filePath: `/Assets/${fileName}` }, { status: 200 });
    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
    }
}