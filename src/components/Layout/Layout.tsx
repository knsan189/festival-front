import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <Header />

      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
