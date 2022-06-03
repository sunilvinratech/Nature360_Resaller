import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import "./Registration.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useNavigate } from "react-router-dom";
const labelstylle = {
  fontSize: "13px",
};
const Registration = () => {
  const Navigate=useNavigate();
  return (
    <>
      <div className="Registration Login min-h-[80vh] sm:min-h-[85vh] relative">
        <div className="w-[550px] aspect-square shadow-2xl   bg-[#f7f6f7]  flex flex-col items-center justify-between rounded-sm">
          <h3 className="text-4xl text-violet-500">Registration</h3>
          <form className="w-full h-full flex flex-col gap-3 mt-7 ">
            <div className="flex w-full items-center justify-evenly">
              {/* First Place  */}
              <div>
                <InputLabel forhtml="user" required>
                  User
                </InputLabel>
                <TextField type="text" size="small" required id="user" />
              </div>
              <div>
                <InputLabel forhtml="email" required>
                  Email
                </InputLabel>
                <TextField type={"email"} size="small" required id="user" />
              </div>
            </div>
            {/* first place end  */}
            <div className="flex w-full items-center justify-evenly">
              {/* First Place  */}
              <div>
                <InputLabel forhtml="country" required>
                  Nationality
                </InputLabel>
                <Select
                  labelId="country"
                  id="country"
                  label="Country"
                  size="small"
                  sx={{ width: "225px" }}
                >
                  <MenuItem value="none">
                    <em>none</em>
                  </MenuItem>
                </Select>
              </div>
              <div>
                <InputLabel forhtml="country" required>
                  Country
                </InputLabel>
                <Select
                  labelId="country"
                  id="country"
                  label="Country"
                  size="small"
                  sx={{ width: "225px" }}
                >
                  <MenuItem>
                    <em>none</em>
                  </MenuItem>
                  <MenuItem>
                    <em>India</em>
                  </MenuItem>
                  <MenuItem>
                    <em>China</em>
                  </MenuItem>
                  <MenuItem>
                    <em>USA</em>
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div className="flex w-full items-center justify-evenly">
              <div>
                <InputLabel forhtml={"Date"} required>
                  Date of Birth
                </InputLabel>
                <TextField
                  type="date"
                  id="Date"
                  size="small"
                  style={{ width: "225px" }}
                />
              </div>
              <div>
                <InputLabel forhtml="country" required>
                  Gender
                </InputLabel>
                <Select
                  labelId="country"
                  id="country"
                  label="Country"
                  size="small"
                  sx={{ width: "225px" }}
                >
                  <MenuItem>
                    <em>none</em>
                  </MenuItem>
                  <MenuItem>
                    <em>Male</em>
                  </MenuItem>
                  <MenuItem>
                    <em>Female</em>
                  </MenuItem>
                  <MenuItem>
                    <em>Other</em>
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div>
              <div className="flex w-full items-center justify-evenly">
                <div>
                  <InputLabel forhtml={"name"} required>
                    Full Name
                  </InputLabel>
                  <TextField type="text" id="name" size="small" />
                </div>
                <div>
                  <InputLabel forhtml={"tel"} required>
                    Mobile No
                  </InputLabel>
                  <TextField type="tel" id="tel" size="small" />
                </div>
              </div>
              <div className="flex w-full items-center justify-evenly mt-4">
                <div>
                  <InputLabel id="textarea" required>
                    Address
                  </InputLabel>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={4}
                    placeholder="Minimum 3 rows"
                    style={{
                      width: 490,
                      padding:5,
                      background: "transparent",
                      border: "1px solid gray",
                      borderRadius: "3px",
                    }}
                  ></TextareaAutosize>
                </div>
              </div>
            </div>
            <button type="submit" className="btn1 self-center bg-violet-400">
              Submit
            </button>
          </form>
        </div>
        <button className="btn1 bg-amber-500 absolute right-3 top-3" onClick={()=>Navigate("/login")}>Login</button>
      </div>
    </>
  );
};

export default Registration;
