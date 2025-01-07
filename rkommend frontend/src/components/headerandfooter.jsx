import React, { useState } from "react";
import "../css files/landingPage.css";
import { Link } from "react-router-dom";

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
        <Link className="no-underline" to="/">
          <h5 className="header__logo">Rkommend</h5>
        </Link>

        <div className="header__btns">
          <Link to={"/signinType"} className="no-underline">
            <button className="header__btns--signin btn--clear">Sign in</button>{" "}
          </Link>
          <Link to={"/accountType"} className="no-underline">
            {" "}
            <button className="header__btns--signup btn--blue">Sign up</button>
          </Link>
        </div>
      </header>
    </>
  );
};
