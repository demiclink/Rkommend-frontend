import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css files/sd-home.css";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftOutlined";
import "../css files/viewreq.css";
import { fetchMockData } from "../mockData";
import { EastRounded } from "@mui/icons-material";

const Ldprofile = ({
  availability,
  toggleAvailability,
  className,
  toggleEditDetails,
}) => {
  const [user, setUser] = useState(null);

  //fetchMockData
  useEffect(() => {
    fetchMockData().then((data) => {
      setUser(data); // Store fetched data in state
    });
  }, []);

  return (
    <>
      <div className={className}>
        <div className="ldprofile__main">
          {" "}
          <div className="backbtn">
            <KeyboardArrowLeftRounded />
            Back
          </div>
        </div>

        <div className="ldprofile__container">
          <div className="ldprofile__heading">YOUR PROFILE</div>
          <div className="profile-div">
            <div className="profilediv__details--div">
              <div className="profilediv__details--biodata">
                <div className="biodata--img"></div>
                <div className="biodata--name">Prof. Eloisse Motunrayo </div>
              </div>
              <div
                className="profilediv__details--availability"
                style={{
                  backgroundColor: availability ? "#1db9544d" : "#F6F6F64d",
                  border: availability
                    ? "1px solid #1db954"
                    : " 1px solid #e7e7e7",
                }}
              >
                <div
                  className="availability--indicator"
                  style={{
                    backgroundColor: availability ? "#1db954" : "#717171",
                  }}
                ></div>
                <div
                  className="availability--text"
                  style={{
                    color: availability ? "#1b1b1b" : "#717171",
                  }}
                >
                  {availability ? "AVAILABLE" : "UNAVAILABLE"}
                </div>
              </div>
            </div>
            <div className="profilediv__toggleavail--div">
              Your availability
              <div
                className="toggleavail__switch"
                onClick={toggleAvailability}
                style={{
                  backgroundColor: availability ? "#0A66C2" : "#717171",
                }}
              >
                <div
                  className={`toggleavail__switch--btn ${
                    availability ? "available" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <div className="ldprofile__details">
            <div className="ldprofile___titleandnames--container">
              <div className="title">
                Title <p className="p">{user?.student.title}</p>
              </div>
              <div className="fName">
                Firstname <p className="p">{user?.student.firstname}</p>
              </div>
              <div className="lName">
                Lastname <p className="p">{user?.student.lastname}</p>
              </div>
            </div>
            <div className="phone-number">
              Phone number
              <p className="p">{user?.student.phonenumber}</p>
            </div>
            <div className="official-email">
              Official email
              <p className="p">{user?.student.email}</p>
            </div>
            <div className="institution">
              Institution
              <p className="p">{user?.student.institution}</p>
            </div>
            <div className="department">
              Department
              <p className="p">{user?.student.department}</p>
            </div>
          </div>
          <button className="edit-details" onClick={toggleEditDetails}>
            Edit details <EastRounded></EastRounded>
          </button>
        </div>
      </div>
    </>
  );
};

export default Ldprofile;
