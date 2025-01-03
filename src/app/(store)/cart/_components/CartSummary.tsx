import React from "react";
import { Box, Button, Typography } from "@mui/material";
export default function CartSummary() {
  return (
    <Box
      sx={{
        minWidth: "40%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ mb: 2 }} variant={"h4"}>
        Summary{" "}
      </Typography>
      <Box
        sx={{
          height: "40%",
          borderBottom: "solid lightgrey 1px",
          mb: 2,
        }}
      >
        <Typography variant={"h6"}>Subtotal</Typography>
        <Typography variant={"h6"}>Estimated Delivery & Handling</Typography>
        <Typography variant={"h6"}>Estimated Taxes</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          height: "20%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant={"h5"}>Total</Typography>
          <Typography variant={"h5"}>0$</Typography>
        </Box>
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 0",
            width: "80%",
            borderRadius: "30px",
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Checkout Now
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 0",
            width: "80%",
            borderRadius: "30px",
            fontSize: "1rem",
            textTransform: "none",
            border: "1px solid black",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          PayPal
        </Button>
      </Box>
    </Box>
  );
}
