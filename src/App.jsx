import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from  './context/auth.context'
import axios from 'axios'
import Navbar from "./componentes/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import MiLuma from "./pages/MiLuma";
import Dashboard from "./pages/Dashboard"
import ProviderDetails from "./pages/ProviderDetails";
import ProfileUser from "./pages/ProfileUser";
import EditAccount from "./pages/EditAccount";

function App() {
  const getToken = () => {
    console.log(localStorage.getItem("authToken"))
    return localStorage.getItem("authToken");
  };

  const { isLoggedIn } = useContext(AuthContext)


  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };



  return (
    <div className="App">

      {isLoggedIn && 
      
        <Navbar />
      
      }
      <Routes>

        <Route element={<LoggedIn />}>

          <Route path='/mi-luma' element={<MiLuma />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/provider/:providerId' element={<ProviderDetails />} />
          <Route path="/profileuser" element={<ProfileUser/>} />
          <Route path='/edit-account/:accountId' element={<EditAccount />} />

        </Route>

        <Route element={<NotLoggedIn />}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

      </Routes>


    </div>
  );
}

export default App;