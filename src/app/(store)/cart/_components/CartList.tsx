"use client";

import React from "react";
import {Box, Snackbar} from "@mui/material";
import CartListItem from "./CartListItem";
import Text from "@/app/_components/Text";
import { useCart } from "@/app/CartContext";

export default function CartList() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
    const [open, setOpen] = React.useState(false);
  const handleQuantityChange = (index: number, quantity: number) => {
    const product = cartItems[index];
    updateQuantity(product.ProductName, quantity);
  };

  const handleDelete = (index: number) => {
    const product = cartItems[index];
    removeFromCart(product.ProductName);
        setOpen(true);
  };

    const handleClose = () => {
        setOpen(false);
    };
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
              cartItems.map((item, index) => (
                  <CartListItem
                      key={index}
                      item={item}
                      index={index}
                      handleQuantityChange={handleQuantityChange}
                      handleDelete={handleDelete}
                  />
              ))
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