import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SDheader from "../../components/sdheader";
import "../../css files/sd-home.css";
import {
  LightModeSharp as LightModeSharpIcon,
  KeyboardArrowDownRounded as KeyboardArrowDownRoundedIcon,
  KeyboardArrowRightRounded as KeyboardArrowRightRoundedIcon,
  SchoolRounded as SchoolRoundedIcon,
  LogoutRounded as LogoutRoundedIcon,
  EastRounded as EastRoundedIcon,
  NotificationsNoneRounded as NotificationsNoneRoundedIcon,
  AddPhotoAlternateOutlined as AddPhotoAlternateOutlinedIcon,
  KeyboardArrowLeftOutlined as KeyboardArrowLeftOutlinedIcon,
} from "@mui/icons-material";

import { fetchMockData } from "../../mockData.js";
import Viewsubmittedrequests from "../../components/viewrequests.jsx";
import "../../css files/viewreq.css";

const SDHome = () => {
  const [timeofday, setTimeOfDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [user, setUser] = useState(null); // State to store user data
  const [selectedTab, setSelectedTab] = useState("All"); // State to track active tab

  // Fetch mock data
  useEffect(() => {
    fetchMockData().then((data) => {
      setUser(data); // Store fetched data in state
    });
  }, []);

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

  // Handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // Filter requests based on selected tab
  const filteredRequests =
    user && user.requests
      ? user.requests.requestsList.filter((request) => {
          if (selectedTab === "All") return true; // Show all requests
          return request.status === selectedTab; // Filter by status
        })
      : [];

  // Define background color based on selected tab
  const getTabBackgroundColor = () => {
    switch (selectedTab) {
      case "Pending":
        return "#FFAE00";
      case "In Progress":
        return "#1DB954";
      case "Completed":
        return "#04294E";
      case "Declined":
        return "#717171";
      default:
        return "#0A66C2"; // Default color for "All"
    }
  };

  const getRequestStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#FFAE00"; // Yellow
      case "In Progress":
        return "#1DB954"; // Green
      case "Completed":
        return "#04294E"; // Dark Blue
      case "Declined":
        return "#717171"; // Grey
      default:
        return "#0A66C2"; // Default color (black)
    }
  };

  // Define the message for the counter div based on the selected tab
  const getCounterMessage = () => {
    switch (selectedTab) {
      case "Pending":
        return "These requests are pending acceptance or rejection";
      case "In Progress":
        return "These requests have been accepted but not completed";
      case "Completed":
        return "These requests have been completed";
      case "Declined":
        return "These requests have been rejected";
      default:
        return "Showing all your recommendation requests";
    }
  };

  // Define grouped notifications safely after ensuring notifications are available
  const groupedNotifications =
    user && user.notifications
      ? user.notifications.reduce((acc, notification) => {
          const { date } = notification;
          if (!acc[date]) {
            acc[date] = []; // Initialize array if it doesn't exist
          }
          acc[date].push(notification); // Add the notification to the appropriate date group
          return acc;
        }, {})
      : {};

  //Userprofile
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Refs for editprofiledetails and blackoverlay
  const editDetailsRef = useRef(null); // Ref for editprofiledetails
  const overlayRef = useRef(null); // Ref for blackoverlay
  const editEducationRecordRef = useRef(null);

  // const educationRecordListDivRef = useRef(null);

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
    if (educationRecordListDivRef.current) {
      // educationRecordListDivRef.current.style.height = "100px";
    }
  };

  //Edituserdetail
  const [isEditDetailsOpen, setIsEditDetailsOpen] = useState(false);

  const toggleEditDetails = () => {
    setIsEditDetailsOpen(!isEditDetailsOpen);
  };

  //Editeducationrecorddetail
  const [isEducationRecordOpen, setIsEducationRecordOpen] = useState(false);
  const toggleEditEducationRecord = () => {
    setIsEducationRecordOpen(!isEducationRecordOpen);
  };

  // Logic for the overlay
  const handleOverlayClick = () => {
    setIsEducationRecordOpen(false);
    setIsEditDetailsOpen(false);
    setSubmittedRequestPage(false);
  };

  // Education record setting
  const [educationRecordPage, setEducationRecordPage] = useState(1);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const viewEducationRecordPage = (record) => {
    if (educationRecordPage === 1) {
      setEducationRecordPage(2);
      setSelectedRecord(record);
    }
  };

  //viewsubmitted requests
  const [submittedRequestsPageOpen, setSubmittedRequestPage] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(false);

  const viewSubmittedRequestsPage = (request) => {
    setSubmittedRequestPage(!submittedRequestsPageOpen);
    setSelectedRequest(request);
  };

  const [institutions, setInstitutions] = useState([]); // State to store fetched data

  const baseUrl = "https://rkommend-server.onrender.com";

  const apiRequest = async (endpoint, options = {}) => {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    // Fetch data when component mounts
    apiRequest("/api/institutions").then((data) => {
      setInstitutions(data); // Set data in state
      console.log(data);
    });
  }, []); // Empty array ensures it runs only on mount

  return (
    <div>
      {/* editprofiledetails */}
      <div
        ref={editDetailsRef}
        className={`editprofiledetails ${isEditDetailsOpen ? "active" : ""}`}
      >
        <div className="editprofiledetails--sec">
          <div className="editprofiledetails__header-rect">
            EDIT PROFILE DETAILS
          </div>
          <div className="editprofiledetails__photo">
            Display Photo
            <div className="editprofiledetails__photo--imgdiv">
              <div className="editprofiledetails__photo--img"></div>
              <button className="changephoto">
                <AddPhotoAlternateOutlinedIcon />
                Change photo
              </button>
            </div>
          </div>
          <div className="editprofiledetails__form">
            <form>
              <div className="editprofiledetails__titleandfirstname">
                <div>
                  <label htmlFor="title">Title</label>
                  <select name="title" id="title">
                    <option value="prof">Prof</option>
                  </select>{" "}
                </div>

                <div>
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder={user && user.student.name}
                  />
                </div>
              </div>

              <div className="lastName">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" id="lastname" />
              </div>

              <div className="phoneNum">
                <label htmlFor="phonenumber">Phone number</label>
                <input type="text" name="phonenumber" id="phonenumber" />
              </div>

              <div className="eMail">
                <label htmlFor="email">Email address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder={user && user.student.email}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="editprofiledetails__btns--div">
          <button className="editprofiledetails__btns--save">
            Save changes
          </button>
          <button className="editprofiledetails__btns--discard">
            Discard changes
          </button>
        </div>
      </div>

      {/* blackoverlay for profile div*/}
      <div
        className={`blackoverlay editprofileoverlay ${
          isEditDetailsOpen ? "visible" : ""
        }`}
        onClick={handleOverlayClick}
      ></div>

      {/* editeducationrecords */}
      <div
        className={`editeducationrecord ${
          isEducationRecordOpen ? "active" : ""
        }`}
      >
        <div className="editeducationrecord--sec">
          <div className="editeducationrecord__header-rect">
            EDIT EDUCATION RECORD
          </div>
          <div className="editeducationrecord__form">
            <form>
              <div>
                <label htmlFor="institution" className="institution required">
                  Institution
                </label>
                <select name="institution" id="institution">
                  <option value="unilorin">Unilorin</option>
                </select>{" "}
              </div>

              <div>
                <label htmlFor="department">Department</label>
                <input
                  id="department"
                  type="text"
                  // placeholder={user && user.educationRecord}
                />
              </div>

              <label htmlFor="matricnumb">Matriculation number</label>
              <input type="text" name="matricnumb" id="matricnumb" />

              <label htmlFor="grad">Year of graduation</label>
              <input type="text" name="grad" id="grad" />

              <label htmlFor="transcript">Transcript</label>
              <input
                type="file"
                accept="image/*"
                name="transcript"
                id="transcript"
              />

              <label htmlFor="extracurr">
                Extracurricular achievements/Political portfolio
              </label>
              <input
                type="file"
                accept="image/*"
                name="extracurr"
                id="extracurr"
              />
            </form>
          </div>
        </div>
        <div className="editeducationrecord_btns--div">
          <button className="editeducationrecord__btns--save">
            Save changes
          </button>
          <button className="editeducationrecord__btns--discard">
            Discard changes
          </button>
        </div>
      </div>

      {/* blackoverlay for edit education div*/}
      <div
        className={`blackoverlay  ${isEducationRecordOpen ? "visible" : ""}`}
        onClick={handleOverlayClick}
      ></div>

      {/* viewsubmitted requests */}
      <Viewsubmittedrequests
        className={`reqdetails ${submittedRequestsPageOpen ? "active" : ""}`}
        viewSubmittedRequestsPage={viewSubmittedRequestsPage}
        selectedRequest={selectedRequest}
      />

      {/* blackoverlay for submitted requests*/}
      <div
        className={`blackoverlay editprofileoverlay ${
          submittedRequestsPageOpen ? "visible" : ""
        }`}
        onClick={handleOverlayClick}
      ></div>

      <SDheader className="SDheader" />
      <div className="sd-main-body">
        <div className="profilediv">
          <div className="profilediv__greetings">
            <LightModeSharpIcon />
            {timeofday}
          </div>

          <div className="profilediv__stddetails">
            <div className="profilediv__stddetails--main">
              <div className="profilediv__stddetails--imgandname">
                <div className="profilediv__stddetails--img">
                  {/* Placeholder for profile image */}
                </div>

                {/* Display student's name if user data is available */}
                <div className="profilediv__stddetails--name">
                  {user && user.student.name}
                </div>
              </div>

              <KeyboardArrowDownRoundedIcon
                className={`arrow-icon ${isDetailsOpen ? "open" : ""}`}
                onClick={toggleDetails}
                style={{ cursor: "pointer" }}
              />
            </div>

            {/* Conditionally render additional details */}
            {isDetailsOpen && (
              <div className="profilediv__additional-details">
                <div className="profilediv__additional-details--email">
                  Email
                  <div className="email">{user && user.student.email}</div>
                </div>

                <div className="profilediv__additional-details--phonenumber">
                  Phone number
                  <div className="phonenumber">
                    {user && user.student.phonenumber}
                  </div>
                </div>

                <button className="profilediv__btn" onClick={toggleEditDetails}>
                  Edit details
                  <EastRoundedIcon />
                </button>
              </div>
            )}
          </div>

          {/* Education record list (page 1) */}
          {educationRecordPage === 1 && (
            <div className="educationrecord">
              <div className="educationrecord__header">
                <p>EDUCATION RECORD</p>
                <Link to="/createeducationrecord" className="no-underline">
                  <button className="createnew">Create new +</button>
                </Link>
              </div>
              <div
                className="educationrecord__listdiv"
                // ref={educationRecordListDivRef}
              >
                {user &&
                user.educationRecord &&
                Array.isArray(user.educationRecord) ? (
                  user.educationRecord.map((record) => (
                    <ul key={record.id}>
                      <div
                        className="educationrecord__list"
                        onClick={() => viewEducationRecordPage(record)}
                      >
                        <div>
                          <div className="list__img">
                            <SchoolRoundedIcon className="list__img--icon" />
                          </div>
                          <div className="list__unidetails">
                            <div className="unidetails__name">
                              {record.institution}
                            </div>
                            <div className="unidetails__department">
                              {record.department}
                            </div>
                          </div>
                        </div>
                        <KeyboardArrowRightRoundedIcon />
                      </div>
                    </ul>
                  ))
                ) : (
                  <p>No education records available</p>
                )}
              </div>
            </div>
          )}

          {/* Education record details (page 2) */}
          {educationRecordPage === 2 && (
            <div className="educationrecord">
              <div className="backandeditdiv">
                <div
                  onClick={() => setEducationRecordPage(1)}
                  className="educationrecord--backbtn"
                >
                  <KeyboardArrowLeftOutlinedIcon />
                  Back
                </div>

                <button className="editbtn" onClick={toggleEditEducationRecord}>
                  EDIT
                </button>
              </div>

              {selectedRecord ? (
                <div className=" educationrecord__listdiv educationrecord__details educationrecord__details--open">
                  <ul key={selectedRecord.id}>
                    <div
                      className="educationrecord__list"
                      onClick={() => viewEducationRecordPage(record)}
                    >
                      <div>
                        <div className="list__img">
                          <SchoolRoundedIcon className="list__img--icon" />
                        </div>
                        <div className="list__unidetails">
                          <div className="unidetails__name">
                            {selectedRecord.institution}
                          </div>
                          <div className="unidetails__department">
                            {selectedRecord.department}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="matricnumerandgradyear">
                      <div className="matnum">
                        <p> Matric number</p>
                        {selectedRecord.matricNumber}
                      </div>
                      <div className="yearofgrad">
                        <p> Year of graduation</p>
                        {selectedRecord.gradYear}
                      </div>
                    </div>
                    <div className="transcript">
                      <p> Transcript</p>
                      {selectedRecord.transcript}
                    </div>
                    <div className="about">
                      <p>
                        {" "}
                        About (Extracurricular achievements/political portfolio)
                      </p>
                      {selectedRecord.about}
                    </div>
                  </ul>
                </div>
              ) : (
                <p>No record selected</p>
              )}
            </div>
          )}

          <p className="currentDate">{currentDate}</p>

          <div className="logout">
            <LogoutRoundedIcon />
            Logout
          </div>
        </div>

        <div className="requestsbodydiv">
          <div className="reqavaildiv">
            <div className="reqavailstatus">
              <p className="reqavail__number">
                <span> {user && user.requests.availableSlots} </span> REQUESTS
                AVAILABLE
              </p>
              <button className="reqavail__btn">
                Buy request slots
                <EastRoundedIcon />
              </button>
            </div>
            <img src="note.png" alt="" className="reqavail__img" />
            <div className="newrequest">
              <div className="newrequest__header">
                <p>NEW REQUEST</p>
              </div>
              <Link className="no-underline" to="/createrecommendationrequests">
                <button className="newrequest__btn">
                  Create recommendation request +
                </button>
              </Link>
            </div>
          </div>
          <div className="reqandnotifs">
            <div className="requestsdiv">
              <p className="reqheader">REQUESTS</p>
              <div className="requests">
                <div className="requests__scrollmenu">
                  <div
                    onClick={() => handleTabChange("All")}
                    className={`request-status ${
                      selectedTab === "All" ? "active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        selectedTab === "All" ? getTabBackgroundColor() : "",
                    }}
                  >
                    ALL
                  </div>
                  <div
                    onClick={() => handleTabChange("Pending")}
                    className={`request-status ${
                      selectedTab === "Pending" ? "active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        selectedTab === "Pending"
                          ? getTabBackgroundColor()
                          : "",
                    }}
                  >
                    <div
                      className="request-status-indicator"
                      style={{ backgroundColor: "#FFAE00" }}
                    ></div>
                    PENDING
                  </div>
                  <div
                    onClick={() => handleTabChange("In Progress")}
                    className={`request-status ${
                      selectedTab === "In Progress" ? "active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        selectedTab === "In Progress"
                          ? getTabBackgroundColor()
                          : "",
                    }}
                  >
                    <div
                      className="request-status-indicator"
                      style={{ backgroundColor: "#1DB954" }}
                    ></div>
                    IN PROGRESS
                  </div>
                  <div
                    onClick={() => handleTabChange("Completed")}
                    className={`request-status ${
                      selectedTab === "Completed" ? "active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        selectedTab === "Completed"
                          ? getTabBackgroundColor()
                          : "",
                    }}
                  >
                    <div
                      className="request-status-indicator"
                      style={{ backgroundColor: "#04294E" }}
                    ></div>
                    COMPLETED
                  </div>
                  <div
                    onClick={() => handleTabChange("Declined")}
                    className={`request-status ${
                      selectedTab === "Declined" ? "active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        selectedTab === "Declined"
                          ? getTabBackgroundColor()
                          : "",
                    }}
                  >
                    <div
                      className="request-status-indicator"
                      style={{ backgroundColor: "#717171" }}
                    ></div>
                    DECLINED
                  </div>
                </div>
                <div className="requests__counter">
                  <p>{getCounterMessage()}</p>
                  <div
                    className="requests__counter--number"
                    style={{ backgroundColor: getTabBackgroundColor() }}
                  >
                    {filteredRequests.length}
                  </div>
                </div>
                <div className="requests__listdiv">
                  {filteredRequests.length > 0 ? (
                    filteredRequests.map((request) => (
                      <ul
                        key={request.id}
                        onClick={() => viewSubmittedRequestsPage(request)}
                      >
                        <div className="requests__list">
                          <div>
                            <div className="requestslist--img">
                              <div
                                className="requestlist--imgindicator"
                                style={{
                                  backgroundColor: getRequestStatusColor(
                                    request.status
                                  ),
                                }}
                              ></div>
                            </div>
                            <div className="list__requestdetails">
                              <div className="requestdetails__name">
                                {request.professor}
                              </div>
                              <div className="requestdetails__uni">
                                For <span>{request.institution}</span>
                              </div>
                            </div>
                          </div>

                          <KeyboardArrowRightRoundedIcon />
                        </div>
                      </ul>
                    ))
                  ) : (
                    <p>No requests available</p>
                  )}
                </div>
              </div>
            </div>

            <div className="notifsdiv">
              <p className="notifsheader">NOTIFICATIONS</p>
              <div className="notifications">
                <div className="notifications__listdiv">
                  {Object.keys(groupedNotifications).map((date) => (
                    <div key={date}>
                      {/* Display the date once for each group */}
                      <div className="notificationdetails__date">{date}</div>

                      {/* List all notifications under the date */}
                      {groupedNotifications[date].map((notification) => (
                        <ul key={notification.id}>
                          <div className="notifications__list">
                            <div className="notificationdetails">
                              <div className="notificationsdetails__icon">
                                {" "}
                                <NotificationsNoneRoundedIcon />
                              </div>

                              <div className="notificationdetails__message">
                                {" "}
                                {notification.message}
                              </div>
                            </div>

                            <KeyboardArrowRightRoundedIcon />
                          </div>
                        </ul>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDHome;
