import React from "react";
import { Box } from "@mui/material";
import SummaryDetails from "./SummaryDetails";
import CheckoutButtons from "./CheckoutButtons";
import Text from "@/app/_components/Text";

export default function CartSummary() {
  return (
    <Box
      sx={{
        minWidth: "40%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text sx={{ mb: 2 }} variant={"h4"}>
        Summary{" "}
      </Text>
      <SummaryDetails />

      <CheckoutButtons />
    </Box>
  );
}
