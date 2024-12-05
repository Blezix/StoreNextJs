import React from "react";
import Box from "@mui/material/Box";
import Logo from "./_components/Logo/Logo";
import MenuLeft from "./_components/MenuLeft/MenuLeft";
import MenuRight from "./_components/MenuRight/MenuRight";

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        position: "absolute",
        top: 0,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pr: 4,
      }}
    >
      <Logo></Logo>
      <MenuLeft />
      <MenuRight />
    </Box>
  );
}
