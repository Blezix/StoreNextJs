import React from "react";
import { Box, Typography } from "@mui/material";
export default function RightSection() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "20%",
        ml: "auto",
        width: "80%",
        justifyContent: "space-around",
      }}
    >
      <Typography>Call us on +12 332476</Typography>
      <Typography>USD$|English</Typography>
    </Box>
  );
}
