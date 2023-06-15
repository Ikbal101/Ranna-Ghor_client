import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import './NavigationBar.css'

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home" className="title">Ranna-Ghor</Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Link
                style={{ textDecoration: "none", marginLeft: "10px", fontWeight: "500", color: "grey" }}
                className={location.pathname === "/" ? "active" : ""}
                to="/"
              >
                Home
              </Link>
              <Link
                style={{ textDecoration: "none", marginLeft: "10px", fontWeight: "500", color: "grey" }}
                className={location.pathname === "/about" ? "active" : ""}
                to="/about"
              >
                About
              </Link>
              <Link
                style={{ textDecoration: "none", marginLeft: "10px", fontWeight: "500", color: "grey" }}
                className={location.pathname === "/blog" ? "active" : ""}
                to="/blog"
              >
                Blog
              </Link>
            </Nav>
            <Nav>
              {user && (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93jC95_0P8Ozb5Y0q_l5A6ZwBAQfZy2PUaQ&usqp=CAU"
                  alt=""
                  style={{ width: "30px", height: "30", borderRadius: "50%" }}
                  title="My name is khan"
                />
              )}
              {user ? (
                <Button onClick={handleLogOut} variant="secondary">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
