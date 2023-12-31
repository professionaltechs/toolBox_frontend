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
  faArrowUp,
  faArrowDown,
  faMoneyCheckDollar,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

import "../assets/css/dashboard.css";

import {
  Chart as ChartJs,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import { Doughnut } from "react-chartjs-2";
import { SideBarThree } from "../components/SideBarThree";
import { Header2 } from "../components";

ChartJs.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

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
      <SideBarThree />
      <Header2/>

      <div className="user-stats">
        <div className="first-div">
          <h3>Hello Nile 👏</h3>
          <div className="nile-stats" style={{ width: "100%" }}>
            <div className="flex-stats">
              <div>
                <FontAwesomeIcon
                  className="fa-2xl icons icon1"
                  icon={faSackDollar}
                ></FontAwesomeIcon>
              </div>
              <div>
                <h4>Earning</h4>
                <h1>$198k</h1>
                <p>
                  <FontAwesomeIcon
                    style={{ color: "#2F8A5F" }}
                    icon={faArrowUp}
                  ></FontAwesomeIcon>{" "}
                  30% this month
                </p>
              </div>
            </div>
            <div className="flex-stats">
              <div>
                <FontAwesomeIcon
                  className="fa-2xl icons icon2"
                  icon={faMoneyCheckDollar}
                ></FontAwesomeIcon>
              </div>
              <div>
                <h4>Balance</h4>
                <h1>$2.4k</h1>
                <p>
                  <FontAwesomeIcon
                    style={{ color: "#C5255D" }}
                    icon={faArrowDown}
                  ></FontAwesomeIcon>{" "}
                  30% this month
                </p>
              </div>
            </div>
            <div className="flex-stats">
              <div>
                <FontAwesomeIcon
                  className="fa-2xl icons icon3"
                  icon={faBagShopping}
                ></FontAwesomeIcon>
              </div>
              <div>
                <h4>Total Sales</h4>
                <h1>$89k</h1>
                <p>
                  <FontAwesomeIcon
                    style={{ color: "#2F8A5F" }}
                    icon={faArrowUp}
                  ></FontAwesomeIcon>{" "}
                  30% this month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="second-div">
          <div className="flex-stats2">
            <div>
              <h4>New Clients</h4>
              <h1>150</h1>
              <p>View afaflafj</p>
            </div>
            <div>
              <img
                alt="No image"
                className="person-image"
                src="./person.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="charts-stats">
        <div className="calendar">
          <Calendar onChange={onChange} value={date}></Calendar>
        </div>
      </div>

      <div className="menu-items">
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faQrcode}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Dashboard</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faUsers}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Customers</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faWrench}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Repairs</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faCalendarCheck}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Appointments</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faTruck}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Stock Tale</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faQrcode}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Sales reports</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faQrcode}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>End of Day</a>
          </div>
        </div>
      </div>

      <div className="menu-items">
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faQrcode}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Expenses</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faQrcode}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Products</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faMobileScreenButton}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Devices</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faCartPlus}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Inventory</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faFilePdf}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Invoices</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faQrcode}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Repair Reports</a>
          </div>
        </div>
        <div className="item">
          <div>
            <FontAwesomeIcon
              className="fa-2xl"
              icon={faBitcoinSign}
            ></FontAwesomeIcon>
          </div>
          <div>
            <a>Integrations</a>
          </div>
        </div>
      </div>
    </div>
  );
};
