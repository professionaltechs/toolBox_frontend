import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faMobileScreenButton,
  faFilePdf,
  faBoxOpen,
  faCalendarCheck,
  faCashRegister,
  faCartPlus,
  faUser,
  faHouse,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
export const SideBarThree = () => {
  let navigate = useNavigate();
  return (
    <div className="side-menu">
      <div className="home-icon">
        <FontAwesomeIcon
          onClick={() => {
            navigate("/dashboard");
          }}
          style={{ color: "white" }}
          className="fa-2xl"
          icon={faHouse}
        ></FontAwesomeIcon>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <FontAwesomeIcon
              style={{ color: "white" }}
              className="fa-xl cash-register"
              icon={faCashRegister}
            ></FontAwesomeIcon>
            <a to="#">Cash Register</a>
          </li>

          <li>
            <FontAwesomeIcon
              style={{ color: "white" }}
              className="fa-xl repairs"
              icon={faWrench}
            ></FontAwesomeIcon>
            <Link to="/repair-tickets">Repairs</Link>
          </li>

          <li>
            <FontAwesomeIcon
              style={{ color: "white" }}
              className="fa-xl devices"
              icon={faMobileScreenButton}
            ></FontAwesomeIcon>
            <Link to="#">Devices</Link>
          </li>

          <li>
            <FontAwesomeIcon
              style={{ color: "white" }}
              className="fa-xl customers"
              icon={faUser}
            ></FontAwesomeIcon>
            <Link to="#">Customers</Link>
          </li>

          <li>
            <FontAwesomeIcon
              style={{ color: "white" }}
              className="fa-xl invoice"
              icon={faFilePdf}
            ></FontAwesomeIcon>
            <Link to="#">Invoice</Link>
          </li>

          <li>
            <FontAwesomeIcon
              style={{ color: "white" }}
              className="fa-xl purchase-order"
              icon={faBoxOpen}
            ></FontAwesomeIcon>
            <Link to="#" className="purchase-link">
              Purchase Order
            </Link>
          </li>

          <li>
            <FontAwesomeIcon
              style={{ color: "white" }}
              className="fa-xl appointment"
              icon={faCalendarCheck}
            ></FontAwesomeIcon>
            <Link to="#">Appointment</Link>
          </li>

          <li>
            <FontAwesomeIcon
              style={{ color: "white" }}
              className="fa-xl products"
              icon={faCartPlus}
            ></FontAwesomeIcon>
            <Link to="#">Products</Link>
          </li>

          <li>
            <FontAwesomeIcon
              style={{ color: "white" }}
              className="fa-xl products"
              icon={faCartPlus}
            ></FontAwesomeIcon>
            <Link to="/subscription">Subscription</Link>
          </li>
        </ul>
      </div>
      <div className="notes-icon">
        <div>
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-md"
            icon={faPencil}
          ></FontAwesomeIcon>
        </div>
        <div>
          <p className="notes-para">New-Note</p>
        </div>
      </div>
    </div>
  );
};
