import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
  };
  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      {showLogin && <Login closeLogin={closeLogin} />}
      <Navbar openLogin={openLogin} />
      <Main />
    </>
  );
}

export default App;
