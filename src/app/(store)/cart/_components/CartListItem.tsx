import React from "react";
import { Box, IconButton, Select, MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartListItemProps } from "@/app/types";
import Text from "@/app/_components/Text";
import { useCart } from "@/app/CartContext";

const CartListItem: React.FC<CartListItemProps> = ({ item, product, index }) => {
    const { updateQuantity, removeFromCart } = useCart();

    if (!product) return null;

    const handleQuantityChange = (quantity: number) => {
        updateQuantity(item.slug, quantity, item.size, item.color);
    };

    const handleDelete = () => {
        removeFromCart(item.slug, item.size, item.color);
    };

    return (
        <Box
            key={index}
            sx={{
                width: "90%",
                borderBottom: "solid lightgrey 1px",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                p: 2,
            }}
        >
            {/* Pierwszy wiersz: Zdjęcie i nazwa produktu */}
            <img
                src={product.imgSrc[0]}
                alt={product.name}
                style={{
                    maxWidth:"15%",
                    objectFit: "cover",
                    borderRadius: "5px",
                    padding: "10px"
                }}
            />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "80%",
            }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <Text variant="body1" sx={{ fontWeight: "bold" }}>
                    {product.name}
                </Text>
            </Box>

            {/* Drugi wiersz: Cena, rozmiar i kolor */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text variant="body2">${product.price.toFixed(2)}</Text>
                {item.size && (
                    <Text variant="body2">Size: {item.size}</Text>
                )}
                {item.color && (
                    <Text variant="body2">Color: {item.color}</Text>
                )}
            </Box>

            {/* Trzeci wiersz: Ilość i przycisk usuwania */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <Select
                    value={item.quantity}
                    onChange={(e) =>
                        handleQuantityChange(parseInt(e.target.value as string, 10))
                    }
                >
                    {[...Array(10).keys()].map((num) => (
                        <MenuItem key={num + 1} value={num + 1}>
                            {num + 1}
                        </MenuItem>
                    ))}
                </Select>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </Box>
            </Box>
            </Box>
    );
};

export default CartListItem;