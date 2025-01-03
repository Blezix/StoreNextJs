import React from "react";
import Box from "@mui/material/Box";
import router from "next/router";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();

  function HandlePageRedirect(value: string) {
    router.push(`/${value}`);
  }

  return (
    <Box
      sx={{
        width: "10%",
        height: "100%",
        color: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
        "&:hover": {
          opacity: "0.7",
          cursor: "pointer",
        },
      }}
      onClick={() => HandlePageRedirect("home")}
    >
      Nigger
    </Box>
  );
}
