import React from "react";
import { useState } from "react";
import { Button, InputLabel, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
var FormData = require("form-data");
const Forget = () => {
  const Navigate = useNavigate();
  var data = new FormData();
  const [CheckEmail, setCheckEmail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    data.append("email", CheckEmail);
    await axios
      .post("http://54.87.154.104:8000/forgot_password/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <main className="Login min-h-[80vh] sm:min-h-[85vh] relative">
        <div className="  mb-10  flex flex-col items-center justify-around rounded-sm">
          <h3 className="text-4xl  text-[#f8a73d]">Forget Password</h3>
          <form
            className=" flex flex-col items-center gap-3 mt-10 "
            onSubmit={handleSubmit}
          >
            <div>
              <InputLabel htmlFor={"text"} required>
                Email Id or Phone Number
              </InputLabel>
              <TextField
                autoFocus={true}
                type={"text"}
                id={"text"}
                required
                size={"small"}
                value={CheckEmail}
                onChange={(e) => {
                  setCheckEmail(e.target.value);
                }}
              />
            </div>
            <div className=" self-center flex flex-col items-center justify-center mb-5">
              <Button
                variant="contained"
                type={"submit"}
                className="btn1 bg-violet-400 mt-2 "
              >
                Send
              </Button>
              <span>OR</span>
              <h3
                className="font-semibold text-[#1976d2] cursor-pointer"
                onClick={() => Navigate("/login")}
              >
                Login ?
              </h3>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Forget;
