import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './details.css';
import axios from 'axios';
import Profilenavigation from './components/profilenavigation';
import Detailsfoodlist from './detailspage-foodlist';
import './components/resturenthome.css';
import loading from './components/loading.json';
import loadingdesktop from './loadingdesktop.json';
import Lottie from 'lottie-react'
import useIsMobile from './components/hooks/useIsMobile';

const Details = () => {
  const { id } = useParams();
  const [foodDetails, setFoodDetails] = useState(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    fetchFoodDetails(); // Call the function to fetch food details
  }, [id]);

  const fetchFoodDetails = () => {
    axios.get(`https://zomato-clone-e1o1.onrender.com/students/${id}`)
      .then((response) => {
        console.log("Response data:", JSON.stringify(response.data)); // Inspect the data structure
        if (response.data && response.data.length > 0) {
          setFoodDetails(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching food details:", error);
      });
  };

  if (!foodDetails) {
    
    return isMobile? <Lottie animationData={loading} style={{justifyContent:'center', alignItems:'center', position:'absolute'}}/>:<Lottie animationData={loadingdesktop} 
    style={{justifyContent:'center', alignItems:'center', width:300,marginLeft:600}}/>
  }

  return (
    <div>
      <div><Profilenavigation /></div>
      <div
        className='profileheader-details'
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.13) 22.25%, rgba(0, 0, 0, 0.5) 55.5%), 
                       url(${foodDetails.image})`,
          backgroundSize: 'cover', // Ensure the image covers the container
          backgroundPosition: 'center', // Center the background image
          backgroundRepeat: 'no-repeat' // Prevent the image from repeating
        }}
      ></div>

      <div className='container-details'>
        <h1>{foodDetails.resturentname}</h1>
        <span style={{ display: 'flex', gap: 20 }}>
          <p>{foodDetails.address}</p>
          <p>{foodDetails.city} Town opposite bus station</p>
        </span>
        <p>{foodDetails.city}Locality,  {foodDetails.city}</p>
      </div>

      <div className='review-box'>
        <div className='resturent-listside'>
          <Detailsfoodlist />
        </div>
        <aside className='resturent-datas'>
          <aside className='sidecontainer-resturent'>
            <div className='sidecontents-resturent'>
              <div className='options-resturent'>
                <p>Starters</p>
              </div>
              <div className='options-resturent'>
                <p>Main Course</p>
              </div>
              <div className='options-resturent'>
                <p>veg & Biriyani</p>
              </div>
              <div className='options-resturent'>
                <p>Source</p>
              </div>
              <div className='options-resturent'>
                <p>Stickies</p>
              </div>
            </div>
          </aside>
        </aside>
      </div>
    </div>
  );
};

export default Details;
