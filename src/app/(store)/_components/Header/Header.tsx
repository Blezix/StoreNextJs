"use client";

import React from "react";
import Box from "@mui/material/Box";
import Logo from "./_components/Logo/Logo";
import MenuLeft from "./_components/MenuLeft/MenuLeft";
import MenuRight from "./_components/MenuRight/MenuRight";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/home";
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        position: isHome ? "absolute" : "none",
        top: 0,
        color: isHome ? "white" : "black",
        backgroundColor: isHome ? "transparent" : "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pr: 4,
      }}
    >
      <Logo />
      <MenuLeft />
      <MenuRight />
    </Box>
  );
}
