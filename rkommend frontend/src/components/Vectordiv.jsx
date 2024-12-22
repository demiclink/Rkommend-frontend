import React from "react";
import "../css files/studentaccountcreation.css";

export const VectorDiv = ({ image }) => {
  return (
    <div className="vectorcontainer">
      <div className="vectorcontainer__header">
        <h2 className="headertext">Getting Started</h2>
        <div className="progresscounter">1</div>
      </div>
      <div className="vectorcontainer__progress">
        <div className="vectorcontainer__progress--marker"></div>
      </div>
      <div className="vectorcontainer__imgdiv">
        <img src={image} alt="" className="vectorcontainer__img" />
      </div>
    </div>
  );
};
