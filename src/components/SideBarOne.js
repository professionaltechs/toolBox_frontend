import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faClock,
  faBell,
  faMagnifyingGlass,
  faWrench,
  faMobileScreenButton,
  faUsers,
  faFilePdf,
  faBoxOpen,
  faCalendarCheck,
  faCashRegister,
  faCartPlus,
  faUser,
  faHouse,
  faDesktop,
  faPencil,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export const SideBarOne = () => {
    let navigate = useNavigate()
  return (
    <div className="side-menu">
      <div className="side-menu-container">
        <div>
          <FontAwesomeIcon
          onClick={() => navigate("/dashboard")}
            style={{ color: "white" }}
            className="fa-2xl pt-5"
            icon={faHouse}
          />
        </div>
        <div className="menu-items">
          <div>
            <div className="link-div">
              <a className="cash-register-link" href="No link">
                <FontAwesomeIcon
                  className="fa-xl cashregister"
                  icon={faCashRegister}
                />

                <span className="link-text">Cash Register</span>
              </a>
            </div>
          </div>
          <div>
            <div className="link-div" >
              <Link className="repairs-link" to="/repair-tickets">
                <FontAwesomeIcon className="fa-xl" icon={faWrench} />
                <span className="link-text">Repairs</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="link-div">
              <a className="devices-link" href="No link">
                <FontAwesomeIcon
                  className="fa-xl"
                  icon={faMobileScreenButton}
                />
                <span className="link-text">Devices</span>
              </a>
            </div>
          </div>
          <div>
            <div className="link-div">
              <a className="customers-link" href="No link">
                <FontAwesomeIcon className="fa-xl" icon={faUsers} />
                <span className="link-text">Customers</span>
              </a>
            </div>
          </div>
          <div>
            <div className="link-div">
              <a className="invoice-link" href="No link">
                <FontAwesomeIcon className="fa-xl" icon={faFilePdf} />
                <span className="link-text">Invoice</span>
              </a>
            </div>
          </div>
          <div>
            <div className="link-div">
              <a className="purchase-order-link" href="No link">
                <FontAwesomeIcon className="fa-xl" icon={faBoxOpen} />
                <span className="link-text">Purchase Order</span>
              </a>
            </div>
          </div>
          <div>
            <div className="link-div">
              <a className="appointment-link" href="No link">
                <FontAwesomeIcon className="fa-xl" icon={faCalendarCheck} />
                <span className="link-text">Appointment</span>
              </a>
            </div>
          </div>
          <div>
            <div className="link-div">
              <a className="products-link" href="No link">
                <FontAwesomeIcon className="fa-xl" icon={faCartPlus} />
                <span className="link-text">Products</span>
              </a>
            </div>
          </div>
        </div>
        <div className=" d-flex">
          <div>
            <FontAwesomeIcon style={{ color: "gold" }} icon={faPencil} />
          </div>
          <div>
            <p className="ms-1 text-light">New-Note</p>
          </div>
        </div>
      </div>
    </div>
  );
};
