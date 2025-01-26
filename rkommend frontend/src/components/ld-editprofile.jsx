import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css files/sd-home.css";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftOutlined";
import "../css files/viewreq.css";
import { fetchMockData } from "../mockData";
import { EastRounded } from "@mui/icons-material";
import { AddPhotoAlternateRounded } from "@mui/icons-material";

const Ldeditprofile = ({ className }) => {
  const [user, setUser] = useState(null);

  //fetchMockData
  useEffect(() => {
    fetchMockData().then((data) => {
      setUser(data); // Store fetched data in state
    });
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
                  <select name="title" id="title">
                    <option value="prof">Prof</option>
                  </select>{" "}
                </div>

                <div>
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder={user && user.student.name}
                  />
                </div>
              </div>

              <div className="editprofiledetails__form--input">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" id="lastname" />
              </div>

              <div className="editprofiledetails__form--input">
                <label htmlFor="phonenumber">Phone number</label>
                <input type="text" name="phonenumber" id="phonenumber" />
              </div>

              <div className="editprofiledetails__form--input">
                <label htmlFor="email">Email address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder={user && user.student.email}
                />
              </div>

              <div className="editprofiledetails__form--input">
                <label htmlFor="instituiton">Institution</label>
                <input
                  type="text"
                  name="institution"
                  id="institution"
                  placeholder={user && user.student.institution}
                />
              </div>

              <div className="editprofiledetails__form--input">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  placeholder={user && user.student.department}
                />
              </div>
            </div>
            <div className="editprofiledetails__btns--div ldeditprofiledetails__btns--div ">
              <button className="editprofiledetails__btns--save">
                Save changes
              </button>
              <button className="editprofiledetails__btns--discard">
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
