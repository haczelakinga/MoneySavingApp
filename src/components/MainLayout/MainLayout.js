import React from "react";
import Header from "../../components/Header/HeaderContainer.js";
import Footer from "../../components/Footer/Footer.js";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
