import React from 'react'
import './resturenthome.css'
import { BiEdit } from "react-icons/bi";

const Profileheader =  ()=> {
  return (
    <div className='rest-pro-header--header'>
        <h2  className='rest-pro-header--header' > Profile</h2>
        <div className='edit'>
        <BiEdit  className='edit-icon'/>

        </div>

    </div>
  )
}

export default Profileheader