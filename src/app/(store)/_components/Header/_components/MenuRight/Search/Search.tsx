import React from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Text from "@/app/_components/Text";
export default function Search() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "6px",
        alignItems: "center",          fontSize: "1.1rem",

      }}
    >
      <SearchIcon />
      <Text variant={"body2"}>Search</Text>
    </Box>
  );
}
