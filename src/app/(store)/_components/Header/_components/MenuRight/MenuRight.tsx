import React from "react";
import { Box } from "@mui/material";
import Cart from "@/app/(store)/_components/Header/_components/MenuRight/Cart/Cart";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import { useRouter } from "next/navigation";
export default function MenuRight() {
  const router = useRouter();

  function HandlePageRedirect(value: string) {
    router.push(`/${value}`);
  }
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
      <Cart onClick={() => HandlePageRedirect("cart")} />
      <Profile />
    </Box>
  );
}
