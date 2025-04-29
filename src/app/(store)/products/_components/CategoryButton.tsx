"use client";

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Text from "../../../_components/Text";

interface Props {
    value: string;
}

const CategoryButton: React.FC<Props> = ({ value }) => {
    const searchParams = useSearchParams();
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const categoryParams = searchParams.get("category");
        setIsClicked(categoryParams === value);
    }, [searchParams, value]);

    const handleCategoryChange = () => {
        const params = new URLSearchParams(window.location.search);
        params.set("category", value);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState({}, "", newUrl);
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
                minWidth: `${value.length + 2}ch`,
            }}
            onClick={handleCategoryChange}
        >
            <Text variant={"body2"}>{value}</Text>
        </Button>
    );
};

export default CategoryButton;