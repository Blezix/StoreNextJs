import React from "react";
import { Box, Typography } from "@mui/material";
export default function CartList() {
  return (
    <Box
      sx={{
        minWidth: "60%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography variant={"h4"}>Your Cart</Typography>
      <Box
        sx={{
          gap: "10px",
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            height: "300px",
            width: "90%",
            borderBottom: "solid lightgrey 1px",
          }}
        ></Box>
        <Box
          sx={{
            height: "300px",
            width: "90%",
            borderBottom: "solid lightgrey 1px",
          }}
        ></Box>
        <Box
          sx={{
            height: "300px",
            width: "90%",
            borderBottom: "solid lightgrey 1px",
          }}
        ></Box>
        <Box
          sx={{
            height: "300px",
            width: "90%",
            borderBottom: "solid lightgrey 1px",
          }}
        ></Box>{" "}
        <Box
          sx={{
            height: "300px",
            width: "90%",
            borderBottom: "solid lightgrey 1px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
