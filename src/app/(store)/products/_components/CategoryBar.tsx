"use client";

import { Box } from "@mui/material";
import CategoryButton from "./CategoryButton";
import React, { useState } from "react";
import FilterButton from "./FilterButton";

export default function FilterSidebar() {
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "95%",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
        p: 5,
        gap: "10px",
        color: "black",
        ml: "auto",
        mr: "auto",
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
        <CategoryButton
          key={category}
          value={category}
          isClicked={clickedCategory === category}
          setIsClicked={(isClicked) =>
            isClicked ? setClickedCategory(category) : setClickedCategory(null)
          }
        />
      ))}
      <FilterButton />
    </Box>
  );
}
