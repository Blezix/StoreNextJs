import React from "react";
import { Button } from "@mui/material";
export default function HeroSectionButton() {
  return (
    <Button
      sx={{
        backgroundColor: "white",
        color: "black",
        padding: "10px 20px",
        borderRadius: "30px",
        fontSize: "1.2rem",
        fontWeight: "bold",
        mb: 7,
        "&:hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      Shop Now
    </Button>
  );
}
