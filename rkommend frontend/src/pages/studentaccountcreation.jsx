import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Header, Footer } from "../components/headerandfooter";
import { VectorDiv } from "../components/Vectordiv";
import "../css files/landingPage.css";
import "../css files/accountType.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import userVector from "/R-User.png";

const StudentAccount = () => {
  return (
    <div>
      <Header></Header>
      <div className="main-body">
        <div className="mainbody__container">
          <div className="vectordiv">
            <VectorDiv image={userVector} />
          </div>
          <div className="signupForm form-container">
            <div className="signupForm__headerdiv">
              <h1>Create Account</h1>
              <p class="form-subtitle">All fields are compulsory</p>
            </div>

            <form>
              <div className="inputdiv">
                <label for="title">Title</label>
                <select id="title" name="title">
                  <option>Select your title</option>
                  {/* <!-- Other options here --> */}
                </select>
              </div>

              <div className="inputdiv">
                <label for="firstname">Firstname</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your firstname"
                />
              </div>

              <div className="inputdiv">
                <label for="lastname">Lastname</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your lastname"
                />
              </div>

              <div className="inputdiv">
                <label for="phone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="inputdiv">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="inputdiv">
                <label for="password">Create Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                />
              </div>

              <div className="inputdiv">
                <label for="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Re-enter password"
                />
              </div>

              <p class="password-note">
                <span>*</span> Password should be 10 letters long, contain
                punctuation, symbol bla bla
              </p>

              <button type="submit">Create account</button>
            </form>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default StudentAccount;
