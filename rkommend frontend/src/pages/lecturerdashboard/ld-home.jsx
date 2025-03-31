import React, { useEffect, useState } from "react";
import LDheader from "../../components/ldheader";
import "../../css files/ld-home.css";
import { LightModeSharp } from "@mui/icons-material";
import { EastRounded } from "@mui/icons-material";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import { ArchiveRounded } from "@mui/icons-material";
import { LogoutRounded } from "@mui/icons-material";
import { fetchMockData } from "../../mockData";
import Ldsidemenu from "../../components/ldsidemenu";
import Ldarchivedrequests from "../../components/ldarchivedrequests";
import Ldcomprec from "../../components/ldcomprec";
import Ldprofile from "../../components/ldprofile";
import Ldeditprofile from "../../components/ld-editprofile";

import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const LDhome = () => {
  const [timeofday, setTimeOfDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [availability, setAvailability] = useState(true);
  const [user, setUser] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isArchivedMenuOpen, setIsArchivedMenuOpen] = useState(false);
  const [isCompletedRecOpen, setIsCompletedRecOpen] = useState(false);
  const [isBlackOverlayVisible, setIsBlackOverlayVisible] = useState(false);
  const [isProfileDetailsOpen, setIsProfileDetails] = useState(false);
  const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);

  // toggle availability
  const toggleAvailability = () => {
    setAvailability(!availability);
  };

  // Set the time of day greeting
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setTimeOfDay("Good morning");
    } else if (currentHour < 18) {
      setTimeOfDay("Good afternoon");
    } else {
      setTimeOfDay("Good evening");
    }
  }, []);

  // Set date
  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);
  }, []);

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

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
    setIsSideMenuOpen(!isSideMenuOpen);
    setIsBlackOverlayVisible(!isBlackOverlayVisible);
  };

  const handleBlackOverlay = () => {
    setIsBlackOverlayVisible(false);
    setIsSideMenuOpen(false);
    setIsArchivedMenuOpen(false);
    setIsCompletedRecOpen(false);
    setIsProfileDetails(false);
    setIsEditDetailsOpen(false);
  };

  const toggleArchive = () => {
    setIsArchivedMenuOpen(!isArchivedMenuOpen);
    setIsBlackOverlayVisible(!isBlackOverlayVisible);
  };

  const toggleCompRec = () => {
    setIsCompletedRecOpen(!isCompletedRecOpen);
    setIsBlackOverlayVisible(!isBlackOverlayVisible);
  };

  const toggleProfileDetails = () => {
    setIsProfileDetails(!isProfileDetailsOpen);
    setIsBlackOverlayVisible(!isBlackOverlayVisible);
  };

  const toggleEditDetails = () => {
    setIsEditDetailsOpen(!isEditDetailsOpen);
    setIsBlackOverlayVisible(true);
    setIsProfileDetails(!isProfileDetailsOpen);
  };

  return (
    <div>
      <LDheader></LDheader>
      <div
        onClick={handleBlackOverlay}
        className={`ldblackoverlay ${
          isBlackOverlayVisible ? "ldblackoverlay__visible" : ""
        }`}
      ></div>

      <div className="ld-main-body">
        <div className="ld-first-div">
          <div className="profile-div">
            <div className="profilediv__greetings--div">
              <div className="profilediv__greetings">
                <LightModeSharp />
                {timeofday}
              </div>
              <button
                className="viewfullprofile__btn"
                onClick={toggleProfileDetails}
              >
                Full Profile <EastRounded />{" "}
              </button>
            </div>
            <div className="profilediv__details--div">
              <div className="profilediv__details--biodata">
                <div className="biodata--img"></div>
                <div className="biodata--name">
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

          <div className="comprec" onClick={toggleCompRec}>
            <div className="comprec__container">
              <div className="comprec__header">COMPLETED RECOMMEDATIONS</div>
              <div className="comprec__counter">
                {user &&
                  user.requests &&
                  user.requests.requestsList.filter(
                    (completedreq) => completedreq.status === "Completed"
                  ).length}
              </div>
            </div>

            <KeyboardArrowRightRounded />
          </div>

          <div className="archived" onClick={toggleArchive}>
            <div className="archived__container">
              <ArchiveRounded></ArchiveRounded>
              <div className="archived__text">Archived</div>
            </div>

            <KeyboardArrowRightRounded />
          </div>

          <div className="ld-first-btm">
            <div className="linediv"></div>

            <p className="currentDate">{currentDate}</p>

            <div className="logout">
              <LogoutRounded />
              Logout
            </div>
          </div>
        </div>
        <div className="ld-second-div">
          <div className="inprogress__header--div">
            <div className="inprogress__header--container">
              <div className="inprogress__header">In progress</div>
              <p>You are yet to complete these accepted requests</p>
            </div>
            <div className="inprogress__header--counter">
              {user &&
                user.requests &&
                user.requests.requestsList.filter(
                  (inprogress) => inprogress.status === "In Progress"
                ).length}
            </div>
          </div>

          <div className="inprogress__body">
            {user &&
              user.requests &&
              user.requests.requestsList.map(
                (inprogress) =>
                  inprogress.status === "In Progress" && (
                    <ul key={inprogress.id}>
                      <li>
                        <div
                          className="inprogressitem"
                          onClick={() => handleRequestClick(inprogress)}
                        >
                          <div className="inprogressitem__container">
                            <div className="inprogress__details">
                              <div className="inprogress__details--img"></div>
                              <div className="inprogress__details--nameandinst">
                                <h3 className="inprogress__details--name">
                                  {inprogress.professor}
                                </h3>
                                <p className="inprogress__details--inst">
                                  Applying to
                                  <span> {inprogress.institution}</span>
                                </p>
                              </div>
                            </div>
                            <div className="inprogressitem__deadline--div">
                              DUE <span> {inprogress.deadline}</span>
                            </div>
                          </div>

                          <KeyboardArrowRightRounded />
                        </div>
                      </li>
                    </ul>
                  )
              )}
          </div>
        </div>

        <div className="ld-third-div">
          <div className="recreq__header--div">
            <div className="recreq__header--container">
              <div className="recreq__header">Recommendation requests</div>
              <p>Accept or reject these requests</p>
            </div>
            <div className="recreq__header--counter">
              {user &&
                user.requests &&
                user.requests.requestsList.filter(
                  (pending) => pending.status === "Pending"
                ).length}
            </div>
          </div>

          <div className="recreq__body">
            <div className="linediv"></div>

            {user &&
              user.requests &&
              (() => {
                // Group requests by date
                const groupedRequests = user.requests.requestsList
                  .filter((req) => req.status === "Pending")
                  .reduce((acc, req) => {
                    const date = req.date;
                    if (!acc[date]) acc[date] = [];
                    acc[date].push(req);
                    return acc;
                  }, {});

                // Render grouped requests by date
                return Object.keys(groupedRequests).map((date) => (
                  <div key={date}>
                    <h3 className="recreq__date--header">{date}</h3>
                    <ul>
                      {groupedRequests[date].map((pending) => (
                        <li className="recreqitem-li" key={pending.id}>
                          <div className="recreqitem">
                            <div className="recreqitem__container">
                              <div className="recreq__details">
                                <div className="recreq__details--img"></div>
                                <div className="recreq__details--nameandinst">
                                  <h3 className="recreq__details--name">
                                    {pending.professor}
                                  </h3>
                                  <p className="recreq__details--inst">
                                    Applying to
                                    <span> {pending.institution}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <KeyboardArrowRightRounded />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ));
              })()}
          </div>
        </div>
      </div>
      <Ldsidemenu
        className={`side__menu ${isSideMenuOpen ? "open" : ""}`}
        selectedRequest={selectedRequest}
        close={() => {
          setIsSideMenuOpen(false);
          setIsBlackOverlayVisible(false);
          recState === "accept" ? `${recState === ""}` : "";
        }}
      ></Ldsidemenu>

      <Ldarchivedrequests
        className={`archivedReq ${isArchivedMenuOpen ? "open" : ""} `}
        close={() => {
          setIsArchivedMenuOpen(false), setIsBlackOverlayVisible(false);
        }}
      ></Ldarchivedrequests>

      <Ldcomprec
        className={`completedrec ${isCompletedRecOpen ? "open" : ""} `}
        close={() => {
          setIsCompletedRecOpen(false), setIsBlackOverlayVisible(false);
        }}
      ></Ldcomprec>

      <Ldprofile
        className={`profile__sidemenu ${isProfileDetailsOpen ? "open" : ""}`}
        availability={availability}
        toggleAvailability={toggleAvailability}
        toggleEditDetails={toggleEditDetails}
      ></Ldprofile>

      <Ldeditprofile
        className={`edit-profile__sidemenu ${isEditDetailsOpen ? "open" : ""}`}
        close={() => {
          setIsEditDetailsOpen(false),
            setIsSideMenuOpen(true),
            setIsBlackOverlayVisible(false);
        }}
      ></Ldeditprofile>
    </div>
  );
};

export default LDhome;
