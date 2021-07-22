import React from "react";
import "./index.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
};

export default Footer;
