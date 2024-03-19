import React, { useState } from "react";
import { Link } from "react-router-dom";

import Login from "../Home/Login";

import Navbare from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import Register from "../Home/Register";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const fetchLogin = () => {
    handleClose();
    setIsLogin(!isLogin);
  };

  const handleShowLogin = () => setShowLogin(true);
  const handleShowRegister = () => setShowRegister(true);
  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <div>
      <Navbare expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbare.Brand>
            <Link className="nav-link ms-2" to="/">
              Городской портал
            </Link>
          </Navbare.Brand>
          <Navbare.Toggle aria-controls="navbarScroll" />
          <Navbare.Collapse className="me-auto" id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Link className="nav-link" to="/">
                Главная страница
              </Link>
            </Nav>
            <Nav>
              {!isLogin ? (
                <>
                  <Nav.Link onClick={handleShowRegister}>Регистраци</Nav.Link>
                  <Nav.Link onClick={handleShowLogin}>Авторизация</Nav.Link>
                </>
              ) : (
                <Link className="nav-link" to="/profile" onClick={fetchLogin}>
                  Личный кабинет
                </Link>
              )}
            </Nav>
          </Navbare.Collapse>
        </Container>
      </Navbare>
      <Login
        show={showLogin}
        fetchLogin={fetchLogin}
        handleClose={handleClose}
      />
      <Register
        show={showRegister}
        fetchLogin={fetchLogin}
        handleClose={handleClose}
      />
    </div>
  );
}
