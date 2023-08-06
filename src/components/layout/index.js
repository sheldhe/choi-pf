import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "components/footer";
import Header from "components/header";

const Layout = () => {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const positionMode = position === 0 ? true : false;
  return (
    <div>
      <Header positionMode={positionMode} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
