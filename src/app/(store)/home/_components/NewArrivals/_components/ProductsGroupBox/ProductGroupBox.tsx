'use client'

import React from "react";
import { Box } from "@mui/material";
import ProductCard from "@/app/_components/ProductCard/ProductCard";

const products = [
    { ProductName: "Hiking Jacket", ProductPrice: 79.99, imgSrc: "/Assets/BaigePuffer.png" },
    { ProductName: "Trail Running Shoes", ProductPrice: 129.99, imgSrc: "/Assets/jacketRed.png" },
    { ProductName: "Waterproof Pants", ProductPrice: 59.99, imgSrc: "/Assets/Beany.png" },
    { ProductName: "Thermal Gloves", ProductPrice: 19.99, imgSrc: "/Assets/Bluzaichuj.png" },
    { ProductName: "Camping Hat", ProductPrice: 24.99, imgSrc: "/Assets/BeanyBlue.png" },
    { ProductName: "Fleece Pullover", ProductPrice: 49.99, imgSrc: "/Assets/jacketBlack.png" },
    { ProductName: "Windbreaker", ProductPrice: 89.99, imgSrc: "/Assets/Boots.png" },
    { ProductName: "Backpacking Boots", ProductPrice: 149.99, imgSrc: "/Assets/Bombaclat.png" },
];

export default function ProductGroupBox() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width:{
                    xs: "70%",
                    sm: "90%",
                    md: "90%",
                    lg: "85%",
                    xl: "85%",
                },
                height: "85%",
                flexWrap: "wrap",
                gap: "8px",
                overflow: {
                    xs:"scroll",
                    sm:"scroll",
                    md:"scroll",
                    lg: "scroll",
                    xl: "hidden",
                },
            }}
        >
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    imgSrc={product.imgSrc}
                    ProductName={product.ProductName}
                    ProductPrice={product.ProductPrice}
                />
            ))}
        </Box>
    );
}