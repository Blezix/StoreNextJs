"use client";
import { useState } from "react";
import { useUser } from "@/app/UserContext";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const { user } = useUser();
  const router = useRouter();
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");

  // Sprawdź, czy użytkownik ma rolę "admin"
  if (!user || user.role !== "admin") {
    return <h1>Brak dostępu</h1>;
  }

  const handleLogin = () => {
    if (adminPassword === "admin123") {
      router.push("/admin/dashboard");
    } else {
      setError("Nieprawidłowe hasło");
    }
  };

  return (
    <div>
      <h1>Logowanie administratora</h1>
      <input
        type="password"
        placeholder="Hasło administratora"
        value={adminPassword}
        onChange={(e) => setAdminPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Zaloguj</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
