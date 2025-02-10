import React from "react";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
export default function NewArrivalsText() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "15%",
      }}
    >
      <Text
        variant={"h4"}
        sx={{
          color: "#060606",
        }}
      >
        New Arrivals
      </Text>
      <Text
        variant={"body1"}
        sx={{
          color: "#818181",
        }}
      >
        Our new arrivals are built to withstand your activities while keeping
        you looking your best!
      </Text>
    </Box>
  );
}
