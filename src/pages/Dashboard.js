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
import { SideBarThree } from "../components/SideBarThree";

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
      <SideBarThree/>
      <div className='header'>
              <div className='navbar'>
                  <div className='logo'>
                    <h4>ToolBox.co</h4>
                  </div>
                  <div className='navbar-links'>
                    <div className='input-search'>
                      <div className='search'>
                      <FontAwesomeIcon style={{color:"#8A8A8A"}} className='fa-lg' icon={faMagnifyingGlass}></FontAwesomeIcon>
                      <input type='search' placeholder='Search'></input>
                      </div>
                      <div>
                        <FontAwesomeIcon   className="fa-xl" icon={faGlobe}></FontAwesomeIcon>
                      </div>
                    <div>
                      <FontAwesomeIcon  className="fa-xl" icon={faGear}></FontAwesomeIcon>
                    </div>
                  <div>
                      <FontAwesomeIcon  className='fa-xl' icon={faClock}></FontAwesomeIcon>
                    </div>
                    <div>
                      <FontAwesomeIcon  className='fa-xl' icon={faBell}></FontAwesomeIcon>
                    </div>
                    <div className='profile'>
                        <div>
                          <img src='./profile.png' alt='not working' className='profile-image'></img>
                        </div>
                        <div>
                          <h5>
                            Musfiq
                          </h5>
                          <p>Admin</p>
                        </div>
                    </div>
              </div>
              </div>
            </div>
            </div>

            <div className="user-stats">
                <div className="first-div">
                  <h3>Hello Nile 👏</h3>
                  <div className="nile-stats" style={{width:"100%"}}>
                    <div className="flex-stats">
                      <div>
                      <FontAwesomeIcon className="fa-xl icons" icon={faSackDollar}></FontAwesomeIcon>
                      </div>
                      <div>
                        <h4>Earning</h4>
                        <h2>$198k</h2>
                        <p>
                        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon> 30% this month
                        </p>
                      </div>
                    </div>
                    <div className="flex-stats">
                      <div>
                      <FontAwesomeIcon className="fa-xl icons" icon={faSackDollar}></FontAwesomeIcon>
                      </div>
                      <div>
                        <h4>Earning</h4>
                        <h2>$198k</h2>
                        <p>
                        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon> 30% this month
                        </p>
                      </div>
                    </div>
                    <div className="flex-stats">
                      <div>
                      <FontAwesomeIcon className="fa-xl icons" icon={faSackDollar}></FontAwesomeIcon>
                      </div>
                      <div>
                        <h4>Earning</h4>
                        <h2>$198k</h2>
                        <p>
                        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon> 30% this month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second-div">

                </div>
            </div>
    </div>
  );
};
