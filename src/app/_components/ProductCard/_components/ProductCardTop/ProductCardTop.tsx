import React from "react";
import { Box } from "@mui/material";
interface Props {
  imgSrc: string;
    slug: string;

}

const ProductCardTop: React.FC<Props> = ({ imgSrc,slug }) => {
  return (
    <Box
        component={"a"}
        href={`/products/${slug}`}
      sx={{
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        height: "300px",
        p: 3,
        backgroundColor: "#f2f2f2",
        transition: "all 0.3s",
        "&:hover": {
          cursor: "pointer",
          p: 1,
        },
      }}
    >
      <Box
          component={'img'}
        src={imgSrc}
        alt="product"
        style={{ width: "80%", height: "60%", borderRadius: "10px" }}
      />
    </Box>
  );
};
export default ProductCardTop;
