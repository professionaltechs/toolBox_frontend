import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import { axiosInstance } from "../axios";
import { DomainContext } from "../contexts/DomainProvider";

export const SubDomainLogin = () => {
    const { domain, setDomain } = useContext(DomainContext);
    const [subDomain, setSubDomain] = useState("")
    let navigate = useNavigate();

    useEffect(() => {

        if(domain !== ''){
            navigate("/")
        }

    }, [])

    const handleSubmt = (e) => {
        e.preventDefault();

        setDomain(subDomain)

        window.location = `http://${subDomain}.localhost:3000/`
        
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
                value={subDomain}
                  type="text"
                  class="login__input"
                  placeholder="Enter sub domain ( account name )"
                  onChange={e => setSubDomain(e.target.value)}
                />
              </div>
              <button class="button login__submit" onClick={handleSubmt}>
                <span class="button__text">Log In</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </div>
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
