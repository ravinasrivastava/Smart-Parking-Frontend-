import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
// import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Logout from "./pages/Logout";
// import Log from "./pages/Log";
import { useSelector } from "react-redux";
import ChangePassword from "./pages/auth/ChangePassword";
import Map from "./components/map/Map";
import MyVehicles from "./components/Vehicle/MyVehicles";
import ParkingHistory from "./components/Parking/ParkingHistory";
import Front from './components/dashboard/Front'
// import MyInformation from './components/Profile/MyInformation';
import Userprofile from "./components/userprofile/Userprofile";
import Dash from "./components/dashboard/Dash";
import PaymentMethods from './components/Payment/PaymentMethods';
import Loginphonenumber from './pages/auth/Loginphonenumber'
import Viewbooking from './components/booking/Viewbooking'
import Update from "./components/update/Update";
import Log from "./pages/Log";
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="/" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="Loginphonenumber" element={<Loginphonenumber />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/map" element={<Map/>} />
          <Route path="/MyVehicles" element={<MyVehicles/>} />
          <Route path="/logout" element={<Logout/>} />
          
          <Route path="/log" element={<Log/>} />

          <Route path="/viewbooking" element={<Viewbooking/>} />
          <Route path="ChangePassword" element={<ChangePassword/>} />
          <Route path="parkinghistory" element={<ParkingHistory/>} />
          <Route path="/Front" element={<Front/>} />
          {/* <Route path="/MyInformation" element={<MyInformation/>} /> */}
          <Route path="/userprofile" element={<Userprofile/>} />
          <Route path="/PaymentMethods" element={<PaymentMethods/>} />
          <Route path="update" element={<Update/>} />
          <Route path="/" element={<Dash />} />
          {/* <Route path="*" element={<h1>Error 404 Page not found !!</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
