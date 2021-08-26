import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import { ProvideAuth } from "./hooks/providers/Auth";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route
          path="/"
          render={({ location }) => (
            <ProvideAuth>
              <Login />
              <Navbar />
              <Main location={location} />
            </ProvideAuth>
          )}
        />
      </Router>
    </>
  );
}

export default App;
