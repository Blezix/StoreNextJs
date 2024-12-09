import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
    ProductName: string;
    ProductPrice: number;
}
const ProductAttributes: React.FC<Props> = ({ ProductName,ProductPrice })=> {
  return (
    <Box>
      <Typography
        variant={"body1"}
        sx={{
          color: "black",
        }}
      >
          {ProductName}
      </Typography>
      <Typography
        variant={"h6"}
        sx={{
          color: "black",
          fontWeight: "500",
        }}
      >
        ${ProductPrice}
      </Typography>
    </Box>
  );
}

export default ProductAttributes;
