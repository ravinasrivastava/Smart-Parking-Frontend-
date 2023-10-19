import React from "react";
import "./sub.css"
import SideBar from "./Routes"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Logout from '../../pages/Logout';
// import Profile from "./pages/Profile";
import Map from '../map/Map';
import Front from '../dashboard/Front';
import MyVehicles from "../Vehicle/MyVehicles";
import ParkingHistory from "../Parking/ParkingHistory";
// import MyInformation from "../Profile/MyInformation";
import Userprofile from "../userprofile/Userprofile";
import Dash from "../dashboard/Dash";
import Payment from "../Payment/PaymentMethods";
function sub() {
  return (
    <SideBar>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/map" element={<Map />} />
        <Route path="/myvehicles" element={<MyVehicles />} />
        <Route path="/parkinghistory" element={<ParkingHistory />} />
        <Route path="/Front" element={<Front />} />
        {/* <Route path="/MyInformation" element={<MyInformation/>} /> */}
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="*" element={<> not found</>} />
      </Routes>
    </SideBar>
  );
}
export default sub;