import React from 'react'
import './resturenthome.css'
import { BiLogoHtml5,BiLogoAndroid,BiBuilding,BiSolidOffer  } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { MdContactSupport } from "react-icons/md";

const Resturentcard = ()=> {

    const course = [

        {
            tittle:'SERVICES',
            logo:<GrServices />
        },

        
        {
            tittle:'OFFERS',
            duration:'2 Hours',
            logo:<BiSolidOffer />
        },

        
        {
            tittle:'CONTACT',
            duration:'2 Hours',
            logo:<MdContactSupport />
        }
    ]
  return (
    <div className='card--container'>
        {course.map((item)=>(
            <div className='card-bodys' >
             
                <div className='cards--cover'>{item.logo}</div>
                <div className='cards--tittle'>{item.tittle}</div>
                
            </div>
        ))}
    </div>
  )
}

export default Resturentcard