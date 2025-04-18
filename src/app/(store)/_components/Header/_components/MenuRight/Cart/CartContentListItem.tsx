import React from "react";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
import {Cart} from "@/app/CartContext";
interface CartContentListItemProps {
    product: Cart
}

const CartContentListItem: React.FC<CartContentListItemProps> = ({ product }) => {
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
                    <Text variant="body1">{product.ProductName}</Text>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px !important" ,
                }}>
                    <Box>
                        <Text variant="body2" sx={{fontSize:"0.8rem"}}>Price: {product.ProductPrice}$</Text>
                        <Text variant="body2"  sx={{fontSize:"0.8rem"}}>Color: {product.color}</Text>
                    </Box>
                    <Box>
                        <Text variant="body2"  sx={{fontSize:"0.8rem"}}>Size: {product.size}</Text>
                        <Text variant="body2"  sx={{fontSize:"0.8rem"}}>Quantity: {product.quantity}</Text>
                    </Box>

                </Box>



            </Box>
        </Box>
    );
};

export default CartContentListItem;