import React from "react";
import { Box } from "@mui/material";
import LeftSection from "./_components/LeftSection/LeftSection";
import MiddleSection from "./_components/MiddleSection/MiddleSection";
import RightSection from "./_components/RightSection/RightSection";
export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "400px",
        width: "100%",
        backgroundColor: "#121212",
        flexWrap: "wrap",
        padding: 3,
      }}
    >
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </Box>
  );
}
