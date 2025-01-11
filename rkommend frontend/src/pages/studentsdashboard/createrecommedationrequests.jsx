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
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

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
    const selectedId = event.target.value;
    const record = user.educationRecord.find(
      (rec) => rec.id.toString() === selectedId // Comparing as string
    );
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

  const [formData, setFormData] = useState({
    instreqrec: "",
    program: "",
    course: "",
    address: "",
    deadline: "",
    institution: "",
    department: "",
  });

  // Handler for updating form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for selecting a lecturer
  const handleLecturerSelection = (e, lecturer) => {
    setFormData((prevData) => ({
      ...prevData,
      lecturer: lecturer.professor,
      institution: lecturer.institution,
      department: lecturer.department,
    }));
  };

  const [isRecReqSubmissionSuccess, setIsRecReqSubmissionSuccess] =
    useState(false);

  const toggleSetIsRecReqSubmissionSuccess = () => {
    setIsRecReqSubmissionSuccess(!isRecReqSubmissionSuccess);
  };

  // blackoverlayp
  const handleOverlayClick = () => {
    setIsRecReqSumOpen(false);
    setIsRecReqSubmissionSuccess(false);
  };

  // requestqty
  const [qtyCounter, setQtyCounter] = useState(1);

  const increaseQtyCounter = () => {
    setQtyCounter(qtyCounter + 1);
  };

  const decreaseQtyCounter = () => {
    if (qtyCounter > 1) {
      setQtyCounter(qtyCounter - 1);
    }
  };

  const [isBuyReqOpen, setIsBuyReqOpen] = useState(false);
  const [isBlackOverlayBuyVisible, setIsBlackOverlayBuyVisible] =
    useState(false);
  const toggleIsBuyReqOpen = () => {
    setIsBuyReqOpen(!isBuyReqOpen);
    setIsBlackOverlayBuyVisible(!isBlackOverlayBuyVisible);
  };

  // purchase success
  const [isSuccess, setIsSuccess] = useState(false);
  const toggleIsSuccess = () => {
    setIsSuccess(!isSuccess);
  };

  return (
    <div>
      <SDheader className="SDheader" />

      <div className="crr-main-body">
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
            <>
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
                  <button
                    className="zeroreq__description--btn"
                    onClick={toggleIsBuyReqOpen}
                  >
                    Buy request slots
                    <EastRoundedIcon />
                  </button>
                </div>
              </div>

              <div className={`buyreqs ${isBuyReqOpen ? "active" : ""}`}>
                <div className="backbtn" onClick={toggleIsBuyReqOpen}>
                  <KeyboardArrowLeftRoundedIcon />
                  Back
                </div>

                <h4>Buy request slots</h4>

                {/* purchase success */}
                <>
                  {user &&
                    user.student &&
                    user.student.checkout === "success" && (
                      <div
                        className={`purchasesuccess__container ${
                          isSuccess ? "checkout" : ""
                        }`}
                      >
                        <div className="purchasesuccess">
                          <h4>Your purchase is successful</h4>
                          <img src="R-TickSquare.png" alt="" />
                          Continue your admission journey with easy
                          recommendation requests
                        </div>

                        <Link to={"/home-student"} className="no-underline">
                          <button>
                            Proceed to Home <EastRoundedIcon />
                          </button>
                        </Link>
                      </div>
                    )}

                  {user &&
                    user.student &&
                    user.student.checkout === "failed" && (
                      <div
                        className={`purchasesuccess__container ${
                          isSuccess ? "checkout" : ""
                        }`}
                      >
                        <div className="purchasesuccess purchasefailure">
                          <h3 className="purchasefailure__h4">
                            Payment failed
                          </h3>
                          <img src="R-CloseSquare.png" alt="" />
                          Try again
                        </div>

                        <button onClick={toggleIsBuyReqOpen}>
                          Proceed to Buy request slots <EastRoundedIcon />
                        </button>
                      </div>
                    )}
                </>

                <div className="buyreqs__rate--div">
                  RATE
                  <p>₦1,000/request</p>
                </div>

                <div className="buyreqs__qty">
                  <h5>How many do you want to buy?</h5>
                  <div className="buyreqs__qty--div">
                    SET QUANTITY
                    <div className="buyreqs__qty--counter">
                      <div
                        className="buyreqs__qty--counter--down"
                        onClick={decreaseQtyCounter}
                      >
                        <KeyboardArrowDownRoundedIcon />
                      </div>
                      <p>{qtyCounter}</p>
                      <div
                        className="buyreqs__qty--counter--up"
                        onClick={increaseQtyCounter}
                      >
                        <KeyboardArrowUpRoundedIcon />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buyreqs__total">
                  TOTAL COST
                  <div className="totalcost">₦{qtyCounter * 1000}</div>
                </div>

                <button className="buyreqs__btn" onClick={toggleIsSuccess}>
                  Proceed to check out
                  <EastRoundedIcon />
                </button>
              </div>

              <div
                onClick={() => {
                  toggleIsBuyReqOpen();
                }}
                className={`blackoverlay--req ${
                  isBlackOverlayBuyVisible ? "visible" : ""
                }`}
              ></div>
            </>
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
                        className="edu-record"
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

                    <form className="createrecreq--form">
                      <div>
                        <label htmlFor="instreqrec">
                          Institution requesting recommendation
                        </label>
                        <input
                          type="text"
                          name="instreqrec"
                          id="instreqrec"
                          value={formData.instreqrec}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="program">Program</label>
                        <select
                          name="program"
                          id="program"
                          value={formData.program}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select type of program
                          </option>
                          <option value="Undergraduate">Undergraduate</option>
                          <option value="Graduate">Graduate</option>
                          <option value="PhD">PhD</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="course">Course</label>
                        <input
                          type="text"
                          name="course"
                          id="course"
                          placeholder="Enter course to be studied"
                          value={formData.course}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Enter address of institution"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="deadline">Deadline</label>
                        <input
                          type="date"
                          name="deadline"
                          id="deadline"
                          value={formData.deadline}
                          onChange={handleChange}
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
                                  selectedRecord.institution // Filter lecturers by institution
                              )
                              .map((lecturer) => (
                                <div key={lecturer.id} className="lecturerlist">
                                  <div>
                                    <div className="lecturerlist__image"></div>
                                    {lecturer.professor}
                                  </div>

                                  <input
                                    type="radio"
                                    name="lecturer"
                                    id={`LecturerAccountInput_${lecturer.id}`}
                                    value={lecturer.professor}
                                    onChange={(e) =>
                                      handleLecturerSelection(e, lecturer)
                                    }
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

      {/* edit recommendation request summary*/}
      <div
        className={`editrecreqsum 
            ${isRecReqSumOpen ? "active" : ""}
        `}
      >
        <div className="editrecreqsum--sec">
          <div className="backbtn" onClick={toggleIsRecReqSumOpen}>
            <KeyboardArrowLeftRoundedIcon />
            Back
          </div>
          <div className="editrecreqsum__header-rect">
            <p>RECOMMENDATION REQUEST SUMMARY </p>
          </div>

          <h6>YOUR BACKGROUND</h6>

          {selectedRecord ? (
            <ul>
              <div
                className="createrecreq__list"
                onClick={() => viewEducationRecordPage(selectedRecord)}
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
            </ul>
          ) : (
            ""
          )}

          <div className="createrecreq__list--rec-for">
            <div className="rec-for__uniandprogramanddeadline">
              <h4 className="rec-for__header">Recommendation for</h4>

              <div>
                <label htmlFor="rec-for__university">University</label>
                <p>{formData.instreqrec}</p>
              </div>
              <div>
                <label htmlFor="rec-for__program">Program</label>
                <p> {formData.program}</p>
              </div>
              <div>
                <label htmlFor="rec-for__deadline">Deadline</label>
                <p> {formData.deadline}</p>
              </div>
            </div>
          </div>

          <div className="createrecreq__lectslctd">
            <h6>LECTURER SELECTED</h6>
            <div className="createrecreq__lectslctd--imgdiv">
              <div className="lectslctd__img"></div>
              <p>{formData.lecturer}</p>
            </div>
            <div className="lectslctd__instanddept">
              <div>
                <label htmlFor="lectslctd__lecturerInstitution">
                  Institution
                </label>
                {formData.institution}
              </div>
              <div>
                <label htmlFor="lectslctd__lecturerDepartment">
                  Department
                </label>
                {formData.department}
              </div>
            </div>
          </div>
        </div>
        <div className="recreqsum_btns--div">
          <button
            className="recreqsum__btns--submit"
            onClick={toggleSetIsRecReqSubmissionSuccess}
          >
            Submit recommendation
          </button>
        </div>
      </div>

      {/* blackoverlay */}
      {/* blackoverlay for edit education div*/}
      <div
        className={`blackoverlay editprofileoverlay ${
          isRecReqSumOpen ? "visible" : ""
        }`}
        onClick={handleOverlayClick}
      ></div>

      {/* submission success */}
      <div
        className={`recreqsubmissionsuccess ${
          isRecReqSubmissionSuccess ? "active" : ""
        }`}
      >
        <div
          className="backbtn"
          onClick={() => {
            toggleIsRecReqSumOpen();
            toggleSetIsRecReqSubmissionSuccess();
          }}
        >
          <KeyboardArrowLeftRoundedIcon />
          Back
        </div>
        <div className="recreqsubmissionsuccess--sec">
          <h2 className="recreqsubmissionsuccess__header">
            Recommendation request successfully submitted
          </h2>
          <div className="recreqsubmissionsuccess__img">
            <img className="rocket" src="rocket.png" alt="" />
          </div>
          <Link to={"/home-student"} className=" no-underline">
            <button className="backtohome">
              Back to Home
              <EastRoundedIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Createrecommedationrequests;
