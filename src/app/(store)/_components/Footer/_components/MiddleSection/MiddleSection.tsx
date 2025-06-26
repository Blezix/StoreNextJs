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
          width: {
            xs: "100%",
              sm: "100%",
              md: "80%",
              lg: "50%",
          },
        pl: 2,
      }}
    >
      <MiddleSectionListGroup />
    </Box>
  );
}
