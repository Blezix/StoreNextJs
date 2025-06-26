"use client";

import React, { useEffect } from "react";
import Text from "@/app/_components/Text";
import {
  Box,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  Link,
  Typography,
  Rating,
} from "@mui/material";
import AddToCartButton from "./AddToCartButton";
import { Product } from "@/app/types";

interface Props {
  product: Product;
}

const ProductDescription: React.FC<Props> = ({ product }) => {
  const [selectedSize, setSelectedSize] = React.useState<string>(
    product.sizes[0] || "",
  );
  const [selectedColor, setSelectedColor] = React.useState<string>(
    product.colors[0] || "",
  );
  const [rating, setRating] = React.useState<number | null>(4);
  useEffect(() => {
    console.log(product.sizes);
  }, [product]);

  if (!product) {
    return <div>Ładowanie produktu...</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: 2,
        bgcolor: "white",
        color: "black",
        minWidth: "45%",
        maxWidth: {
          xs: "100%",
          sm: "90%",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },
        flexGrow: {
          xs: 0,
          sm: 1,
        },
      }}
    >
      <Box
        sx={{
          alignSelf: "flex-start",
          color: "#777",
          fontSize: {
            xs: "0.625rem",
            sm: "0.9rem",
            md: "0.7rem",
            lg: "0.8rem",
          },
        }}
      >
        <Link href="/" underline="hover" color="inherit">
          Home
        </Link>
        {" / "}
        <Link
          href={`/products?category=${product.category}`}
          underline="hover"
          color="inherit"
        >
          {product.category}
        </Link>
        {" / "}
        <Typography component="span" color="inherit" fontSize={"inherit"}>
          {product.name}
        </Typography>
      </Box>
      <Text variant="h5">{product.name}</Text>
      <Text variant="h4">${product.price}</Text>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Rating
          sx={{ color: "#000" }}
          name="product-rating"
          value={rating}
          onChange={(_, newValue) => setRating(newValue)}
        />
        <Typography variant="body2" color="text.secondary">
          {rating ? `${rating}/5` : "No rating"}
        </Typography>
      </Box>

      <Text variant="body2">Description</Text>
      <Text
        variant="body2"
        sx={{
          color: "#6e6e6e",
          fontSize: {
            xs: "0.625rem",
            sm: "0.75rem",
            md: "0.875rem",
            lg: "0.8rem",
            xl: "0.9rem",
          },
        }}
      >
        {product.description}
      </Text>

      <FormControl>
        <Text variant={"body2"}>Size</Text>
        <ToggleButtonGroup
          value={selectedSize}
          exclusive
          onChange={(_, newSize) => newSize && setSelectedSize(newSize)}
          sx={{ flexWrap: "wrap" }}
        >
          {product.sizes.map((size) => (
            <ToggleButton key={size} value={size}>
              {size}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </FormControl>

      <FormControl>
        <Text variant={"body2"}>Color</Text>
        <ToggleButtonGroup
          value={selectedColor}
          exclusive
          onChange={(_, newColor) => newColor && setSelectedColor(newColor)}
          sx={{ flexWrap: "wrap" }}
        >
          {product.colors.map((color) => (
            <ToggleButton key={color} value={color}>
              <Box
                bgcolor={color}
                sx={{
                  border: "1px solid black",
                  minWidth: "20px",
                  minHeight: "20px",
                }}
              ></Box>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </FormControl>

      <AddToCartButton
        product={product}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
      />
    </Box>
  );
};

export default ProductDescription;
