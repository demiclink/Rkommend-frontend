import React from "react";
import "../css files/accountcreation.css";

export const VectorDiv = ({ image, progresscounter, markerWidth }) => {
  return (
    <div className="vectorcontainer">
      <div className="vectorcontainer__header">
        <h2 className="headertext">Getting Started</h2>
        <div className="progresscounter">{progresscounter}</div>
      </div>
      <div className="vectorcontainer__progress">
        <div
          className="vectorcontainer__progress--marker"
          style={{ width: markerWidth }}
        ></div>
      </div>
      <div className="vectorcontainer__imgdiv">
        <img src={image} alt="" className="vectorcontainer__img" />
      </div>
    </div>
  );
};
