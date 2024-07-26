import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './restorentpage.css';

const Navibar = () => {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <div className='navbar-position'>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Add more Nav items here if needed */}
            </Nav>
            <Nav>
              <Nav.Link as={Link} className="nav" to="/restaurent">Add Restaurant</Nav.Link>
              <Nav.Link as={Link} className="nav" to="/restaurentlogin">Sign in Restaurant</Nav.Link>
              <Nav.Link className="nav1" eventKey={2} href="#memes">
                {/* Additional Nav content */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navibar;
