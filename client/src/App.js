import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import { ProvideAuth } from "./hooks/providers/Auth";

function App() {
  return (
    <>
      <ProvideAuth>
        <Login />
        <Navbar />
        <Main />
      </ProvideAuth>
    </>
  );
}

export default App;
