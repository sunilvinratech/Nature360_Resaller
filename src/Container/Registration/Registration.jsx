import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Registration.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const labelstylle = {
  fontSize: "13px",
};
const Registration = () => {
  const Navigate = useNavigate();
  const [RegFormState, setRegFormState] = useState({
    email: "",
    password: "",
    confirm_password: "",
    nationality: "",
    gender: "",
    dob: "",
    mobile_no: "",
    full_name: "",
    city: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("http://54.87.154.104:8000/register_customer/", RegFormState)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="Registration Login min-h-[80vh] sm:min-h-[85vh] relative">
        <div className="  flex flex-col items-center justify-between rounded-sm">
          <h3 className="text-4xl text-[#1976d2]">Sign Up</h3>
          <form
            className="w-full h-full flex flex-col gap-3 mt-7 "
            onSubmit={handleSubmit}
          >
            <div className="flex w-full items-center justify-evenly">
              {/* First Place  */}
              {/* <div>
                <InputLabel forhtml="user" required>
                  User ID
                </InputLabel>
                <TextField type="text" size="small" required id="user" sx={{marginInline:"10px"}} />
              </div> */}

              <div>
                <InputLabel forhtml="email" required>
                  Email
                </InputLabel>
                <TextField
                  type={"email"}
                  size="small"
                  required
                  id="user"
                  value={RegFormState.email}
                  onChange={(e) => {
                    setRegFormState({ ...RegFormState, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <InputLabel forhtml={"tel"} required>
                  Mobile No
                </InputLabel>
                <TextField
                  type="tel"
                  id="tel"
                  size="small"
                  required
                  sx={{ marginInline: "10px" }}
                  value={RegFormState.mobile_no}
                  onChange={(e) => {
                    setRegFormState({
                      ...RegFormState,
                      mobile_no: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-evenly">
              {/* First Place  */}
              <div>
                <InputLabel forhtml="password" required>
                  Password
                </InputLabel>
                <TextField
                  type="password"
                  size="small"
                  required
                  id="user"
                  value={RegFormState.password}
                  onChange={(e) => {
                    setRegFormState({
                      ...RegFormState,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <InputLabel forhtml="email" required>
                  Confirm password
                </InputLabel>
                <TextField
                  type={"password"}
                  size="small"
                  required
                  id="user"
                  value={RegFormState.confirm_password}
                  onChange={(e) => {
                    setRegFormState({
                      ...RegFormState,
                      confirm_password: e.target.value,
                    });
                  }}
                />
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
                  required
                  value={RegFormState.nationality}
                  onChange={(e) => {
                    setRegFormState({
                      ...RegFormState,
                      nationality: e.target.value,
                    });
                  }}
                >
                  <MenuItem value={"none"}>
                    <em>none</em>
                  </MenuItem>
                  <MenuItem value={"India"}>
                    <em>India</em>
                  </MenuItem>
                  <MenuItem value={"China"}>
                    <em>China</em>
                  </MenuItem>
                  <MenuItem value={"USA"}>
                    <em>USA</em>
                  </MenuItem>
                </Select>
              </div>
              <div>
                <InputLabel forhtml="country" required>
                  City
                </InputLabel>
                <Select
                  labelId="country"
                  id="country"
                  label="Country"
                  size="small"
                  sx={{ width: "225px" }}
                  value={RegFormState.city}
                  onChange={(e) => {
                    setRegFormState({ ...RegFormState, city: e.target.value });
                  }}
                >
                  <MenuItem value={"none"}>
                    <em>none</em>
                  </MenuItem>
                  <MenuItem value={"Lucknow"}>
                    <em>Lucknow</em>
                  </MenuItem>
                  <MenuItem value={"Delhi"}>
                    <em>Delhi</em>
                  </MenuItem>
                  <MenuItem value={"Mumbai"}>
                    <em>Mumbai</em>
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
                  value={RegFormState.dob}
                  onChange={(e) => {
                    setRegFormState({ ...RegFormState, dob: e.target.value });
                  }}
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
                  required
                  value={RegFormState.gender}
                  onChange={(e) => {
                    setRegFormState({
                      ...RegFormState,
                      gender: e.target.value,
                    });
                  }}
                >
                  <MenuItem value={"none"}>
                    <em>none</em>
                  </MenuItem>
                  <MenuItem value={"Male"}>
                    <em>Male</em>
                  </MenuItem>
                  <MenuItem value={"Female"}>
                    <em>Female</em>
                  </MenuItem>
                  <MenuItem value={"Other"}>
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
                  <TextField
                    type="text"
                    id="name"
                    size="small"
                    className="w-full sm:w-[450px]"
                    value={RegFormState.full_name}
                    onChange={(e) => {
                      setRegFormState({
                        ...RegFormState,
                        full_name: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              {/* <div className="flex w-full items-center justify-evenly mt-4">
                <div className="flex flex-col gap-3">
                  <InputLabel id="textarea" required>
                    Address 1
                  </InputLabel>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={4}
                    placeholder="Minimum 3 rows"
                    style={{
                      width: "470px",
                      padding: 5,
                      background: "transparent",
                      border: "1px solid gray",
                      borderRadius: "3px",
                    }}
                  ></TextareaAutosize>
                  <div>
                    <InputLabel id="textarea" required>
                      Address 2
                    </InputLabel>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={4}
                      placeholder="Minimum 3 rows"
                      style={{
                        width: "470px",
                        padding: 5,
                        background: "transparent",
                        border: "1px solid gray",
                        borderRadius: "3px",
                      }}
                    ></TextareaAutosize>
                  </div>
                </div>
              </div> */}
            </div>
            <div className=" self-center flex flex-col items-center">
              <Button
                variant="contained"
                type="submit"
                className="btn1 self-cente"
              >
                Submit
              </Button>
              <span>oR</span>
              <h3
                className="font-semibold text-[#1976d2] cursor-pointer"
                onClick={() => Navigate("/login")}
              >
                Login ?
              </h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
