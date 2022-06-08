import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Registration.css";
import axios from "axios";

const Registration2 = () => {
  const [otpState, setotpState] = useState("false");
  const [formState, setformState] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
    full_name: "",
  });
  const handleClick = () => {
    setotpState(otpState === "false" ? "true" : "false");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  return (
    <>
      <div className="Registration Login min-h-[80vh] sm:min-h-[85vh] relative">
        <h3 className="text-4xl text-[#f8a73d]">Sign Up</h3>
        <div className="flex flex-col ">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <InputLabel required>Email address</InputLabel>
              <input
                type={"email"}
                name="email"
                required
                size="small"
                className="input"
                value={formState.email}
                onChange={(e) =>
                  setformState({
                    ...formState,
                    username: e.target.value,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <InputLabel required>Password</InputLabel>
              <input
                type={"password"}
                name="password"
                required
                size="small"
                className="input"
                value={formState.password}
                onChange={(e) =>
                  setformState({ ...formState, password: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <InputLabel required>Phone Number</InputLabel>
              <div className="flex items-center gap-3 flex-col">
                <div className="flex items-center">
                  <input
                    type={"tel"}
                    required
                    size="small"
                    className="input"
                    value={formState.mobile}
                    onChange={(e) =>
                      setformState({ ...formState, mobile: e.target.value })
                    }
                  />
                  <Button size="small" className="otp" onClick={handleClick}>
                    OTP
                  </Button>
                </div>
                <div
                  className="flex items-center"
                  style={{ display: otpState === "false" ? "none" : "block" }}
                >
                  <input
                    type={"tel"}
                    required
                    size="small"
                    className="input"
                    placeholder="Please Enter OTP"
                  />
                  <Button size="small" className="otp">
                    Verify
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-1">
              <InputLabel required>Full Name</InputLabel>
              <input
                type={"text"}
                required
                size="small"
                className="input"
                value={formState.full_name}
                onChange={(e) =>
                  setformState({ ...formState, full_name: e.target.value })
                }
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>

        <InputLabel></InputLabel>
      </div>
    </>
  );
};
export default Registration2;
