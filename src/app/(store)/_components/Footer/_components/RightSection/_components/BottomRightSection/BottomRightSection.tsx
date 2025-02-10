import React from "react";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
export default function RightSection() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "20%",
        ml: "auto",
        width: "80%",
        justifyContent: "space-around",
      }}
    >
      <Text variant={""}>Call us on +12 332476</Text>
      <Text variant={""}>USD$|English</Text>
    </Box>
  );
}
