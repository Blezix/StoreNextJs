"use client";

import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import Text from "../../../_components/Text";


interface Props {
    isClicked: boolean;
}

const ClearCategoryButton: React.FC<Props> = (
    { isClicked }
) => {
    const router = useRouter();

    const handleClearCategory = () => {
        const params = new URLSearchParams(window.location.search);
        params.delete("category");
        router.push(`/products?${params.toString()}`);
    };

    return (
        <Button
            sx={{
                backgroundColor: isClicked ? "black" : "white",
                color: isClicked ? "white" : "black",
                padding: "10px 10px",
                borderRadius: "30px",
                textTransform: "none",
                border: "1px solid black",
                "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                },
                minWidth: `10ch`,
            }}
            onClick={handleClearCategory}
        >
            <Text variant={"body2"}>All</Text>
        </Button>
    );
};

export default ClearCategoryButton;