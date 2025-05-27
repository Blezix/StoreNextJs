import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import CartContentListItem from "./CartContentListItem";
import { useCart } from "@/app/CartContext";
import { Product } from "@/app/types";

const CartContent: React.FC = () => {
    const { cartItems } = useCart(); // Zakładamy, że `cartItems` zawiera listę obiektów z `productId`, `color`, `size`, `quantity`.
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await Promise.all(
                    cartItems.map(async (item) => {
                        const response = await fetch(`http://localhost:5000/api/products/${item.slug}`);
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const data = await response.json();
                        return { ...data, ...item };
                    })
                );
                setProducts(productData);
                console.log(productData)

            } catch (error) {
                console.error("Błąd podczas pobierania danych produktów:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [cartItems]);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Box>
            {products.map((product) => (
                <CartContentListItem
                    key={product.id}
                    product={product}
                    cartItems={{
                        productId: product.id,
                        color: product.colors[0],
                        size: product.sizes[0],
                        image: product.imgSrc[0],
                        quantity: 1,

                    }}
                />
            ))}
        </Box>
    );
};

export default CartContent;