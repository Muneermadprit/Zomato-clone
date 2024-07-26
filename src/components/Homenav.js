import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
import useIsMobile from './hooks/useIsMobile';  // Import the custom hook

const Homenavigation = ({ checking }) => {
  const isMobile = useIsMobile();  // Use the custom hook

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
      <Navbar
        expand="sm"
        className="bg-body-tertiary"
        id='nav-topbar'
        style={{ backgroundColor: isMobile ? 'red' : '' }}
      >
        {isMobile ? (
          <div style={{paddingLeft:60,width:'auto', }}>
            <Navbar.Brand href="#home" className='navbrand' style={{paddingRight:140}} >
              <img
                className="logo"
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id='navbar-toggle' />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
              <div style={{ display: 'flex', marginBottom: 40 }} className='serchshadow'>
                <div className='spacer' style={{ display: 'flex', alignItems: 'center' }}>
                  <IoLocation color="pink" style={{ height: 30, width: 30 }} />
                  <p style={{ marginLeft: 5, color: "GrayText" }}> Kollam</p>
                  <RiArrowDownSFill style={{ marginLeft: 40 }} />
                </div>
                <div className='location' style={{ display: 'flex', alignItems: 'center', flex: 1, position:'absolute', marginLeft:'100px',marginTop:'14px' }}>
                  <IoSearchOutline style={{ marginTop: 15, marginLeft: 10, width: 20, height: 20 ,marginBottom:'20px' }} />
                  <Form className="d-flex" expand="sm">
                    <Form.Control
                      style={{ width: '70%', border: 'none', marginLeft: 10 }}
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
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
          </div>
        ) : (
          <Container className='nav-topcontainer' style={{ display: 'flex'  }}>
            <Navbar.Brand href="#home" className='navbrand' style={
              {}
            }>
              <img
                className="logo"
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id='navbar-toggle' />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
              <div style={{ display: 'flex', marginBottom: 40 }} className='serchshadow'>
                <div className='spacer' style={{ display: 'flex', alignItems: 'center' }}>
                  <IoLocation color="pink" style={{ height: 30, width: 30 }} />
                  <p style={{ marginLeft: 5, color: "GrayText" }}> Kollam</p>
                  <RiArrowDownSFill style={{ marginLeft: 40 }} />
                </div>
                <div className='location' style={{ display: 'flex', alignItems: 'center', flex: 1,position:'absolute',marginLeft:'200px',marginTop:'12px' }}>
                  
                  <Form className="d-flex" expand="sm">
                    <Form.Control
                      style={{ width: '100%', border: 'none', marginLeft: 10 }}
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
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
          </ Container>
        )}
      </Navbar>
      {isMobile?( <Navbar id='navcard' expand="xl" className="nav-designer">
        <Container fluid id='navcard-container'>
          <Row id='nav-contents'>
            <Col xs={1} sm={6} md={4} lg={3} xl={2} style={{ display: 'flex', marginBottom: '20px' }} className='cardcol'>
              <Card id="cardscontainer" style={{ height: '60px' }}>
                <Card.Img id="cardss" variant="top" src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" />
              </Card>
              {!isMobile ?<h2 className='navh'>Delivrikal</h2>:<h2 style={{position:'absolute',marginTop:'100px', fontSize:'17px',marginLeft:'10px'}}>Deliverykal</h2>
              }
              
            </Col>
            <Col xs={1} sm={6} md={4} lg={3} xl={2} style={{ display: 'flex', marginBottom: '20px' }} className='cardcol'>
              <Card id="cardscontainer" style={{ height: '10px',
              marginRight:'20px'
      
               }}>
                <Card.Img id="cardss" variant="top" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" />
              </Card>
              {!isMobile ?<h2 className='navh'>Dining out</h2>:<h2 style={{position:'absolute',marginTop:'100px', fontSize:'17px',marginLeft:'10px'}}>Diningout</h2>
              }
            </Col>
            <Col xs={1} sm={6} md={4} lg={3} xl={2} style={{ display: 'flex', marginBottom: '20px',paddingRight:'10px' }} className='cardcol'>
              <Card id="cardscontainer" style={{ height: '60px' }}>
                <Card.Img id="cardss" variant="top" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" />
              </Card>
              {!isMobile ?<h2 className='navh'>Nightlife</h2>:<h2 style={{position:'absolute',marginTop:'100px', fontSize:'17px',marginLeft:'10px'}}>Nightlife</h2>
              }
            </Col>
          </Row>
        </Container>
      </Navbar>):( <Navbar id='navcard' expand="xl" className="nav-designer">
        <Container fluid id='navcard-container'>
          <Row id='nav-contents'>
            <Col xs={2} sm={6} md={4} lg={3} xl={2} style={{ display: 'flex', marginBottom: '20px' }} className='cardcol'>
              <Card id="cardscontainer" style={{ height: '60px' }}>
                <Card.Img id="cardss" variant="top" src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" />
              </Card>
              {!isMobile ?<h2 className='navh'>Delivery</h2>:<h2 style={{position:'absolute',marginTop:'100px', fontSize:'17px',marginLeft:'10px'}}>Delivery</h2>
              }
              
            </Col>
            <Col xs={2} sm={6} md={4} lg={3} xl={2} style={{ display: 'flex', marginBottom: '20px' }} className='cardcol'>
              <Card id="cardscontainer" style={{ height: '60px' }}>
                <Card.Img id="cardss" variant="top" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" />
              </Card>
              {!isMobile ?<h2 className='navh'>Dining out</h2>:<h2 style={{position:'absolute',marginTop:'100px', fontSize:'17px',marginLeft:'10px'}}>Diningout</h2>
              }
            </Col>
            <Col xs={2} sm={6} md={4} lg={3} xl={2} style={{ display: 'flex', marginBottom: '20px' }} className='cardcol'>
              <Card id="cardscontainer" style={{ height: '60px' }}>
                <Card.Img id="cardss" variant="top" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" />
              </Card>
              {!isMobile ?<h2 className='navh'>Nightlife</h2>:<h2 style={{position:'absolute',marginTop:'100px', fontSize:'17px',marginLeft:'10px'}}>Nightlife</h2>
              }
            </Col>
          </Row>
        </Container>
      </Navbar>)}

     
    </>
  );
};

export default Homenavigation;
