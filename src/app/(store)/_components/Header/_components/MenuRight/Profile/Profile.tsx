"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Menu, MenuItem, IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useUser } from "@/app/UserContext";

export default function Profile() {
  const { user, logout } = useUser();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    router.push("/login");
  };

  const handleLogin = () => {
    handleMenuClose();
    router.push("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
        fontSize: "1.1rem",
      }}
    >
      <IconButton onClick={handleMenuOpen} sx={{ color: "inherit", p: 0 }}>
        <AccountCircleOutlinedIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {user ? (
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={handleLogin}>Log In</MenuItem>
        )}
      </Menu>
    </Box>
  );
}
