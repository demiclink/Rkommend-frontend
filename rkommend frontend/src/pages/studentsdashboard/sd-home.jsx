import React, { useState, useEffect } from "react";
import SDheader from "../../components/sdheader";
import "../../css files/sd-home.css";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import { fetchMockData } from "../../mockData.js"; // Assuming this fetches the mock data
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

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
  }, []); // Added empty dependency array to run once

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

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  //Edituserdetail

  return (
    <div>
      {/* editprofiledetails */}
      <div className="editprofiledetails">
        <div>
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
                <label htmlFor="title">Title</label>
                <select name="title" id="title">
                  <option value="prof">Prof</option>
                </select>{" "}
                <label htmlFor="firstname">Firstname</label>
                <input
                  id="firstname"
                  type="text"
                  placeholder={user && user.student.name}
                />
              </div>

              <label htmlFor="lastname">Lastname</label>
              <input type="text" name="lastname" id="lastname" />

              <label htmlFor="phonenumber">Phone number</label>
              <input type="text" name="phonenumber" id="phonenumber" />

              <label htmlFor="email">Email address</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder={user && user.student.email}
              />
            </form>
          </div>
        </div>
      </div>

      {/* blackoverlay */}
      <div className="blackoverlay"></div>
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

                <button className="profilediv__btn">
                  Edit details
                  <EastRoundedIcon />
                </button>
              </div>
            )}
          </div>

          <div className="educationrecord">
            <div className="educationrecord__header">
              <p>EDUCATION RECORD</p>
              <button className="createnew">Create new +</button>
            </div>
            <div className="educationrecord__listdiv">
              {user &&
              user.educationRecord &&
              Array.isArray(user.educationRecord) ? (
                user.educationRecord.map((record) => (
                  <ul key={record.id}>
                    <div className="educationrecord__list">
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
              <button className="newrequest__btn">
                Create recommendation request +
              </button>
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
                      <ul key={request.id}>
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
