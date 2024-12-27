import React from "react";
import SigninFormVector from "../components/signinform";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Header, Footer } from "../components/headerandfooter";
import "../css files/landingPage.css";
import "../css files/accountType.css";

import EastRoundedIcon from "@mui/icons-material/EastRounded";

const StudentSignin = () => {
  return (
    <div>
      <Header></Header>

      <div className="main-body">
        <div className="mainbody__container">
          <SigninFormVector Type={"Student"} />
          <div className="signinForm__div">
            <div className="signinFormHeader">Sign in</div>
            <div className="signinForm__emaildiv">
              <label htmlFor="email"> Email</label>
              <input
                className="email"
                id="email"
                type="email"
                placeholder="Enter your official email"
              />
            </div>
            <div className="signinForm__passworddiv">
              <label htmlFor="password"> Password</label>
              <input
                className="password"
                id="password"
                type="password"
                placeholder="Enter password"
              />
            </div>

            <Link className="no-underline" to={"/home-student"}>
              <button className=" signinForm__btn blue--btn">
                Sign in
                <EastRoundedIcon />
              </button>
            </Link>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default StudentSignin;
