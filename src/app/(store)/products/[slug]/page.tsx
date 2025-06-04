"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Product } from "@/app/types";
import ProductDescription from "@/app/(store)/products/[slug]/_components/ProductDescription";
import ProductImage from "@/app/(store)/products/[slug]/_components/ProductImage";
import SimilarItems from "@/app/(store)/products/[slug]/_components/SimilarItems";
export default function ProductPage() {
    const { slug } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:3000/api/products`);                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data: Product[] = await response.json();
                const foundProduct = data.find((product) => product.slug === slug);
                console.log(data)
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    setError("Produkt nie został znaleziony");
                }
            } catch (err) {
                setError("Nie udało się załadować produktu.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [slug]);

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    color:'black',
                    gap: 2,
                }}
            >
               Ładowanie produktu...
            </Box>
        );
    }

    if (error) {
        return <Typography variant="h4">{error}</Typography>;
    }

    if (!product) {
        return <Typography variant="h4">Produkt nie został znaleziony</Typography>;
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
            {/* Szczegóły produktu */}
            <Box
                sx={{
                    width: "85%",
                    display: "flex",
                    flexDirection: "row",
                    height: "80%",
                    flexWrap: "wrap",
                }}
            >
                <ProductImage imgSrc={product.imgSrc} />
                <ProductDescription
                    product={product}
                />
            </Box>
            <SimilarItems />
        </Box>
    );
}
