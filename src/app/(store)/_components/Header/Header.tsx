    'use client'

import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import DrawerMenu from "./_components/DrawerMenu";
import MenuRight from "./_components/MenuRight/MenuRight";

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "/home";
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100px",
                position: isHome ? "absolute" : "none",
                top: 0,
                color: isHome ? "white" : "black",
                backgroundColor: isHome ? "transparent" : "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex:"2",
                pr: 4,
                pl: 4,
            }}
        >
            <>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <DrawerMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
            </>
            <MenuRight />
        </Box>
    );
}