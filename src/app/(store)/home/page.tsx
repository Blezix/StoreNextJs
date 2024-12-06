import React from "react";
import { Box } from "@mui/material";
import HeroSection from "@/app/(store)/home/_components/HeroSection/HeroSection";
import NewArrivals from "@/app/(store)/home/_components/NewArrivals/NewArrivals";
export default function Homepage() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <HeroSection />
      <NewArrivals />
    </Box>
  );
}
