import React from "react";

import "../assets/css/landingpage.css";

import image1081 from "../assets/images/landingpage/1-08-1.png";
import PixelTrueMockup1 from "../assets/images/landingpage/Pixel-True-Mockup-1.png";
import TELEPHONIA from "../assets/images/landingpage/TELEPHONIA.png";
import helloworld from "../assets/images/landingpage/hello-world.png";
import ITBlog from "../assets/images/landingpage/IT-Blog.png";
import digitek from "../assets/images/landingpage/digitek.png";
import teckrown from "../assets/images/landingpage/teckrown.png";
import Ellipse15 from "../assets/images/landingpage/Ellipse-15.png";
import Ellipse16 from "../assets/images/landingpage/Ellipse-16.png";
import Ellipse17 from "../assets/images/landingpage/Ellipse-17.png";
import Ellipse18 from "../assets/images/landingpage/Ellipse-18.png";
import Ellipse19 from "../assets/images/landingpage/Ellipse-19.png";
import ipad1 from "../assets/images/landingpage/ipad1.png";
import QRcode_perspective_matte from "../assets/images/landingpage/QRcode_perspective_matte.png";
import Tools_perspective_matte from "../assets/images/landingpage/Tools_perspective_matte.png";
import Box_perspective_matte from "../assets/images/landingpage/Box_perspective_matte.png";
import Diagram_perspective_matte from "../assets/images/landingpage/Diagram_perspective_matte.png";
import image_1 from "../assets/images/landingpage/image_1.png";
import Bank_perspective_matte from "../assets/images/landingpage/Bank_perspective_matte.png";
import Networking_perspective_matte from "../assets/images/landingpage/Networking_perspective_matte.png";
import Money_bag_perspective_matte from "../assets/images/landingpage/Money_bag_perspective_matte.png";
import Calendar_perspective_matte from "../assets/images/landingpage/Calendar_perspective_matte.png";
import PDF_perspective_matte from "../assets/images/landingpage/PDF_perspective_matte.png";
import image11 from "../assets/images/landingpage/1-1.png";
import intg4 from "../assets/images/landingpage/intg4.png";
import intg2 from "../assets/images/landingpage/intg2.png";
import intg1 from "../assets/images/landingpage/intg1.png";
import intg5 from "../assets/images/landingpage/intg5.png";
import intg3 from "../assets/images/landingpage/intg3.png";
import image2 from "../assets/images/landingpage/image-2.png";
import UntitledCopy from "../assets/images/landingpage/UntitledCopy.png";
import image_3 from "../assets/images/landingpage/image-3.png";
import image_6 from "../assets/images/landingpage/image-6.png";
import image_4 from "../assets/images/landingpage/image-4.png";
import image_5 from "../assets/images/landingpage/image-5.png";
import image_7 from "../assets/images/landingpage/image-7.png";
import image_8 from "../assets/images/landingpage/image-8.png";
import testi_s4_ic1 from "../assets/images/landingpage/testi_s4_ic1.png";
import Frame7 from "../assets/images/landingpage/Frame-7.png";
import image_9 from "../assets/images/landingpage/image-9.png";
import user5 from "../assets/images/landingpage/user5.png";
import user6 from "../assets/images/landingpage/user6.png";
import Avatar1 from "../assets/images/landingpage/Avatar1.png";
import Avatar2 from "../assets/images/landingpage/Avatar2.png";
import Avatar3 from "../assets/images/landingpage/Avatar3.png";
import Untitled from "../assets/images/landingpage/Untitled.png";
import Group_672 from "../assets/images/landingpage/Group-672.png";
import Group_673 from "../assets/images/landingpage/Group-673.png";
import Group_674 from "../assets/images/landingpage/Group-674.png";
import Group_675 from "../assets/images/landingpage/Group-675.png";
import Group_676 from "../assets/images/landingpage/Group-676.png";
import Group_677 from "../assets/images/landingpage/Group-677.png";
import Group_678 from "../assets/images/landingpage/Group-678.png";
import { useState } from "react";

