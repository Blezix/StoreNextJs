"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CartListItem from "./CartListItem";
import Text from "@/app/_components/Text";

interface Product {
  ProductName: string;
  ProductPrice: number;
  imgSrc: string;
  quantity: number;
}

export default function CartList() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const groupedItems = groupCartItems(cart);
    setCartItems(groupedItems);
  }, []);

  const groupCartItems = (cartItems: Product[]) => {
    const groupedItems = cartItems.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.ProductName === item.ProductName);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, [] as Product[]);
    return groupedItems;
  };

  const handleQuantityChange = (index: number, quantity: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleDelete = (index: number) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
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
      </Box>
    </Box>
  );
}
