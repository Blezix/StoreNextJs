import React from "react";
import { Box, Typography } from "@mui/material";

export default function ProductCardBottom() {
  return (
    <Box>
      <Typography
        variant={"body1"}
        sx={{
          color: "black",
        }}
      >
        Name
      </Typography>
      <Typography
        variant={"h6"}
        sx={{
          color: "black",
          fontWeight: "500",
        }}
      >
        $19.55
      </Typography>
    </Box>
  );
}
