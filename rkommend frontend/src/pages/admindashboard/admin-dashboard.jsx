import React, { useState, useEffect } from "react";
import {
  FlashlightOffRounded,
  LogoutRounded,
  SelectAllTwoTone,
} from "@mui/icons-material";
import "../../css files/admindashboard.css";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { fetchAdminMockData } from "../../adminMockData";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import Addinstitutionsidemenu from "../../components/admin-addinstitution";
import SidemenuAdmin from "../../components/admin-sidemenu";
import Adminheader from "../../components/adminheader";
import { useAuth } from "../../hooks/use-auth";
import { useManyLecturer } from "../../hooks/use-many-lecturer";
import { useManyInstitution } from "../../hooks/use-many-institution";

const Admindashboard = () => {
  const { getAuth } = useAuth(); // current user
  const { manyLecturerError, manyLecturerLoading, manyLecturerResponse } =
    useManyLecturer();
  const {
    fetchManyInstitutionError,
    fetchManyInstitutionLoading,
    fetchManyInstitutionResponse,
  } = useManyInstitution();
  const [currentDate, setCurrentDate] = useState("");
  const [user, setUser] = useState("");
  const [lecturers, setLecturers] = useState("");
  const [institutions, setInstitutions] = useState("");
  const [students, setStudents] = useState("");
  const [page, setPage] = useState("overview");
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isBlackOverlayVisible, setIsBlackOverlayVisible] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isAddInstitutionOpen, setIsAddInstitutionOpen] = useState(false);
  const [selectedInstitutionId, setSelectedInstitutionId] = useState(null);
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const [selectedLecturerId, setSelectedLecturerId] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [availability, setAvailability] = useState(true);

  // toggle availability
  const toggleAvailability = () => {
    setAvailability(!availability);
  };

  const handleSelectedRequest = (row) => {
    setSelectedRequest(row);
  };

  const handleSelectedInstitution = (uni) => {
    setSelectedRequest(uni);
    setSelectedInstitutionId(uni.id);
    setSelectedInstitution(uni);
  };

  const handleSelectedLecturer = (lect) => {
    setSelectedLecturer(lect);
    setSelectedLecturerId(lect.id);
  };

  const handleSelectedStudent = (student) => {
    setSelectedStudent(student);
    setSelectedStudentId(student.id);
  };

  const toggleSortByOpen = () => {
    setIsSortByOpen(!isSortByOpen);
  };

  const changePage = (pageName) => {
    setPage(pageName);
  };

  // const toggleBlackOverlayVisible = () => {
  //   setIsBlackOverlayVisible(!isBlackOverlayVisible);
  //   setIsSideMenuOpen(false);
  //   toggleAddInstitutionOpen(false);
  // };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const toggleAddInstitutionOpen = () => {
    setIsAddInstitutionOpen(!isAddInstitutionOpen);
    setIsBlackOverlayVisible(!isBlackOverlayVisible);
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lecturersResponse, institutionsResponse, studentsResponse] =
          await Promise.all([
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/lecturers`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }),
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/institutions`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }),
            fetch(`${import.meta.env.VITE_API_BASE_URL}/api/students/`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }),
          ]);

        const lecturersData = await lecturersResponse.json();
        const institutionsData = await institutionsResponse.json();
        const studentsData = await studentsResponse.json();

        setLecturers(lecturersData);
        setInstitutions(institutionsData);
        setStudents(studentsData);

        console.log("Lecturers Data: ", lecturersData);
        console.log("Institutions Data: ", institutionsData);
        console.log("Students Data:", studentsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // fetchAdminMockData
  // useEffect(() => {
  //   fetchAdminMockData().then((data) => {
  //     setUser(data);
  //     // console.log(data);
  //   });
  // }, []);

  return (
    <>
      <div>
        <Adminheader />
        <div
          onClick={() => {
            setIsBlackOverlayVisible(false);
            setIsSideMenuOpen(false);
            setIsAddInstitutionOpen(false);
          }}
          className={`adminblackoverlay ${
            isBlackOverlayVisible ? "adminblackoverlay__visible" : ""
          }`}
        ></div>
        <SidemenuAdmin
          className={`side__menu--admin ${isSideMenuOpen ? "open" : ""}`}
          selectedRequest={selectedRequest}
          close={() => {
            setIsSideMenuOpen(false);
            setIsBlackOverlayVisible(false);
          }}
        />

        <Addinstitutionsidemenu
          className2={`side__menu--institution ${
            isAddInstitutionOpen ? "open" : ""
          }`}
          close={() => {
            setIsAddInstitutionOpen(false);
            setIsBlackOverlayVisible(false);
          }}
        />
        <div className="admin-main-body">
          <div className="admin-navbar__container">
            <div className="admin-navbar">
              <div
                className={`navbar__overview ${
                  page === "overview" ? "activebar" : ""
                }`}
                onClick={() => changePage("overview")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill={page === "overview" ? "#ffffff" : "#9b9b9b"}
                >
                  <path d="M160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H600q-17 0-28.5-11.5T560-160v-200q0-17-11.5-28.5T520-400h-80q-17 0-28.5 11.5T400-360v200q0 17-11.5 28.5T360-120H240q-33 0-56.5-23.5T160-200Z" />
                </svg>
                Overview
              </div>
              <div
                className={`navbar__institution ${
                  page === "institution" ? "activebar" : ""
                }`}
                onClick={() => changePage("institution")}
              >
                <AccountBalanceRoundedIcon
                  style={{ width: "20px", height: "20px" }}
                />
                Institutions
              </div>
              <div
                className={`navbar__lecturers ${
                  page === "lecturers" ? "activebar" : ""
                }`}
                onClick={() => changePage("lecturers")}
              >
                <LocalLibraryRoundedIcon
                  style={{ width: "20px", height: "20px" }}
                />
                Lecturers
              </div>
              <div
                className={`navbar__students ${
                  page === "students" ? "activebar" : ""
                }`}
                onClick={() => changePage("students")}
              >
                <AccountCircleRoundedIcon
                  style={{ width: "20px", height: "20px" }}
                />
                Students
              </div>
            </div>
            <div className="ld-first-btm admin-first-btm">
              <p className="currentDate">{currentDate}</p>

              <div className="logout">
                <LogoutRounded />
                Logout
              </div>
            </div>
          </div>

          <div className="content">
            {page === "overview" && (
              <>
                {" "}
                <div className="main-content__overview">
                  <div className="overview--header">OVERVIEW</div>
                  <div className="overview-numbers--container">
                    <div>
                      <div className="overview-numbers universities">
                        <div className="overview-numbers--header">
                          UNIVERSITIES
                        </div>
                        <div className="overview-numbers--counter">
                          {institutions && institutions.data.length}
                        </div>
                      </div>

                      <div className="overview-numbers lecturers">
                        <div className="overview-numbers--header">
                          LECTURERS
                        </div>
                        <div className="overview-numbers--counter">
                          {" "}
                          {lecturers && lecturers.data.length}
                        </div>
                      </div>

                      <div className="overview-numbers students">
                        <div className="overview-numbers--header">STUDENTS</div>
                        <div className="overview-numbers--counter">
                          {" "}
                          {students && students.data.length}{" "}
                        </div>
                      </div>
                      <div className="overview-numbers created-requests">
                        <div className="overview-numbers--header">
                          CREATED REQUESTS ~
                        </div>
                        <div className="overview-numbers--counter">
                          {" "}
                          {/* {user && user.createdRequests.length} */}
                        </div>
                      </div>
                      <div className="overview-numbers completed-requests">
                        <div className="overview-numbers--header">
                          COMPLETED REQUESTS
                        </div>
                        <div className="overview-numbers--counter">
                          {" "}
                          {/* {user && user.completedRequests.length} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-content__activerequests">
                  <div className="activerequests__header--container">
                    <div className="activerequests__header--title">
                      ACTIVE REQUESTS
                    </div>
                    <div>
                      <div className="activerequests__header--sortby--container">
                        <div
                          className="activerequests__header--sortby"
                          onClick={toggleSortByOpen}
                        >
                          <SortRoundedIcon></SortRoundedIcon> Sort by
                        </div>
                        <div
                          className={`activerequests__header--sortby--menu ${
                            isSortByOpen ? "visible" : ""
                          }`}
                        >
                          <div className="sortby--menu--container">
                            <div className="sortby--menu--header">SORT BY</div>
                            <div>
                              {" "}
                              <input
                                type="radio"
                                name="sortby"
                                id="student-name"
                              />
                              <label htmlFor="student-name">Student name</label>
                            </div>
                            <div>
                              {" "}
                              <input
                                type="radio"
                                name="sortby"
                                id="lecturer-name"
                              />
                              <label htmlFor="lecturer-name">
                                Lecturer name
                              </label>
                            </div>
                            <div>
                              {" "}
                              <input
                                type="radio"
                                name="sortby"
                                id="date-created"
                              />
                              <label htmlFor="date-created">Date created</label>
                            </div>
                            <div>
                              {" "}
                              <input type="radio" name="sortby" id="deadline" />
                              <label htmlFor="deadline">Deadline</label>
                            </div>
                          </div>
                          <div className="order--menu--container">
                            <div className="order--menu--header">ORDER</div>
                            <div className="ascanddesc">
                              <div>
                                {" "}
                                <input
                                  type="radio"
                                  name="order"
                                  id="descending"
                                />
                                <label htmlFor="descending">Descending</label>
                              </div>
                              <div>
                                {" "}
                                <input
                                  type="radio"
                                  name="order"
                                  id="ascending"
                                />
                                <label htmlFor="ascending">Ascending</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="activerequests__header--search">
                        {" "}
                        <SearchRoundedIcon />
                        <input
                          type="text"
                          className="activerequests__header--searchinp"
                          name="activerequests__header--searchinp"
                          id="activerequests__header--searchinp"
                          placeholder="Search lecturer or student"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="activerequests__table--container">
                    <table className="activerequests__table">
                      <thead className="activerequests__table--head">
                        <tr>
                          <th></th>
                          <th>STUDENT</th>
                          <th>LECTURER</th>
                          <th>DATE CREATED</th>
                          <th>DATE ACCEPTED</th>
                          <th>DEADLINE</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="activerequests__table--body">
                        {user &&
                          user.activeRequests.map((row) => (
                            <tr
                              key={row.id}
                              onClick={() => {
                                handleSelectedRequest(row);
                                setIsBlackOverlayVisible(true);
                                toggleSideMenu();
                              }}
                            >
                              <td>{row.id}</td>
                              <td>{row.student}</td>
                              <td>{row.lecturer}</td>
                              <td>{row.date}</td>
                              <td>{row.date}</td>
                              <td>{row.date}</td>
                              <td>
                                <KeyboardArrowRightRounded></KeyboardArrowRightRounded>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>{" "}
              </>
            )}
            {page === "institution" && (
              <>
                {" "}
                <div className="main-content__institution">
                  <div className="institution--header">
                    <h2>Institutions</h2>
                    <button
                      className="institution--header--btn"
                      onClick={toggleAddInstitutionOpen}
                    >
                      Add Institution +
                    </button>
                  </div>
                </div>
                <div className="institutions__container">
                  <div className="main-content__activerequests">
                    <div className="activerequests__header--container">
                      <div className="activerequests__header--title institutions__header--title">
                        Institutions
                      </div>
                      <div>
                        <div className="activerequests__header--sortby--container">
                          <div
                            className="activerequests__header--sortby"
                            onClick={toggleSortByOpen}
                          >
                            <SortRoundedIcon></SortRoundedIcon> Sort by
                          </div>
                          <div
                            className={`activerequests__header--sortby--menu ${
                              isSortByOpen ? "visible" : ""
                            }`}
                          >
                            <div className="sortby--menu--container">
                              <div className="sortby--menu--header">
                                SORT BY
                              </div>
                              <div>
                                {" "}
                                <input
                                  type="radio"
                                  name="sortby"
                                  id="institution-name"
                                />
                                <label htmlFor="institution-name">
                                  Institution name
                                </label>
                              </div>
                              <div>
                                {" "}
                                <input
                                  type="radio"
                                  name="sortby"
                                  id="dept-num"
                                />
                                <label htmlFor="dept-num">
                                  Number of departments
                                </label>
                              </div>
                            </div>
                            <div className="order--menu--container">
                              <div className="order--menu--header">ORDER</div>
                              <div className="ascanddesc">
                                <div>
                                  {" "}
                                  <input
                                    type="radio"
                                    name="order"
                                    id="descending"
                                  />
                                  <label htmlFor="descending">Descending</label>
                                </div>
                                <div>
                                  {" "}
                                  <input
                                    type="radio"
                                    name="order"
                                    id="ascending"
                                  />
                                  <label htmlFor="ascending">Ascending</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="activerequests__header--search">
                          {" "}
                          <SearchRoundedIcon />
                          <input
                            type="text"
                            className="activerequests__header--searchinp"
                            name="activerequests__header--searchinp"
                            id="activerequests__header--searchinp"
                            placeholder="Search institutions"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="activerequests__table--container institutions__table--container">
                      <table className="activerequests__table institutions__table">
                        <thead className="activerequests__table--head">
                          <tr>
                            <th></th>
                            <th>Institution</th>
                            <th>Departments</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="activerequests__table--body">
                          {institutions &&
                            institutions.data.map((uni, index) => (
                              <tr
                                key={uni.id}
                                onClick={() => {
                                  handleSelectedInstitution(uni);
                                  toggleBlackOverlayVisible();
                                }}
                                style={{
                                  backgroundColor:
                                    selectedInstitutionId === uni.id
                                      ? "#DEEAF7"
                                      : "transparent",
                                }}
                              >
                                <td>{index + 1}</td>
                                <td>{uni.name}</td>
                                <td>{uni.departments.length}</td>
                                <td>
                                  <KeyboardArrowRightRounded></KeyboardArrowRightRounded>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>{" "}
                  <div className="selectedInstitution__display">
                    <div
                      className="selectedInstitution__display--placeholder--container"
                      style={
                        selectedInstitutionId === null ? { height: "100%" } : {}
                      }
                    >
                      {selectedInstitutionId === null &&
                        "Selected lecturer’s details will show up here"}

                      {selectedInstitutionId && (
                        <div className="fullinstdetails">
                          <div
                            className="selectedInstitution__display--close"
                            onClick={() => setSelectedInstitutionId(null)}
                          >
                            <KeyboardArrowLeftRoundedIcon></KeyboardArrowLeftRoundedIcon>{" "}
                            Close
                          </div>
                          <div className="selectedInstitution__display--unideets">
                            <div className="unideets__imgandname">
                              <div className="imgdiv"></div>
                              <div className="namediv">
                                {selectedInstitution.name}
                              </div>
                            </div>

                            <div className="unideets__texts">
                              <div className="unideets__stateandcountry">
                                <div className="statediv grey">
                                  <div className="state">State</div>
                                  <p>{selectedInstitution.state}</p>
                                </div>
                                <div className="countrydiv grey">
                                  <div className="country">Country</div>
                                  <p> {selectedInstitution.country}</p>
                                </div>
                              </div>
                              <div className="phoneNumber grey">
                                <div> Official phone number</div>
                                <p>{selectedInstitution.phone}</p>
                              </div>

                              <div className="offemail grey">
                                <div>Official email</div>
                                <p> {selectedInstitution.email}</p>
                              </div>
                            </div>
                          </div>
                          <div className="selectedInstitution__display--deptandlect">
                            <div className="grey">
                              <div className="department">Departments</div>
                              <p>{selectedInstitution.departments.length} </p>
                            </div>

                            <div>
                              <div className="lecturers">Lecturers</div>
                              {/* {selectedInstitution.departments.length} */}
                            </div>
                          </div>
                          <div className="selectedInstitution__display--deptlist">
                            <div className="heading">DEPARTMENTS</div>

                            <div className="deptcards">
                              {selectedInstitution &&
                                selectedInstitution.departments.map(
                                  (depts, index) => (
                                    <div
                                      className="deptcard grey"
                                      key={depts.id}
                                      onClick={() => {
                                        handleSelectedInstitution(uni);
                                        toggleBlackOverlayVisible();
                                      }}
                                    >
                                      <div className="deptcard__texts">
                                        <p>{depts}</p>X Lecturers
                                      </div>

                                      <div>
                                        <KeyboardArrowRightRounded></KeyboardArrowRightRounded>
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
            {page === "lecturers" && (
              <>
                {" "}
                <div className="institutions__container">
                  <div className="main-content__activerequests">
                    <div className="activerequests__header--container">
                      <div className="activerequests__header--title institutions__header--title">
                        Lecturers
                      </div>
                      <div>
                        <div className="activerequests__header--sortby--container">
                          <div
                            className="activerequests__header--sortby"
                            onClick={toggleSortByOpen}
                          >
                            <SortRoundedIcon></SortRoundedIcon> Sort by
                          </div>
                          <div
                            className={`activerequests__header--sortby--menu ${
                              isSortByOpen ? "visible" : ""
                            }`}
                          >
                            <div className="sortby--menu--container">
                              <div className="sortby--menu--header">
                                SORT BY
                              </div>
                              <div>
                                {" "}
                                <input
                                  type="radio"
                                  name="sortby"
                                  id="institution-name"
                                />
                                <label htmlFor="institution-name">
                                  Institution name
                                </label>
                              </div>
                              <div>
                                {" "}
                                <input
                                  type="radio"
                                  name="sortby"
                                  id="dept-num"
                                />
                                <label htmlFor="dept-num">
                                  Number of departments
                                </label>
                              </div>
                            </div>
                            <div className="order--menu--container">
                              <div className="order--menu--header">ORDER</div>
                              <div className="ascanddesc">
                                <div>
                                  {" "}
                                  <input
                                    type="radio"
                                    name="order"
                                    id="descending"
                                  />
                                  <label htmlFor="descending">Descending</label>
                                </div>
                                <div>
                                  {" "}
                                  <input
                                    type="radio"
                                    name="order"
                                    id="ascending"
                                  />
                                  <label htmlFor="ascending">Ascending</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="activerequests__header--search">
                          {" "}
                          <SearchRoundedIcon />
                          <input
                            type="text"
                            className="activerequests__header--searchinp"
                            name="activerequests__header--searchinp"
                            id="activerequests__header--searchinp"
                            placeholder="Search lecturer or student"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="activerequests__table--container institutions__table--container">
                      <table className="activerequests__table institutions__table">
                        <thead className="activerequests__table--head">
                          <tr>
                            <th></th>
                            <th>Name</th>
                            <th>University</th>
                            <th>Department</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="activerequests__table--body ">
                          {lecturers &&
                            lecturers.data.map((lect, index) => (
                              <tr
                                className="lectreq__table--body"
                                key={lect.id}
                                onClick={() => {
                                  handleSelectedLecturer(lect);
                                  toggleBlackOverlayVisible();
                                }}
                                style={{
                                  backgroundColor:
                                    selectedLecturerId === lect.id
                                      ? "#DEEAF7"
                                      : "transparent",
                                }}
                              >
                                <td>{index + 1}</td>
                                <td>
                                  {" "}
                                  {`${lect && lect.title}  ${
                                    lect && lect.firstName
                                  } ${lect && lect.lastName}`}
                                </td>
                                <td>{lect.rank}</td>
                                <td>{lect.department}</td>
                                <td>
                                  <KeyboardArrowRightRounded></KeyboardArrowRightRounded>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>{" "}
                  <div className="selectedInstitution__display">
                    <div
                      className="selectedInstitution__display--placeholder--container"
                      style={
                        selectedLecturerId === null ? { height: "100%" } : {}
                      }
                    >
                      {selectedLecturerId === null &&
                        "Selected lecturer’s details will show up here"}

                      {selectedLecturerId && (
                        <div className="fullinstdetails fulllectdetails">
                          <div
                            className="selectedInstitution__display--close"
                            onClick={() => setSelectedLecturerId(null)}
                          >
                            <KeyboardArrowLeftRoundedIcon></KeyboardArrowLeftRoundedIcon>{" "}
                            Close
                          </div>
                          <div className="ldprofile__heading">PROFILE</div>

                          <div className="profile-div lectprofile-div">
                            <div className="profilediv__details--div">
                              <div className="profilediv__details--biodata">
                                <div className="biodata--img"></div>
                                <div className="biodata--name">
                                  {" "}
                                  {console.log(selectedLecturer)}
                                  {`${
                                    selectedLecturer && selectedLecturer.title
                                  }  ${
                                    selectedLecturer &&
                                    selectedLecturer.firstName
                                  } ${
                                    selectedLecturer &&
                                    selectedLecturer.lastName
                                  }`}{" "}
                                </div>
                              </div>
                              <div
                                className="profilediv__details--availability"
                                style={{
                                  backgroundColor: selectedLecturer.isAvailable
                                    ? "#1db9544d"
                                    : "#F6F6F64d",
                                  border: selectedLecturer.isAvailable
                                    ? "1px solid #1db954"
                                    : " 1px solid #e7e7e7",
                                }}
                              >
                                <div
                                  className="availability--indicator"
                                  style={{
                                    backgroundColor: availability
                                      ? "#1db954"
                                      : "#717171",
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
                          </div>
                          <div className="unideets__texts">
                            <div className="phoneNumber grey">
                              <div> Official phone number</div>
                              <p>{selectedLecturer.phone}</p>
                            </div>

                            <div className="offemail grey">
                              <div>Official email</div>
                              <p> {selectedLecturer.email}</p>
                            </div>

                            <div className="offemail grey">
                              <div>Institution</div>
                              <p> {selectedLecturer.email}</p>
                            </div>

                            <div className="offemail grey">
                              <div>Department</div>
                              <p> {selectedLecturer.department}</p>
                            </div>
                          </div>

                          <div className="selectedInstitution__display--deptlist selectedlecturer__display--deptlist">
                            <div className="heading"> RECOMMENDATIONS</div>

                            <div className="deptcards reqcards">
                              <div>
                                <div className="deptcard grey reqcard blue">
                                  <div className="deptcard__texts">
                                    Completed
                                    <p>50</p>
                                  </div>
                                </div>
                                <div className="deptcard grey reqcard green">
                                  <div className="deptcard__texts">
                                    In progress
                                    <p>5</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="deptcard grey reqcard yellow">
                                  <div className="deptcard__texts">
                                    Requests
                                    <p>50</p>
                                  </div>
                                </div>
                                <div className="deptcard grey reqcard black">
                                  <div className="deptcard__texts">
                                    Archived
                                    <p>5</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
            {page === "students" && (
              <>
                {" "}
                <div className="institutions__container">
                  <div className="main-content__activerequests">
                    <div className="activerequests__header--container">
                      <div className="activerequests__header--title institutions__header--title">
                        Students
                      </div>
                      <div>
                        <div className="activerequests__header--sortby--container">
                          <div
                            className="activerequests__header--sortby"
                            onClick={toggleSortByOpen}
                          >
                            <SortRoundedIcon></SortRoundedIcon> Sort by
                          </div>
                          <div
                            className={`activerequests__header--sortby--menu ${
                              isSortByOpen ? "visible" : ""
                            }`}
                          >
                            <div className="sortby--menu--container">
                              <div className="sortby--menu--header">
                                SORT BY
                              </div>
                              <div>
                                {" "}
                                <input
                                  type="radio"
                                  name="sortby"
                                  id="institution-name"
                                />
                                <label htmlFor="institution-name">
                                  Institution name
                                </label>
                              </div>
                              <div>
                                {" "}
                                <input
                                  type="radio"
                                  name="sortby"
                                  id="dept-num"
                                />
                                <label htmlFor="dept-num">
                                  Number of departments
                                </label>
                              </div>
                            </div>
                            <div className="order--menu--container">
                              <div className="order--menu--header">ORDER</div>
                              <div className="ascanddesc">
                                <div>
                                  {" "}
                                  <input
                                    type="radio"
                                    name="order"
                                    id="descending"
                                  />
                                  <label htmlFor="descending">Descending</label>
                                </div>
                                <div>
                                  {" "}
                                  <input
                                    type="radio"
                                    name="order"
                                    id="ascending"
                                  />
                                  <label htmlFor="ascending">Ascending</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="activerequests__header--search">
                          {" "}
                          <SearchRoundedIcon />
                          <input
                            type="text"
                            className="activerequests__header--searchinp"
                            name="activerequests__header--searchinp"
                            id="activerequests__header--searchinp"
                            placeholder="Search lecturer or student"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="activerequests__table--container institutions__table--container">
                      <table className="activerequests__table institutions__table">
                        <thead className="activerequests__table--head">
                          <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Recommendations</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="activerequests__table--body">
                          {students &&
                            students.data.map((student, index) => (
                              <tr
                                key={student.id}
                                onClick={() => {
                                  handleSelectedStudent(student);
                                  toggleBlackOverlayVisible();
                                }}
                                style={{
                                  backgroundColor:
                                    selectedStudentId === student.id
                                      ? "#DEEAF7"
                                      : "transparent",
                                }}
                              >
                                <td>{index + 1}</td>

                                <td>
                                  {`${student && student.title}  ${
                                    student && student.firstName
                                  } ${student && student.lastName}`}
                                </td>
                                <td></td>
                                <td>
                                  <KeyboardArrowRightRounded></KeyboardArrowRightRounded>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>{" "}
                  <div className="selectedInstitution__display">
                    <div
                      className="selectedInstitution__display--placeholder--container"
                      style={
                        selectedStudentId === null ? { height: "100%" } : {}
                      }
                    >
                      {selectedStudentId === null &&
                        "Selected lecturer’s details will show up here"}

                      {selectedStudentId && (
                        <div className="fullinstdetails fulllectdetails">
                          <div
                            className="selectedInstitution__display--close"
                            onClick={() => setSelectedLecturerId(null)}
                          >
                            <KeyboardArrowLeftRoundedIcon></KeyboardArrowLeftRoundedIcon>{" "}
                            Close
                          </div>
                          <div className="ldprofile__heading">PROFILE</div>

                          <div className="profile-div lectprofile-div">
                            <div className="profilediv__details--div">
                              <div className="profilediv__details--biodata">
                                <div className="biodata--img"></div>
                                <div className="biodata--name">
                                  {" "}
                                  {console.log(selectedStudent)}
                                  {`${
                                    selectedStudent && selectedStudent.title
                                  }  ${
                                    selectedStudent && selectedStudent.firstName
                                  } ${
                                    selectedStudent && selectedStudent.lastName
                                  }`}{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="unideets__texts">
                            <div className="offemail grey">
                              <div>Official email</div>
                              <p> {selectedStudent.email}</p>
                            </div>
                            <div className="phoneNumber grey">
                              <div> Official phone number</div>
                              <p>{selectedStudent.phone}</p>
                            </div>
                          </div>

                          <div className="selectedInstitution__display--deptlist selectedlecturer__display--deptlist">
                            <div className="heading"> RECOMMENDATIONS</div>

                            <div className="deptcards reqcards">
                              <div>
                                <div className="deptcard grey reqcard blue">
                                  <div className="deptcard__texts">
                                    Completed
                                    <p>50</p>
                                  </div>
                                </div>
                                <div className="deptcard grey reqcard green">
                                  <div className="deptcard__texts">
                                    In progress
                                    <p>5</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="deptcard grey reqcard yellow">
                                  <div className="deptcard__texts">
                                    Requests
                                    <p>50</p>
                                  </div>
                                </div>
                                <div className="deptcard grey reqcard black">
                                  <div className="deptcard__texts">
                                    Archived
                                    <p>5</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindashboard;
