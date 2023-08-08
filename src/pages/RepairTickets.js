import "../assets/css/repairticket.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faClock,
  faBell,
  faMagnifyingGlass,
  faUsers,
  faDesktop,
  faArrowUp,
  faArrowDown,
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";
import { SideBarThree } from "../components/SideBarThree";

export const RepairTickets = () => {
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
                    <tr>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                    <th>Device</th>
                    <th>Service</th>
                    <th>Date Created</th>
                    <th>Ticket #</th>
                    <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device first-device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created first-dateCreated"><p>12/07/2023</p><p>Tech:Nile Khokar</p><p>Last Update: 2:43Pm</p></td>
                      <td>t100</td>
                      <td><button className="status-btn btn-new">New</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn btn-notfix">Not fixable</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn btn-out">Sent Out</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn btn-new">New</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn btn-new">New</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn btn-finish">Finished</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn btn-wait">Waiting on Customer</button></td>
                    </tr>
                    <tr>
                      <td>Jane Cooper</td>
                      <td>(225) 555-0118</td>
                      <td className="device"><p>Apple</p><p>Iphone 14</p></td>
                      <td>Screen Replacement</td>
                      <td className="date-created"><p>12/07/2023</p><p>Tech:Nile Khokar</p></td>
                      <td>t100</td>
                      <td><button className="status-btn btn-finish">Finished</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="data-container">
                <div>
                  <p>Showing data 1 to 8 of 256k entries</p>
                </div>   
                <div className="pagination">
  <button className="btn">
    <svg
         xmlns="http://www.w3.org/2000/svg"
         className="btn-icon"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth="2"
         >
      <path
            stroke-strokelinecap="round"
            stroke-strokelinejoin="round"
            d="M15 19l-7-7 7-7"
            />
    </svg>
  </button>
  <a href="No link" className="page-link page-link--current">1</a>
  <a href="No link" className="page-link">2</a>
  <a href="No link" className="page-link">3</a>
  <a href="No link" className="page-link">4</a>
  <span className="dots">...</span>
  <a href="No link" className="page-link">40</a>
  <button className="btn">
    <svg
         xmlns="http://www.w3.org/2000/svg"
         className="btn-icon"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth="2"
         >
      <path
           stroke-strokelinecap="round"
            stroke-strokelinejoin="round"
            d="M9 5l7 7-7 7"
            />
    </svg>
  </button>
</div>
              </div>
            </div>
    </div>
  )
}
