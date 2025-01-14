import React, { useEffect, useState } from "react";
import LDheader from "../../components/ldheader";
import { NotificationsNoneRounded } from "@mui/icons-material";
import "../../css files/ld-home.css";
import { LightModeSharp } from "@mui/icons-material";
import { EastRounded } from "@mui/icons-material";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import { ArchiveRounded } from "@mui/icons-material";
import { LogoutRounded } from "@mui/icons-material";
import { fetchMockData } from "../../mockData";
import Ldsidemenu from "../../components/ldsidemenu";

const LDhome = () => {
  const [timeofday, setTimeOfDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [availability, setAvailability] = useState(true);
  const [user, setUser] = useState(null);

  // toggle availability
  const toggleAvailability = () => {
    setAvailability(!availability);
    console.log(availability);
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
  useEffect(() => {
    fetchMockData().then((data) => {
      setUser(data); // Store fetched data in state
    });
  }, []);

  return (
    <div>
      <LDheader></LDheader>
      <div className="ld-main-body">
        <div className="ld-first-div">
          <div className="profile-div">
            <div className="profilediv__greetings--div">
              <div className="profilediv__greetings">
                <LightModeSharp />
                {timeofday}
              </div>
              <button className="viewfullprofile__btn">
                Full Profile <EastRounded />{" "}
              </button>
            </div>
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

          <div className="comprec">
            <div className="comprec__container">
              <div className="comprec__header">COMPLETED RECOMMEDATIONS</div>
              <div className="comprec__counter">50</div>
            </div>

            <KeyboardArrowRightRounded />
          </div>

          <div className="archived">
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
                        <div className="inprogressitem">
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
      <Ldsidemenu className={"side__menu"}></Ldsidemenu>
    </div>
  );
};

export default LDhome;
