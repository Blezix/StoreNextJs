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
    shortCardName: "Footwear",
  },
  {
    CategoryName: "Jackets",
    imgSrc: "/Assets/JacketCategoryImage.png",
    CategoryDesc: "Warm and durable jackets for outdoor adventures.",
    shortCardImgSrc: "/Assets/BagsCategory.png",
    shortCardName: "Bags",
  },
  {
    CategoryName: "Bottoms",
    imgSrc: "/Assets/BottomsCategory.png",
    CategoryDesc: "Essential accessories to complement your outfit.",
    shortCardImgSrc: "/Assets/AccesoriesCategory.png",
    shortCardName: "Accessories",
  },
];

const CategoryCardGroup: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: {
            md:"start",
            xl:"center"
        },
        alignItems:"center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "90%",
        height: "80%",
          overflow:"auto"
      }}
    >
      {categories.map((category, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexBasis: {
                xs: "100%",
                sm: "50%",
                md: "33.33%",
                lg: "33%",
                xl: "30%",
                  },
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
                CategoryName={category.shortCardName}
                CategoryDesc={category.CategoryDesc}
              />
            </>
          ) : (
            <>
              <ShortCard
                imgSrc={category.shortCardImgSrc}
                CategoryName={category.shortCardName}
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
