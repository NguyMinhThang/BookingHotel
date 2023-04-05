import React from "react";
import LogoWhite from "../assets/img/logo-white.svg";
const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-0 text-white flex justify-between">
        <a href="/">
          <img src={LogoWhite} alt="" />
        </a>
        <p className="text-sm leading-8">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
