import React, { useState, useEffect } from "react";
import { IoSearchOutline, IoLocation } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { Container, Row, Image } from "react-bootstrap";
import Select from 'react-select';
import './restorentpage.css';
import Navibar from "./navbar";
import Footer from "./footer";
import Contrylist from "./contrylist";
import data from '../components/assets/states.json';
import useIsMobile from '../components/hooks/useIsMobile'

const RestorentIndiaPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const isMobile = useIsMobile(); // Use the custom hook for responsiveness

  const alertKollam = (data, inputValue) => {
    const kollamCities = [];
    if (inputValue.trim() === "") {
      setOptions([]);
      return;
    }
    for (const state in data) {
      if (data.hasOwnProperty(state)) {
        data[state].forEach(city => {
          if (city.toLowerCase().includes(inputValue.toLowerCase())) {
            kollamCities.push(city);
          }
        });
      }
    }
    setOptions(kollamCities);
  };

  useEffect(() => {
    alertKollam(data, inputValue);
  }, [data, inputValue]);

  return (
    <div>
      <Container fluid>
        <Row>
          <Container fluid className="headcontainer">
            <Container className="nav-space">
              <Navibar />
            </Container>
            <h1 className="zomato">
              Zomato
              <h3 className="quates-hero">Discover The best foods and Drinks in your city</h3>
            </h1>
            <div className='serch'>
              <div className='spacer'>
                <IoLocation color="pink" style={{ height: 30, width: 30 }} />
                <Select 
                  options={options.map(city => ({ label: city, value: city }))}
                  value={selectedOption}
                  onChange={setSelectedOption}
                  onInputChange={(newValue) => setInputValue(newValue)}
                  className="dropdown"
                  isOptionSelected={(option) => option.value === selectedOption?.value}
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      border: 0,
                      boxShadow: 'none',
                      appearance: 'none',
                      height: 20,
                      marginBottom: 40
                    }),
                    dropdownIndicator: (base) => ({
                      ...base,
                      display: 'none'
                    }),
                    indicatorSeparator: (base) => ({
                      ...base,
                      display: 'none'
                    }),
                    menuList: (base) => ({
                      ...base,
                      minWidth: 400
                    }),
                    menu: (base) => ({
                      ...base,
                      minWidth: 400,
                      paddingBottom: 50
                    }),
                    container: (base) => ({
                      ...base
                    })
                  }}
                />
                <RiArrowDownSFill />
              </div>
              <div className={isMobile ? 'locationmobile' : 'location'} style={{ position:'absolute',marginLeft:'300px',marginBottom:'100px'}}>
                <IoSearchOutline style={{ marginTop: 10, marginLeft: 10, width: 20, height: 20, position:'absolute' }} />
                <p style={{ marginLeft: 30, marginTop: 10, color: "GrayText",  marginBottom:200,position:'absolute'}}>Search for Restaurant, Cuisine or a Dish</p>
              </div>
            </div>
          </Container>
        </Row>
        <Container fluid className="imagecontainer"> 
          <Image className="imagecontainer" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" fluid />
        </Container>
      </Container>
      <div className={isMobile ? 'mobilebox' : 'box'}>
        <div className={isMobile ? 'mobiledetails-box' : 'details-box'}>
          <p>Order Online</p>
          <p>Stay home and order to your doorstep</p>
        </div>
      </div>
      <Container id="contrylist" style={{ flexWrap: "wrap" }}>
        <Contrylist selectedcity={selectedOption} />
      </Container>
      <Container fluid>
        <Footer />
      </Container>
    </div>
  );
};

export default RestorentIndiaPage;
