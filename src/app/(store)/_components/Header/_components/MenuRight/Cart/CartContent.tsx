
import React from "react";
import { Box, Button } from "@mui/material";
import Text from "@/app/_components/Text";
import { useCart } from "@/app/CartContext";
import CartContentListItem from "./CartContentListItem";
import GoToCartButton from "@/app/(store)/_components/Header/_components/MenuRight/Cart/GoToCartButton";
const CartContent: React.FC = () => {
    const formatPrice = (price: number) => {
        return price.toFixed(2) + "$";
    };
    const { cartItems, totalPrice } = useCart();

    return (
        <Box
            sx={{
                color: "black",
                height: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center",
            }}
        >
            <Text variant={'h4'}>Your Cart</Text>
            <Box
                sx={{
                    width: "100%",
                    height: "70%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "start",
                    alignItems: "center",
                    overflow: "auto",
                }}
            >
                {cartItems.map((item, index) => {
                    {console.log(item, "item")}

                    return (
                        <CartContentListItem product={item} key={index}/>
                    );
                })}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderTop: "1px solid black",
                    gap: "15px",
                    textAlign: "start",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "79%",
                    }}
                >
                    <Text variant={"h6"}>Value:</Text>
                    <Text variant={"h6"}>{formatPrice(totalPrice)}</Text>
                </Box>
             <GoToCartButton/>
            </Box>
        </Box>
    );
};

export default CartContent;