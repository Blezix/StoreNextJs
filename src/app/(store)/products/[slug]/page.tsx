"use client";

import { useParams } from "next/navigation";
import { products } from "../data/products";
import { Box, Typography } from "@mui/material";
import ProductDescription from "@/app/(store)/products/[slug]/_components/ProductDescription";
import ProductImage from "@/app/(store)/products/[slug]/_components/ProductImage";
import SimilarItems from "@/app/(store)/products/[slug]/_components/SimilarItems";
export default function ProductPage() {
    const { slug } = useParams();

    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return <Typography variant="h4">Product not found</Typography>;
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                p: 2,
                bgcolor: "white",
                color: "black",
            }}
        >
            <Box sx={{
                width: "85%",
                display: "flex",
                flexDirection: "row",
                height: "80%",
                flexWrap: "wrap",
            }}>
                <ProductImage imgSrc={product.imgSrc} />
                <ProductDescription
                    name={product.name}
                    price={product.price}
                    imgSrc={product.imgSrc}
                    description={product.description}
                    sizes={product.sizes}
                    colors={product.colors}
                />
            </Box>
            <SimilarItems />
        </Box>
    );
}