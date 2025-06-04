"use client";

import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box, Drawer } from "@mui/material";
import Text from "@/app/_components/Text";
import { useCart } from "@/app/CartContext";
import { Product } from "@/app/types";
import CartContent from "@/app/(store)/_components/Header/_components/MenuRight/Cart/CartContent";

interface CartProps {
    onClick: () => void;
    products: Product[]
}

const Cart: React.FC<CartProps> = ({ }) => {
    const [open, setOpen] = React.useState(false);
    const { cartItems } = useCart();
    const toggleDrawer = (state: boolean) => {
        setOpen(state);
    };

    return (
        <Box
            sx={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                position: "relative",
                fontSize: "1.1rem",

                "&:hover": {
                    cursor: "pointer",
                },
            }}
            onClick={() => toggleDrawer(!open)}
        >
            <ShoppingBagOutlinedIcon />
            <Text variant={"body2"}>Cart({cartItems.length})</Text>
            <Drawer
                anchor="right"
                open={open}
                onClose={() => toggleDrawer(false)}
                PaperProps={{
                    sx: { width: "400px", padding: "16px" },
                }}
            >
                <CartContent />
            </Drawer>
        </Box>
    );
};

export default Cart;