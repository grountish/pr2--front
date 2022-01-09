import React from "react";
import Navigation from "../components/Navigation";
const MainLayout = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Navigation />
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100%",
          paddingTop: "49px",
        }}
      >
        <div style={{ width: "20%", backgroundColor: "#FFE" }}>sidebar</div>
        <div style={{ width: "80%", backgroundColor: "#EEF" }}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
