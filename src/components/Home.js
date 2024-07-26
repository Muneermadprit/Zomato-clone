import React, { useState, useEffect } from "react";
import axios from "axios";
import './Home.css';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Homenavigation from "./Homenav";
import { useLocation, useParams, Link } from 'react-router-dom';
import Footer from "./footer";
import useIsMobile from './hooks/useIsMobile'; // Import the custom hook
import { MdOutlineStarPurple500 } from "react-icons/md";

const Home = () => {
  const location = useLocation();
  const { city: cityFromParams } = useParams();
  const { city: cityFromState } = location.state || {};
  const city = cityFromState || cityFromParams;
  const { checking } = location.state || { checking: false };

  const [uploadedImages, setUploadedImages] = useState([]);
  const isMobile = useIsMobile(); // Use the custom hook

  useEffect(() => {
    if (city) {
      fetchImages(city);
    }
  }, [city]);

  const fetchImages = (city) => {
    axios.get(`https://zomato-clone-e1o1.onrender.com/foods/${city}`)
      .then((response) => {
        setUploadedImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  const specialImages1 = [
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
   
  
  ];

  const specialImages = [
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
  
  ];
  const foodname = [
    "Biriyani",
    "Porotta",
    "Shawarma",
    "ChickenRoast",
    "KuzhiMandhi",
    "Shawayi",
    "FishMoly",
    "Manchoorian"

  ]

  const handleCardClick = (resturentid) => {
  
    sessionStorage.setItem('resturentid', resturentid);
    
  };

  return (
    <>
      <Container className="bodi">
        <Container fluid className="cotainer fullscreen d-flex justify-content-center align-items-center p-8">
          <Row>
            <Col className="no">
              <Container fluid id="navbar">
                <Col>
                  <Homenavigation checking={checking} />
                </Col>
              </Container>
            </Col>
            <Row style={{ display:'flex',flexWrap:'wrap'}}>
            <Navbar className={isMobile ? "null" : "bg-light"} id={isMobile ? "nav-itemslist" : "scrollable-row"}>
  {isMobile ? (
specialImages.map((src, index) => (
  <Card key={index} id="specialcard" className={isMobile ? "specialcard" : "newspecialcard"}>
    <Card.Img id="specialcardimg" variant="top" src={src} />
  
  </Card>
))

    
  ) : (
    specialImages1.map((src, index) => (
      <Card key={index} id="specialcard" className={isMobile ? "specialcard" : "newspecialcard"}>
        <Card.Img id="specialcardimg" variant="top" src={src} />
      </Card>
    ))
  )}
</Navbar>


            </Row>
            {isMobile? <Row
    className="cards"
    style={{
      paddingLeft: 15,
      
      display: 'flex',
      flexWrap: 'wrap',
    
    }}
  >
    {uploadedImages.map((imageData, index) => (
      <Card
        key={index}
        id="card"
        style={{
          height: isMobile ? '300px' : '300px',
          flex: isMobile ? '1 1 100%' : '1 1 calc(33.333% - 20px)',
          margin: '10px',
          maxWidth: isMobile ? '50%' : 'calc(33.333% - 20px)',
          boxSizing: 'border-box',
          boxShadow: isMobile 
          ? 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' 
          : ''
        
        }}
      >
        <Link
          to={`/details/${imageData.resturentid}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
          onClick={() => handleCardClick(imageData.resturentid)}
        >
          <Card.Img
            variant="top"
            src={imageData.image}
            id="imgcard"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Row className="imagecard-row">
          <Col>
            <span>{imageData.name}</span><br />
            <span className="cardtext1">{imageData.description}</span>
           
          </Col>
          
          <span style={{marginLeft:210, marginBottom:'100px',position:'absolute',fontSize:22, color:'#daa520',  textShadow: '1px 1px 1px #000',fontWeight:'bold'}}>Oreder Now</span>
          <div style={{display:'flex'}}>
          <MdOutlineStarPurple500  color="#daa520" size={30}/>
          <MdOutlineStarPurple500  color="#daa520" size={30}/>
          <MdOutlineStarPurple500  color="#daa520" size={30}/>
          <MdOutlineStarPurple500  color="#daa520" size={30}/>
          <MdOutlineStarPurple500  color="#daa520" size={30}/>
          </div>
         
          <Col>
            <span className="cardtext2">{imageData.price}</span> <span className="cardtext1">for one</span>
          </Col>
        </Row>
      </Card>
    ))}
  </Row>

:<Row className="cards" style={{ paddingLeft: 10,}}>
              {uploadedImages.map((imageData, index) => (
                <Card key={index} id="card" style={{ height: isMobile ? '100px' : '300px' }}>
                  <Link
                    to={`/details/${imageData.resturentid}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={() => handleCardClick(imageData.resturentid)}
                  >
                    <Card.Img
                      variant="top"
                      src={imageData.image}
                      id="imgcard"
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                  <Row className="imagecard-row">
                    <Col>
                      <span>{imageData.name}</span><br />
                      <span className="cardtext1">{imageData.description}</span>
                    </Col>
                    <Col>
                      <span className="cardtext2">{imageData.price}</span> <span className="cardtext1">for one</span>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Row>}
            
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
