'use client'

import React from "react";
import { Box } from "@mui/material";
import ProductCard from "@/app/_components/ProductCard/ProductCard";

const products = [
    { ProductName: "Hiking Jacket", ProductPrice: 79.99, imgSrc: ["/Assets/BaigePuffer.png"], sizes: ["S", "M", "L"], slug: "hiking-jacket" },
    { ProductName: "Trail Running Shoes", ProductPrice: 129.99, imgSrc: ["/Assets/jacketRed.png"], sizes: ["8", "9", "10"], slug: "trail-running-shoes" },
    { ProductName: "Waterproof Pants", ProductPrice: 59.99, imgSrc: ["/Assets/Beany.png"], sizes: ["S", "M", "L"], slug: "waterproof-pants" },
    { ProductName: "Thermal Gloves", ProductPrice: 19.99, imgSrc: ["/Assets/Bluzaichuj.png"], sizes: ["S", "M", "L"], slug: "thermal-gloves" },
    { ProductName: "Camping Hat", ProductPrice: 24.99, imgSrc: ["/Assets/BeanyBlue.png"], sizes: ["One Size"], slug: "camping-hat" },
    { ProductName: "Fleece Pullover", ProductPrice: 49.99, imgSrc: ["/Assets/jacketBlack.png"], sizes: ["S", "M", "L"], slug: "fleece-pullover" },
    { ProductName: "Windbreaker", ProductPrice: 89.99, imgSrc: ["/Assets/Boots.png"], sizes: ["S", "M", "L"], slug: "windbreaker" },
    { ProductName: "Backpacking Boots", ProductPrice: 149.99, imgSrc: ["/Assets/Bombaclat.png"], sizes: ["8", "9", "10"], slug: "backpacking-boots" },
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
                    sizes={product.sizes}
                    slug={product.slug}
                />
            ))}
        </Box>
    );
}