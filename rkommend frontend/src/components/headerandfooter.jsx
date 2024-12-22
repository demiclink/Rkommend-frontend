import React, { useState } from "react";
import "../css files/landingPage.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>&copy;2024</p>
        <h5 className="header__logo">Rkommend</h5>
        <p>Contact us</p>
      </footer>
    </>
  );
};

export const Header = () => {
  return (
    <>
      <header className="header">
        <h5 className="header__logo">Rkommend</h5>
        <div className="header__btns">
          <button className="header__btns--signin btn--clear">Sign in</button>
          <button className="header__btns--signup btn--blue">Sign up</button>
        </div>
      </header>
    </>
  );
};
