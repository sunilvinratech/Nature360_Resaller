import React from "react";
import { useNavigate } from "react-router-dom";
import { useFetch, useLocalStorage,useSession } from "./";

export const useAuth = () => {
  const { session, saveJWT } = useSession("session-key");
  const { storedValue, setLocalStorage } = useLocalStorage(
    "user-session",
    null
  );
  const { storedValue:storedRegisterValue, setLocalStorage: setRegisterLocalStorage } = useLocalStorage(
    "user-register",
    null
  );
  const [errorMessage,setErrorMessage] = React.useState(null);

  const Navigate = useNavigate();

  const onSuccess = React.useCallback(
    (response) => {
      setLocalStorage(response);
      saveJWT(response.token)
      setErrorMessage(null)
      Navigate('/')
    },
    [setLocalStorage,saveJWT,Navigate,setErrorMessage]
  );

  const onFailure = React.useCallback(
    (error) => {
      Object.keys(error).map((value, index) => {
        setErrorMessage(error[value][0])
      });
    },
    [setErrorMessage]
  );

  const [{ isLoading }, doFetch] = useFetch({
    url: "/login/",
    skipStart: false,
    onSuccess,
    onFailure,
  });

  const signin = React.useCallback(
    (formState) => {
      let formData = new FormData();
      formData.append('username',formState.username);
      formData.append('password',formState.password);
      doFetch("/login/",{
        method: "post",
        data: formData,
      });
    },
    [doFetch]
  );
  const signout = () => {
  };
  const sendPasswordResetEmail = (data) => {
    doFetch('/forgot_password/',{
      method: "post",
      data: data,
      onSuccess:(res)=>{
        alert(res.status)
        Navigate('/login')
      },
      onFailure: (error) =>{
        setErrorMessage(error.status)
      }
    });
  };
  const confirmPasswordReset = (code, password) => {
    return true;
  };

  const verifyOtp = React.useCallback((otp)=>{
    let formData = new FormData();
    formData.append('otp',otp);
    formData.append('username',storedRegisterValue?.user?.username);
    doFetch('/verify_otp/',{
      method: "post",
      data: formData,
      onSuccess:(res)=>{
        setRegisterLocalStorage(null)
        Navigate('/login')
      },
      onFailure: (error) =>{
        setErrorMessage(error.status)
      }
    });
  },[doFetch,storedRegisterValue,setRegisterLocalStorage,Navigate,setErrorMessage])

  // Return the user object and auth methods
  return {
    session,
    storedValue,
    signin,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    verifyOtp,
    isLoading,
    errorMessage
  };
};
