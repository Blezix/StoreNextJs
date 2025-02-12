"use client";

import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
import CartPopUp from "@/app/(store)/_components/Header/_components/MenuRight/Cart/CartPopUp";
import {useCart} from "@/app/CartContext";

interface CartProps {
    onClick: () => void;
}

export default function Cart({ onClick }: CartProps) {
    const [active, setActive] = React.useState(false);
    const  { totalItems } = useCart();

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
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={onClick}
        >
            <ShoppingBagOutlinedIcon sx={{}} />
            <Text variant={"body2"}>Cart({totalItems})</Text>
            <CartPopUp active={active} />

        </Box>
    );
}