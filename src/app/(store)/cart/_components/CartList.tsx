"use client";

import React, { useState } from "react";
import { Box, Snackbar } from "@mui/material";
import CartListItem from "./CartListItem";
import Text from "@/app/_components/Text";
import { useCart } from "@/app/CartContext";
import allProducts from "@/data/products.json";

export default function CartList() {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        minWidth: "60%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Text variant={"h4"}>Your Cart</Text>
      <Box
        sx={{
          gap: "10px",
          overflowY: "scroll",
        }}
      >
        {cartItems.length === 0 ? (
          <Text variant="body1">Your cart is empty</Text>
        ) : (
          cartItems.map((item, index) => {
            const product = allProducts.find((p) => p.slug === item.slug);
            const productWithDefaults = product
              ? {
                  ...product,
                  color: item.color,
                  size: item.size,
                  quantity: item.quantity,
                }
              : undefined;
            return (
              <CartListItem
                key={`${item.slug}-${item.size}-${item.color}`}
                item={item}
                product={productWithDefaults}
                index={index}
              />
            );
          })
        )}
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Item successfully deleted"
        />
      </Box>
    </Box>
  );
}
