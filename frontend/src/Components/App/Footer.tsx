import React from "react";
import "../../style/Footer.css";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid className="d-flex justify-content-center">
        <Navbar.Brand className="text-center">
          <Link className="nav-link ms-2" to="/">
            Городской портал
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
