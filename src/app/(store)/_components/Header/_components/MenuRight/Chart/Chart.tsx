import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box, Typography } from "@mui/material";
export default function Chart() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
      }}
    >
      <ShoppingBagOutlinedIcon sx={{}} />
      <Typography>Chart(0)</Typography>
    </Box>
  );
}
