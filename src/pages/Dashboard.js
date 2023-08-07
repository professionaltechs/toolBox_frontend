import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBars,
  faXmark,
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
  faSackDollar,
  faQrcode,
  faTruck,
  faCartFlatbed,
  faBitcoinSign,
} from "@fortawesome/free-solid-svg-icons";

import "../assets/css/dashboard.css"

import{
  Chart as ChartJs,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js"

import { Bar } from "react-chartjs-2";

import { Doughnut } from "react-chartjs-2";
import { SideBarTwo } from "../components/SideBarTwo";
ChartJs.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

export const Dashboard = () => {
  const data = {
    labels: ["1", "2", "2", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "369",
        data: [3, 6, 9, 5, 2, 5, 6, 12, 10, 7, 4, 6],
        backgroundColor: "#F2F0FE",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };
  const data2 = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "Poll",
        data: [2, 6],
        backgroundColor: ["#EF3899", "#5C34E5"],
      },
    ],
  };

  const options = {};
  const options2 = {};

  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  const toggleNavbar = () => {
    const navHeader = document.querySelector(".header");
    if (navHeader) {
      navHeader.classList.toggle("active");
    }
  };

  useEffect(() => {
    const mobileNav = document.querySelector(".mobile-navbar-button");
    if (mobileNav) {
      mobileNav.addEventListener("click", toggleNavbar);
    }
    return () => {
      if (mobileNav) {
        mobileNav.removeEventListener("click", toggleNavbar);
      }
    };
  }, []);

  return (
    <div className="App">
      <SideBarTwo/>

      <div className="header d-flex justify-content-around  col-12">
        <div className="logo d-flex justify-content-center ms-5  col-4">
          <div>
            <h6 className="logo-heading">Toolbox.co</h6>
          </div>
        </div>
        <div className="navigation d-flex justify-content-center  col-8">
          <div>
            <ul>
              <li>
                <form className="input-form">
                  <a href="d">
                    <FontAwesomeIcon
                      style={{ color: "#A2A2A2" }}
                      className="faMagnifyingGlass fa-lg"
                      icon={faMagnifyingGlass}
                    />
                  </a>
                  <input
                    type={"search"}
                    placeholder="Search"
                    className="search"
                  ></input>
                </form>
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: "#A2A2A2" }}
                  className="faGlobe faItem fa-xl"
                  icon={faGlobe}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: "#A2A2A2" }}
                  className="faItem fa-xl"
                  icon={faGear}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: "#A2A2A2" }}
                  className="faItem fa-xl"
                  icon={faClock}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: "#505050" }}
                  className="faItem fa-xl"
                  icon={faBell}
                />
              </li>
              <li>
                <img
                  src="./profile.png"
                  className="profile-image"
                  alt="Not loaded"
                ></img>
              </li>
              <li>
                <p className="profile-para">
                  Musfiq{" "}
                  <span>
                    <br></br> Admin
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobile-navbar-button">
          <FontAwesomeIcon className="faBars" icon={faBars} />
          <FontAwesomeIcon className="faXmark" icon={faXmark} />
        </div>
      </div>

      <div className="col-12  container d-flex justify-content-center align-items-center gap-3">
        <div className="col-md-8">
          <h5 className="ms-4 mb-2">Hello Nile 👏</h5>
          <div className=" col-12 d-flex justify-content-between align-items-center  bg-white p-3 rounded-5">
            <div className="col-md-4 d-flex justify-content-center align-items-center gap-4">
              <div>
                <FontAwesomeIcon
                  style={{
                    color: "#599778",
                    borderRadius: "50%",
                    backgroundColor: "#D5FFED",
                    width: "80px",
                    height: "40px",
                    padding: "10px",
                  }}
                  className="fa-2xl"
                  icon={faSackDollar}
                />
              </div>
              <div>
                <h5
                  style={{
                    margin: "0px",
                    fontWeight: "lighter",
                    fontSize: "14px",
                  }}
                >
                  Earning
                </h5>
                <h3 style={{ margin: "0px" }}>$198k</h3>
                <h7 style={{ margin: "0px", fontSize: "13px" }}>
                  27% increase
                </h7>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center gap-4">
              <div>
                <FontAwesomeIcon
                  style={{
                    color: "#3471AA",
                    borderRadius: "50%",
                    backgroundColor: "#C9F1FF",
                    width: "80px",
                    height: "40px",
                    padding: "10px",
                  }}
                  className="fa-2xl"
                  icon={faSackDollar}
                />
              </div>
              <div>
                <h5
                  style={{
                    margin: "0px",
                    fontWeight: "lighter",
                    fontSize: "14px",
                  }}
                >
                  Earning
                </h5>
                <h3 style={{ margin: "0px" }}>$198k</h3>
                <h7 style={{ margin: "0px", fontSize: "13px" }}>
                  27% increase
                </h7>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center gap-4">
              <div>
                <FontAwesomeIcon
                  style={{
                    color: "#A73759",
                    borderRadius: "50%",
                    backgroundColor: "#FFC2EC",
                    width: "80px",
                    height: "40px",
                    padding: "10px",
                  }}
                  className="fa-2xl"
                  icon={faSackDollar}
                />
              </div>
              <div>
                <h5
                  style={{
                    margin: "0px",
                    fontWeight: "lighter",
                    fontSize: "14px",
                  }}
                >
                  Earning
                </h5>
                <h3 style={{ margin: "0px" }}>$198k</h3>
                <h7 style={{ margin: "0px", fontSize: "13px" }}>
                  27% increase
                </h7>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3  stats2  rounded-5 ">
          <div className=" col-md-12 p-3 d-flex gap-2 justify-content-between align-items-center">
            <div>
              <h5 style={{ fontWeight: "lighter", fontSize: "14px" }}>
                Earning
              </h5>
              <h3 style={{ margin: "0px" }}>$198k</h3>
              <h7 style={{ margin: "0px", fontSize: "13px" }}>27% increase</h7>
            </div>
            <div>
              <img
                src="./person.jpg"
                alt="Not found"
                width={150}
                height={120}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 container mt-4 d-flex justify-content-center align-items-center  gap-3">
        {/* <div className="col-md-6" style={{padding: "20px", width: "40%",backgroundColor: "white"}}>
        <h5>Overview</h5>
        <p style={{fontSize: "12px"}}>Monthly Earning</p>
        <Bar style={{width: "100%"}} data={data} options={options}></Bar>
    
        </div> */}
        {/* <div className="col-md-2" style={{padding:"20px",backgroundColor: "white"}}>
    
          <Doughnut style={{width: "100%"}} data={data2} options = {options2}>
          </Doughnut>
    
        </div> */}
        <div className="col-md-3 p-1 ">
          <div className="col-12 bg-white rounded-3 p-2 ">
            <div>
              <h5>Calendar</h5>
            </div>
            <div className="col-12">
              <Calendar
                className="reactCalendar"
                onChange={onChange}
                value={date}
              ></Calendar>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 gap-2 d-flex justify-content-center mt-3 ms-5 align-items-center">
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faQrcode}
          />
          <p className="m-0 text-white">Dashboard</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faUsers}
          />
          <p className="m-0 text-white">Customers</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faWrench}
          />
          <p className="m-0 text-white">Repairs</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faCalendarCheck}
          />
          <p className="m-0 text-white">Appointments</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faTruck}
          />
          <p className="m-0 text-white">Stock take</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faQrcode}
          />
          <p className="m-0 text-white">Sales Reports</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faQrcode}
          />
          <p className="m-0 text-white">End of Day</p>
        </div>
      </div>

      <div className="col-12 mb-2 mt-2 gap-2 d-flex justify-content-center ms-5 align-items-center">
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faQrcode}
          />
          <p className="m-0 text-white">Expenses</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faQrcode}
          />
          <p className="m-0 text-white">Products</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faMobileScreenButton}
          />
          <p className="m-0 text-white">Devices</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faCartFlatbed}
          />
          <p className="m-0 text-white">Inventory</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faFilePdf}
          />
          <p className="m-0 text-white">Invoices</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="fa-2xl"
            icon={faQrcode}
          />
          <p className="m-0 text-white">Repair reports</p>
        </div>
        <div
          style={{ width: "140px" }}
          className="tabs p-3 text-center rounded-2"
        >
          <FontAwesomeIcon
            className="fa-2xl"
            icon={faBitcoinSign}
            style={{ color: "#EFA23A" }}
          />
          <p className="m-0 text-white">Integrations</p>
        </div>
      </div>
    </div>
  );
};
