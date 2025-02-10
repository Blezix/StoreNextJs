import React from "react";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
interface Props {
  ProductName: string;
  ProductPrice: number;
}
const ProductAttributes: React.FC<Props> = ({ ProductName, ProductPrice }) => {
  return (
    <Box>
      <Text
        variant={"body1"}
        sx={{
          color: "black",
        }}
      >
        {ProductName}
      </Text>
      <Text
        variant={"body2"}
        sx={{
          color: "black",
          fontWeight: "500",
        }}
      >
        ${ProductPrice}
      </Text>
    </Box>
  );
};

export default ProductAttributes;
