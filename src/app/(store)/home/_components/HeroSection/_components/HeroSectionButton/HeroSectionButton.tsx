"use client";

import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
export default function HeroSectionButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <Button
      sx={{
        backgroundColor: "white",
        color: "black",
        padding: "10px 0",
        width: "200px",
        borderRadius: "30px",
        fontSize: "1.2rem",
        textTransform: "none",
        mb: 7,
        "&:hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
      onClick={handleClick}
    >
      Shop Now
    </Button>
  );
}
