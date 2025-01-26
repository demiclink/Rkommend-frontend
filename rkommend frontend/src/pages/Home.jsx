import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/headerandfooter";
import "../css files/landingPage.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const LandingPage = () => {
  // State to track the current step
  const [step, setStep] = useState(1);

  // Function to go to the next step
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Function to go to the previous step
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <Header />
      {/* Left Image */}
      <img
        className="main-body__img main-body__img--left"
        src="Group 26@2x.png"
        alt="left"
      />

      <div className="main-body">
        <div className="main-body__content">
          <h1 className="main-body__title">
            Recommendation letter from former lecturers the{" "}
            <span className="main-body__highlight">easy</span> way
          </h1>
        </div>

        {/* Decorative Vector */}
        <img src="Vector.png" alt="" className="strokevector" />

        <p className="main-body__secondaryText">
          Submit your recommendation request in 2 minutes. <br />
          No phone calls or Whatsapp texts.
        </p>

        <div className="main-body__btns">
          <Link to={"/accountType"} className="no-underline">
            <button className="main-body__btns--GetStarted btn--blue">
              Get started
              <EastRoundedIcon />{" "}
            </button>
          </Link>

          <Link to="/signinType" className="no-underline">
            <button className="main-body__btns--signin">
              Sign in
              <EastRoundedIcon />{" "}
            </button>
          </Link>
        </div>

        <div className="howitWorks">
          <h1 className="howitWorks__title">
            How it simply <br />
            works
          </h1>

          <div className="divider">
            <div className="dividericon">
              <img src="Frame 43131 (1).png" alt="divider" />
            </div>
            <div className="cardnumberings">
              <div className={`one ${step === 1 ? "stepNum" : ""}`}>1</div>
              <div className={`two ${step === 2 ? "stepNum" : ""}`}>2</div>
              <div className={`three ${step === 3 ? "stepNum" : ""}`}>3</div>
            </div>
          </div>

          <div className="howitworkscard">
            {/* Step 1: Select University */}
            {(step === 1 || step === 2 || step === 3) && (
              <div
                className={`selectUni ${
                  step === 2 || step === 3 ? "stacked" : ""
                } ${step === 3 ? "double-stacked" : ""}`}
              >
                <h3>Select your university</h3>
                <label htmlFor="uniinput">University</label>
                <div className="Uniinputcover">
                  <SearchRoundedIcon />
                  <input
                    type="text"
                    name="uniinput"
                    className="uniinput"
                    placeholder="Search for your university"
                  />
                  <KeyboardArrowDownRoundedIcon className="arrow-icon" />
                </div>
                <div className="selectUni--btndiv">
                  <button
                    onClick={nextStep}
                    className="selectUni--btn btn--blue"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Select Department */}
            {(step === 2 || step === 3) && (
              <div className={`selectDept ${step === 3 ? "stacked" : ""}`}>
                <div className="selectDept--div__header">
                  <ChevronLeftRoundedIcon
                    className="arrow-icon"
                    onClick={prevStep}
                  />
                  <h3>Select your department</h3>
                </div>

                <label htmlFor="deptinput">Department</label>
                <div className="Deptinputcover">
                  <SearchRoundedIcon />
                  <input
                    type="text"
                    name="deptinput"
                    className="deptinput"
                    placeholder="Search for your department"
                  />
                  <KeyboardArrowDownRoundedIcon className="arrow-icon" />
                </div>
                <div className="selectdept--btndiv">
                  <button
                    onClick={nextStep}
                    className="selectdept--btn btn--blue"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Select Lecturer */}
            {step === 3 && (
              <div className="selectLect">
                <div className="selectLect--div__header">
                  <ChevronLeftRoundedIcon
                    className="arrow-icon"
                    onClick={prevStep}
                  />
                  <h3>Select Lecturer</h3>
                </div>

                <div className="selectLect__lectavail">
                  <div className="selectLect__lectavail--status">
                    <div className="selectLect__lectavail--pictures">
                      <div className="selectLect__picture1"></div>
                      <span className="selectLect__lectavail--addition">
                        +1
                      </span>
                    </div>
                    <div className="selectLect__lectavail--number">
                      <div className="selectLect__lectavail--indicator"></div>
                      <p>
                        <span className="lectnumber">4 </span>LECTURERS
                        AVAILABLE
                      </p>
                    </div>
                  </div>
                  <div className="selectLect__paragraph">
                    <p>
                      There are{" "}
                      <span className="boldtext">
                        {" "}
                        <span className="lectnumber">4</span> lecturers
                        available (Economics department, University of Ilorin){" "}
                      </span>{" "}
                      to respond to your recommendation request.
                      <span>Sign up</span> to view lecturers and submit a
                      recommendation request.
                    </p>
                  </div>
                </div>

                <Link to="/accountType" className="no-underline">
                  <button className="selectdept--btn btn--blue">Sign Up</button>
                </Link>
              </div>
            )}
          </div>

          <img
            src="Looper-1.png"
            alt=""
            className="howitWorks__img howitWorks__img--pattern"
          />
        </div>
      </div>

      {/* Right Image */}
      <img
        className="main-body__img main-body__img--right"
        src="Group.png"
        alt="right"
      />

      <div className="secbody ">
        <div className="secbody__imagecontainer">
          <img className="secbody__image" src="Object 1.png" alt="" />
        </div>
        <div className="secbody__description">
          <img
            className="secbody__description--image"
            src="Frame 43142.png"
            alt=""
          />
          <p className="secbody__description--text">
            <span className="recreqs">5 recommendation requests</span> <br />{" "}
            for <br /> <span className="recprice">NGN10,000</span>
          </p>
          <div className="secbody__description--btn">
            <Link to={"/accountType"} className="no-underline">
              {" "}
              <button className="secbody__description--btn btn--blue">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
