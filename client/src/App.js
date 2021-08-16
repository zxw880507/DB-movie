import "./App.css";
import React, { useState } from "react";
import classNames from "classnames";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const root = classNames({ "main-shade": showLogin });
  const openLogin = () => {
    setShowLogin(true);
  };
  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      {showLogin && <Login closeLogin={closeLogin} />}
      <div className={root}>
        <Navbar openLogin={openLogin} />
        <Main />
      </div>
    </>
  );
}

export default App;
