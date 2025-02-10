import React from "react";
import { Button } from "@mui/material";

const PayPalButton: React.FC = () => {
  return (
    <Button
      sx={{
        backgroundColor: "white",
        color: "black",
        padding: "10px 0",
        width: "80%",
        borderRadius: "30px",
        fontSize: "1rem",
        textTransform: "none",
        border: "1px solid black",
        "&:hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      PayPal
    </Button>
  );
};

export default PayPalButton;
