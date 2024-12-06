import React from "react";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function AddToCartButton() {
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
    >
      <AddShoppingCartIcon />
    </IconButton>
  );
}
