import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useFetch, useLocalStorage, useSession } from "./";

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    mobile_no: Yup.string().required("Mobile Number is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });
  

export const useRegister = () => {
  const { session, saveJWT } = useSession("session-key");
  const { storedValue, setLocalStorage } = useLocalStorage(
    "user-session",
    null
  );

  const {
    register,
    handleSubmit,
    formState,
    setError
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSuccess = React.useCallback(
    (response) => {
      setLocalStorage(response);
      saveJWT(response.token);
      window.location.href = "/";
    },
    [setLocalStorage, saveJWT]
  );

  const onFailure = React.useCallback((error) => {
    console.log(error.errors)
    Object.keys(error.errors).map((value, index) => {
      setError(`${value}`,error.errors[value][0])
    });
  }, [setError]);

  const [{ isLoading }, doFetch] = useFetch({
    url: "/register_customer/",
    skipStart: false,
    onSuccess,
    onFailure,
  });

  // Return the user object and auth methods
  return {
    session,
    storedValue,
    isLoading,
    doFetch,
    register,
    handleSubmit,
    formState
  };
};
