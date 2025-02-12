import React from "react";
import { Box } from "@mui/material";
import MiddleSectionListGroup from "./_components/MiddleSectionListGroup/MiddleSectionListGroup";
export default function MiddleSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "50%",
          minWidth:"430px",
        pl: 2,
      }}
    >
      <MiddleSectionListGroup />
    </Box>
  );
}
