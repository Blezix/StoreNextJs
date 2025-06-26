import { readData, writeData } from "@/utils/dataHandler";

export async function GET() {
  try {
    const users = await readData("users.json");

    return Response.json(users);
  } catch (error) {
    console.error("Error reading users.json:", error);
    return new Response("Failed to load users", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newUser = await request.json();
    const users = await readData("users.json");

    // Check if user already exists
    const existingUser = users.find(
      (user: { email: string }) => user.email === newUser.email,
    );
    if (existingUser) {
      return new Response("User already exists", { status: 409 });
    }

    users.push(newUser);
    await writeData("users.json", users);

    return Response.json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    return new Response("Failed to add user", { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { email } = await request.json();
    const users = await readData("users.json");

    // Filter out the user to delete
    const updatedUsers = users.filter(
      (user: { email: string }) => user.email !== email,
    );

    // If no users were removed, return an error
    if (updatedUsers.length === users.length) {
      return new Response("User not found", { status: 404 });
    }

    await writeData("users.json", updatedUsers);

    return Response.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return new Response("Failed to delete user", { status: 500 });
  }
}
