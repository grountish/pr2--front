import React from "react";
import Navigation from "../components/Navigation";
import SideBar from "../components/SideBar";

const MainLayout = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Navigation />
      <div className="flex h-full pt-12 ">
        <SideBar title={"Boilerplate"} />
        <div className="w-9/12">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
