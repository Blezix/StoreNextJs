import React from "react";
import { Button } from "@mui/material";
export default function NewArrivalsButton() {
  return (
    <Button
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "10px 0",
        width: "200px",
        borderRadius: "30px",
        fontSize: "1.2rem",
        textTransform: "none",
        mt: 2,
        "&:hover": {
          backgroundColor: "white",
          color: "black",
        },
      }}
    >
      See all
    </Button>
  );
}
