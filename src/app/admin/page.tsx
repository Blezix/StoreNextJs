"use client";
import { useUser } from "@/app/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    router.push("/admin/login");
  }, []);

  console.log(user);
  if (!user || user.role !== "admin") return null;
  return (
    <div>
      <h1>Admin Panel</h1>
      {/* Admin tools */}
    </div>
  );
}
