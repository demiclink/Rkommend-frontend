import React, { useState, useEffect } from "react";
import { FlashlightOffRounded, LogoutRounded } from "@mui/icons-material";
import "../../css files/admindashboard.css";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import { fetchAdminMockData } from "../../adminMockData";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import Addinstitutionsidemenu from "../../components/admin-addinstitution";
import SidemenuAdmin from "../../components/admin-sidemenu";
import Adminheader from "../../components/adminheader";
import { useAuth } from "../../hooks/use-auth";
import { useManyLecturer } from "../../hooks/use-many-lecturer";
import { useManyInstitution } from "../../hooks/use-many-institution";

const Admindashboard = () => {
  const { getAuth } = useAuth(); // current user
  const { 
    manyLecturerError, 
    manyLecturerLoading, 
    manyLecturerResponse 
  } = useManyLecturer()
  const {
    fetchManyInstitutionError,
    fetchManyInstitutionLoading,
    fetchManyInstitutionResponse
  } = useManyInstitution()
  const [currentDate, setCurrentDate] = useState("");
  const [page, setPage] = useState("overview");
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isBlackOverlayVisible, setIsBlackOverlayVisible] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isAddInstitutionOpen, setIsAddInstitutionOpen] = useState(false);

  const handleSelectedRequest = (row) => {
    setSelectedRequest(row);
  };

  const handleSelectedInstitution = (uni) => {
    setSelectedRequest(uni);
  };

  const toggleSortByOpen = () => {
    setIsSortByOpen(!isSortByOpen);
  };

  const changePage = (pageName) => {
    setPage(pageName);
  };

  const toggleBlackOverlayVisible = () => {
    setIsBlackOverlayVisible(!isBlackOverlayVisible);
    setIsSideMenuOpen(false);
    toggleAddInstitutionOpen(false);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
    setIsBlackOverlayVisible(!isBlackOverlayVisible);
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

  // Fetch data from API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://rkommend-server.onrender.com/api/lecturers",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           credentials: "include",
  //         }
  //       );
  //       const data = await response.json();
  //       setUser(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //fetchAdminMockData
  // useEffect(() => {
  //   fetchAdminMockData().then((data) => {
  //     setUser(data);
  //   });
  // }, []);
    
  return (
    <>
      <div>
        <Adminheader />
        <div
          onClick={toggleBlackOverlayVisible}
          className={`adminblackoverlay ${
            isBlackOverlayVisible ? "adminblackoverlay__visible" : ""
          }`}
        ></div>
        <SidemenuAdmin
          className={`side__menu--admin ${isSideMenuOpen ? "opened" : ""}`}
          // selectedRequest={selectedRequest}
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
                          {/* {console.log(user)} */}
                        </div>
                      </div>
                      <div className="overview-numbers departments">
                        <div className="overview-numbers--header">
                          DEPARTMENTS
                        </div>
                        <div className="overview-numbers--counter">
                          {" "}
                          {/* {user && user.departments.length} */}
                        </div>
                      </div>
                      <div className="overview-numbers lecturers">
                        <div className="overview-numbers--header">
                          LECTURERS
                        </div>
                        <div className="overview-numbers--counter">
                          {" "}
                          {/* {user && user.length} */}
                        </div>
                      </div>

                      <div className="overview-numbers students">
                        <div className="overview-numbers--header">STUDENTS</div>
                        <div className="overview-numbers--counter">
                          {" "}
                          {/* {user && user.students.length} */}
                        </div>
                      </div>
                      <div className="overview-numbers created-requests">
                        <div className="overview-numbers--header">
                          CREATED REQUESTS
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
                        {/* {user &&
                          user.activeRequests.map((row) => (
                            <tr
                              key={row.id}
                              onClick={() => {
                                handleSelectedRequest(row);
                                toggleBlackOverlayVisible();
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
                          ))} */}
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
                            <th>Institution</th>
                            <th>Departments</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="activerequests__table--body">
                          {/* {user &&
                            user.universities.map((uni) => (
                              <tr
                                key={uni.id}
                                onClick={() => {
                                  handleSelectedInstitution(uni);
                                  toggleBlackOverlayVisible();
                                }}
                              >
                                <td>{uni.id}</td>
                                <td>{uni.name}</td>
                                <td>{uni.rank}</td>
                                <td>
                                  <KeyboardArrowRightRounded></KeyboardArrowRightRounded>
                                </td>
                              </tr>
                            ))} */}
                        </tbody>
                      </table>
                    </div>
                  </div>{" "}
                  <div className="selectedInstitution__display">
                    <div className="selectedInstitution__display--placeholder--container">
                      Selected lecturer’s <br /> details will show up here
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
