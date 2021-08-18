import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    axios.get("/user/login").then(() => setIsAuth(true));
  }, []);
  // console.log(isAuth, showLogin);
  const openLogin = () => {
    setShowLogin(true);
  };
  const closeLogin = () => {
    setShowLogin(false);
  };

  const userLogin = () => {
    setIsAuth(true);
    closeLogin();
  };
  return (
    <>
      {showLogin && <Login closeLogin={closeLogin} userLogin={userLogin} />}
      <Navbar openLogin={openLogin} isAuth={isAuth} />
      <Main />
    </>
  );
}

export default App;
