"use client";

import React, { useState } from "react";
import { Box, Snackbar } from "@mui/material";
import CartListItem from "./CartListItem";
import Text from "@/app/_components/Text";
import { useCart } from "@/app/CartContext";
import allProducts from "@/data/products.json"; // update the path to your actual products.json

export default function CartList() {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const [open, setOpen] = useState(false);


    const handleQuantityChange = (index: number, quantity: number) => {
        const item = cartItems[index];
        updateQuantity(item.slug, quantity, item.size, item.color);
    };

    const handleDelete = (index: number) => {
        const item = cartItems[index];
        removeFromCart(item.slug, item.size, item.color);
        setOpen(true);
    };

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
                            ? { ...product, color: item.color, size: item.size, quantity: item.quantity }
                            : undefined;
                        return (
                            <CartListItem
                                key={`${item.slug}-${item.size}-${item.color}`}
                                item={item}
                                product={productWithDefaults}
                                index={index}
                                handleQuantityChange={handleQuantityChange}
                                handleDelete={handleDelete}
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
