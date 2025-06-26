"use client";

import { Box } from "@mui/material";
import CategoryButton from "./CategoryButton";
import React, { useState } from "react";
import FilterButton from "./FilterButton";
import ClearCategoryButton from "@/app/(store)/products/_components/ClearCategoryButton";
import { useSwipeable } from "react-swipeable";

export default function CategoryBar() {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      const container = document.getElementById("category-bar");
      if (container) container.scrollBy({ left: 100, behavior: "smooth" });
    },
    onSwipedRight: () => {
      const container = document.getElementById("category-bar");
      if (container) container.scrollBy({ left: -100, behavior: "smooth" });
    },
    trackMouse: true, // Allows dragging with a mouse as well
  });

  return (
    <Box
      sx={{
        minWidth: {
          xs: "90%",
          sm: "70%",
          md: "50%",
          lg: "40%",
        },
        display: "flex",
        flexDirection: "row",
        width: "95%",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
        p: {
          xs: 1,
          sm: 3,
          md: 4,
          lg: 5,
        },
        gap: {
          xs: "5px",
          sm: "8px",
          md: "10px",
          lg: "12px",
        },
        color: "black",
        ml: "auto",
        mr: "auto",
      }}
    >
      <Box
        id="category-bar"
        {...swipeHandlers}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          overflowX: "auto",
          scrollbarWidth: "thin",
          scrollbarGutter: "stable",
          pb: "10px",
          scrollbarColor: "#000000 transparent",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            height: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#000000",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555555",
          },
        }}
      >
        {[
          "Footwear",
          "Headwear",
          "Jackets",
          "Bags",
          "Accessories",
          "Bottoms",
        ].map((category) => (
          <CategoryButton key={category} value={category} />
        ))}
        <ClearCategoryButton />
      </Box>

      <FilterButton />
    </Box>
  );
}
