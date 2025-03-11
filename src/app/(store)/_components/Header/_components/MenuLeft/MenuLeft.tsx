"use client";

import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Item from "./Item/Item";

export default function MenuLeft() {
  const router = useRouter();

  function HandlePageRedirect(value: string) {
    router.push(`/${value}`);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "30%",
        height: "100%",
        color: "inherit",
      }}
    >
      <Item value="Products" onClick={() => HandlePageRedirect("products?minPrice=10&maxPrice=1000&sort=name-asc")} />
      <Item value="Store" onClick={() => HandlePageRedirect("store")} />
      <Item value="Blog" onClick={() => HandlePageRedirect("blog")} />
    </Box>
  );
}
