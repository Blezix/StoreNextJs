import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          Admin Panel
        </Typography>
      </Box>
      <List>
        {[
          { text: "Footer", href: "footer" },
          { text: "Users", href: "users" },
          { text: "Products", href: "products" },
          { text: "Categories", href: "categories" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} href={item.href}>
              <ListItemText primary={item.text} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
