"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <Typography variant="h6" sx={{ my: 2 }}>
          Alldownload4u
        </Typography>
        <Divider />
        {navItems.map((item, i) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {i === 0 && (
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {i === 1 && (
                <Link
                  href="/About"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {i === 2 && (
                <Link
                  href="/Contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box pb={10}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            backgroundColor: "#ff5252",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
              zIndex: "20000",
            }}
          >
            <Typography variant="h6" sx={{ my: 2 }}>
              Alldownload4u
            </Typography>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Alldownload4u
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {i === 0 && (
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "#FFFFFF" }}
                  >
                    {item}
                  </Link>
                )}
                {i === 1 && (
                  <Link
                    href="/About"
                    style={{ textDecoration: "none", color: "#FFFFFF" }}
                  >
                    {item}
                  </Link>
                )}
                {i === 2 && (
                  <Link
                    href="/Contact"
                    style={{ textDecoration: "none", color: "#FFFFFF" }}
                  >
                    {item}
                  </Link>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                bgcolor: "white",
              },
            }}
          >
            <Box>
              <IconButton
                sx={{
                  display: "inline",
                  float: "right",
                }}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <CloseIcon sx={{ color: "#ff5252" }} />
              </IconButton>
            </Box>
            {drawer}
          </Drawer>
        </Box>
      </nav>
    </Box>
  );
}

export default Header;
