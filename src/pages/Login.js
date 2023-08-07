import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../assets/css/login.css";

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();

    const handleSubmt = (e) => {
        e.preventDefault();

        console.log(email, password)

        if(email === "test@gmail.com" && password === "123456"){
            navigate("/dashboard")
        }
    }
  return (
    <div className="loginContainer">
      <div class="loginInnercontainer">
        <div class="screen">
          <div class="screen__content">
            <div class="login">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                value={email}
                  type="text"
                  class="login__input"
                  placeholder="User name / Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                value={password}
                  type="password"
                  class="login__input"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <button class="button login__submit" onClick={handleSubmt}>
                <span class="button__text">Log In Now</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </div>
            {/* <div class="social-login">
            <h3>log in via</h3>
            <div class="social-icons">
              <a href="#" class="social-login__icon fab fa-instagram"></a>
              <a href="#" class="social-login__icon fab fa-facebook"></a>
              <a href="#" class="social-login__icon fab fa-twitter"></a>
            </div>
          </div> */}
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
