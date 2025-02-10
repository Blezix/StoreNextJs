import React from "react";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Text from "@/app/_components/Text";
interface CartListItemProps {
  item: {
    ProductName: string;
    ProductPrice: number;
    imgSrc: string;
    quantity: number;
  };
  index: number;
  handleQuantityChange: (index: number, quantity: number) => void;
  handleDelete: (index: number) => void;
}

const CartListItem: React.FC<CartListItemProps> = ({
  item,
  index,
  handleQuantityChange,
  handleDelete,
}) => {
  return (
    <Box
      key={index}
      sx={{
        height: "300px",
        width: "90%",
        borderBottom: "solid lightgrey 1px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <img
        src={item.imgSrc}
        alt={item.ProductName}
        style={{ height: "100px" }}
        onError={(e) => console.error("Image failed to load:", e)}
      />
      <Text variant="body2">{item.ProductName}</Text>
      <Text variant="body2">${item.ProductPrice.toFixed(2)}</Text>
      <input
        type="number"
        value={item.quantity.toString()}
        onChange={(e) =>
          handleQuantityChange(index, parseInt(e.target.value, 10) || 0)
        }
        min="1"
      />
      <IconButton onClick={() => handleDelete(index)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default CartListItem;
