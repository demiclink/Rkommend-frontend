import React, { useState } from "react";
import { NotificationsNoneRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../css files/ld-header.css";
import { fetchAdminMockData } from "../adminMockData";

const Adminheader = ({ className, indicator }) => {
  return (
    <div className="ld-headerdiv">
      <div className="ld-headerdiv__logodiv">
        <Link className="no-underline" to="/">
          <h5 className="ld-header__logo">Rkommend</h5>
        </Link>{" "}
        <div className="ld-headerdiv__logodiv--status admin-headerdiv__logodiv--status">
          ADMIN
        </div>
      </div>
    </div>
  );
};

export default Adminheader;
