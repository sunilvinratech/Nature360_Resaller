import React, { useState } from "react";
import "./Login.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import axios from "axios";

import {
  InputLabel,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
var FormData = require("form-data");
const inputFiled = {
  width: "250px",
};
const Login = () => {
  const [visibility, setvisibility] = useState("password");
  const [formState, setformState] = useState({
    username: "",
    password: "",
  });

  const Navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://54.87.154.104:8000/login/", formState)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setpassword = () => {
    setvisibility(visibility === "password" ? "text" : "password");
  };
  return (
    <>
      <main className="Login min-h-[80vh] sm:min-h-[85vh] relative">
        <div className="  flex flex-col items-center justify-around rounded-sm">
          <h3 className="text-4xl text-[#1976d2]">Login</h3>
          <form
            className=" flex flex-col items-center gap-3 mt-5 "
            onSubmit={handleSubmit}
          >
            <div>
              <InputLabel htmlFor={"text"} required>
                Username
              </InputLabel>
              <TextField
                autoFocus={true}
                type={"text"}
                id={"text"}
                required
                size={"small"}
                style={inputFiled}
                value={formState.username}
                onChange={(e) => {
                  setformState({ ...formState, username: e.target.value });
                }}
              />
            </div>
            <div>
              <InputLabel
                htmlFor={"password"}
                required
                // style={{ fontSize: "13px", alignSelf: "" }}
              >
                Password
              </InputLabel>
              <TextField
                id={"password"}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      {visibility === "password" ? (
                        <VisibilityOutlinedIcon
                          style={{
                            fontSize: "15px",
                            margin: "none",
                            padding: "0px",
                            position: "absolute",
                          }}
                          onClick={setpassword}
                        />
                      ) : (
                        <VisibilityOffOutlinedIcon
                          onClick={setpassword}
                          style={{
                            fontSize: "15px",
                            margin: "none",
                            padding: "0px",
                            position: "absolute",
                          }}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
                type={visibility}
                size={"small"}
                style={inputFiled}
                value={formState.password}
                onChange={(e) => {
                  setformState({ ...formState, password: e.target.value });
                }}
              />
            </div>
            <div className="flex items-center ">
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Remeber me"
                sx={{ fontSize: "15px" }}
              ></FormControlLabel>
              <h6
                className="text-[15px] text-[royalblue] cursor-pointer font-semibold"
                onClick={() => Navigate("/forgetpassword")}
              >
                Forget password?
              </h6>
            </div>
            <Button
              variant="contained"
              type={"submit"}
              className="btn1 bg-violet-400 mt-4 font-semibold"
            >
              Login
            </Button>
          </form>
          <h5>Or</h5>
          <span
            className="text-violet-500"
            style={{
              fontSize: "15px",
              color: "royalblue",
              marginBottom: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => {
              Navigate("/registration");
            }}
          >
            Sign Up?
          </span>
        </div>
      </main>
    </>
  );
};
export default Login;
