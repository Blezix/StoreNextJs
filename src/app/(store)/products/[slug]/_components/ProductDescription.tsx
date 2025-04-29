import React, { useEffect } from "react";
import Text from "@/app/_components/Text";
import { Box, FormControl, ToggleButton, ToggleButtonGroup, Link, Typography, Rating } from "@mui/material";
import AddToCartButton from "./AddToCartButton";

interface Props {
    name: string;
    price: number;
    description: string;
    sizes: string[];
    colors: string[];
    imgSrc: string[];
    category: string;
}

const ProductDescription: React.FC<Props> = ({ name, price, description, sizes, colors, imgSrc, category }) => {
    const [selectedSize, setSelectedSize] = React.useState<string>(sizes[0] || "");
    const [selectedColor, setSelectedColor] = React.useState<string>(colors[0] || "");
    const [rating, setRating] = React.useState<number | null>(4); // Domyślna ocena

    const product = {
        ProductName: name,
        ProductPrice: price,
        imgSrc: imgSrc,
        sizes: sizes,
        category: category,
    };

    useEffect(() => {
        console.log(product.ProductName);
    }, []);

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            p: 2,
            bgcolor: "white",
            color: "black",
            minWidth: "45%",
            maxWidth: {
                xs: "100%",
                sm: "90%",
                md: "450px",
                lg: "500px",
                xl: "550px"
            },
            flexGrow: {
                xs: 0,
                sm: 1,
            }
        }}>
            <Box sx={{ alignSelf: "flex-start", color: "#777",
                fontSize: {
                    xs: "0.625rem",
                    sm: "0.9rem",
                    md: "0.7rem",
                    lg: "0.8rem",
                }
                    }}>

                <Link href="/" underline="hover" color="inherit">
                    Home
                </Link>
                {" / "}
                <Link href={`/products?category=${category}`} underline="hover" color="inherit">
                    {product.category}
                </Link>
                {" / "}
                <Typography component="span" color="inherit" fontSize={'inherit'}>
                    {product.ProductName}
                </Typography>
            </Box>
            <Text variant="h5">{name}</Text>
            <Text variant="h4">${price}</Text>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Rating
                    sx={{ color: "#000" }}
                    name="product-rating"
                    value={rating}
                    onChange={(_, newValue) => setRating(newValue)}
                />
                <Typography variant="body2" color="text.secondary">
                    {rating ? `${rating}/5` : "No rating"}
                </Typography>
            </Box>

            <Text variant="body2">Description</Text>
            <Text variant="body2" sx={{
                color: "#6e6e6e",
                fontSize: {
                    xs: "0.625rem",
                    sm: "0.75rem",
                    md: "0.875rem",
                    lg: "0.8rem",
                    xl: "0.9rem",
                },
            }}>{description}</Text>

            <FormControl>
                <Text variant={'body2'}>Size</Text>
                <ToggleButtonGroup
                    value={selectedSize}
                    exclusive
                    onChange={(_, newSize) => newSize && setSelectedSize(newSize)}
                    sx={{ flexWrap: "wrap" }}
                >
                    {sizes.map((size) => (
                        <ToggleButton key={size} value={size}>
                            {size}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </FormControl>

            <FormControl>
                <Text variant={'body2'}>Color</Text>
                <ToggleButtonGroup
                    value={selectedColor}
                    exclusive
                    onChange={(_, newColor) => newColor && setSelectedColor(newColor)}
                    sx={{ flexWrap: "wrap" }}
                >
                    {colors.map((color) => (
                        <ToggleButton key={color} value={color}>
                            <Box
                                bgcolor={color}
                                sx={{
                                    border: "1px solid black",
                                    minWidth: "20px",
                                    minHeight: "20px",
                                }}></Box>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </FormControl>

            <AddToCartButton product={product} selectedSize={selectedSize} selectedColor={selectedColor} />
        </Box>
    );
}

export default ProductDescription;