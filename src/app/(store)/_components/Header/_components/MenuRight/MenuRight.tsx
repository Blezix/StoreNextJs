import React from "react";
import { Box } from "@mui/material";
import Chart from "./Chart/Chart";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
export default function MenuRight() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "60%",
        gap: "20px",
      }}
    >
      <Search />
      <Chart />
      <Profile />
    </Box>
  );
}
