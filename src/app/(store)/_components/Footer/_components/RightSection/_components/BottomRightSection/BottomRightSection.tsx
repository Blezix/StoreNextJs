import React from "react";
import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
export default function RightSection() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "20%",
        ml: "auto",
          width: {
              xs: "100%", // dla małych ekranów
              sm: "90%",  // dla średnich ekranów
              md: "85%",  // dla większych ekranów
              lg: "80%",  // dla dużych ekranów
          },
        justifyContent: "space-around",
      }}
    >
      <Text
        variant={"body2"}
        sx={{
          fontSize: "1rem",
        }}
      >
        Call us on +12 332476
      </Text>
      <Text
        variant={"body2"}
        sx={{
          fontSize: "1rem",
        }}
      >
        USD$|English
      </Text>
    </Box>
  );
}
