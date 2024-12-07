import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const UserLayout = () => {
  const location = useLocation()
  const hideFooter = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/textai' 
      
  return (
    <>
      <Navbar />
      <Outlet />
      {!hideFooter && <Footer/>}
      
    </>
  );
};

export default UserLayout;
