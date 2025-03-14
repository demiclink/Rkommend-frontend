import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";
import "../css files/sd-header.css";
// import "../css files/ld-home.css";

const SDheader = ({ children }) => {
  return (
    <div className="headerdiv">
      <div className="headerdiv__logodiv">
        <Link className="no-underline" to="/">
          <h5 className="header__logo">Rkommend</h5>
        </Link>{" "}
        <div className="headerdiv__logodiv--status">STUDENT</div>
      </div>

      <button className="headerdiv__homebtn blue--btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          viewBox="0 -960 960 960"
          width="16px"
          fill="#DEEAF7"
        >
          <path d="M160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H600q-17 0-28.5-11.5T560-160v-200q0-17-11.5-28.5T520-400h-80q-17 0-28.5 11.5T400-360v200q0 17-11.5 28.5T360-120H240q-33 0-56.5-23.5T160-200Z" />
        </svg>
        Home
      </button>

      {children}
    </div>
  );
};

export default SDheader;
