import { readData, writeData } from "@/utils/dataHandler";
export async function GET() {
  try {
    const categories = await readData("categories.json");

    return Response.json(categories);
  } catch (error) {
    console.error("Error reading categories.json:", error);
    return new Response("Failed to load categories", { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const newCategory = await request.json();
    const categories = await readData("categories.json");

    categories.push(newCategory);
    await writeData("categories.json", categories);

    return Response.json({ message: "Category added successfully" });
  } catch (error) {
    console.error("Error adding category:", error);
    return new Response("Failed to add category", { status: 500 });
  }
}
