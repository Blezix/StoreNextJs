import React from "react";
import {AdminProvider} from "@/app/admin/AdminContext";

export default function AdminDashboard() {
    return (
        <AdminProvider>
        <div>
            <h1>Admin Dashboard</h1>
            {/* Add your admin dashboard content here */}
        </div>
        </AdminProvider>
    );
}