import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../data/products";

interface CardProps {
  product: Product;
}

const ProductCard: React.FC<CardProps> = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.imgSrc}
        alt={product.ProductName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.ProductName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.ProductPrice}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
