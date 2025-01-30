import React from "react";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface Props {
  product: {
    ProductName: string;
    ProductPrice: number;
    imgSrc: string;
  };
}

const AddToCartButton: React.FC<Props> = ({ product }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex(
      (item: { ProductName: string }) =>
        item.ProductName === product.ProductName,
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
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
  );
};

export default AddToCartButton;
