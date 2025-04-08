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
                "&:hover": {
                    opacity: "0.7",
                },
            }}
            onClick={onClick}
        >
            <Text
                variant={"body2"}
                sx={{
                    fontSize: {
                        xs: "2rem", // Small screens
                        sm: "1.7rem",   // Medium screens
                        md: "1.1rem", // Larger screens
                    },
                }}
            >
                {value}
            </Text>
        </Button>
    );
};

export default Item;