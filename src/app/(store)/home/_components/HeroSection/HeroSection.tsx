import React from "react";
import { Box } from "@mui/material";
import HeroSectionText from "./_components/HeroSectionText/HeroSectionText";
import HeroSectionButton from "./_components/HeroSectionButton/HeroSectionButton";

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        backgroundImage: "url(/Assets/Banner.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeroSectionText />
      <HeroSectionButton />
    </Box>
  );
}
