import React, { useEffect, useState } from "react";
import "../../css files/sd-header.css";
import "../../css files/sd-home.css";
import { SchoolRounded } from "@mui/icons-material";
import SDheader from "../../components/sdheader";
import { fetchMockData } from "../../mockData";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import "../../css files/createrecommendationrequests.css";
import { Link } from "react-router-dom";

const Createrecommedationrequests = () => {
  const [user, setUser] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    fetchMockData().then((data) => {
      setUser(data);
    });
  }, []);

  // Handle the select change
  const toggleSetSelectedRecord = (event) => {
    // Get the selected id
    const selectedId = event.target.value;

    // Find the selected record from the educationRecord array
    const record = user.educationRecord.find(
      (rec) => rec.id === parseInt(selectedId)
    );

    // Set the selected record in the state
    setSelectedRecord(record);
  };

  //set recommendation requests page
  const [recommendationRequestPage, setRecommendationRequestPage] = useState(1);

  const nextRecommendationRequestPage = () => {
    recommendationRequestPage
      ? setRecommendationRequestPage(recommendationRequestPage + 1)
      : "";
  };

  // recommendation request summary
  const [isRecReqSumOpen, setIsRecReqSumOpen] = useState(false);

  const toggleIsRecReqSumOpen = () => {
    setIsRecReqSumOpen(!isRecReqSumOpen);
  };

  return (
    <div>
      <SDheader className="SDheader" />
      <div className="sd-main-body">
        <div className="picturediv">
          <img src="note.png" alt="" />
        </div>
        <div className="createrecreq">
          <Link to="/home-student" className="no-underline">
            <div className="backbtn">
              <KeyboardArrowLeftRoundedIcon />
              Back
            </div>
          </Link>

          <h3>Create recommendation request</h3>
          {user && user.student.reqavail === 0 && (
            <div className="zeroreq">
              <div className="zeroreq__padlockimg">
                <img src="padlock.png" alt="" />
              </div>
              <div className="zeroreq__description">
                <div className="zeroreq__description--maintext">
                  You have 0 requests available.
                </div>
                <div className="zeroreq__description--subtext">
                  Buy more request slots to continue your applications without
                  delay
                </div>
                <button className="zeroreq__description--btn">
                  Buy request slots
                  <EastRoundedIcon />
                </button>
              </div>
            </div>
          )}

          {user && user.student.reqavail > 0 && (
            <div className="createrecreq__process">
              <div className="createrecreq__div1">
                <div className="cornercircle "></div>
                {(recommendationRequestPage === 1 ||
                  recommendationRequestPage === 2 ||
                  recommendationRequestPage === 3) && (
                  <>
                    <div className="createrecreq__div1--dropdown">
                      <label
                        htmlFor="edu-record"
                        className="createrecreq--header"
                      >
                        Education record
                      </label>
                      <select
                        name="edu-record"
                        id="edu-record"
                        onChange={toggleSetSelectedRecord}
                      >
                        <option value="" disabled selected>
                          Select an option
                        </option>
                        {user.educationRecord &&
                          user.educationRecord.map((record) => (
                            <option value={record.id} key={record.id}>
                              {record.institution}, {record.department}
                            </option>
                          ))}
                      </select>
                    </div>

                    {selectedRecord && (
                      <div className="educationrecord__listdiv createrecreq__listdiv">
                        <ul key={selectedRecord.id}>
                          <div
                            className="educationrecord__list createrecreq__list"
                            onClick={() =>
                              viewEducationRecordPage(selectedRecord)
                            }
                          >
                            <div>
                              <div className="list__img">
                                <SchoolRounded className="list__img--icon" />
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
                              About (Extracurricular achievements/political
                              portfolio)
                            </p>
                            {selectedRecord.about}
                          </div>
                        </ul>
                        <button
                          className="createrecreq__div1--btn"
                          onClick={nextRecommendationRequestPage}
                          style={{
                            visibility:
                              recommendationRequestPage === 1
                                ? "visible"
                                : "hidden",
                          }}
                        >
                          Proceed
                          <EastRoundedIcon />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div
                className={`createrecreq__div2 ${
                  recommendationRequestPage === 1 ? "empty" : ""
                }`}
              >
                <div
                  className={`cornercircle ${
                    recommendationRequestPage === 1 ? "circleinactive" : ""
                  }`}
                ></div>

                {(recommendationRequestPage === 2 ||
                  recommendationRequestPage === 3) && (
                  <>
                    <div className="createrecreq--header">
                      Recommendation details
                    </div>

                    <form>
                      <div>
                        <label htmlFor="instreqrec">
                          Institution requesting recommendation
                        </label>
                        <input type="text" name="instreqrec" id="instreqrec" />
                      </div>

                      <div>
                        <label htmlFor="program">Program</label>
                        <select name="program" id="program">
                          <option value="" disabled selected>
                            Select type of program
                          </option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="course">Course </label>
                        <input
                          type="text"
                          name="course"
                          id="course"
                          placeholder="Enter course to be studied"
                        />
                      </div>

                      <div>
                        <label htmlFor="address">Address </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Enter address of institution"
                        />
                      </div>

                      <div>
                        <label htmlFor="deadline">Deadline </label>
                        <input
                          type="date"
                          name="deadline"
                          id="deadline"
                          placeholder="Select deadline date"
                        />
                      </div>
                    </form>
                    <button
                      className="createrecreq__div2--btn"
                      onClick={nextRecommendationRequestPage}
                      style={{
                        visibility:
                          recommendationRequestPage === 2
                            ? "visible"
                            : "hidden",
                      }}
                    >
                      Proceed
                      <EastRoundedIcon />
                    </button>
                  </>
                )}
              </div>
              <div
                className={`createrecreq__div3 ${
                  recommendationRequestPage === 1 ||
                  recommendationRequestPage === 2
                    ? "empty"
                    : ""
                }`}
              >
                <div
                  className={`cornercircle ${
                    recommendationRequestPage === 1 ||
                    recommendationRequestPage === 2
                      ? "circleinactive"
                      : ""
                  }`}
                ></div>

                {recommendationRequestPage === 3 && (
                  <>
                    <div className="createrecreq--header createrecreq__div3--header">
                      Select lecturer
                    </div>
                    <div>
                      {" "}
                      <div className="createrecreq__secheader">
                        The following lecturers are available. Select a lecturer
                        and proceed.
                      </div>
                      <div className="lecturerlist--div">
                        {user &&
                        selectedRecord &&
                        user.requests &&
                        user.requests.requestsList ? (
                          <ul>
                            {user.requests.requestsList
                              .filter(
                                (lecturer) =>
                                  lecturer.institution ===
                                  selectedRecord.institution
                              )
                              .map((lecturer) => (
                                <div key={lecturer.id} className="lecturerlist">
                                  <div>
                                    <div className="lecturerlist__image"></div>
                                    {lecturer.professor}
                                  </div>

                                  <input
                                    type="radio"
                                    name="AccountInput"
                                    id="LecturerAccountInput"
                                    value={lecturer.professor}
                                    // onChange={handleRadioChange}
                                  />
                                </div>
                              ))}
                          </ul>
                        ) : (
                          <p>
                            No lecturers available for the selected institution.
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      className="createrecreq__div3--btn"
                      onClick={toggleIsRecReqSumOpen}
                      style={{
                        visibility:
                          recommendationRequestPage === 3
                            ? "visible"
                            : "hidden",
                      }}
                    >
                      Proceed
                      <EastRoundedIcon />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Createrecommedationrequests;
