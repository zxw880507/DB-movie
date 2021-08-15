import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-heading-box">
        <h1 className="login-heading-title">WELCOME TO</h1>
        <p>DB MOVIE</p>
      </div>
      <div className="login-content-box">
        <div className="login-tabs">
          <span>Login</span>
          <span>Register</span>
        </div>
      </div>
    </div>
  );
}
