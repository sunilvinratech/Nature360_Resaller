import { useEffect, useState, useCallback } from "react";

export const useSession = (sessionKey, keepOnWindowClosed = true) => {
  if (!sessionKey) {
    throw new Error(
      "sessionKey was not provided to useSession hook. Example: useSession('facebook-session')"
    );
  }

  const getStorage = () => {
    return keepOnWindowClosed ? localStorage : sessionStorage;
  };
  const getStorageValue = useCallback(() => {
    try {
      const storageValue = getStorage().getItem(sessionKey);
      if (storageValue != null) {
        // There is a session in the storage already
        try {
          const session = JSON.parse(storageValue);
          return session;
        } catch (_a) {
          // Oops... It seems it wasn't an object, returning as String then
          return storageValue;
        }
      }
    } catch (_b) {
      // This catch block handles the known issues listed here: https://caniuse.com/#feat=namevalue-storage
      console.warn(
        "useSession could not access the browser storage. Session will be lost when closing browser window"
      );
    }
    return null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const [state, setState] = useState(getStorageValue);
  const save = (sessionValue) => {
    if (typeof sessionValue == "object" || typeof sessionValue === "string") {
      getStorage().setItem(sessionKey, JSON.stringify(sessionValue));
      setState(sessionValue);
    } else {
      throw new Error(
        "useSession hook only accepts objects or strings as session values"
      );
    }
  };

  const saveJWT = (jwt) => {
    try {
      save(jwt);
    } catch (ex) {
      throw new Error("Could not parse provided Json Web Token: " + ex);
    }
  };

  const clear = () => {
    getStorage().removeItem(sessionKey);
    setState(null);
  };
  const syncState = useCallback(
    (event) => {
      if (event.key === sessionKey) {
        setState(getStorageValue());
      }
    },
    [setState, getStorageValue, sessionKey]
  );
  useEffect(() => {
    window.addEventListener("storage", syncState);
    return () => {
      window.removeEventListener("storage", syncState);
    };
  }, [sessionKey, syncState]);
  return { session: state, save, saveJWT, clear };
};
