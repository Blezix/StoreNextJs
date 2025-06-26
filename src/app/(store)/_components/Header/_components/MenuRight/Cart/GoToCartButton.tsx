"use client";

import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const GoToCartButton: React.FC = () => {
  const router = useRouter();

  const handleGoToCart = () => {
    router.push("/cart");
  };

  return (
    <Button
      onClick={handleGoToCart}
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "10px 0",
        width: "80%",
        borderRadius: "30px",
        fontSize: "1rem",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "white",
          color: "black",
        },
      }}
    >
      Go to Cart
    </Button>
  );
};

export default GoToCartButton;
