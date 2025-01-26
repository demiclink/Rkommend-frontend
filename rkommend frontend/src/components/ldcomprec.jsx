import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css files/sd-home.css";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { SchoolRounded } from "@mui/icons-material";
import "../css files/viewreq.css";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { fetchMockData } from "../mockData";
import { EastRounded } from "@mui/icons-material";

const Ldcomprec = ({ selectedRequest, className, close }) => {
  const [user, setUser] = useState(null);

  // Fetch mock data
  useEffect(() => {
    fetchMockData().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <div className={className}>
      <div className="archive__main">
        <div className="backbtn" onClick={close}>
          <KeyboardArrowLeftRounded />
          Back
        </div>
        <div className="archive__container">
          <div className="archive__header--container">
            <div>
              <div className="container--heading">
                {" "}
                Completed recommendations
              </div>
              <div className="container--sub">
                You have completed these recommendations
              </div>
            </div>
            <div className="container--counter">
              {" "}
              {user &&
                user.requests &&
                user.requests.requestsList.filter(
                  (completedreq) => completedreq.status === "Completed"
                ).length}
            </div>
          </div>

          <div className="archivedReqContainer">
            {user &&
              user.requests &&
              user.requests.requestsList.map(
                (completed) =>
                  completed.status === "Completed" && (
                    <ul key={completed.id}>
                      <li>
                        <div
                          className="inprogressitem"
                          //   onClick={() => handleRequestClick(inprogress)}
                        >
                          <div className="inprogressitem__container">
                            <div className="inprogress__details">
                              <div className="inprogress__details--img"></div>
                              <div className="inprogress__details--nameandinst">
                                <h3 className="inprogress__details--name">
                                  {completed.professor}
                                </h3>
                                <p className="inprogress__details--inst">
                                  Applying to
                                  <span> {completed.institution}</span>
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* <KeyboardArrowRightRounded /> */}
                        </div>
                      </li>
                    </ul>
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ldcomprec;
