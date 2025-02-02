import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css files/sd-home.css";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import { SchoolRounded } from "@mui/icons-material";
import "../css files/viewreq.css";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { fetchMockData } from "../mockData";
import { fetchAdminMockData } from "../adminMockData";
import { EastRounded } from "@mui/icons-material";

const Addinstitutionsidemenu = ({ className2, close }) => {
  const [user, setUser] = useState(null);

  // Fetch mock data
  useEffect(() => {
    fetchAdminMockData().then((data) => {
      setUser(data);
    });
  }, []);

  const [recState, setRecState] = useState("");

  const toggleRecState = (state) => {
    setRecState(state);
  };

  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
    console.log(completed);
  };

  return (
    <div className={className2}>
      <div className="backbtn" onClick={close}>
        <KeyboardArrowLeftRounded />
        Back
      </div>
      <div className="reqdetails__main">
        <h3 className="addInstitutionHeader">Add University</h3>

        <div className="institutioninp">
          <label htmlFor="institution-inp">Institution</label>
          <input type="text" name="institution-inp" id="institution-inp" />
        </div>

        <div className="countryandstate">
          <div className="countryinp">
            <label htmlFor="country-inp">Country</label>
            <select name="country-inp" id=""></select>{" "}
          </div>

          <div className="stateinp">
            <label htmlFor="state-inp">State</label>
            <select name="state-inp" id="state-inp"></select>{" "}
          </div>
        </div>

        <div className="emailinp">
          <label htmlFor="email-inp">Email</label>
          <input type="email" name="email-inp" id="email-inp" />
        </div>

        <div className="phoneinp">
          <label htmlFor="phone-inp">Phone number</label>
          <input type="text" name="phone-inp" id="phone-inp" />
        </div>

        <button className="reqdetails__main--btn">Submit</button>
      </div>
    </div>
  );
};

export default Addinstitutionsidemenu;
