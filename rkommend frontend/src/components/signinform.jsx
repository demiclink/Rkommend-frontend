import React from "react";
import "../css files/signin.css";

const SigninFormVector = ({ Type }) => {
  return (
    <div>
      <div className="signinpicturediv">
        <div className="signinpicturediv__header">
          <h1>{Type}</h1>
        </div>
        <div className="signin__imgdiv">
          <img className="signin__img" src="note.png" alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default SigninFormVector;
