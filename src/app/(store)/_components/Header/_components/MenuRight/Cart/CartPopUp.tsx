import { Box, Button } from "@mui/material";
import Text from "@/app/_components/Text";
import { useCart } from "@/app/CartContext";



interface CartProps {
    active: boolean;
}

export default function CartPopUp({ active }: CartProps) {

    const formatPrice = (price: number) => {
        return price.toFixed(2) + "$";
    }
    const { cartItems,totalPrice } = useCart();

return(
    <Box
        sx={{
            color: "black",
            position: "absolute",
            width: "400px",
            height: "400px",
            backgroundColor: "white",
            border: "2px solid black",
            display: active ? "block" : "none",
            textAlign: "center",
            top: "100%",
            right: "200%",
            transform: "translateX(50%)",
            zIndex: 20000,
            p: 1,
        }}
    >
        <Text variant={"h6"}>My Cart</Text>
        <Box
            sx={{
                width: "100%",
                height: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                overflow:'auto'
            }}
        >
            {cartItems.map((item, index) => (
                <Box key={index} sx={{ display: "flex", justifyContent: "space-between", width: "80%", }}>
                    <Text variant={"body1"}>{item.ProductName}</Text>
                    <Text variant={"body1"}>x{item.quantity}</Text>
                </Box>
            ))}
        </Box>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid black",
                minHeight: "40%",
                gap: "10px",
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
            <Button
                sx={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "10px 0",
                    width: "80%",
                    borderRadius: "30px",
                    fontSize: "1rem",
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: "white",
                        color: "black",
                    },
                }}
            >
                Checkout
            </Button>
        </Box>
    </Box>
    )



}