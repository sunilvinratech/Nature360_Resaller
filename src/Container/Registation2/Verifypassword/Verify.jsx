import { Button, InputLabel, TextField } from "@mui/material";
import React from "react";

const Verify = () => {
  return (
    <>
      <div className="flex-full min-h-screen grid place-items-center ">
        <div className="flex flex-col items-center">
          <h3 className="text-[#E1BB73] text-4xl mb-10 ">Verify Your OTP</h3>
          <form className="flex-col flex gap-3 items-center">
            <div>
              <InputLabel required htmlFor="">
                Please Enter Your OTP
              </InputLabel>
              <TextField type={"text"} required size="small" />
            </div>
            <Button variant="outlined">Verify</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Verify;
