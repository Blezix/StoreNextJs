"use client";

import { Button, Box } from "@mui/material";
import React, { useEffect } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import FilterDrawer from "./FilterDrawer";

const FilterButton: React.FC = ({}) => {
    const [isClicked] = React.useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [currentPriceRange, setCurrentPriceRange] = React.useState<
        [number, number]
    >([10, 1000]);
    const [currentSort, setCurrentSort] = React.useState<string>("");

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const minPrice = parseInt(params.get("minPrice") || "10", 10);
        const maxPrice = parseInt(params.get("maxPrice") || "1000", 10);
        const sort = params.get("sort") || "";

        setCurrentPriceRange([minPrice, maxPrice]);
        setCurrentSort(sort);
    }, []);

    return (
        <Box sx={{ pb: "10px" }}>
            <Button
                sx={{
                    backgroundColor: isClicked ? "black" : "white",
                    color: isClicked ? "white" : "black",
                    padding: "10px",
                    borderRadius: "40px",
                    textTransform: "none",
                    border: "1px solid black",
                    "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                    },
                }}
                onClick={toggleDrawer(true)}
            >
                <TuneIcon />
            </Button>
            <FilterDrawer
                isDrawerOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
                currentPriceRange={currentPriceRange}
                setCurrentPriceRange={setCurrentPriceRange}
                currentSort={currentSort}
                setCurrentSort={setCurrentSort}
            />
        </Box>
    );
};

export default FilterButton;