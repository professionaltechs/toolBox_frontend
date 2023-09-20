import React, { useState } from "react";
import "../assets/css/login.css";
import { axiosInstance } from "../axios";
import countries from "../assets/datasets/countries.json"
import { Navigate, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [company, setCompany] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("company", company);
    console.log("firstName", firstName);
    console.log("phone", phone);
    console.log("email", email);
    console.log("password", password);
    console.log("country", country);

    axiosInstance({
      method: "post",
      url: "agent/signup",
      data: {
        email,
        password,
        companyName: company,
        firstName,
        phoneNumber: phone,
        country,
      },
    }).then(res => {
      console.log(res)
      localStorage.setItem("toolBoxToken", res.data.token)
      localStorage.setItem("isLoggedIn", "true")
      navigate("/subdomain-login")
    }).catch(err => {
      alert(err.message)
      console.log(err)
    })
  };

  return (
    <div className="signUpContainer">
      <div class="signupInnercontainer">
        <div
          class="screen-signup"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <div class="screen__content">
            <div class="signup_grid">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="signup__input"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div class="login__field">
                {/* <i class="login__icon fas fa-user"></i> */}
                <h3 class="signup__input" style={{ border: "none" }}>
                  Domain: {company}.Toolbox.com
                </h3>
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="signup__input"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="signup__input"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="text"
                  class="signup__input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="signup__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="login__field">
                <select onChange={(e) => setCountry(e.target.value)} class="form-select" aria-label="Default select example">
                  <option selected>Country</option>
                  {countries.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                  })}
                </select>
              </div>
              <button class="button signup__submit" onClick={handleSubmit}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
