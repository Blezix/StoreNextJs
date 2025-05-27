import React, { useState } from "react";
import { IconButton, Snackbar, Menu, MenuItem } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "@/app/CartContext";
import {Product} from "@/app/types";


const AddToCartButton: React.FC<Product> = ({  }) => {
    const { addToCart } = useCart();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        console.log(product.sizes);
    };

    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
        setAnchorEl(null);
        addToCart({ ...product, size: size, color: product.color || "", quantity: 1 });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                sx={{
                    height: "50%",
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: "30px",
                    "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                    },
                }}
                onClick={handleButtonClick}
            >
                <AddShoppingCartIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {product.sizes.map((size) => (
                    <MenuItem key={size} onClick={() => handleSizeSelect(size)}>
                        {size}
                    </MenuItem>
                ))}
            </Menu>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message={`Item successfully added to cart${selectedSize ? ` (Size: ${selectedSize})` : ""}`}
            />
        </>
    );
};

export default AddToCartButton;