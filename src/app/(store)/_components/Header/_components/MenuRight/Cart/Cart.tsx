"use client";

import React, { useEffect } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box, Button } from "@mui/material";
import Text from "@/app/_components/Text";
interface CartProps {
  onClick: () => void;
}

export default function Cart({ onClick }: CartProps) {
  const [active, setActive] = React.useState(false);
  const [items, setItems] = React.useState([]);

  const updateCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setItems(cart);
  };

  useEffect(() => {
    updateCartItems();

    const handleCartUpdated = () => {
      updateCartItems();
    };

    window.addEventListener("cartUpdated", handleCartUpdated);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
        position: "relative",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={onClick}
    >
      <ShoppingBagOutlinedIcon sx={{}} />
      <Text variant={""}>Cart({items.length})</Text>

      <Box
        sx={{
          color: "black",
          position: "absolute",
          width: "400px",
          height: "400px",
          backgroundColor: "white",
          border: "2px solid black",
          display: active ? "block" : "none",
          textAlign: "center",
          top: "100%",
          right: "200%",
          transform: "translateX(50%)",
          zIndex: 20000,
          p: 1,
        }}
      >
        <Text variant={"h6"}>My Cart</Text>
        <Box
          sx={{
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid black",
            minHeight: "40%",
            gap: "10px",
            textAlign: "start",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "79%",
            }}
          >
            <Text variant={"h6"}>Value:</Text>
            <Text variant={"h6"}>$0</Text>
          </Box>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 0",
              width: "80%",
              borderRadius: "30px",
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
