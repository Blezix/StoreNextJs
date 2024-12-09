import React from "react";
import { Box, Typography } from "@mui/material";
export default function ShortCard() {
  return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            filter: "greyscale(100%)",
            backgroundColor:"black",
            height: "30%",
            flexBasis: "30%",
            borderRadius: "10px",

            m:2,
        }}>
            <Typography variant={"h3"}>Card</Typography>
        </Box>

  );
}