import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div>
      <header className="header">
        <h5 className="header__logo">Rkommend</h5>
        <div className="header__btns">
          <button className="header__btns--signin btn--clear">Sign in</button>
          <button className="header__btns--signup btn--blue">Sign up</button>
        </div>
      </header>

      {/* Left Image */}
      <img
        className="main-body__img main-body__img--left"
        src="Group 26@2x.png"
        alt=""
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
          <button className="main-body__btns--GetStarted btn--blue">
            Get started
            <span className="material-symbols-rounded"> east </span>
          </button>
          <button className="main-body__btns--signin">
            Sign in
            <span className="material-symbols-rounded"> east </span>
          </button>
        </div>

        <div className="howitWorks">
          <h1 className="howitWorks__title">
            How it simply <br />
            works
          </h1>

          <div className="divider">
            <div className="dividericon">
              <img src="Frame 43131 (1).png" alt="" />
            </div>
            <div className="cardnumberings">
              <div id="1">1</div>
              <div id="2">2</div>
              <div id="3">3</div>
            </div>
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
        alt=""
      />
    </div>
  );
};

export default LandingPage;
