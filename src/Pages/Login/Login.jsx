import React from "react";
import "./Login.css";
import { GiVineFlower } from "react-icons/gi";
const Login = () => {
  return (
    <div className="app__login-bg">
      <div class="login-page">
        <div class="app__login-form">
          <div className="app__navbar-logo-loginPage">
            <a href="/">
              Flora Connect <GiVineFlower style={{ marginLeft: "9px" }} />
            </a>
          </div>
          <form class="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
