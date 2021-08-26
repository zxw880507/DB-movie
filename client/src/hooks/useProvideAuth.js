import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { getUsername } from "../helpers";

export default function useProvideAuth() {
  const [showLogin, setShowLogin] = useState(false);
  const [authState, setAuthState] = useState({
    isAuth: false,
    user: null,
  });
  const history = useHistory();

  useEffect(() => {
    axios.get("/user/login").then((res) => {
      if (res.data.email) {
        setAuthState({ isAuth: true, user: res.data });
      }
    });
  }, []);

  useEffect(() => {
    if (authState.isAuth) {
      history.replace(`/${getUsername(authState.user.email)}`);
    } else {
      history.replace("/");
    }
  }, [authState, history]);

  const toggleLoginWindow = () => {
    if (showLogin) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  };

  const userLogin = (data) => {
    setAuthState({ isAuth: true, user: data });
    history.replace(`/${getUsername(data.email)}`);
    toggleLoginWindow();
  };

  const userLogout = () => {
    axios.post("/user/logout").then(() => {
      setAuthState({ isAuth: false, user: null });
      history.replace("/");
    });
  };

  return { showLogin, authState, toggleLoginWindow, userLogin, userLogout };
}
