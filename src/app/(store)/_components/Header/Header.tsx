"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Logo from "./_components/Logo/Logo";
import MenuLeft from "./_components/MenuLeft/MenuLeft";
import MenuRight from "./_components/MenuRight/MenuRight";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@mui/material";

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isMobile = useMediaQuery("(max-width: 768px)");

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
                pr: 4,
                pl: 4,
            }}
        >
            <Logo isMobile={isMobile} />
            {isMobile ? (
                <>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        <Box
                            sx={{
                                width:350,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                p: 2,
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                p: 2,

                            }}>
                                <Logo isMobile={false}/>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="close"
                                    onClick={toggleDrawer(false)}
                                    sx={{ alignSelf: "flex-end" }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Box>

                            <MenuLeft isMobile={isMobile} />
                        </Box>
                    </Drawer>
                </>
            ) : (
                <MenuLeft isMobile={isMobile} />
            )}
            <MenuRight />
        </Box>
    );
}