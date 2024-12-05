import React from "react";
import { Box } from "@mui/material";
import FooterList from "@/app/(store)/_components/Footer/_components/MiddleSection/_components/FooterLIst/FooterList";
export default function MiddleSection() {
  const CustomerCareItems = [
    "FAQ",
    "Shoping",
    "Order Status",
    "Return & Exchange",
  ];
  const CategoriesItems = [
    "Jakets",
    "Shirts",
    "Knit",
    "T-shirts",
    "Bottoms",
    "Accessories",
  ];
  const CompanyItems = ["Policy", "Guides", "Term of Conditions"];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "80%",
        width: "90%",
        pl: 2,
      }}
    >
      <FooterList header={"Categories"} items={CategoriesItems} />
      <FooterList header={"Customer Care"} items={CustomerCareItems} />
      <FooterList header={"Company"} items={CompanyItems} />
    </Box>
  );
}
