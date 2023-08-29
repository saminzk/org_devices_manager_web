// import { useState } from 'react'
import { Button } from "@mui/material";
// import {Link,Outlet} from 'react-router'
// import Switch from 'react-router-dom'
import { Routes, Route, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Devices from "./pages/Devices";
import Organization from "./pages/Organization";

// import {Route,Routes,useNavigate} from 'react-router-dom'
function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <Link to="/home">
          <Button variant="outlined">Home</Button>
        </Link>
        <Button variant="outlined" onClick={() => navigate("/organization")}>
          Organization
        </Button>
        <Button variant="outlined" onClick={() => navigate("/devices")}>
          Device
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/organization" element={<Organization />} />
        <Route path="/devices" element={<Devices />}></Route>
      </Routes>
    </>
  );
}

export default App;
