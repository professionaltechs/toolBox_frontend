import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard } from "./pages/Dashboard";
import { RepairTickets } from "./pages/RepairTickets";
import { Login } from "./pages/Login";
import { Signup } from "./pages/SignUp";



function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/repair-tickets" element = {<RepairTickets/>}/>
      </Routes>
    </Router>
  );
}

export default App;
