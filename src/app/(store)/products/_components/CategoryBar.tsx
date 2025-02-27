"use client";

import { Box } from "@mui/material";
import CategoryButton from "./CategoryButton";
import React, { useState } from "react";
import FilterButton from "./FilterButton";
import ClearCategoryButton from "@/app/(store)/products/_components/ClearCategoryButton";

export default function CategoryBar() {
    const [clickedCategory, setClickedCategory] = useState<string | null>(null);

    const handleClearCategoryClick = () => {
        setClickedCategory(null);
    };

    return (
        <Box
            sx={{
                minWidth: "550px",
                display: "flex",
                flexDirection: "row",
                width: "95%",
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center",
                p: 5,
                gap: "10px",
                color: "black",
                ml: "auto",
                mr: "auto",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    overflowX: "auto",
                    scrollbarWidth: 'thin',
                    scrollbarGutter: 'thin',
                    pb:"10px",
                    scrollbarColor: '#000000 transparent',
                    '&::-webkit-scrollbar': {
                        height: '1px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#000000',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#000000',
                        height: '8px',
                    },
                }}
            >
                {[
                    "Footwear",
                    "Headwear",
                    "Jackets",
                    "Bags",
                    "Accessories",
                    "Bottoms",
                ].map((category) => (
                    <CategoryButton
                        key={category}
                        value={category}
                        isClicked={clickedCategory === category}
                        setIsClicked={(isClicked) =>
                            isClicked
                                ? setClickedCategory(category)
                                : setClickedCategory(null)
                        }
                    />
                ))}
                <ClearCategoryButton
                    isClicked={clickedCategory === null}
                    setIsClicked={handleClearCategoryClick}
                />
            </Box>

            <FilterButton />
        </Box>
    );
}