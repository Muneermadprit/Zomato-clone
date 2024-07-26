import React, { useState } from 'react';
import '../components/resturenthome.css'
import Sidebar from './sidebar';
import Content from './content';
import Resturentprofile from './resturentprofile';


const RestaurantHome = () => {

  return (
   <>
   <div className='dashboard'>
    <Sidebar/>
    <div className='dashbord--content'>
        <Content/>
        <Resturentprofile/>
    </div>
   </div>
   </>
  );
};

export default RestaurantHome;
