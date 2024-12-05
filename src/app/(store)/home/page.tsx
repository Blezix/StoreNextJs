import React from "react";
import { Box } from "@mui/material";
import HeroSection from "@/app/(store)/home/_components/HeroSection/HeroSection";
export default function Homepage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <HeroSection />
    </Box>
  );
}
