import React, { useState, useEffect } from "react";
import "../css files/sd-home.css";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import "../css files/viewreq.css";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { fetchAdminMockData } from "../adminMockData";

const SidemenuAdmin = ({ className, selectedRequest, close }) => {
  const [user, setUser] = useState(null);
  const [completed, setCompleted] = useState(false);

  // Fetch mock data
  useEffect(() => {
    fetchAdminMockData().then((data) => {
      setUser(data);
    });
  }, []);

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
                </div>
              </>
            </div>
          </div>

          <div className="reqdetails__sec">
            {selectedRequest && (
              <div key={selectedRequest.id}>
                <div className="date-created">
                  DATE CREATED
                  <p>{selectedRequest.date}</p>
                </div>

                <div className="date-accepted">
                  DATE ACCEPTED
                  <p>{selectedRequest.date}</p>
                </div>

                <div className="lecturerandstudent">
                  {" "}
                  <div className="reqdetails__uniandprogramanddeadline">
                    <p className="student">STUDENT</p>

                    <div className="reqdetails__student-details">
                      <div>
                        {" "}
                        <div className="student-details__img--div"></div>
                        <h3>{selectedRequest.student}</h3>
                      </div>
                      <KeyboardArrowRightRounded />
                    </div>

                    <h4 className="reqdetails__header">Recommendation for</h4>
                    <div>
                      <label htmlFor="reqdetails__university">University</label>
                      <p>{selectedRequest.university}</p>
                    </div>
                    <div>
                      <label htmlFor="reqdetails__program">Program</label>
                      <p>{selectedRequest.program}</p>
                    </div>
                    <div>
                      <label htmlFor="reqdetails__deadline">Deadline</label>
                      <p>{selectedRequest.deadline}</p>
                    </div>
                  </div>
                  <div className="reqdetails__uniandprogramanddeadline reqdetails__lecturer ">
                    <p className="lecturer">LECTURER</p>

                    <div className="reqdetails__student-details">
                      <div>
                        {" "}
                        <div className="student-details__img--div"></div>
                        <h3>{selectedRequest.lecturer}</h3>
                      </div>
                      <KeyboardArrowRightRounded />
                    </div>

                    <div className="unianddept">
                      <div>
                        <label htmlFor="reqdetails__university">
                          Institution
                        </label>
                        <p>{selectedRequest.university}</p>
                      </div>
                      <div>
                        <label htmlFor="reqdetails__program">Department</label>
                        <p>{selectedRequest.program}</p>
                      </div>
                    </div>
                  </div>
                </div>

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
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SidemenuAdmin;
