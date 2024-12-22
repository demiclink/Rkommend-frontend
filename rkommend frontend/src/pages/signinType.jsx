import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Header, Footer } from "../components/headerandfooter";
import "../css files/landingPage.css";
import "../css files/accountType.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const SigninType = () => {
  const [accountType, setAccountType] = useState(""); // State to track selected account type

  const handleRadioChange = (event) => {
    setAccountType(event.target.value); // Update state when radio button is selected
  };

  // Dynamically determine the link destination based on the selected account type
  const linkTo =
    accountType === "lecturer" ? "/signin-lecturer" : "/signin-student";

  return (
    <div>
      <Header />

      <div className="main-body">
        <div className="signin getStarted">
          <h1 className="signin__header getStarted__header">Sign in</h1>
          <p className="getStarted__sectext signin__sectext">
            Are you a lecturer or student?
          </p>

          <div className="getStarted__inputcontainer--Lecturer signin__inputcontainer--Lecturer">
            <label htmlFor="LecturerAccountInput">Lecturer</label>
            <input
              type="radio"
              name="AccountInput"
              id="LecturerAccountInput"
              value="lecturer"
              onChange={handleRadioChange}
            />
          </div>

          <div className="getStarted__inputcontainer--Student signin__inputcontainer--Student">
            <label htmlFor="StudentAccountInput">Student</label>
            <input
              type="radio"
              name="AccountInput"
              id="StudentAccountInput"
              value="student"
              onChange={handleRadioChange}
            />
          </div>

          {/* Link dynamically updates based on selected radio button */}
          <Link
            to={accountType ? linkTo : "#"} // Use # as a placeholder when no option is selected
            style={{ textDecoration: "none" }}
          >
            <button
              className="getStarted__proceedbtn btn--blue" // Add a disabled class if no option is selected
            >
              Proceed
              <EastRoundedIcon />
            </button>
          </Link>
        </div>

        <Footer className="footer" />
      </div>
    </div>
  );
};

export default SigninType;
