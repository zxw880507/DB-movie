import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    axios.get("/user/login").then((res) => {
      setIsAuth(true);
      setAccount(res.data.email);
    });
  }, []);

  const openLogin = () => {
    setShowLogin(true);
  };
  const closeLogin = () => {
    setShowLogin(false);
  };

  const userLogin = (account) => {
    setIsAuth(true);
    setAccount(account);
    closeLogin();
  };

  const userLogout = () => {
    axios.post("/user/logout").then(() => {
      setIsAuth(false);
      setAccount(null);
    });
  };
  return (
    <>
      {showLogin && <Login closeLogin={closeLogin} userLogin={userLogin} />}
      <Navbar
        openLogin={openLogin}
        userLogout={userLogout}
        isAuth={isAuth}
        account={account}
      />
      <Main />
    </>
  );
}

export default App;
