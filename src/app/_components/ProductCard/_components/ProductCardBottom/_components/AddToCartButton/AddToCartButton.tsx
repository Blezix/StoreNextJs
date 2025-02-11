import React, { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "@/app/CartContext";

interface Props {
    product: {
        ProductName: string;
        ProductPrice: number;
        imgSrc: string;
    };
}

const AddToCartButton: React.FC<Props> = ({ product }) => {
    const { addToCart } = useCart();
    const [open, setOpen] = useState(false);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: 1 });
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
                onClick={handleAddToCart}
            >
                <AddShoppingCartIcon />
            </IconButton>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Item successfully added to cart"
            />
        </>
    );
};

export default AddToCartButton;