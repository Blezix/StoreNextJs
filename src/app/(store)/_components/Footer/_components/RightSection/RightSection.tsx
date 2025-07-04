import React from "react";
import { Box } from "@mui/material";
import IconGroup from "./_components/RightSectionIconGroup/RightSectionIconGroup";
import BottomRightSection from "./_components/BottomRightSection/BottomRightSection";
export default function RightSection() {
  return (
    <Box
      sx={{
        display: "flex",
          width: {
              xs: "100%",
              sm: "50%",
              md: "33%",
              lg: "25%",
          },
        minWidth: "220px",
        flexDirection: "column",
      }}
    >
      <IconGroup />
      <BottomRightSection />
    </Box>
  );
}
