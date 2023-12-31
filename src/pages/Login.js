import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import { axiosInstance } from "../axios";
import { DomainContext } from "../contexts/DomainProvider";

export const Login = () => {
  const { domain } = useContext(DomainContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();

    const handleSubmt = (e) => {
        e.preventDefault();

        console.log(email, password)

        axiosInstance({
          method: "post",
          url: "agent/signin",
          data: {
            email,
            companyName: domain, 
            password
          }
        }).then(res => {
          console.log(res)
          localStorage.setItem("toolBoxToken", res.data.token)
          localStorage.setItem("isLoggedIn", "true")
          navigate("/dashboard")
        }).catch(err => console.log(err))
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
