import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
export default function Profile() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
          fontSize: "1.1rem",


      }}
    >
      <AccountCircleOutlinedIcon />
    </Box>
  );
}
