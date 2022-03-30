//import Navigation from './Main/components/Navigation'
import React from "react";
import NavUser from "./User/UserComponents/NavUser";
import NavAdmin from "./Admin/components/NavAdmin";
import { Routes, Route } from 'react-router-dom';

import HomeUser from "./User/UserComponents/HomeUser";
import Dashboard from "./User/UserComponents/Dashboard";
import MyBooking from "./User/UserComponents/MyBooking";

import Register from './Welcome/screens/Register'
import Login from "./Welcome/screens/Login";
import Home from "./Welcome/screens/Home";


import AddCenter from "./Admin/components/AddCenter";
import CenterProfile from "./Admin/components/CenterProfile";
import Update from "./Admin/components/Update";
import EditBooking from "./User/UserComponents/EditBooking";

function App() {
  return (
    <div> 
        <Routes>
          <Route path="NavUser" exact element={<NavUser />} />
          <Route path="NavAdmin" exact element={<NavAdmin />} />

          <Route path="Home" exact element={<Home />} />
          <Route path="Register" exact element={<Register />} />
          <Route path="Login" exact element={<Login />} />
          
          <Route path ="Dashboard" element = {<Dashboard/>} />
          <Route path ="MyBooking" element = {<MyBooking/>} />
          <Route path ="HomeUser" element = {<HomeUser/>} />
          <Route path="EditBooking" element={<EditBooking />} />
          

          <Route path="/AddCenter" exact element={<AddCenter />} />
          <Route path="/CenterProfile" exact element={<CenterProfile />} />
          <Route path='/Update' exact element={<Update />} />
          
        </Routes>
    </div>  

  );
}

export default App;
/*

import Register from './Welcome/screens/Register'
import Login from "./Welcome/screens/Login";
import Home from "./Welcome/screens/Home";

import {BrowserRouter as Router} from "react-router-dom"
import { Routes, Route } from 'react-router-dom';

import AddCenter from "./Admin/components/AddCenter";
import CenterProfile from "./Admin/components/CenterProfile";
import Update from "./Admin/components/Update";

 function App() {
  return (
    <div> 
      <Router>
       <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Register" exact element={<Register />} />
        <Route path="/Login" exact element={<Login />} />
      </Routes>

        <div>
                <Routes>
                <Route path="/AddCenter" exact element={<AddCenter />} />
                <Route path="/CenterProfile" exact element={<CenterProfile />} />
                </Routes>
          </div>

          <div>
            <Routes>
              <Route path='/Update/:id' exact element={<Update />} />
              
            </Routes>
          </div>
      </Router> 
     
    </div>  

  );
}

export default App;
       */

    

