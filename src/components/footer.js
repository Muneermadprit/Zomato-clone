import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 576);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <Container fluid className="mobilefooter">
          <h3 className="footer-logo">Zomato</h3>
          <Row>
            <Col>
              <span className="mainhead">ABOUT ZOMATO</span><br />
              Who We Are<br />
              Blog<br />
              Work With Us<br />
              Investor Relations<br />
              Report Fraud<br />
              Contact Us
            </Col>
            <Col>
              <span className="mainhead">ZOMAVERSE</span><br />
              Zomato<br />
              Blinkit<br />
              Feeding India<br />
              Hyperpure<br />
              Zomaland
            </Col>
            <Col>
              <span className="mainhead">FOR RESTAURANTS</span><br />
              Partner With Us<br />
              Apps For You<br />
              <span className="mainhead">FOR ENTERPRISES</span><br />
              Zomato For Enterprise
            </Col>
            <Col>
              <span className="mainhead">LEARN MORE</span><br />
              Privacy<br />
              Security<br />
              Terms<br />
              Sitemap
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid className="footermobile">
          <h3 className="footer-logo">Zomato</h3>
          <Row>
            <Col>
              <span className="mainhead">ABOUT ZOMATO</span><br />
              Who We Are<br />
              Blog<br />
              Work With Us<br />
              Investor Relations<br />
              Report Fraud<br />
              Contact Us
            </Col>
            <Col>
              <span className="mainhead">ZOMAVERSE</span><br />
              Zomato<br />
              Blinkit<br />
              Feeding India<br />
              Hyperpure<br />
              Zomaland
            </Col>
            <Col>
              <span className="mainhead">FOR RESTAURANTS</span><br />
              Partner With Us<br />
              Apps For You<br />
              <span className="mainhead">FOR ENTERPRISES</span><br />
              Zomato For Enterprise
            </Col>
            <Col>
              <span className="mainhead">LEARN MORE</span><br />
              Privacy<br />
              Security<br />
              Terms<br />
              Sitemap
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Footer;

