"use client";

import React from "react";
import { Box, Button } from "@mui/material";
import Text from "@/app/_components/Text";
import { useCart } from "@/app/CartContext";

const CheckoutButtons: React.FC = () => {
  const { totalPrice } = useCart();

  const formatPrice = (price: number) => {
    return price.toFixed(2) + "$";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        height: "20%",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <Text variant={"h5"}>Total</Text>
        <Text variant={"h5"}>{formatPrice(totalPrice)}</Text>
      </Box>
      <Button
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
        Checkout Now
      </Button>
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
    </Box>
  );
};

export default CheckoutButtons;
