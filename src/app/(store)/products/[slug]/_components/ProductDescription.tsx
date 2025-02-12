import React from "react";
import Text from "@/app/_components/Text";
import { Box, FormControl, FormLabel, ToggleButton, ToggleButtonGroup } from "@mui/material";

interface Props {
    name: string;
    price: number;
    description: string;
    sizes: string[];
    colors: string[];
}

const ProductDescription: React.FC<Props> = ({ name, price, description, sizes, colors }) => {
    const [selectedSize, setSelectedSize] = React.useState<string>(sizes[0] || "");
    const [selectedColor, setSelectedColor] = React.useState<string>(colors[0] || "");

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
            bgcolor: "white",
            color: "black",
            minWidth: "45%",
            maxWidth: "600px",
            flexGrow: 1,
        }}>
            <Text variant="h5">{name}</Text>
            <Text variant="h4">${price}</Text>
            <Text variant="body1">Description</Text>
            <Text variant="body2" sx={{ color: "#6e6e6e" }}>{description}</Text>

            <FormControl>
                <FormLabel>Size</FormLabel>
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
                <FormLabel>Color</FormLabel>
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
                                border:"1px solid black",
                                minWidth:"20px",
                                minHeight:"20px"
                            }}></Box>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </FormControl>
        </Box>
    );
}

export default ProductDescription;
