"use client";

import React, { useState } from "react";
import {useUser} from "@/app/UserContext";
import type { User } from "@/app/UserContext";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useUser();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password); // Loguj dane wejściowe
        try {
            const response = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            console.log("Response status:", response.status); // Loguj status odpowiedzi

            if (response.ok) {
                const data = await response.json();
                const user: User = {
                    id: data.user.id,
                    email: data.user.email,
                }
                setUser(user)
                console.log("Login successful:", data); // Loguj odpowiedź z backendu
            } else {
                console.error("Login failed:", response.statusText); // Loguj błąd
            }
        } catch (error) {
            console.error("Error during login request:", error); // Loguj błędy
        }
    };
    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
}