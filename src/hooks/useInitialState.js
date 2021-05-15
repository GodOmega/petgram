import { useState } from "react";
import InitialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(InitialState);
  const [auth, setAuth] = useState(() => {
    const token = window.sessionStorage.getItem("token");
    return token ? token : false;
  });

  const userLogin = (payload) => {
    window.sessionStorage.setItem("token", payload);

    setAuth(true);
  };

  const userLogout = () => {
    setAuth(false);
    window.sessionStorage.removeItem("token");
  };

  return { userLogin, userLogout, state, auth };
};

export default useInitialState;
