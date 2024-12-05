import React from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
      }}
    >
      <SearchIcon />
      <Typography>Search</Typography>
    </Box>
  );
}
