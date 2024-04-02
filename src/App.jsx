import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from "./componentes/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
// import BillForm from './pages/BillForm'
import BillList from './pages/BillList'
import MiLuma from "./pages/MiLuma";
import Dashboard from "./pages/Dashboard"
// import MiAcueductosLogin from "./pages/MiAcueductosLogin";

function App() {
  const getToken = () => {
    console.log(localStorage.getItem("authToken"))
    return localStorage.getItem("authToken");
  };


  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };



  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<HomePage />} /> */}

        <Route element={<LoggedIn />}>
          <Route path='/account' element={<BillList />} />
          <Route path='/mi-luma' element={<MiLuma />} />
          <Route path="/dashboard" element={<Dashboard />} />
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