import { Menu } from "@mui/icons-material";
import { AppBar, Toolbar, Container, Box, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderSearch from "./HeaderSearch";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: (theme) => theme.palette.background.paper,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
      elevation={0}
    >
      <Container>
        <Toolbar disableGutters>
          <Box flexGrow={1}>
            <div className={styles.logo}>
              <Link to="/">
                <img src="/images/logo2.jpg" alt="logo" />
              </Link>
            </div>
          </Box>
          <HeaderSearch />
          <IconButton sx={{ ml: 2 }}>
            <Menu />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
