import React from "react";
import { Box } from "@mui/material";
import CheckoutButton from "./CheckoutButton";
import PayPalButton from "./PayPalButton";
import Text from "@/app/_components/Text";
const CheckoutButtons: React.FC = () => {
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
        <Text variant={"h6"}>Total</Text>
        <Text variant={"h6"}>0$</Text>
      </Box>
      <CheckoutButton />
      <PayPalButton />
    </Box>
  );
};

export default CheckoutButtons;
