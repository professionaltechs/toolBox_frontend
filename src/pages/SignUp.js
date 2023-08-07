import React from "react";
import "../assets/css/login.css";

export const Signup = () => {
  return (
    <div className="signUpContainer">
      <div class="signupInnerContainer">
        <div class="screen-signup">
          <h2>Sign Up</h2>
          <div class="screen__content">
            <div class="signup_grid">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  placeholder="Password"
                />
              </div>
              <button class="button signup__submit">
                Create Account
                {/* <span class="button__text">Log In Now</span>
                <i class="button__icon fas fa-chevron-right"></i> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
