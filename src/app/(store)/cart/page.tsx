import React from "react";
import { Box } from "@mui/material";
import CartList from "@/app/(store)/cart/_components/CartList";
import CartSummary from "@/app/(store)/cart/_components/CartSummary";

export default function Cart() {
  return (
    <Box
      sx={{
        width: "100%",
        pl: 7,
        color: "black",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CartList />
      <CartSummary />
    </Box>
  );
}
