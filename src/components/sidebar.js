import React from 'react'
import { BiHome,BiBookAlt,BiMessage,BiSolidReport,BiStats,BiTask,BiHelpCircle } from "react-icons/bi";
import './resturenthome.css'
import { session } from "react-session";

 const Sidebar = ()=> {
  const resturentname = sessionStorage.getItem('resturentname')
  return (
    <div className='menu'>
        <div className='logos'>
         <BiBookAlt/>
         <h2>{resturentname}</h2>
        </div>
        <div className='menu--list'>
            <a href='#' className='item'>
            <BiHome />
            Dashboard
            </a>
            <a href='#' className='item'>
            <BiTask />
            Assainment
            </a>
            <a href='#' className='item'>
            <BiSolidReport/>
            Report
            </a>
            <a href='#' className='item'>
            <BiStats/>
            States
            </a>
            <a href='#' className='item'>
            <BiMessage/>
            Message
            </a>
            <a href='#' className='item'>
            <BiHelpCircle/>
            Help
            </a>
        </div>
        </div>
  )
}

export default Sidebar