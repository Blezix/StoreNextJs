import React from "react";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";

export default function HeroSectionButton() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: "100%",
        gap: 2,
      }}
    >
      <Text variant={"h1"}>Nigger Sport Project</Text>
      <Text
        variant={"h6"}
        sx={{
          textAlign: "center",
          maxWidth: "70%",
        }}
      >
        Introducing our latest collection, designed specifically for outdoor
        enthusiasts. Features a range of high- performance outwear with a range
        of bold and vibrant colors and patterns to choose from.
      </Text>
    </Box>
  );
}
