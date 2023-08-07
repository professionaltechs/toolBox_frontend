import "../assets/css/repairticket.css"
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
import { SideBarOne } from "../components/SideBarOne";

export const RepairTickets = () => {
  return (
    <div className="App">
      <SideBarOne/>

      <div className="header bg-white rounded-5 d-flex justify-content-around align-items-center  col-12">
        <div className="logo d-flex justify-content-center ms-5  col-4">
          <div>
            <h6 className="logo-heading">Toolbox.co</h6>
          </div>
        </div>
        <div className="navigation d-flex justify-content-center align-items-center col-8">
          <div>
            <ul>
              <li>
                <form className="input-form rounded-4">
                  <a href="d">
                    <FontAwesomeIcon
                      style={{ color: "#A2A2A2" }}
                      className="faMagnifyingGlass fa-lg"
                      icon={faMagnifyingGlass}
                    />
                  </a>
                  <input
                    type="search"
                    placeholder="Search"
                    className="search rounded-4"
                  ></input>
                </form>
              </li>
              <li>
                <FontAwesomeIcon className="faItem fa-xl" icon={faGear} />
              </li>
              <li>
                <FontAwesomeIcon className="faItem fa-xl" icon={faClock} />
              </li>
              <li>
                <FontAwesomeIcon className="faItem fa-xl" icon={faBell} />
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
      </div>

      
      <div className="col-12 mt-4  d-flex justify-content-center align-items-center">
        <div style={{marginLeft:"150px"}} className="col-10 bg-white rounded-4 gap-5 p-3 d-flex justify-content-between align-items-center">
          <div className=" rounded-4 gap-4 p-1  d-flex justify-content-center align-items-center">
            <div>
              <FontAwesomeIcon
                style={{ color: "#06AD4F" }}
                className="fa-2xl"
                icon={faUsers}
              />
            </div>
            <div className="text-center">
              <h7 style={{ color: "#B7B7B7" }}>Total active repairs</h7>
              <p style={{ fontSize: "13px" }} className="m-0">
              <FontAwesomeIcon style={{color:"#338659"}} icon={faArrowDown}></FontAwesomeIcon> <span style={{color:"#338659"}}>16%</span> this month
              </p>
            </div>
            <div>
              <h2>54</h2>
            </div>
          </div>

          <div className="rounded-4 gap-4 p-1  d-flex justify-content-center align-items-center">
            <div>
              <FontAwesomeIcon
                style={{ color: "#06AD4F" }}
                className="fa-2xl"
                icon={faUser}
              />
            </div>
            <div className="text-center">
              <h7 style={{ color: "#B7B7B7" }}>New repairs(Today)</h7>
              <p style={{ fontSize: "13px" }} className="m-0">
               <FontAwesomeIcon style={{color:"#A71A4C"}} icon={faArrowUp}></FontAwesomeIcon> <span style={{color:"#A71A4C"}}>16%</span> this month
              </p>
            </div>
            <div>
              <h2>18</h2>
            </div>
          </div>

          <div className="rounded-4 gap-4 p-1 d-flex justify-content-center align-items-center">
            <div>
              <FontAwesomeIcon
                style={{ color: "#06AD4F" }}
                className="fa-2xl"
                icon={faDesktop}
              />
            </div>
            <div className="text-center">
              <h7 style={{ color: "#B7B7B7" }}>Active Now</h7>
            
            </div>
            <div>
              <h2>189</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 mb-4 d-flex justify-content-center align-items-center mt-2">
        <div style={{marginLeft:"150px"}} className="col-10 bg-white rounded-4 d-flex flex-column justify-content-center align-items-center">
          <div className="col-11 p-3 rounded-4 d-flex gap-3 justify-content-between bg-white align-items-center">
            <div>
              <h5 style={{ fontWeight: "bolder" }}>Active Tickets</h5>
              <p style={{ color: "#75C0AA" }}>Active Tickets</p>
            </div>

            <div
              style={{ backgroundColor: "#FAFBFF" }}
              className="rounded-3 d-flex p-1 justify-content-center align-items-center"
            >
              <div>
                <label style={{ color: "#9B9C9F", fontSize: "13px" }}>
                  Sort by:
                </label>
              </div>
              <div>
                <select
                  style={{
                    backgroundColor: "#FAFBFF",
                    fontSize: "13px",
                    border: "none",
                  }}
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>First Name</option>
                  <option value="1">Last Name</option>
                </select>
              </div>
            </div>

            <div
              style={{ backgroundColor: "#FAFBFF" }}
              className="rounded-3 d-flex p-1 justify-content-center align-items-center"
            >
              <div>
                <label style={{ color: "#9B9C9F", fontSize: "13px" }}>
                  Date:
                </label>
              </div>
              <div>
                <select
                  style={{
                    backgroundColor: "#FAFBFF",
                    fontSize: "13px",
                    border: "none",
                  }}
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Newest</option>
                  <option value="1">Oldest</option>
                </select>
              </div>
            </div>

            <div
              style={{ backgroundColor: "#FAFBFF" }}
              className="rounded-3 d-flex p-1 justify-content-center align-items-center"
            >
              <div>
                <label style={{ color: "#9B9C9F", fontSize: "13px" }}>
                  Status:
                </label>
              </div>
              <div>
                <select
                  style={{
                    backgroundColor: "#FAFBFF",
                    fontSize: "13px",
                    border: "none",
                  }}
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Open</option>
                  <option value="1">Closed</option>
                </select>
              </div>
            </div>

            <div>
              <form
                style={{ backgroundColor: "#FAFBFF" }}
                className="input-form rounded-4"
              >
                <a href="d">
                  <FontAwesomeIcon
                    style={{ color: "#A2A2A2" }}
                    className="faMagnifyingGlass fa-lg"
                    icon={faMagnifyingGlass}
                  />
                </a>
                <input
                  type="search"
                  style={{ backgroundColor: "#FAFBFF" }}
                  placeholder="Search"
                  className="search rounded-4"
                ></input>
              </form>
            </div>
          </div>
          <div className="col-11 bg-white rounded-4">
            <table style={{ fontSize: "13px" }} className="table">
              <thead>
                <tr className="text-center">
                  <th scope="col">Customer Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Device</th>
                  <th scope="col">Service</th>
                  <th scope="col">Date Created</th>
                  <th scope="col">Ticket#</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>Jane Cooper</td>
                  <td>(225) 555-0118</td>
                  <td>
                    Apple <br></br> <span>Iphone14</span>
                  </td>
                  <td>Screen Replacement</td>
                  <td>
                    <p className="m-0">12/07/2023</p>
                    <p className="m-0">Tech: Nile Khokar</p>
                    <p className="m-0">Last Update: 2:43 Pm</p>
                  </td>
                  <td>t100</td>
                  <td>
                    <a
                      className="text-success"
                      style={{
                        backgroundColor: "#A7E7D8",
                        border: "solid 1px #55A791",
                        padding:"3px 10px"
                      }}
                    >
                      New
                    </a>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>Jane Cooper</td>
                  <td>(225) 555-0118</td>
                  <td>
                    Apple <br></br> <span>Iphone14</span>{" "}
                  </td>
                  <td>Screen Replacement</td>
                  <td>
                    12/07/2023 <br></br> Tech: <span>Nile Khokar</span>{" "}
                  </td>
                  <td>t100</td>
                  <td>
                    <a
                      className="text-alert"
                      style={{
                        padding:"3px 10px",
                        color:"red",
                        backgroundColor: "#FAC7C3",
                        border: "solid 1px #A95C5B",
                      }}
                    >
                      Not fixable
                    </a>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>Jane Cooper</td>
                  <td>(225) 555-0118</td>
                  <td>
                    Apple <br></br> <span>Iphone14</span>{" "}
                  </td>
                  <td>Screen Replacement</td>
                  <td>
                    12/07/2023 <br></br> Tech: <span>Nile Khokar</span>{" "}
                  </td>
                  <td>t100</td>
                  <td>
                    <a
                    style={{padding:"3px 10px"}}
                      className="bg-primary text-light"
                    >
                      Sent Out
                    </a>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>Jane Cooper</td>
                  <td>(225) 555-0118</td>
                  <td>
                    Apple <br></br> <span>Iphone14</span>{" "}
                  </td>
                  <td>Screen Replacement</td>
                  <td>
                    12/07/2023 <br></br> Tech: <span>Nile Khokar</span>{" "}
                  </td>
                  <td>t100</td>
                  <td>
                    <a
                      className="bg-warning text-dark"
                      style={{padding:"3px 10px"}}
                    >
                      Finished
                    </a>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>Jane Cooper</td>
                  <td>(225) 555-0118</td>
                  <td>
                    Apple <br></br> <span>Iphone14</span>{" "}
                  </td>
                  <td>Screen Replacement</td>
                  <td>
                    12/07/2023 <br></br> Tech: <span>Nile Khokar</span>{" "}
                  </td>
                  <td>t100</td>
                  <td>
                    <a
                      style={{
                        padding:"3px 10px",
                        color:"#3B5F82",
                        backgroundColor: "#DF9FFF",
                        border: "solid 1px #DF9FFF",
                      }}
                    >
                      Waiting on customer
                    </a>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>Jane Cooper</td>
                  <td>(225) 555-0118</td>
                  <td>
                    Apple <br></br> <span>Iphone14</span>{" "}
                  </td>
                  <td>Screen Replacement</td>
                  <td>
                    12/07/2023 <br></br> Tech: <span>Nile Khokar</span>{" "}
                  </td>
                  <td>t100</td>
                  <td>
                    <a
                      style={{
                        padding:"3px 10px",
                        color:"#3B5F82",
                        backgroundColor: "#DF9FFF",
                        border: "solid 1px #DF9FFF",
                      }}
                    >
                      Waiting on customer
                    </a>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>Jane Cooper</td>
                  <td>(225) 555-0118</td>
                  <td>
                    Apple <br></br> <span>Iphone14</span>{" "}
                  </td>
                  <td>Screen Replacement</td>
                  <td>
                    12/07/2023 <br></br> Tech: <span>Nile Khokar</span>{" "}
                  </td>
                  <td>t100</td>
                  <td>
                    <a
                      style={{
                        padding:"3px 10px",
                        color:"#3B5F82",
                        backgroundColor: "#DF9FFF",
                        border: "solid 1px #DF9FFF",
                      }}
                    >
                      Waiting on customer
                    </a>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>Jane Cooper</td>
                  <td>(225) 555-0118</td>
                  <td>
                    Apple <br></br> <span>Iphone14</span>{" "}
                  </td>
                  <td>Screen Replacement</td>
                  <td>
                    12/07/2023 <br></br> Tech: <span>Nile Khokar</span>{" "}
                  </td>
                  <td>t100</td>
                  <td>
                    <a
                      style={{
                        padding:"3px 10px",
                        color:"#3B5F82",
                        backgroundColor: "#DF9FFF",
                        border: "solid 1px #DF9FFF",
                      }}
                    >
                      Waiting on customer
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-11 rounded-4 d-flex gap-3 justify-content-between bg-white align-items-center">
            <div>
              <p style={{ color: "#B4B4B6" }}>
                Showing data 1 to 8 of 256k entries
              </p>
            </div>

            <div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item me-2">
                    <a
                      style={{ backgroundColor: "#F5F5F5" }}
                      className="page-link text-dark"
                      href="No link"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item me-2">
                    <a
                      style={{ backgroundColor: "#F5F5F5" }}
                      className="page-link text-dark"
                      href="No link"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item me-2">
                    <a
                      style={{ backgroundColor: "#F5F5F5" }}
                      className="page-link text-dark"
                      href="No link"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item me-2">
                    <a
                      style={{ backgroundColor: "#F5F5F5" }}
                      className="page-link text-dark"
                      href="No link"
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item me-2">
                    <a
                      style={{ backgroundColor: "#F5F5F5" }}
                      className="page-link text-dark"
                      href="No link"
                    >
                      4
                    </a>
                  </li>
                  <li className="me-2">...</li>
                  <li className="page-item me-2">
                    <a
                      style={{ backgroundColor: "#F5F5F5" }}
                      className="page-link text-dark"
                      href="No link"
                    >
                      40
                    </a>
                  </li>
                  <li className="page-item me-2">
                    <a
                      style={{ backgroundColor: "#F5F5F5" }}
                      className="page-link text-dark"
                      href="No link"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
