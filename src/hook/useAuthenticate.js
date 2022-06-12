import React from "react";
import { useFetch, useLocalStorage,useSession } from "./";

export const useAuth = () => {
  const { session, saveJWT } = useSession("session-key");
  const { storedValue, setLocalStorage } = useLocalStorage(
    "user-session",
    null
  );
  const onSuccess = React.useCallback(
    (response) => {
      setLocalStorage(response);
      saveJWT(response.token)
      window.location.href = '/';
    },
    [setLocalStorage,saveJWT]
  );

  const onFailure = React.useCallback(
    (error) => {
      console.log(error);
    },
    []
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
        console.log(res)
      },
      onFailure: (error) =>{
        console.log(error)
      }
    });
  };
  const confirmPasswordReset = (code, password) => {
    return true;
  };

  // Return the user object and auth methods
  return {
    session,
    storedValue,
    signin,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    isLoading,
  };
};
