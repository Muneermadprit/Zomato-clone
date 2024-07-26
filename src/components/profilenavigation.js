import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoLocation } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoSearchOutline, IoPersonOutline, IoPowerOutline } from "react-icons/io5";
import Login from './login';  // Ensure the path is correct
import Register from './registration';  // Ensure the path is correct
import './Home.css';
import './restorentpage.css';

const Profilenavigation = ({ checking }) => {
  const email = sessionStorage.getItem("email");
  const displayName = email || 'Login';
  const firstLetter = email ? email.charAt(0).toUpperCase() : '';

  const logout = () => {
    sessionStorage.removeItem("email");
    window.location.href = "http://localhost:3000/Home/Kollam"; // Redirect to Home/Kollam after logout
  };

  const buttonStyle = {
    border: 'none',
    background: 'none',
    marginRight: '10px',
    padding: 0,
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center'
  };

  const profileStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#007bff', // Blue background color
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: '#fff', // White text color
    marginLeft: '10px'
  };

  const popupContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '8px',
    background: '#f8f9fa', // Background color for the popup
  };

  const popupButtonStyle = {
    width: '100%',
    padding: '10px 20px',
    margin: '5px 0',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff', // Button background color
    color: '#fff', // Button text color
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const iconStyle = {
    marginRight: '8px'
  };

  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              fluid
              className="logo"
              style={{ marginBottom: 30 }}
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 40 }} className='serchshadow'>
              <div className='spacer'>
                <IoLocation color="pink" style={{ height: 30, width: 30 }} />
                <p style={{ marginLeft: 5, color: "GrayText" }}> Kollam</p>
                <RiArrowDownSFill style={{ marginLeft: 40 }} />
              </div>
              <div className='location'>
                <IoSearchOutline style={{ marginTop: 15, marginLeft: 10, width: 20, height: 20 ,position:'absolute'}} />
                <p style={{ marginLeft: 30, marginTop: 10, color: "GrayText" }}>
                  <Form className="d-flex" expand="sm">
                    <Form.Control
                      style={{ width: 350, border: 'none' }}
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </p>
              </div>
            </div>
            <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center', marginRight: '120px' }}>
              {checking ? (
                <Popup trigger={
                  <button style={buttonStyle}>
                    <div className="user-profile" style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={profileStyle}>{firstLetter}</div>
                    </div>
                  </button>
                } position="bottom right">
                  <div style={popupContentStyle}>
                    <button style={popupButtonStyle} onClick={() => window.location.href = '/profile'}>
                      <IoPersonOutline style={iconStyle} /> Go to Profile
                    </button>
                    <button style={popupButtonStyle} onClick={logout}>
                      <IoPowerOutline style={iconStyle} /> Logout
                    </button>
                  </div>
                </Popup>
              ) : (
                <>
                  <Popup trigger={<button style={buttonStyle}><h6 style={{ margin: 0 }}>{displayName}</h6></button>} position={'bottom right'}>
                    {email ? <div><button style={popupButtonStyle} onClick={logout}><IoPowerOutline style={iconStyle} /> Logout</button></div> : <Login />}
                  </Popup>
                  {!email && (
                    <Popup trigger={<button style={buttonStyle}><h6 style={{ margin: 0 }}>Sign In</h6></button>} position={'bottom center'} keepTooltipInside>
                      <div><Register /></div>
                    </Popup>
                  )}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
  );
}

export default Profilenavigation;

