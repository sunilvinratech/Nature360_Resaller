import { Button, InputLabel, TextField } from "@mui/material";
import React from "react";
import { useAuth } from "../../../hook";

const Verify = () => {
  const [otp, setOtp] = React.useState("");
  const { verifyOtp, isLoading, errorMessage } = useAuth();

  const handleClick = React.useCallback(() => {
    verifyOtp(otp)
  }, [verifyOtp]);

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
              <TextField
                type={"text"}
                required
                size="small"
                error={errorMessage ? true : false}
                onChange={(event) => {
                  setOtp(event.target.value);
                }}
              />
            </div>
            <Button
              onClick={handleClick}
              variant="outlined"
              isLoading={isLoading}
            >
              Verify
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Verify;
