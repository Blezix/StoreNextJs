"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
      <Typography variant={"h4"}>Your Cart</Typography>
      <Box
        sx={{
          gap: "10px",
          overflowY: "scroll",
        }}
      >
        {cartItems.length === 0 ? (
          <Typography variant="body1">Your cart is empty</Typography>
        ) : (
          cartItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                height: "300px",
                width: "90%",
                borderBottom: "solid lightgrey 1px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
              }}
            >
              <img
                src={item.imgSrc}
                alt={item.ProductName}
                style={{ height: "100px" }}
              />
              <Typography variant="body1">{item.ProductName}</Typography>
              <Typography variant="body1">
                ${item.ProductPrice.toFixed(2)}
              </Typography>
              <input
                type="number"
                value={item.quantity.toString()}
                onChange={(e) =>
                  handleQuantityChange(index, parseInt(e.target.value, 10) || 0)
                }
                min="1"
              />
              <IconButton onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
}
