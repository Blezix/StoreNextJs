import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
import { CartItem, Product } from "@/app/types";
interface CartContentListItemProps {
  cartItem: CartItem;
}

const CartContentListItem: React.FC<CartContentListItemProps> = ({
  cartItem,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Box>
        <Text variant="body2">Loading...</Text>
      </Box>
    );
  }

  const product = products.find((p) => p.slug === cartItem.slug);

  if (!product) {
    console.error("Product not found for slug:", cartItem.slug);
    return (
      <Box>
        <Text variant="body2">Product not found</Text>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        padding: "10px",
        border: "1px solid #ccc",
      }}
    >
      <Box
        component="img"
        src={product.imgSrc[0]}
        sx={{
          width: "30%",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingLeft: "10px",
          width: "60%",
        }}
      >
        <Box>
          <Text variant="body1">{product.name}</Text>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px !important",
          }}
        >
          <Box
            sx={{
              textAlign: "start",
            }}
          >
            <Text variant="body2" sx={{ fontSize: "0.8rem" }}>
              Price: {product.price}$
            </Text>
            <Text variant="body2" sx={{ fontSize: "0.8rem" }}>
              Color: {cartItem.color}
            </Text>
          </Box>
          <Box
            sx={{
              textAlign: "start",
            }}
          >
            <Text variant="body2" sx={{ fontSize: "0.8rem" }}>
              Size: {cartItem.size}
            </Text>
            <Text variant="body2" sx={{ fontSize: "0.8rem" }}>
              Quantity: {cartItem.quantity}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartContentListItem;
