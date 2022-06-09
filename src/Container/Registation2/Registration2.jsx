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
              <TextField
                type={"email"}
                value={formState.email}
                required
                onChange={(e) =>
                  setformState({
                    ...formState,
                    username: e.target.value,
                    email: e.target.value,
                  })
                }
                size="small"
              />
            </div>
            <div className="flex flex-col">
              <InputLabel required>Password</InputLabel>
              <TextField
                type={"password"}
                required
                value={formState.password}
                onChange={(e) =>
                  setformState({ ...formState, password: e.target.value })
                }
                size="small"
              />
            </div>
            <div className="flex flex-col">
              <InputLabel required>Phone Number</InputLabel>
              <div className="flex items-center gap-3 flex-col">
                <div className="flex items-center">
                  <TextField
                    type={"tel"}
                    required
                    value={formState.mobile}
                    onChange={(e) =>
                      setformState({ ...formState, mobile: e.target.value })
                    }
                    size="small"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-1">
              <InputLabel required>Full Name</InputLabel>
              <TextField
                required
                type={"text"}
                value={formState.full_name}
                onChange={(e) =>
                  setformState({ ...formState, full_name: e.target.value })
                }
                size="small"
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
