"use client";

import React from "react";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
const SummaryDetails: React.FC = () => {
  return (
    <Box
      sx={{
        height: "40%",
        borderBottom: "solid lightgrey 1px",
        mb: 2,
      }}
    >
      <Text variant={"h6"}>Subtotal</Text>
      <Text variant={"h6"}>Estimated Delivery & Handling</Text>
      <Text variant={"h6"}>Estimated Taxes</Text>
    </Box>
  );
};

export default SummaryDetails;
