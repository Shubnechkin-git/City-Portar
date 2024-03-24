import React, { useEffect, useState } from "react";
import "./style/App.css";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./Components/App/Navbar";
import Footer from "./Components/App/Footer";
import Home from "./Page/Home";
import Profile from "./Page/Profile";

import axios from "axios";

function App() {
  document.title = "Городской портал";
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <Container className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
