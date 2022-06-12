import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Registration.css";
import { useRegister } from "../../hook";

const Registration2 = () => {
  const [otpState, setotpState] = useState("false");
  const {
    isLoading,
    doFetch,
    register,
    handleSubmit,
    formState: { errors },
  } = useRegister();

  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("mobile_no", data.mobile_no);
    formData.append("full_name", data.full_name);
    doFetch("/register_customer/", {
      method: "post",
      data: formData,
    });
  };

  return (
    <>
      <div className="Registration Login relative">
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            Sign Up
          </Typography>
          <Grid
            container
            spacing={1}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <div className="form-control">
              <TextField
                required
                id="fullname"
                name="fullname"
                label="Full Name"
                margin="dense"
                fullWidth
                style={{
                  background: "#fff",
                }}
                {...register("fullname")}
                helperText={errors.fullname?.message}
                error={errors.fullname ? true : false}
              />
            </div>
            <div className="form-control">
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                margin="dense"
                {...register("email")}
                error={errors.email ? true : false}
                style={{
                  background: "#fff",
                }}
                helperText={errors.fullname?.message}
              />
            </div>

            <div className="form-control">
              <TextField
                required
                id="mobile_no"
                name="mobile_no"
                label="Phone Number"
                type="number"
                margin="dense"
                {...register("mobile_no", { required: true, minLength: 10 })}
                error={errors.mobile_no ? true : false}
                style={{
                  background: "#fff",
                }}
                helperText={errors.mobile_no?.message}
              />
            </div>

            <div className="form-control">
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                margin="dense"
                {...register("password")}
                error={errors.password ? true : false}
                style={{
                  background: "#fff",
                }}
                helperText={errors.password?.message}
              />
            </div>
            <div className="form-control">
              <TextField
                required
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                margin="dense"
                {...register("confirmPassword")}
                error={errors.confirmPassword ? true : false}
                style={{
                  background: "#fff",
                }}
                helperText={errors.confirmPassword?.message}
              />
            </div>
          </Grid>
          <Box mt={3}>
            <Button
              isLoading={isLoading}
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default Registration2;
