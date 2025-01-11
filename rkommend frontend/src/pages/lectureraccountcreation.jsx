import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Header, Footer } from "../components/headerandfooter";
import { VectorDiv } from "../components/Vectordiv";
import "../css files/landingPage.css";
import "../css files/accountType.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import userVector from "/R-User.png";
import envelopeVector from "/Wrap.png";

const LecturerAccount = () => {
  const [page, setPage] = useState(1);
  const [recordPresent, setRecordPresent] = useState("");

  const nextPage = () => {
    if (page < 2) {
      setPage(page + 1);
    }
  };

  const record = () => {
    if (recordPresent) {
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="main-body">
        <div className="mainbody__container">
          <div className="vectordiv">
            <div
              className={`vectordiv__slide-in ${
                page === 1
                  ? "vectordiv__slide-in-active"
                  : "vectordiv__slide-out"
              }`}
            >
              {page === 1 && (
                <VectorDiv
                  className="userVector"
                  image={userVector}
                  progresscounter={"1"}
                  markerWidth={`calc(${100 / 2}%)`}
                />
              )}
            </div>

            <div
              className={`vectordiv__slide-in ${
                page === 2
                  ? "vectordiv__slide-in-active"
                  : "vectordiv__slide-out"
              }`}
            >
              {page === 2 && (
                <VectorDiv
                  className="envelopeVector"
                  image={envelopeVector}
                  progresscounter={"2"}
                  markerWidth={`calc(${100}%)`}
                />
              )}
            </div>
          </div>

          {page === 1 && (
            <div className="signupForm form-container">
              <div className="signupForm__headerdiv">
                <h1 className="form-title">Create Account</h1>
                <p class="form-subtitle">All fields are compulsory</p>
              </div>

              <form className="signupForm__form">
                <div className="titlefirstnameandlastname">
                  <div>
                    {" "}
                    <label for="title">Title</label>
                    <select id="title" name="title" required>
                      <option>Select your title</option>
                      {/* <!-- Other options here --> */}
                    </select>
                  </div>

                  <div>
                    <label for="firstname">Firstname</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Enter your firstname"
                      required
                    />
                  </div>

                  <div>
                    <label for="lastname">Lastname</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Enter your lastname"
                      required
                    />
                  </div>
                </div>

                <div className="phoneandemail">
                  <div className="inputdiv phonediv">
                    <label for="phone">Phone number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="phone"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="inputdiv emaildiv">
                    <label for="email">Official email address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your official email address"
                      required
                    />
                  </div>
                </div>

                <div className="institutionanddepartment">
                  <div className="inputdiv institutiondiv">
                    <label for="institution">Select your institution</label>

                    <select name="institution" id="institution" required>
                      <option value="">Select your institution</option>
                    </select>
                  </div>

                  <div className="inputdiv departmentdiv">
                    <label for="department">Department</label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      placeholder="Enter your department"
                      required
                    />
                  </div>
                </div>

                <div className="passwordandconfirmpassword">
                  <div className="inputdiv passwordiv">
                    <label for="password">Create Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      required
                    />
                  </div>

                  <div className="inputdiv confirmpassworddiv">
                    <label for="confirm-password">Confirm Password</label>
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      placeholder="Re-enter password"
                      required
                    />
                  </div>
                </div>

                <p class="password-note">
                  <span>*</span> Password should be 10 letters long, contain
                  punctuation, symbol bla bla
                </p>

                <button
                  onClick={nextPage}
                  type="submit"
                  className="formsubmit btn--blue"
                >
                  Create account
                  <EastRoundedIcon />
                </button>
              </form>
            </div>
          )}

          {page === 2 && (
            <div className="verifyEmail form-container">
              <div className="signupForm__headerdiv">
                <h1 className="form-title">Verify your email</h1>
              </div>

              <div className="verifyemaildiv">
                <label for="verify-email">
                  Enter the verification code send to{" "}
                  <span>useremail@mail.com</span>{" "}
                </label>
                <input
                  type="email"
                  id="verify-email"
                  name="verify-email"
                  placeholder="Enter verification code"
                  required
                />
              </div>

              <button
                type="submit"
                className="verifyemailbtn formsubmit btn--blue"
                onClick={nextPage}
              >
                Verify email
                <EastRoundedIcon />
              </button>
            </div>
          )}
        </div>
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default LecturerAccount;
