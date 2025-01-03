import React, { useState } from "react";
import "../css files/sd-home.css";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

const Viewsubmittedrequests = ({ className, background }) => {
  return (
    <div className={className}>
      <div className=" viewsubmittedrequests--sec">
        <div onClick={() => setSubmittedRequestPage(1)} className="backbtn">
          <KeyboardArrowLeftOutlinedIcon />
          Back
        </div>
        <div className="viewsubmittedrequests--sec__headerbar">
          <div className="headerbar__status--div">
            REQUEST <div className="status--indicator"></div>
          </div>
          <div className="headerbar__status"></div>
        </div>
        <div className="recommendationfor">
          <div className="recommendationfor__header">Recommendation for</div>
          <label htmlFor="uni">University</label>
          <p id="uni"></p>

          <label htmlFor="program">Program</label>
          <p id="program"></p>

          <label htmlFor="deadline">Deadline</label>
          <p id="deadline"></p>
        </div>

        <div className="recommendationfrom">
          <div className="recommendationfrom__header">FROM</div>
          <div className="recommendationfrom__Lect--div">
            <div className="recommendationfrom__Lect--img"></div>
            <div className="recommendationfrom__Lect--name"></div>
          </div>

          <div className="recommendationfrom__Lect--instanddept">
            <div className="recommendationfrom__Lect--inst">
              <div>
                <label htmlFor="inst">Institution</label>
                <p id="inst"></p>
              </div>

              <div>
                <label htmlFor="dept">Institution</label>
                <p id="dept"></p>
              </div>
            </div>
          </div>

          <div className="bground">
            <label htmlFor="bground">YOUR BACKGROUND</label>
            {background}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewsubmittedrequests;
