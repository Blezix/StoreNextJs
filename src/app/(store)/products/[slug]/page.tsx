"use client";

import { useParams } from "next/navigation";
import { products } from "./data/products";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ProductPage() {
    const { slug } = useParams();

    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return <Typography variant="h4">Product not found</Typography>;
    }

    return (
        <Box>
            <Typography variant="h3">{product.name}</Typography>
            <Image src={product.imgSrc} alt={product.name} width={400} height={400} />
            <Typography variant="body1"></Typography>
            <Typography variant="h5">Price: ${product.price}</Typography>
        </Box>
    );
}