import React from "react";
import { Box, Typography } from "@mui/material";

export default function FCText() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                height: "15%",
            }}
        >
            <Typography
                variant={"h4"}
                sx={{
                    color: "#060606",
                }}
            >
                Featured Collections
            </Typography>
            <Typography
                variant={"body1"}
                sx={{
                    color: "#818181",
                }}
            >
                Dare to mix and match! Check our collections to level up your fashion game
            </Typography>
        </Box>
    );
}
