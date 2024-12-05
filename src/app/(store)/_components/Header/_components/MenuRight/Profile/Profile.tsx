import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
export default function Profile() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
      }}
    >
      <AccountCircleOutlinedIcon />
      <Typography>Login</Typography>
    </Box>
  );
}
