import React from "react";
import { Box } from "@mui/material";
import ProductCardTop from "./_components/ProductCardTop/ProductCardTop";
import ProductCardBottom from "./_components/ProductCardBottom/ProductCardBottom";

interface Props {
    ProductName: string;
    ProductPrice: number;
    imgSrc: string;
}

const ProductCard: React.FC<Props> = ({
                                          ProductName,
                                          ProductPrice,
                                          imgSrc,
                                      }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                flexBasis: {
                    xs: "100%", // For extra small devices
                    sm: "50%",  // For small devices
                    md: "33.33%", // For medium devices
                    lg: "25%", // For large devices
                    xl: "20%", // For extra large devices
                },
                height: {
                    xs: "auto", // For extra small devices
                    sm: "auto", // For small devices
                    md: "auto", // For medium devices
                    lg: "auto", // For large devices
                    xl: "500px", // For extra large devices
                },
                p: 2,
            }}
        >
            <ProductCardTop imgSrc={imgSrc} />
            <ProductCardBottom
                ProductName={ProductName}
                ProductPrice={ProductPrice}
                imgSrc={imgSrc}
            />
        </Box>
    );
};

export default ProductCard;