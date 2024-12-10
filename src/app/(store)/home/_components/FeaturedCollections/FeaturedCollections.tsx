import React from "react";
import { Box } from "@mui/material";
import FCText from "./_components/FCText/FCText";
import CategoryCardGroup from "./_components/CategoryCardGroup/CategoryCardGroup";

export default function FeaturedCollections() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "130vh",
        p: 3,
      }}
    >
      <FCText />
      <CategoryCardGroup />
    </Box>
  );
}
