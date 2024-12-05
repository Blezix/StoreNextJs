import React from "react";
import { Box, Typography } from "@mui/material";
export default function HeroSectionButton() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "55%",
        height: "100%",
        gap: 2,
      }}
    >
      <Typography variant={"h1"}>Nigger Sport Project</Typography>
      <Typography
        variant={"h7"}
        sx={{
          textAlign: "center",
        }}
      >
        Introducing our latest collection, designed specifically for outdoor
        enthusiasts. Features a range of high- performance outwear with a range
        of bold and vibrant colors and patterns to choose from.
      </Typography>
    </Box>
  );
}
