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
  const [lecturers, setLecturers] = useState([]); // State to store fetched data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lecturerId = localStorage.getItem("lecturerId");

        if (!lecturerId) {
          console.error("No lecturer ID found in localStorage");
          return;
        }

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/lecturers/${lecturerId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await response.json();
        setLecturers(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
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
                <div className="biodata--name">
                  {" "}
                  {/* {console.log(lecturers)} */}
                  {`${lecturers.data && lecturers.data.title}  ${
                    lecturers.data && lecturers.data.firstName
                  } ${lecturers.data && lecturers.data.lastName}`}{" "}
                </div>
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
                Title <p className="p">{lecturers?.data?.title} </p>
              </div>
              <div className="fName">
                Firstname <p className="p">{lecturers?.data?.firstName} </p>
              </div>
            </div>
            <div className="lName">
              Lastname <p className="p">{lecturers?.data?.lastName} </p>
            </div>
            <div className="phone-number">
              Phone number
              <p className="p">{lecturers?.data?.phone}</p>
            </div>
            <div className="official-email">
              Official email
              <p className="p">{lecturers?.data?.email}</p>
            </div>
            <div className="institution">
              Institution
              <p className="p">{lecturers?.data?.institution}</p>
            </div>
            <div className="department">
              Department
              <p className="p">{lecturers?.data?.department}</p>
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
