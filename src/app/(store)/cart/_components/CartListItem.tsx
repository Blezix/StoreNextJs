import React from "react";
import { Box, IconButton, Select, MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {CartListItemProps} from "@/app/types"
import Text from "@/app/_components/Text";

const CartListItem: React.FC<CartListItemProps> = ({
                                                       item,
                                                       product,
                                                       index,
                                                       handleQuantityChange,
                                                       handleDelete,
                                                   }) => {
    if (!product) return null;

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
            <Box
                component="img"
                src={product.imgSrc[0]}
                alt={product.name}
                style={{ height: "100px" }}
                onError={(e) => console.error("Image failed to load:", e)}
            />
            <Text
                sx={{ width: "30%", flex: "2", textAlign: "center" }}
                variant="body2"
            >
                {product.name}
            </Text>
            <Text
                variant="body2"
                sx={{ flex: "1", textAlign: "center" }}
            >
                ${product.price.toFixed(2)}
            </Text>
            {item.size && (
                <Text sx={{ flex: "1", textAlign: "center" }} variant="body2">
                    {item.size}
                </Text>
            )}
            {item.color && (
                <Text sx={{ flex: "1", textAlign: "center" }} variant="body2">
                    {item.color}
                </Text>
            )}
            <Select
                value={item.quantity}
                onChange={(e) =>
                    handleQuantityChange(index, parseInt(e.target.value as string, 10))
                }
            >
                {[...Array(10).keys()].map((num) => (
                    <MenuItem key={num + 1} value={num + 1}>
                        {num + 1}
                    </MenuItem>
                ))}
            </Select>
            <IconButton onClick={() => handleDelete(index)}>
                <DeleteIcon />
            </IconButton>
        </Box>
    );
};

export default CartListItem;
