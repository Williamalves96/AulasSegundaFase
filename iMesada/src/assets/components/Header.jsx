import React from "react";
import "./Header.css";
import Logo from "./Logo";

function Header() {
  return (
    <div className="container-header">
      <Logo />
      <h1>iMesada</h1>
    </div>
  );
}

export default Header;
