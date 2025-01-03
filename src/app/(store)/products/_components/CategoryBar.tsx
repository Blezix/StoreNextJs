import { Box } from "@mui/material";
import CategoryButton from "./CategoryButton";
import React from "react";
import FilterButton from "./FilterButton";
export default function FilterSidebar() {
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
      <CategoryButton value={"Footwear"} />
      <CategoryButton value={"Headwear"} />
      <CategoryButton value={"Jackets"} />
      <CategoryButton value={"Bags"} />
      <CategoryButton value={"Accesories"} />
      <CategoryButton value={"Bottoms"} />
      <FilterButton />
    </Box>
  );
}
