import React from "react";
import { Box, IconButton, Select, MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Text from "@/app/_components/Text";
import Image from "next/image";
    interface CartListItemProps {
    item: {
        ProductName: string;
        ProductPrice: number;
        imgSrc: string;
        quantity: number;
        size?: string;
        color?: string;
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
            {item.imgSrc && (
                <Image
                    src={item.imgSrc}
                    alt={item.ProductName}
                    style={{ height: "100px" }}
                    onError={(e) => console.error("Image failed to load:", e)}
                />
            )}
            <Text
                sx={{
                    width: "30%",
                    flex:'2',
                    textAlign: "center",

                }}
                variant="body2"
            >
                {item.ProductName}
            </Text>
            <Text variant="body2" sx={{
                flex:'1',
                textAlign: "center",
            }}>${item.ProductPrice.toFixed(2)}</Text>
            {item.size && <Text sx={{
                flex:'1',
                textAlign: "center",
            }} variant="body2">{item.size}</Text>}
            {item.color && <Text sx={{
                flex:'1',
                textAlign: "center",
            }} variant="body2">{item.color}</Text>}

            <Select
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value as string, 10))}
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