export const LandingPage = () => {
  const [activefaq, setActivefaq] = useState(-1);
  return (
    <>
      {/* NavBar */}
      <nav class="navbar navbar-expand-lg" style={{ width: "100%" }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {" "}
            <img src={image1081} alt="" />
            <p>Work at the speed of thought.</p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="navbar-item collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Industries</a>
                <i class="fa-solid fa-angle-down"></i>
              </li>
              <li>
                <a href="#">Features</a>
                <i class="fa-solid fa-angle-down"></i>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
            <div class="navbar-right">
              <div class="user-icon">
                <i class="fa-regular fa-user"></i>
              </div>
              <div class="nav-btn">
                <button type="submit">
                  Free Trial <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/*  */}
      <header class="landing-page-header-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12">
              <div class="landing-page-header-left">
                <div class="landing-page-header-text">
                  <div class="landing-page-header-heading">
                    <h2>
                      Streamline your <span>Repair Business!</span>
                    </h2>
                  </div>
                  <div class="landing-page-header-para">
                    <p>
                      The best All-In-One Point of sale and CRM software for
                      service based businesses
                    </p>
                  </div>
                </div>
                <div class="landing-page-header-btn">
                  <button type="submit" class="landing-page-btn1">
                    Start free trial
                  </button>
                  <div class="landing-page-icon-btn">
                    <button type="submit" class="landing-page-btn2">
                      <i class="fa-solid fa-play"></i>
                    </button>
                    <span>View Demo</span>
                  </div>
                </div>
                <div class="landing-page-iconwithtext">
                  <div class="landing-page-text-one">
                    <button>
                      <i class="fa-solid fa-arrows-rotate"></i>
                    </button>
                    <span>Free 14 Days Trial</span>
                  </div>
                  <div class="landing-page-text-two">
                    <button>
                      <i class="fa-solid fa-credit-card"></i>
                    </button>
                    <span>No commitment/Cancel Anytime</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="xl-6 col-lg-6 col-md-12">
              <div class="landing-page-header-right">
                <div class="landing-page-header-bg">
                  <div class="landing-page-img">
                    <img src={PixelTrueMockup1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*  */}
      <section class="landing-page-hero-section">
        <div class="landing-page-hero-bg">
          <div class="landing-page-hero-content">
            <div class="landing-page-hero-heading">
              <h3>
                1500+ Beta Installations <span>and featured on:</span>
              </h3>
            </div>
            <div class="landing-page-hero-brands">
              <div class="landing-page-brands-img">
                <img src={TELEPHONIA} alt="" />
              </div>
              <div class="landing-page-brands-img">
                <img src={helloworld} alt="" />
              </div>
              <div class="landing-page-brands-img">
                <img src={ITBlog} alt="" />
              </div>
              <div class="landing-page-brands-img">
                <img src={digitek} alt="" />
              </div>
              <div class="landing-page-brands-img">
                <img src={teckrown} alt="" />
              </div>
            </div>
            <div class="landing-page-hero-heading2">
              <h3>
                Seamless <span>Workflow</span>
              </h3>
            </div>
            <div class="landing-page-hero-brands2">
              <div class="landing-page-brands-img">
                <img src={Ellipse15} alt="" />
                <p>Power Setting, configure to your preference</p>
              </div>
              <div class="landing-page-brands-img">
                <img src={Ellipse16} alt="" />
                <p>Easily trasnfer data in and out!</p>
              </div>
              <div class="landing-page-brands-img">
                <img src={Ellipse17} alt="" />
                <p>Manage Everything in one platform</p>
              </div>
              <div class="landing-page-brands-img">
                <img src={Ellipse18} alt="" />
                <p>Save 20+hours everyweek with the toolbox software</p>
              </div>
              <div class="landing-page-brands-img">
                <img src={Ellipse19} alt="" />
                <p>The most easy to use User interface and frenmdily design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section class="landing-page-user-interface">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12">
              <div class="landing-page-left-bg">
                <div class="landing-page-left-img">
                  <div class="landing-page-img">
                    <img src={ipad1} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12">
              <div class="landing-page-right-content">
                <div class="landing-page-heading">
                  <h3>
                    Easy to use <span>User Interface</span>
                  </h3>
                </div>
                <div class="landing-page-right-para">
                  <p>
                    Toolbox was deigned by technicians with simplicity in mind.
                    The easy-to-use user interface makes it incredibly easy to
                    manage the large amount of tasks a business does everyday.{" "}
                  </p>
                </div>
                <div class="landing-page-right-btn">
                  <div class="landing-page-right-icon">
                    <button class="landing-page-icon">
                      <i class="fa-solid fa-ticket"></i>
                    </button>
                    <span>Multi store Dashboard</span>
                  </div>
                  <div class="landing-page-right-icon">
                    <button class="landing-page-icon">
                      <i class="fa-solid fa-arrows-rotate"></i>
                    </button>
                    <span>Manage Multiple location</span>
                  </div>
                  <div class="landing-page-right-icon">
                    <button class="landing-page-icon">
                      <i class="fa-solid fa-arrow-down-long"></i>
                    </button>
                    <span>Manage all employees</span>
                  </div>
                  <div class="landing-page-button">
                    <button class="landing-page-bottom-button" type="submit">
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section class="landing-page-features">
        <div class="container-fluid">
          <div class="landing-page-features-heading">
            <h3>
              Key <span>Features</span>
            </h3>
            <div class="landing-page-features-btn">
              <button type="submit" class="landing-page-top-btn">
                Features
              </button>
            </div>
          </div>
          <div class="landing-page-features-main">
            <div class="landing-page-features-card">
              <div class="landing-page-features-card-img">
                <img src={QRcode_perspective_matte} alt="" />
              </div>
              <div class="landing-page-features-text">
                <div class="landing-page-card-heading">
                  <h4>IMEI/Serial # Managementi</h4>
                </div>
                <div class="landing-page-card-para">
                  <ul>
                    <li>Track IMEI History</li>
                    <li>Searlized Products</li>
                    <li>
                      Device Grading{" "}
                      <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="landing-page-features-card">
              <div class="landing-page-features-card-img">
                <img src={Tools_perspective_matte} alt="" />
              </div>
              <div class="landing-page-features-text">
                <div class="landing-page-card-heading">
                  <h4>Ticketing Syetem</h4>
                </div>
                <div class="landing-page-card-para">
                  <ul>
                    <li>Assign tickets for service</li>
                    <li>
                      Repair Status{" "}
                      <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="landing-page-features-card">
              <div class="landing-page-features-card-img">
                <img src={Box_perspective_matte} alt="" />
              </div>
              <div class="landing-page-features-text">
                <div class="landing-page-card-heading">
                  <h4>Inventory Mangement</h4>
                </div>
                <div class="landing-page-card-para">
                  <ul>
                    <li>Manage all products</li>
                    <li>Purchase orders</li>
                    <li>
                      Tranfer Inventory{" "}
                      <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="landing-page-features-card">
              <div class="landing-page-features-card-img">
                <img src={Diagram_perspective_matte} alt="" />
              </div>
              <div class="landing-page-features-text">
                <div class="landing-page-card-heading">
                  <h4>Insightful Anlaytics</h4>
                </div>
                <div class="landing-page-card-para">
                  <ul>
                    <li>Sales repeorts</li>
                    <li>expense report</li>
                    <li>
                      KPI dashbaord{" "}
                      <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="landing-page-features-card">
              <div class="landing-page-features-card-img">
                <img src={image_1} alt="" />
              </div>
              <div class="landing-page-features-text">
                <div class="landing-page-card-heading">
                  <h4>Email and SMS</h4>
                </div>
                <div class="landing-page-card-para">
                  <ul>
                    <li>Send bulk emails</li>
                    <li>Contact customers</li>
                    <li>
                      direclty
                      <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="landing-page-features-main">
            <div class="landing-page-features-card">
              <div class="landing-page-features-card-img">
                <img src={Bank_perspective_matte} alt="" />
              </div>
              <div class="landing-page-features-text">
                <div class="landing-page-card-heading">
                  <h4>Accounting</h4>
                </div>
                <div class="landing-page-card-para">
                  <ul>
                    <li>Reports</li>
                    <li>Quickbooks integration</li>
                    <li>
                      Invite accountant{" "}
                      <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="landing-page-features-card">
              <div
                class="landing-page-features-card-img"
                style={{ position: "absolute", top: "0px" }}
              >
                <img src={Networking_perspective_matte} alt="" />
              </div>
              <div class="landing-page-features-text">
                <div class="landing-page-card-heading">
                  <h4 style={{ width: "200px" }}>
                    Customer Relationship Management
                  </h4>
                </div>
                <div class="landing-page-card-para">
                  <ul>
                    <li>Build and manage cutomer Database</li>
                    <li>Customer history</li>
                    <li>
                      Loyalty points{" "}
                      <span>
                        <i class="-fa-solid fa-angle-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="landing-page-features-card">
              <div class="landing-page-features-card-img">
                <img src={Money_bag_perspective_matte} alt="" />
              </div>
              <div class="landing-page-features-text">
                <div class="landing-page-card-heading">
                  <h4>Point of Sale</h4>
                </div>
                <div class="landing-page-card-para">
                  <ul>
                    <li>Accept payments</li>
                    <li>Collect client info</li>
                    <li>
                      Make aqusitions{" "}
                      <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="landing-page-features-card">
              <div class="landing-page-features-card-img">
                <img src={Calendar_perspective_matte} alt="" />
              </div>
              <div class="landing-page-features-text">
                <div class="landing-page-card-heading">
                  <h4>Appointments and Calender</h4>
                </div>
                <div class="landing-page-card-para">
                  <ul>
                    <li>Easily set appointments</li>
                    <li>Mange your day-today</li>
                    <li>
                      schedule
                      <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="landing-page-features-card">
              <div class="landing-page-features-card-img">
                <img src={PDF_perspective_matte} alt="" />
              </div>
              <div class="landing-page-features-text">
                <div class="landing-page-card-heading">
                  <h4>Invoicing and billing</h4>
                </div>
                <div class="landing-page-card-para">
                  <ul>
                    <li>Create invoices</li>
                    <li>Partial/split payments</li>
                    <li>
                      3rd party payments
                      <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section class="landing-page-industries">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12">
              <div class="landing-page-industries-left">
                <div class="landing-page-industries-bg">
                  <div class="landing-page-industries-img">
                    <img src={image11} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12">
              <div class="landing-page-industries-right">
                <div class="landing-page-industries-heading">
                  <h3>
                    Industries we <br />
                    <span>Serve</span>
                  </h3>
                  <div class="landing-page-industries-btn">
                    <button type="submit">Industries</button>
                  </div>
                </div>
                <div class="landing-page-industries-para">
                  <p>
                    Toolbox was designed to work seamlessly with any retail shop
                    or individual reseller, but our unique features put us ahead
                    when it comes to service based retail business
                  </p>
                </div>
                <div class="landing-page-industries-list">
                  <ul>
                    <li> Cell phone repair shop </li>
                    <li> Computer repair shop</li>
                    <li>Watch repair shop</li>
                    <li>Jewellery shop</li>
                    <li>Any retail shop</li>
                  </ul>
                  <ul>
                    <li>Independent sellers </li>
                    <li>Wholesalers</li>
                    <li>Retail store</li>
                  </ul>
                </div>
                <div class="landing-page-industries-bottom">
                  <button type="submit">Discovery Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section class="landing-page-apps">
        <div class="landing-page-apps-heading">
          <h3>
            Integration With <span>Popular Apps</span>
          </h3>
          <div class="landing-page-apps-btn">
            <button type="submit">Integrations</button>
          </div>
        </div>
        <div class="landing-page-apps-para">
          <p>
            Toolbox integrates with popular apps. Easy to connect and collab
          </p>
        </div>
        <div class="landing-page-apps-bg">
          <div class="landing-page-apps-one">
            <div class="landing-page-circle-text">
              <p>More Comming Soon!</p>
            </div>
            <img src={intg4} class="landing-page-circle-img1" alt="" />
            <img src={intg2} class="landing-page-circle-img2" alt="" />
          </div>
          <div class="landing-page-apps-two">
            <img src={intg1} class="landing-page-circle-img3" alt="" />
            <img src={intg5} class="landing-page-circle-img4" alt="" />
            <img src={image2} class="landing-page-circle-img5" alt="" />
            <img src={intg3} class="landing-page-circle-img6" alt="" />
          </div>
        </div>
      </section>

      {/*  */}
      <section class="landing-page-price">
        <div class="landing-page-price-heading">
          <h3>
            Transparent <span>Pricing</span>
          </h3>
          <p>
            Lowest pricing in the industry. No commitment, No hidden fees,
            Cancel anytime.
          </p>
          <div class="landing-page-price-btn">
            <button type="submit">Pricing</button>
          </div>
        </div>
        <div class="landing-page-price-cards">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-12">
                <div
                  class="landing-page-price-card1"
                  style={{ height: "100%" }}
                >
                  <div class="landing-page-card-heading">
                    <h3>ToolKit</h3>
                    <p>Try it as long as you like</p>
                  </div>
                  <div class="landing-page-card-content">
                    <p>
                      <span>
                        <i class="fa-solid fa-check"></i>
                      </span>{" "}
                      Experience all of toolbox
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-check"></i>
                      </span>{" "}
                      All features, no restrictions
                    </p>
                    <p>
                      <span>
                        <i class="fa-solid fa-check"></i>
                      </span>{" "}
                      No credit card required
                    </p>
                  </div>
                  <div class="landing-page-card-btn">
                    <button type="submit">14 Day Free Trial</button>
                  </div>
                </div>
              </div>

              <div class="col-xl-8 col-lg-8 col-md-12">
                <div class="landing-page-price-card2">
                  <div class="landing-page-card-heading">
                    <h3>ToolBox</h3>
                    <p>Limtless possibilites</p>
                  </div>
                  <div class="landing-page-card-content">
                    <div
                      style={{ display: "inline-block" }}
                      class="landing-page-media"
                    >
                      <p>
                        <span>
                          <i class="fa-solid fa-check"></i>
                        </span>{" "}
                        Unlimited Storage
                      </p>
                      <p>
                        <span>
                          <i class="fa-solid fa-check"></i>
                        </span>{" "}
                        Unlimited Tickets/Users
                      </p>
                      <p>
                        <span>
                          <i class="fa-solid fa-check"></i>
                        </span>{" "}
                        All fetures
                      </p>
                      <p>
                        <span>
                          <i class="fa-solid fa-check"></i>
                        </span>{" "}
                        24/7 Customer support
                      </p>
                    </div>
                    <div
                      style={{
                        display: "inline-block",
                        marginLeft: "44px",
                        position: "relative",
                        bottom: "35px",
                      }}
                      class="landing-page-media2"
                    >
                      <p>
                        <span>
                          <i class="fa-solid fa-check"></i>
                        </span>{" "}
                        One Location
                      </p>
                      <p>
                        <span>
                          <i class="fa-solid fa-check"></i>
                        </span>{" "}
                        All Integrations
                      </p>
                      <p>
                        <span>
                          <i class="fa-solid fa-check"></i>
                        </span>{" "}
                        Live demo
                      </p>
                    </div>
                  </div>
                  <div class="landing-page-card-btn">
                    <button type="submit">Choose plan ($34.99 USD)</button>
                    <p>Per Month/Per Store $USD</p>
                  </div>
                  <div class="landing-page-card-img">
                    <img src={UntitledCopy} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="landing-page-price-bottom">
            <p>No Commitment</p>
            <p>Cancel anytime</p>
            <p>No hidden fees.</p>
          </div>
        </div>
      </section>

      {/*  */}
      <section class="landing-page-standard-devices">
        <div class="landing-page-devices-heading">
          <h3>
            Works With All <span>Standard Devices</span>
          </h3>
          <p>Use any exsisitng terminal or device, with simple setup</p>
        </div>
        <div class="landing-page-devices-img d-flex">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 imgs">
                <img src={image_3} alt="" />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 imgs">
                <img src={image_6} alt="" />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 imgs">
                <img src={image_4} alt="" />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 imgs">
                <img src={image_5} alt="" />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 imgs">
                <img src={image_7} alt="" />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 imgs">
                <img src={image_8} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section class="landing-page-customers">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12 p-0">
              <div class="landing-page-customer-left">
                <div class="landing-page-customer-btn">
                  <button type="submit">Testimonials</button>
                </div>
                <div class="landing-page-customer-heading">
                  <h3>
                    Loved by <span>Customers</span>
                  </h3>
                  <p>
                    Toolbox loved from thousands customer worldwide and is
                    trusted from big companies.
                  </p>
                </div>
                <div class="landing-page-left-content">
                  <div class="landing-page-download-img">
                    <img src={testi_s4_ic1} alt="" />
                    <div class="landing-page-download-text">
                      <h3>1500+</h3>
                      <p>Beta Downloads and Installations</p>
                    </div>
                  </div>
                  <div class="landing-page-left-card">
                    <div class="landing-page-star-card">
                      <img src={Frame7} alt="" />
                      {/* <!-- <div class="landing-page-card-icons">
                                        <div class="landing-page-iconsss">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-regular fa-star-half-stroke"></i>
                                        </div>
                                        <div class="landing-page-card-text">
                                            <span>Read our reviews on</span>
                                        </div>
                                    </div> --> */}
                      {/* <!-- <div class="landing-page-card-img">
                                        <img src="images/customers/Rectangle-2.png" alt="">
                                    </div>
                                    <div class="landing-page-card-img2">
                                        <img src="images/customers/g2-seeklogo.com2.png" alt="">
                                    </div> --> */}
                    </div>
                    <div class="landing-page-card-rating">
                      <h3>4.8/5</h3>
                      <div class="landing-page-rating-icons">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <p>Based on 125 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-md-6 col-sm-12 p-0">
              <div class="landing-page-customer-bg">
                <div class="landing-page-customers-card">
                  <div class="landing-page-customer-cards">
                    <div class="landing-page-card-img">
                      <img src={image_9} alt="" />
                    </div>
                    <div class="landing-page-customer-card-content">
                      <div class="landing-page-icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <div class="landing-page-text">
                        <p>
                          “You can even send emails to Evernote and gatherall of
                          the things you need in a single place.”
                        </p>
                        <p class="landing-page-p">
                          Aadil H. / Owner <span>Telephonia</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="landing-page-customer-cards positions">
                    <div class="landing-page-card-img">
                      <img src={user5} alt="" />
                    </div>
                    <div class="landing-page-customer-card-content">
                      <div class="landing-page-icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <div class="landing-page-text">
                        <p>
                          “You can even send emails to Evernote and gatherall of
                          the things you need in a single place.”
                        </p>
                        <p class="landing-page-p">
                          Aadil H. / Owner <span>Telephonia</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="landing-page-customer-cards">
                    <div class="landing-page-card-img">
                      <img src={user6} alt="" />
                    </div>
                    <div class="landing-page-customer-card-content">
                      <div class="landing-page-icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <div class="landing-page-text">
                        <p>
                          “You can even send emails to Evernote and gatherall of
                          the things you need in a single place.”
                        </p>
                        <p class="landing-page-p">
                          Aadil H. / Owner <span>Telephonia</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section class="landing-page-blog">
        <div class="landing-page-blog-header">
          <div class="landing-page-blog-heading">
            <h3>
              Recent <span>Blog Posts</span>
            </h3>
            <p>Here's what we've been up to recently...</p>
          </div>
          <div class="landing-page-blog-btn">
            <button>View All</button>
          </div>
        </div>
        <div class="landing-page-blog-main">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="landing-page-blog-card card1">
                <div class="landing-page-blog-card-text">
                  <h3>Future of Work With A.I</h3>
                  <p>
                    Majority of people will work in jobs that don't exist today.
                  </p>
                </div>
                <div class="landing-page-blog-card-profile">
                  <div class="landing-page-profile-img">
                    <img src={Avatar1} alt="" />
                  </div>
                  <div class="landing-page-profile-name">
                    <h5>Lina Hicks</h5>
                    <span class="landing-page-icon">
                      <i class="fa-solid fa-check"></i>
                    </span>
                    <span>Verified writer</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="landing-page-blog-card card2">
                <div class="landing-page-blog-card-text">
                  <h3>Future of Data</h3>
                  <p>
                    Thanks to never-ending piles of data & the amount of insight
                  </p>
                </div>
                <div class="landing-page-blog-card-profile">
                  <div class="landing-page-profile-img">
                    <img src={Avatar2} alt="" />
                  </div>
                  <div class="landing-page-profile-name">
                    <h5>Tyler Murray</h5>
                    <span class="landing-page-icon">
                      <i class="fa-solid fa-check"></i>
                    </span>
                    <span>Verified writer</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="landing-page-blog-card card3">
                <div class="landing-page-blog-card-text">
                  <h3>Future of Learning</h3>
                  <p>
                    A constant ability to learn will be on the most crucial
                    skills
                  </p>
                </div>
                <div class="landing-page-blog-card-profile">
                  <div class="landing-page-profile-img">
                    <img src={Avatar3} alt="" />
                  </div>
                  <div class="landing-page-profile-name">
                    <h5>Warren Casey</h5>
                    <span class="landing-page-icon">
                      <i class="fa-solid fa-check"></i>
                    </span>
                    <span>Verified writer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section class="landing-page-faq">
        <div class="landing-page-faq-heading">
          <h3>
            <span>Frequently Asked Questions</span>
          </h3>
          <button>Visit FAQ</button>
        </div>
        <div class="landing-page-faq-main">
          <div
            class={`landing-page-faq-card ${
              activefaq === 0 ? "activefaq" : ""
            }`}
          >
            <div class="landing-page-faq-card-heading">
              <h4>How do i pay for the Premium plan?</h4>
              <span
                onClick={() => setActivefaq((prev) => (prev === 0 ? -1 : 0))}
              >
                {activefaq === 0 ? (
                  <i class="fa-solid fa-minus"></i>
                ) : (
                  <i class="fa-solid fa-plus"></i>
                )}
              </span>
            </div>
            <div class="landing-page-faq-card-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique viverra aliquet lectus morbi suspendisse pellentesque
                facilisis et. Duis volutpat at iaculis vitae at ut ultricies.
              </p>
            </div>
          </div>
          <div
            class={`landing-page-faq-card ${
              activefaq === 1 ? "activefaq" : ""
            }`}
          >
            <div class="landing-page-faq-card-heading">
              <h4>How do i pay for the Premium plan?</h4>
              <span
                onClick={() => setActivefaq((prev) => (prev === 1 ? -1 : 1))}
              >
                {activefaq === 1 ? (
                  <i class="fa-solid fa-minus"></i>
                ) : (
                  <i class="fa-solid fa-plus"></i>
                )}
              </span>
            </div>
            <div class="landing-page-faq-card-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique viverra aliquet lectus morbi suspendisse pellentesque
                facilisis et. Duis volutpat at iaculis vitae at ut ultricies.
              </p>
            </div>
          </div>
          <div
            class={`landing-page-faq-card ${
              activefaq === 2 ? "activefaq" : ""
            }`}
          >
            <div class="landing-page-faq-card-heading">
              <h4>Will ToolBox work with my exisiting hardware?</h4>
              <span
                onClick={() => setActivefaq((prev) => (prev === 2 ? -1 : 2))}
              >
                {activefaq === 2 ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}
              </span>
            </div>
            <div class="landing-page-faq-card-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique viverra aliquet lectus morbi suspendisse pellentesque
                facilisis et. Duis volutpat at iaculis vitae at ut ultricies.
              </p>
            </div>
          </div>
          <div
            class={`landing-page-faq-card ${
              activefaq === 3 ? "activefaq" : ""
            }`}
          >
            <div class="landing-page-faq-card-heading">
              <h4>Who can use Toolbox?</h4>
              <span
                onClick={() => setActivefaq((prev) => (prev === 3 ? -1 : 3))}
              >
                {activefaq === 3 ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}
              </span>
            </div>
            <div class="landing-page-faq-card-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique viverra aliquet lectus morbi suspendisse pellentesque
                facilisis et. Duis volutpat at iaculis vitae at ut ultricies.
              </p>
            </div>
          </div>
          <div
            class={`landing-page-faq-card ${
              activefaq === 4 ? "activefaq" : ""
            }`}
          >
            <div class="landing-page-faq-card-heading">
              <h4>How does the Point of sale work?</h4>
              <span
                onClick={() => setActivefaq((prev) => (prev === 4 ? -1 : 4))}
              >
                {activefaq === 4 ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}
              </span>
            </div>
            <div class="landing-page-faq-card-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique viverra aliquet lectus morbi suspendisse pellentesque
                facilisis et. Duis volutpat at iaculis vitae at ut ultricies.
              </p>
            </div>
          </div>
          <div
            class={`landing-page-faq-card ${
              activefaq === 5 ? "activefaq" : ""
            }`}
          >
            <div class="landing-page-faq-card-heading">
              <h4>How does the Point of sale work?</h4>
              <span
                onClick={() => setActivefaq((prev) => (prev === 5 ? -1 : 5))}
              >
                {activefaq === 5 ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}
              </span>
            </div>
            <div class="landing-page-faq-card-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique viverra aliquet lectus morbi suspendisse pellentesque
                facilisis et. Duis volutpat at iaculis vitae at ut ultricies.
              </p>
            </div>
          </div>
        </div>
        <div class="landing-page-faq-footer">
          <h4>Still have a questions ?</h4>
          <p>
            if you cannot find answer to your question in our FAQ, you can
            always <strong>conact us.</strong> We will answer to you shortly!
          </p>
        </div>
      </section>

      {/*  */}
      <footer class="landing-page-footer">
        <div class="landing-page-footer-email">
          <div class="row">
            <div class="col-lg-5 col-md-12">
              <div class="landing-page-footer-email-text">
                <p>Freakishly simple. Downright useful.</p>
                <p> Ready to make the jump?</p>
              </div>
            </div>
            <div class="col-lg-7 col-md-12">
              <div class="landing-page-input-btn">
                <input type="email" placeholder="Enter your work email" />
                <button>Sign me Up</button>
              </div>
            </div>
          </div>
        </div>
        <div class="landing-page-footer-padding">
          <div class="row">
            <div class="col-lg-3 col-md-6 margin">
              <div class="landing-page-footer-img">
                <img src={Untitled} alt="" />
              </div>
              <div class="landing-page-para">
                <p>Work at the speed of thought.</p>
              </div>
              <div class="landing-page-footer-icon">
                <span>
                  <i class="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i class="fa-brands fa-twitter"></i>
                </span>
                <span>
                  <i class="fa-brands fa-instagram"></i>
                </span>
                <span>
                  <i class="fa-brands fa-youtube"></i>
                </span>
              </div>
              <div class="landing-page-footer-imgs">
                <img src={Group_672} alt="" />
                <img src={Group_673} alt="" />
                <img src={Group_674} alt="" />
                <img src={Group_675} alt="" />
                <img src={Group_676} alt="" />
                <img src={Group_677} alt="" />
                <img src={Group_678} alt="" />
              </div>
            </div>
            <div class="col-lg-3 col-md-6 margin">
              <div class="landing-page-link-heading">
                <h5>Get in Touch</h5>
              </div>
              <ul class="landing-page-para">
                <li>helloupay@email.com</li>
                <li>734 Broadway, Floor 5 New York, NY 10003</li>
                <li>Toll free: +1-1800-473-4637 Canada: 647-529-5290</li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-4 margin">
              <div class="landing-page-link-heading">
                <h5>Jump To</h5>
              </div>
              <ul class="landing-page-para">
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Industries</li>
                <li>About us</li>
                <li>Contact</li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-4 margin">
              <div class="landing-page-link-heading">
                <h5>HELP LINK</h5>
              </div>
              <ul class="landing-page-para">
                <li>How to Setuo</li>
                <li>How it work</li>
                <li>Video tutorials</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-4 margin">
              <div class="landing-page-link-heading">
                <h5>Legal</h5>
              </div>
              <ul class="landing-page-para">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div class="landing-page-footer-bottom">
            <p>© Toolbox 2023</p>
            <p class="landing-page-width">
              Upay is a financial technology company, not a bank. Banking
              services are provided by Column N.A., member FDIC. “Column” is a
              registered trademark of Column National Association.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
