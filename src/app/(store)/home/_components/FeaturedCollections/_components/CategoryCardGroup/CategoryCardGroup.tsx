import React from "react";
import { Box } from "@mui/material";
import ShortCard from "./_components/ShortCard/ShortCard";
import LongCard from "./_components/LongCard/LongCard";

const categories = [
  { CategoryName: "Headwear", imgSrc: "/Assets/HeadWearCategory.png" },
  { CategoryName: "Jacket", imgSrc: "/Assets/JacketCategoryImage.png" },
  { CategoryName: "Accesories", imgSrc: "/Assets/AccesoriesCategory.png" },
];

const CategoryCardGroup: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: "80%",
      }}
    >
      {categories.map((category, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexBasis: "30%",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {index === 1 ? (
            <>
              <LongCard
                imgSrc={category.imgSrc}
                CategoryName={category.CategoryName}
              />
              <ShortCard />
            </>
          ) : (
            <>
              <ShortCard />
              <LongCard
                imgSrc={category.imgSrc}
                CategoryName={category.CategoryName}
              />
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default CategoryCardGroup;
