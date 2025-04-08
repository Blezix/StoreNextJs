"use client";

import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Item from "./Item/Item";

interface MenuLeftProps {
    isMobile: boolean;
}

export default function MenuLeft({ isMobile }: MenuLeftProps) {
    const router = useRouter();

    function HandlePageRedirect(value: string) {
        router.push(`/${value}`);
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row", // Adjust layout for mobile
                justifyContent: isMobile ? "center" : "start",
                alignItems: isMobile ? "start":"center",
                width: isMobile ? "100%" : "30%",
                height: "100%",
                color: "inherit",
            }}
        >
            <Item value="Products" onClick={() => {
                HandlePageRedirect("products?minPrice=10&maxPrice=1000&sort=name-asc");
            }} />
            <Item value="Store" onClick={() => {
                HandlePageRedirect("store");
            }} />
            <Item value="Blog" onClick={() => {
                HandlePageRedirect("blog");
            }} />
        </Box>
    );
}