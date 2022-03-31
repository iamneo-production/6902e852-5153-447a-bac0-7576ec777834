import React from "react";
import NavUser from "./User/UserComponents/NavUser";
import NavAdmin from "./Admin/components/NavAdmin";
import { Routes, Route, Navigate } from "react-router-dom";

import HomeUser from "./User/UserComponents/HomeUser";
import Dashboard from "./User/UserComponents/Dashboard";
import MyBooking from "./User/UserComponents/MyBooking";

import Register from "./Welcome/Screens/Register";
import Login from "./Welcome/Screens/Login";
import Home from "./Welcome/Screens/Home";

import AddCenter from "./Admin/components/AddCenter";
import CenterProfile from "./Admin/components/CenterProfile";
import Update from "./Admin/components/Update";
import EditBooking from "./User/UserComponents/EditBooking";
function App() {
  const protected_route = () => {
    if (localStorage.getItem("userid")) {
      return (
        <div>
          <Routes>
            <Route path="/NavUser" exact element={<NavUser />} />
            <Route path="/NavAdmin" exact element={<NavAdmin />} />

            <Route path="/" exact element={<Home />} />
            <Route path="/Register" exact element={<Register />} />
            <Route path="/Login" exact element={<Login />} />

            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/MyBooking" element={<MyBooking />} />
            <Route path="/HomeUser" element={<HomeUser />} />
            <Route path="/EditBooking" element={<EditBooking />} />

            <Route path="/AddCenter" exact element={<AddCenter />} />
            <Route path="/CenterProfile" exact element={<CenterProfile />} />
            <Route path="/Update" exact element={<Update />} />
          </Routes>
        </div>
      );
    } else {
      return (
        <div>
          <Routes>
            <Route path="/Home" exact element={<Home />} />
            <Route path="/Register" exact element={<Register />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="*" exact element={<Navigate to="/Login" />} />
          </Routes>
        </div>
      );
    }
  };
  return <div>
    {protected_route()}
    </div>;
}
export default App;


