import React from "react";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
export default function LeftSection() {
  return (
    <Box
      sx={{
        display: "flex",
        width: {
          xs: "100%",
          sm: "100%",
          md: "33.33%",
          lg: "25%",
          xl: "25%",
        },
        minWidth: "220px",
        flexDirection: "column",
      }}
    >
      <Text
        variant={"h4"}
        sx={{
          marginBottom: 2,
          fontWeight: "bold",
        }}
      >
        Next
      </Text>
      <Text variant={"body2"}>
        Skibidi toilet goni mnie śpiewając te piosenke scooby dooo where is you
        Next as dog{" "}
      </Text>
    </Box>
  );
}
