import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css files/sd-home.css";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { SchoolRounded } from "@mui/icons-material";
import "../css files/viewreq.css";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { fetchMockData } from "../mockData";
import { EastRounded } from "@mui/icons-material";

const Ldsidemenu = ({ className, selectedRequest, close }) => {
  const [user, setUser] = useState(null);

  // Fetch mock data
  useEffect(() => {
    fetchMockData().then((data) => {
      setUser(data);
    });
  }, []);

  const [recState, setRecState] = useState("");

  const toggleRecState = (state) => {
    setRecState(state);
  };

  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
    console.log(completed);
  };

  return (
    selectedRequest && (
      <div className={className}>
        <div className="reqdetails__main">
          <div className="backbtn" onClick={close}>
            <KeyboardArrowLeftRounded />
            Back
          </div>
          <div className="reqdetails__headerdiv recommendreq__headerdiv">
            <div className="reqdetails__headerdiv--top recommendreq__headerdiv">
              {recState === "accept" && (
                <>
                  <div className="recommendreq__headerdiv--accept">
                    <div className="recommendreq__headerdiv--recstatus">
                      RECOMMENDATION STATUS
                      <div
                        className="recstatus--indicator"
                        style={{
                          backgroundColor: completed ? "#04294E" : "#1DB954",
                        }}
                      >
                        {completed ? "COMPLETED" : "IN PROGRESS"}
                      </div>{" "}
                    </div>
                    <div className="recommendreq__headerdiv--switch">
                      MOVE TO COMPLETED
                      <div
                        className="toggleavail__switch"
                        onClick={toggleCompleted}
                        style={{
                          backgroundColor: completed ? "#0A66C2" : "#717171",
                        }}
                      >
                        <div
                          className={`toggleavail__switch--btn ${
                            completed ? "available" : ""
                          }`}
                        ></div>
                      </div>
                    </div>

                    {completed && (
                      <div className="completedRequest completedRec">
                        <div className="completedRequest__Vector">
                          <img src="star.png" alt="" />
                        </div>
                        <div className="completedRequest__text completedRec__text ">
                          You have completed this recommendation!{" "}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
              {recState === "" && (
                <>
                  <p>RECOMMENDATION REQUEST</p>
                  <div className="recommendreq__headerdiv--btns">
                    <button
                      onClick={() => toggleRecState("accept")}
                      className="recommendreq__headerdiv--acceptbtn"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => toggleRecState("declined")}
                      className="recommendreq__headerdiv--declinebtn"
                    >
                      Decline
                    </button>
                  </div>
                </>
              )}

              {recState === "declined" && (
                <>
                  <p>RECOMMENDATION REQUEST</p>
                </>
              )}
            </div>
          </div>

          <div className="reqdetails__sec">
            {(recState === "accept" || recState === "") && (
              <>
                <div className="reqdetails__uniandprogramanddeadline">
                  <h4 className="reqdetails__header">Recommendation for</h4>

                  <div>
                    <label htmlFor="reqdetails__university">University</label>
                    <p>{selectedRequest.institution}</p>
                  </div>
                  <div>
                    <label htmlFor="reqdetails__program">Program</label>
                    <p> {selectedRequest.program}</p>
                  </div>
                  <div>
                    <label htmlFor="reqdetails__deadline">Deadline</label>
                    <p> {selectedRequest.deadline}</p>
                  </div>
                </div>

                <div className="reqdetails__lectslctd">
                  <h6>FROM</h6>
                  <div className="reqdetails__lectslctd--imgdiv">
                    <div className="lectslctd__img"></div>
                    <p className="lectslctd--name">
                      {selectedRequest.professor}
                    </p>
                  </div>
                  <div className="lectslctd__instanddept">
                    <div>
                      <label htmlFor="lectslctd__lecturerInstitution">
                        Institution
                      </label>
                      {selectedRequest.institution}
                    </div>
                    <div>
                      <label htmlFor="lectslctd__lecturerDepartment">
                        Department
                      </label>
                      {selectedRequest.department}
                    </div>
                  </div>
                </div>
                <div className="reqdetails__background">
                  <h6>YOUR BACKGROUND</h6>

                  {selectedRequest ? (
                    <ul>
                      <div className="reqdetails__list">
                        <div>
                          <div className="list__img">
                            <SchoolRounded className="list__img--icon" />
                          </div>
                          <div className="list__unidetails">
                            <div className="unidetails__name">
                              {selectedRequest.institution}
                            </div>
                            <div className="unidetails__department">
                              {selectedRequest.department}
                            </div>
                          </div>
                        </div>

                        <KeyboardArrowDownRounded />
                      </div>
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              </>
            )}

            {recState === "declined" && (
              <>
                <div className="declinedRequest">
                  <div className="declinedRequest__Vector">
                    <img src="safe.png" alt="" />
                  </div>
                  <div className="declinedRequest__textandbtn">
                    <div className="declinedRequest__text declinedRec__text">
                      You declined this recommendation request{" "}
                    </div>

                    <p className="declinedRequest__sub">Request now archived</p>
                  </div>
                </div>

                <div className="undo">
                  If this was a mistake{" "}
                  <span>
                    <button
                      onClick={() => toggleRecState("")}
                      className="undo__btn"
                    >
                      Undo
                    </button>
                  </span>
                </div>
              </>
            )}

            {/* Display Comments */}
            <div className="reqdetails__comments">
              <h3 className="reqdetails__comments--header">Comments</h3>
              {selectedRequest.comments &&
              selectedRequest.comments.length > 0 ? (
                <ul className="comments__list">
                  {selectedRequest.comments.map((comment, index) => (
                    <li key={index} className="comments__item">
                      <div className="comments__item--date">
                        {comment.date} <div className="date--line"></div>
                      </div>
                      <h4>{selectedRequest.professor}</h4>

                      <div className="comments__item--text">
                        {comment.comment}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments here yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Ldsidemenu;
