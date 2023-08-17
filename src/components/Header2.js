import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faGear,
  faClock,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const Header2 = () => {
  return (
    <div className="header2">
        <div className="navbar">
          <div className="logo">
            <h4>ToolBox.co</h4>
          </div>
          <div className="navbar-links">
            <div className="input-search">
              <div className="search">
                <FontAwesomeIcon
                  style={{ color: "#8A8A8A" }}
                  className="fa-lg"
                  icon={faMagnifyingGlass}
                ></FontAwesomeIcon>
                <input type="search" placeholder="Search"></input>
              </div>
              <div>
                <FontAwesomeIcon
                  className="fa-xl"
                  icon={faGlobe}
                ></FontAwesomeIcon>
              </div>
              <div>
                <FontAwesomeIcon
                  className="fa-xl"
                  icon={faGear}
                ></FontAwesomeIcon>
              </div>
              <div>
                <FontAwesomeIcon
                  className="fa-xl"
                  icon={faClock}
                ></FontAwesomeIcon>
              </div>
              <div>
                <FontAwesomeIcon
                  className="fa-xl"
                  icon={faBell}
                ></FontAwesomeIcon>
              </div>
              <div className="profile">
                <div>
                  <img
                    src="./profile.png"
                    alt="not working"
                    className="profile-image"
                  ></img>
                </div>
                <div>
                  <h5>Musfiq</h5>
                  <p>Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
