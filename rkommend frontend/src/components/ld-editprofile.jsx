import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css files/sd-home.css";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftOutlined";
import "../css files/viewreq.css";
import { fetchMockData } from "../mockData";
import { EastRounded } from "@mui/icons-material";
import { AddPhotoAlternateRounded } from "@mui/icons-material";

const Ldeditprofile = ({ className, close }) => {
  const [lecturers, setLecturers] = useState([]); // State to store fetched data

  const [title, setTitle] = useState(lecturers?.data?.title || "");
  const [firstName, setFirstName] = useState(lecturers?.data?.firstName || "");
  const [lastName, setLastName] = useState(lecturers?.data?.lastName || "");
  const [email, setEmail] = useState(lecturers?.data?.email || "");
  const [phone, setPhone] = useState(lecturers?.data?.phone || "");
  const [department, setDepartment] = useState(
    lecturers?.data?.department || ""
  );
  const [institutionId, setInstitutionId] = useState(
    lecturers?.data?.institution || ""
  );

  //  Handle form submission (save changes)
  const handleSaveChanges = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/lecturers/me`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            firstName,
            lastName,
            email,
            phone,
            department,
            institutionId,
            isAvailable: true,
          }),
        }
      );

      if (response.ok) {
        // Handle success (e.g., notify user, close form, etc.)
        console.log("Profile updated successfully");
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error("Error updating profile:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred while updating the profile:", error);
    }
  };

  //fetchMockData
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lecturerId = localStorage.getItem("lecturerId");

        if (!lecturerId) {
          console.error("No lecturer ID found in localStorage");
          return;
        }

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/lecturers/${lecturerId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await response.json();
        setLecturers(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        {/* editprofiledetails */}
        <div className={`${className} `}>
          <div className="editprofiledetails--sec">
            <div className="editprofiledetails__header-rect">
              EDIT PROFILE DETAILS
            </div>
            <div className="editprofiledetails__photo">
              Display Photo
              <div className="editprofiledetails__photo--imgdiv">
                <div className="editprofiledetails__photo--img"></div>
                <button className="changephoto">
                  <AddPhotoAlternateRounded />
                  Change photo
                </button>
              </div>
            </div>

            <div className="editprofiledetails__form">
              <div className="editprofiledetails__titleandfirstname">
                <div>
                  <label htmlFor="title">Title</label>
                  <select
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={lecturers?.data?.title}
                  >
                    <option value="prof">Prof</option>
                    <option value="dr">Dr</option>
                    <option value="mr">Mr</option>
                    <option value="ms">Ms</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    id="firstname"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={lecturers?.data?.firstName}
                  />
                </div>
              </div>

              <div className="editprofiledetails__form--input">
                <label htmlFor="lastname">Lastname</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={lecturers?.data?.lastName}
                />
              </div>

              <div className="editprofiledetails__form--input">
                <label htmlFor="phonenumber">Phone number</label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={lecturers?.data?.phone}
                />
              </div>

              <div className="editprofiledetails__form--input">
                <label htmlFor="email">Email address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lecturers?.data?.email}
                />
              </div>

              <div className="editprofiledetails__form--input">
                <label htmlFor="instituiton">Institution</label>
                <input
                  type="text"
                  name="institution"
                  id="institution"
                  value={institutionId}
                  onChange={(e) => setInstitutionId(e.target.value)}
                />
              </div>

              <div className="editprofiledetails__form--input">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder={lecturers?.data?.department}
                />
              </div>
            </div>

            <div className="editprofiledetails__btns--div ldeditprofiledetails__btns--div ">
              <button
                className="editprofiledetails__btns--save"
                onClick={handleSaveChanges}
              >
                Save changes
              </button>
              <button
                className="editprofiledetails__btns--discard"
                onClick={close}
              >
                Discard changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ldeditprofile;
