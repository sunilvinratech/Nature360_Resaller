import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const useFetch = ({ url, skipStart = false, onSuccess, onFailure }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const fetchData = useCallback(async (apiUrl) => {
    try {
      if (!isLoading) {
        return;
      }
      const axiosConfig = {
        baseURL: "http://3.82.226.195",
        ...options,
      };
      console.log(axiosConfig, "axiosConfig===>");
      const res = await axios(apiUrl ?? url, axiosConfig);
      if (options?.onSuccess) {
        options?.onSuccess(res?.data)
      }else{
        onSuccess?.(res?.data);
      }
      setResponse(res?.data)
    } catch (err) {
      setError(err?.response?.data);
      if(options?.onFailure){
        options?.onFailure(err?.response?.data)
      }else{
        onFailure?.(err?.response?.data);
      }
    }
    setIsLoading(false);
  }, [isLoading, url, options, onSuccess, onFailure]);

  useEffect(() => {
    if (skipStart) {
      fetchData();
    }
  }, [skipStart, fetchData]);

  const doFetch = (url,options = {}) => {
    setOptions(options);
    setIsLoading(true);
    fetchData(url);
  };
  return [{ response, error, isLoading }, doFetch];
};

export default useFetch;
