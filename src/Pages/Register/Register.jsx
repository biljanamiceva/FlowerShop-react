import React from "react";
import "./Register.css";
import { GiVineFlower } from "react-icons/gi";
const Register = () => {
  return (
    <div className="app__register-bg">
      <div class="register-page">
        <div class="app__register-form">
          <div className="app__navbar-logo-loginPage">
            <a href="/">
              Flora Connect <GiVineFlower style={{ marginLeft: "9px" }} />
            </a>
          </div>
          <form class="register-form">
            <div className="register-row">
              <div className="register-col1">
                <input type="text" placeholder="company name / full name" />
                <input type="text" placeholder="city" />
              </div>
              <div className="register-col2">
                <input type="number" placeholder="phone number" />
                <input type="text" placeholder="username" />
              </div>

              <div className="register-col3">
                <input type="text" placeholder="email address" />
                <input type="password" placeholder="password" />
              </div>
            </div>

            <button>create account</button>
            <p class="message">
              Already registered? <a href="/login">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
