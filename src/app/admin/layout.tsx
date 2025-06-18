import React from "react";
import Navbar from "@/app/admin/_components/Navbar";
import '../globals.css';
import { Box } from "@mui/material";
export default function AdminLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            backgroundColor: "#f4f4f4",
            color: "#333",
        }}>
        <Navbar/>
        <Box sx={{
            maxWidth: "80%",
            padding: "2rem",
            overflow: "auto",
        }}>
            {children}
        </Box>
        </Box>
        </body>
        </html>
    );
}