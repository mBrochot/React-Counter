import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <p className="appName">React Counter</p>
    </div>
  );
};

export default Header;
