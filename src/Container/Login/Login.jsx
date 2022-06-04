import React, { useState } from "react";
import "./Login.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {
  InputLabel,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
const inputFiled = {
  width: "250px",
};
const Login = () => {
  const [visibility, setvisibility] = useState("password");
  const [formState, setformState] = useState({});
  const Navigate = useNavigate();
  const handleSubmit = () => {};

  const setpassword = () => {
    setvisibility(visibility === "password" ? "text" : "password");
  };
  return (
    <>
      <main className="Login min-h-[80vh] sm:min-h-[85vh] relative">
        <div className="min-w-[18%] aspect-square shadow-inner shadow-2xl border-[.5px] border-gray-400   bg-[#f7f6f7]  flex flex-col items-center justify-around rounded-sm">
          <h3 className="text-4xl text-violet-400">Login</h3>
          <form className=" flex flex-col items-center gap-3 mt-5 ">
            <div>
              <InputLabel htmlFor={"text"} required>
                EmailId or Phone Number
              </InputLabel>
              <TextField
                autoFocus={true}
                type={"text"}
                id={"text"}
                required
                size={"small"}
                style={inputFiled}
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
            <button type={"submit"} className="btn1 bg-violet-400 mt-4 font-semibold">
              Login
            </button>
          </form>
          <h5>Or</h5>
          <span
            className="text-violet-500"
            style={{
              fontSize: "15px",
              color: "royalblue",
              marginBottom: "5px",
              cursor: "pointer",
              fontWeight:"bold",
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
