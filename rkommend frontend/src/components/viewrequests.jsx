import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css files/sd-home.css";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { SchoolRounded } from "@mui/icons-material";
import "../css files/viewreq.css";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { fetchMockData } from "../mockData";
import { EastRounded } from "@mui/icons-material";

const Viewsubmittedrequests = ({
  className,
  selectedRequest,
  viewSubmittedRequestsPage,
}) => {
  const [user, setUser] = useState(null);

  // Fetch mock data
  useEffect(() => {
    fetchMockData().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <div className={className}>
      <div className="reqdetails__main">
        <div className="backbtn" onClick={viewSubmittedRequestsPage}>
          <KeyboardArrowLeftRounded />
          Back
        </div>
        <div className="reqdetails__headerdiv">
          <div className="reqdetails__headerdiv--top">
            REQUEST
            <div
              className="headerdiv--top--indicator"
              style={{
                backgroundColor:
                  selectedRequest.status === "Pending"
                    ? "#FFAE00"
                    : selectedRequest.status === "In Progress"
                    ? "#1DB954"
                    : selectedRequest.status === "Completed"
                    ? "#04294E"
                    : selectedRequest.status === "Declined"
                    ? "#717171"
                    : "",
              }}
            >
              {" "}
              {selectedRequest.status}
            </div>
          </div>
          <div
            className={`reqdetails__headerdiv--status ${
              selectedRequest.status === "Completed" ? "Completed" : ""
            }  ${selectedRequest.status === "Declined" ? "Declined" : ""}`}
          >
            {selectedRequest.status === "Pending" &&
              "Your request is pending acceptance or rejection"}

            {selectedRequest.status === "In Progress" &&
              "Your request is accepted but not completed"}

            {selectedRequest.status === "Completed" && (
              <div className="completedRequest">
                <div className="completedRequest__Vector">
                  <img src="star.png" alt="" />
                </div>
                <div className="completedRequest__text">
                  Recommendation completed!
                </div>
              </div>
            )}

            {selectedRequest.status === "Declined" && (
              <div className="declinedRequest">
                <div className="declinedRequest__Vector">
                  <img src="safe.png" alt="" />
                </div>
                <div className="declinedRequest__textandbtn">
                  <div className="declinedRequest__text">
                    Recommendation declined
                  </div>
                  <Link
                    to={"/createrecommendationrequests"}
                    className="no-underline"
                  >
                    <button className="resubmit">
                      Edit and resubmit <EastRounded />
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="reqdetails__sec">
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
              <p className="lectslctd--name"> {selectedRequest.professor}</p>
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

          {/* Display Comments */}
          {selectedRequest && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Viewsubmittedrequests;
