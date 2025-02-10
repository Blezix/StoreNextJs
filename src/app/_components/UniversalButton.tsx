'use client'

import React from "react";
import { Button } from "@mui/material";
interface UniversalButtonProps {
    variant: "black" | "white";
    onClick: () => void;
    children: React.ReactNode;
    sx?: object;
}



const UniversalButton: React.FC<UniversalButtonProps> = ({ variant, onClick, children,sx }) => {
        const isBlack = variant === "black";
    return (
        <Button
            sx={{
                backgroundColor: isBlack ? "black" : "white",
                color: isBlack ? "white" : "black",
                padding: "10px 0",
                borderRadius: "30px",
                fontSize: "1.2rem",
                textTransform: "none",
                mb: 7,
                width: {
                    xs: "150px",
                    sm: "180px",
                    md: "200px",
                    lg: "220px",
                    xl: "220px",
                },
                height: {
                    xs: "40px",
                    sm: "45px",
                    md: "50px",
                    lg: "52.5px",
                    xl: "55px",
                },
                "&:hover": {
                    backgroundColor: isBlack ? "white" : "black",
                    color: isBlack ? "black" : "white",
                },
                ...sx,
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default UniversalButton;