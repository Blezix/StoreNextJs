import React from "react";
import Navbar from "@/app/admin/_components/Navbar";
import "../globals.css";
import { UserProvider } from "@/app/UserContext";
import { AdminProvider } from "@/app/admin/AdminContext";
import { Box } from "@mui/material";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <AdminProvider>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "100vh",
                backgroundColor: "#f4f4f4",
                color: "#333",
              }}
            >
              <Navbar />
              <Box
                sx={{
                  maxWidth: "80%",
                  padding: "2rem",
                  overflow: "auto",
                }}
              >
                {children}
              </Box>
            </Box>
          </AdminProvider>
        </UserProvider>
      </body>
    </html>
  );
}
