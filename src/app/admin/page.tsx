"use client";
import { useUser } from "@/app/UserContext";

export default function AdminDashboard() {
    const { user } = useUser();
    console.log(user)


    if (!user || user.role !== "admin") return null;

    return (
        <div>
            <h1>Admin Panel</h1>
            {/* Admin tools */}
        </div>
    );
}