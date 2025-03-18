import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#D9D9D9]">
      <Header />
      <div className="flex flex-row grow p-3 font-jersey mb-[60px] md:mb-[80px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
