import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import { useCart } from "@/app/CartContext";
import UniversalButton from "@/app/_components/UniversalButton";
import { Product } from "@/app/types";
interface Props {
  product: Product;
  selectedSize: string;
  selectedColor: string;
}

const AddToCartButton: React.FC<Props> = ({
  product,
  selectedSize,
  selectedColor,
}) => {
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    addToCart({
      slug: product.slug,
      size: selectedSize,
      color: selectedColor,
      quantity: -1,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <UniversalButton
        variant="black"
        onClick={handleButtonClick}
        sx={{ marginTop: "auto", marginBottom: "0" }}
      >
        Add to Cart
      </UniversalButton>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={`Item successfully added to cart (Size: ${selectedSize}, Color: ${selectedColor})}`}

      />
    </>
  );
};

export default AddToCartButton;
