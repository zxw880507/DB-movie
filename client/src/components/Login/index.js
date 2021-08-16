import React, { useState, useRef } from "react";
import LoginForm from "./LoginForm";
import "./login.css";
import RegisterForm from "./RegisterForm";
import classNames from "classnames";
export default function Login() {
  const [tab, setTab] = useState("login");
  const tabs = useRef(null);
  const tabsClass = classNames("login-tabs", `${tab}-tab-selected`);
  const onChange = (e) => {
    setTab(e.target.dataset.value);
  };

  return (
    <div className="login-container">
      <div className="login-heading-box">
        <h1 className="login-heading-title">WELCOME TO</h1>
        <p>DB MOVIE</p>
      </div>
      <div className="login-content-box">
        <div className={tabsClass} ref={tabs} onClick={onChange}>
          <span data-value="login" className="login-tab">
            Login
          </span>
          <span data-value="register" className="register-tab">
            Register
          </span>
        </div>
        <div className="form-container">
          {tab === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}
