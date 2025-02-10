'use client'

import React from "react";
import { Box } from "@mui/material";
import HeroSectionText from "./_components/HeroSectionText/HeroSectionText";
import HeroSectionButton from "./_components/HeroSectionButton/HeroSectionButton";
import UniversalButton from "@/app/_components/UniversalButton";
import { useRouter } from "next/navigation";
export default function HeroSection() {

    const router = useRouter()

    const handleClick = () => {
        router.push("/products");
    };
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
