import React from "react";
import { Box } from "@mui/material";
import Item from "./Item/Item";
export default function MenuLeft() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "30%",
        height: "100%",
      }}
    >
      <Item value="Home" />
      <Item value="About" />
      <Item value="Contact" />
    </Box>
  );
}