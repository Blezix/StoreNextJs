import React from "react";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
import {Product,CartItem } from '@/app/types'

interface Props {
    product: Product;
    cartItems:CartItem
}

const CartContentListItem: React.FC<Props> = ({ product,cartItems}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                padding: "10px",
                border: "1px solid #ccc",
            }}
        >
           <Box
               component="img"
               src={product.imgSrc[0]}
               sx={{
               width: "30%",
           }}/>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingLeft: "10px",
            }}>
                <Box>
                    <Text variant="body1">{product.name}</Text>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px !important" ,
                }}>
                    <Box>
                        <Text variant="body2" sx={{fontSize:"0.8rem"}}>Price: {product.price}$</Text>
                        <Text variant="body2"  sx={{fontSize:"0.8rem"}}>Color: {cartItems.color}</Text>
                    </Box>
                    <Box>
                        <Text variant="body2"  sx={{fontSize:"0.8rem"}}>Size: {cartItems.size}</Text>
                        <Text variant="body2"  sx={{fontSize:"0.8rem"}}>Quantity: {cartItems.quantity}</Text>
                    </Box>

                </Box>



            </Box>
        </Box>
    );
};

export default CartContentListItem;