import React from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./Logo/Logo";
import MenuLeft from "./MenuLeft/MenuLeft";

interface DrawerMenuProps {
  drawerOpen: boolean;
  toggleDrawer: (open: boolean) => () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  drawerOpen,
  toggleDrawer,
}) => {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          width: 350,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={toggleDrawer(false)}
            sx={{ alignSelf: "center" }}
          >
            <CloseIcon />
          </IconButton>
          <Logo />
        </Box>
        <MenuLeft isMobile={true} />
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
