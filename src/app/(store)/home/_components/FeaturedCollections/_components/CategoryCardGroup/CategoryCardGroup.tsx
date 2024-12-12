import React from "react";
import { Box } from "@mui/material";
import ShortCard from "./_components/ShortCard";
import LongCard from "./_components/LongCard";

const categories = [
  {
    CategoryName: "Headwear",
    imgSrc: "/Assets/HeadWearCategory.png",
    CategoryDesc: "Stylish and protective headwear for all seasons.",
    shortCardImgSrc: "/Assets/FootwearCategory.png",
    shortCardTitle: "Footwear",
  },
  {
    CategoryName: "Jacket",
    imgSrc: "/Assets/JacketCategoryImage.png",
    CategoryDesc: "Warm and durable jackets for outdoor adventures.",
    shortCardImgSrc: "/Assets/BagsCategory.png",
    shortCardTitle: "Bags",
  },
  {
    CategoryName: "Bottoms",
    imgSrc: "/Assets/BottomsCategory.png",
    CategoryDesc: "Essential accessories to complement your outfit.",
    shortCardImgSrc: "/Assets/AccesoriesCategory.png",
    shortCardTitle: "Accesories",
  },
];

const CategoryCardGroup: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "90%",
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
                CategoryDesc={category.CategoryDesc}
              />
              <ShortCard
                imgSrc={category.shortCardImgSrc}
                CategoryName={category.shortCardTitle}
                CategoryDesc={category.CategoryDesc}
              />
            </>
          ) : (
            <>
              <ShortCard
                imgSrc={category.shortCardImgSrc}
                CategoryName={category.shortCardTitle}
                CategoryDesc={category.CategoryDesc}
              />
              <LongCard
                imgSrc={category.imgSrc}
                CategoryName={category.CategoryName}
                CategoryDesc={category.CategoryDesc}
              />
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default CategoryCardGroup;
