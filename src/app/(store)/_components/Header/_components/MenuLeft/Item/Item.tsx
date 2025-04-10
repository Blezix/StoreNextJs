import React from "react";
import { Button } from "@mui/material";
import Text from "@/app/_components/Text";

interface ItemProps {
    value: string;
    onClick: () => void;
}

const Item: React.FC<ItemProps> = ({ value, onClick }) => {
    return (
        <Button
            variant="text"
            sx={{
                height: "20%",
                color: "inherit",
                borderRadius: "0",
                textTransform: "none",
                fontSize: {
                    xs: "0.9rem", // Small screens
                    sm: "1rem",   // Medium screens
                    md: "1.1rem", // Larger screens
                },
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                ml:'5px'
                },
            }}
            onClick={onClick}
        >
            <Text
                variant={"body1"}
                sx={{

                }}
            >
                {value}
            </Text>
        </Button>
    );
};

export default Item;