import React from "react";
import { Box } from "@mui/material";

interface Props {
  imgSrc: string;
}

const ProductCardTop: React.FC<Props> = ({ imgSrc }) => {
  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        height: "80%",
        p: 3,
        backgroundColor: "#f2f2f2",
        transition: "all 0.3s",
        "&:hover": {
          cursor: "pointer",
          p: 1,
        },
      }}
    >
      <img
        src={imgSrc}
        alt="product"
        style={{ width: "80%", height: "70%", borderRadius: "10px" }}
      />
    </Box>
  );
};
export default ProductCardTop;
