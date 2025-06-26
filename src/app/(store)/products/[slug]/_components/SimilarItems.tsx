import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Product } from "@/app/types";
import ProductCard from "@/app/_components/ProductCard/ProductCard";
import Text from "@/app/_components/Text";
const SimilarItems = ({ currentSlug }: { currentSlug: string }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/products`);
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data: Product[] = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products
        .filter((product) => product.slug !== currentSlug)
        .slice(0, 8);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "white",
                color: "black",
                overflow: "auto",
                width: "85%",
                height: "auto",
            }}
        >

            <Text variant={'h5'} sx={{pb:"0"}}>Similar Items</Text>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "start",
                gap:4,
                bgcolor: "white",
                color: "black",
                overflow: "auto",
                width: "100%",
                minHeight:"350px",
            }}>


            {filteredProducts.map((product) => (
                <ProductCard ProductName={product.name} key={product.slug} slug={product.slug} imgSrc={product.imgSrc} ProductPrice={product.price}  />

            ))}
            </Box>
        </Box>
    );
};

export default SimilarItems;