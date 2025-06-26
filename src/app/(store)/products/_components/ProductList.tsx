import React, { useState } from "react";
import { Box } from "@mui/material";
import ProductCard from "@/app/_components/ProductCard/ProductCard";
import UniversalButton from "@/app/_components/UniversalButton";
import { Product } from "@/app/types";
import FadeIn from "@/app/_components/FadeIn";
interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 25);
  };

  return (
    <FadeIn blur={true} duration={150} easing="ease-out" initialOpacity={0}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "85%",
          m: `auto`,
          justifyContent: "center",
        }}
      >
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard
            key={product.slug}
            ProductName={product.name}
            ProductPrice={product.price}
            imgSrc={product.imgSrc}
            sizes={product.sizes}
            slug={product.slug}
          />
        ))}
        {visibleCount < products.length && (
          <UniversalButton
            onClick={showMore}
            variant="black"
            sx={{ mt: 2, ml: "40%", mr: "40%" }}
          >
            Show More
          </UniversalButton>
        )}
      </Box>
    </FadeIn>
  );
};

export default ProductList;
