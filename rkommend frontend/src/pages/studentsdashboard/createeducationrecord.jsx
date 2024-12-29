import React from "react";
import SDheader from "../../components/sdheader";
import "../../css files/createeducationalrecord.css";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { Link } from "react-router-dom";

const createeducationrecord = () => {
  return (
    <>
      <SDheader />
      <div className="cer-main-body">
        <div className="cer__picturediv">
          <img src="calendarvector.png" alt="" className="cer__picture--img" />
        </div>
        <div className="cer__right">
          <Link to="/home-student" className="no-underline">
            <div className="cer__right--backbtn">
              <KeyboardArrowLeftOutlinedIcon />
              Back
            </div>
          </Link>

          <div className="cer__right--formdiv">
            <div className="cer__right--form-header">
              Create education record
            </div>
            <form>
              <div className="cer__right--instanddept">
                <div>
                  <label htmlFor="institution">Institution</label>
                  <select
                    required
                    name="institution"
                    id="institution"
                    placeholder="Select your institution"
                  ></select>
                </div>

                <div>
                  <label htmlFor="department">Department</label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    placeholder="Enter your department"
                  />
                </div>
              </div>
              <div className="cer__right--matricandgrad">
                <div>
                  <label htmlFor="matric">Matriculation number</label>
                  <input
                    required
                    type="text"
                    name="matric"
                    id="matric"
                    placeholder="Select your matriculation number"
                  />
                </div>

                <div>
                  <label htmlFor="gradyear">Year of graduation</label>
                  <input
                    required
                    type="text"
                    name="gradyear"
                    id="gradyear"
                    placeholder="Enter your year of graduation"
                  />
                </div>
              </div>

              <div className="transcriptdiv">
                <label htmlFor="transcript">Upload transcript</label>
                <input
                  type="file"
                  accept="image/*"
                  name="transcript"
                  id="transcript"
                />
              </div>

              <div className="extracurriculardiv">
                <label htmlFor="extracurricular">
                  Extracurricular achievements/Political portfolio
                </label>
                <input
                  name="extracurricular"
                  id="extracurricular"
                  placeholder="Describe your extracurricular achievements or political involvements"
                ></input>
              </div>
            </form>

            <button className="cer__btn">Done</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default createeducationrecord;
