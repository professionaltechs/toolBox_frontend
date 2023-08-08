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
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";

export const RepairTickets = () => {
  return (
    <div className="App">
        <div className="side-menu">
              <div className="home-icon">
                      <FontAwesomeIcon style={{color:"white"}} className="fa-2xl" icon={faHouse}></FontAwesomeIcon>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <FontAwesomeIcon style={{color:"white"}} className="fa-xl cash-register" icon={faCashRegister}></FontAwesomeIcon>
                    <a  href="no link">
                    Cash Register
                    </a>
                    </li>

                  <li>
                    <FontAwesomeIcon style={{color:"white"}} className="fa-xl repairs" icon={faWrench}></FontAwesomeIcon>
                    <a href="no link">
                    Repairs
                    </a>
                    </li>

                  <li>
                    <FontAwesomeIcon style={{color:"white"}} className="fa-xl devices" icon={faMobileScreenButton}></FontAwesomeIcon>
                    <a href="no link">
                    Devices
                    </a>
                    
                    </li>

                  <li>
                    <FontAwesomeIcon style={{color:"white"}} className="fa-xl customers" icon={faUser}></FontAwesomeIcon>
                    <a href="no link">
                    Customers
                    </a>
                    </li>

                  <li>
                    <FontAwesomeIcon style={{color:"white"}} className="fa-xl invoice" icon={faFilePdf}></FontAwesomeIcon>
                    <a href="no link">
                    Invoice
                    </a>
                    </li>

                  <li>
                    <FontAwesomeIcon style={{color:"white"}} className="fa-xl purchase-order" icon={faBoxOpen}></FontAwesomeIcon>
                    <a href="no link" className="purchase-link">
                    Purchase Order
                    </a>
                    </li>

                  <li>
                    <FontAwesomeIcon style={{color:"white"}} className="fa-xl appointment" icon={faCalendarCheck}></FontAwesomeIcon>
                    <a href="no link">
                    Appointment
                    </a>
                    </li>

                  <li>
                    <FontAwesomeIcon style={{color:"white"}} className="fa-xl products" icon={faCartPlus}></FontAwesomeIcon>
                    <a href="no link">
                    Products
                    </a>
                    </li>
                </ul>
              </div>
              <div className="notes-icon">
                <div>
                  <FontAwesomeIcon style={{color:"white"}} className="fa-md" icon={faPencil}></FontAwesomeIcon>
                  </div>
                  <div>
                  <p className="notes-para">New-Note</p>
                  </div>
              </div>
            </div>

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
                      <FontAwesomeIcon className="fa-xl" icon={faGear}></FontAwesomeIcon>
                    </div>
                  <div>
                      <FontAwesomeIcon className='fa-xl' icon={faClock}></FontAwesomeIcon>
                    </div>
                    <div>
                      <FontAwesomeIcon className='fa-xl' icon={faBell}></FontAwesomeIcon>
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

            <div className='stats'>
                <div className='stats-container'>
                  <div>
                    <FontAwesomeIcon style={{color:"#0BA951"}} className='fa-xl icon' icon={faUsers}></FontAwesomeIcon>
                  </div>
                  <div className='stats-heading'>
                    <h5>Total active repairs</h5>
                    <p><FontAwesomeIcon  icon={faArrowUp} style={{color:"#2F8A5F"}}></FontAwesomeIcon> <span style={{color:"#2F8A5F",fontWeight:"bolder"}}>16%</span> this month</p>
                  </div>
                  <div>
                    <h2>54</h2>
                  </div>
                </div>

                <div className='stats-container'>
                  <div>
                    <FontAwesomeIcon style={{color:"#0BA951"}} className='fa-xl icon' icon={faUserCheck}></FontAwesomeIcon>
                  </div>
                  <div className='stats-heading'>
                    <h5>New repairs (Today)</h5>
                    <p><FontAwesomeIcon  icon={faArrowDown} style={{color:"#C5255D"}}></FontAwesomeIcon> <span style={{color:"#C5255D",fontWeight:"bolder"}}>1%</span> this week</p>
                  </div>
                  <div>
                    <h2>18</h2>
                  </div>
                </div>

                <div className='stats-container'>
                  <div>
                    <FontAwesomeIcon style={{color:"#0BA951"}} className='fa-xl icon' icon={faDesktop}></FontAwesomeIcon>
                  </div>
                  <div className='stats-heading'>
                    <h5 className="active-heading">Active Now</h5>
                  </div>
                  <div>
                    <h2>189</h2>
                  </div>
                </div>
            </div>


            <div className="table-container">
              <div className="sort-container">
                <div className="active-tickets">
                  <h3>Active Tickets</h3>
                  <p>Active Tickets</p>
                </div>
                <div className="sort-name">
                    <form>
                      <label>
                        Sort by:
                      </label>
                      <select>
                        <option value="first-name">First Name</option>
                        <option value ="second-name">Second Name</option>
                      </select>
                    </form>
                </div>
                <div className="sort-date">
                    <form>
                      <label>
                        Date:
                      </label>
                      <select>
                        <option value="newest">Newest</option>
                        <option value ="oldest">Oldest</option>
                      </select>
                    </form>
                </div>
                <div className="status">
                    <form>
                      <label>
                        Status:
                      </label>
                      <select>
                        <option value="open">Open</option>
                        <option value ="closed">Closed</option>
                      </select>
                    </form>
                </div>
                <div>
                <div style={{backgroundColor:"#FAFBFF",padding:"2px 5px"}} className='search'>
                      <FontAwesomeIcon style={{color:"#8F9094"}} className='fa-md' icon={faMagnifyingGlass}></FontAwesomeIcon>
                      <input className="search2" type='search' placeholder='Search'></input>
                      </div>
                </div>
              </div>
              
              <div className="table">
                <table>
                  <thead>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                    <th>Device</th>
                    <th>Service</th>
                    <th>Date Created</th>
                    <th>Ticket #</th>
                    <th>Status</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device first-device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created first-dateCreated"><p>12/07/2023</p><p>Tech:Nile Khokar</p><p>Last Update: 2:43Pm</p></td>
                      <td>t100</td>
                      <td><button className="status-btn">New</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn">New</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn">New</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn">New</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn">New</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn">New</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn">New</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn">New</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  )
}
