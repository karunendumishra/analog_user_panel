import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Psecurity from "./pages/Psecurity";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";
import Affiliate from "./pages/Affiliate";
import Transactions from "./pages/Transactions";
import Projects from "./pages/Projects";
import EmailOtp from "./pages/EmailOtp";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ResendOtp from "./pages/ResendOtp";
import Wallet from "./pages/Wallet";
import Loginactivity from "./pages/LoginActivity";
import CryptoTransaction from "./pages/CryptoTransaction";
import UserList from "./pages/UserList";
function App() {
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  console.log(email, "user email in local strorage");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="Home"
            element={email && token ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/Psecurity" element={<Psecurity />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Affiliate" element={<Affiliate />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/EmailOtp" element={<EmailOtp />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/ResendOtp" element={<ResendOtp />} />
          <Route
            path="/wallet"
            element={email && token ? <Wallet /> : <Navigate to="/login" />}
          />
          <Route path="/loginactivity" element={<Loginactivity />} />
          <Route path="/cryptoTransaction" element={<CryptoTransaction />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
