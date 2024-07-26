import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './contrylist.css'; // Import the CSS file for styles

const Contrylist = ({ selectedcity }) => {
  const label = selectedcity?.label || '';
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 676);
  const navigate = useNavigate();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 576);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const loadData = async () => {
    if (label) {
      try {
        const response = await axios.get(`https://zomato-clone-e1o1.onrender.com/studentses/${label}`);
        if (response.data.length === 0) {
          setError(true);
            
       
        } else {
          
          setList(response.data);
          setError(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    }
  };

  useEffect(() => {
    loadData();
  }, [label]);

  return (
    <Container className={isMobile ? 'contrylist-mobile' : 'contrylist'}>
      {error ? (
        <p>No matching cities found for the selected country.</p>
      ) : (
        list.map((item, index) => (
          item.city && (
            <Button
              key={index}
              onClick={() => navigate(`/Home/${item.city}`, { state: { city: item.city } })}
              variant='light'
              size="lg"
              className={isMobile ? 'card-mobile' : 'card'}
            >
              {item.address} 
            </Button>
          )
        ))
      )}
    </Container>
  );
};

export default Contrylist;
