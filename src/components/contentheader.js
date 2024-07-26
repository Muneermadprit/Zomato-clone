import React from 'react'
import { BiNotification } from "react-icons/bi";

const Contentheader = ()=> {
  return (
    <div className='content--header' >
        <h1 className='headertittle'>
         Dashboard
        </h1>
        <div className='headeractivity'>
            <div className='notify'>
            <BiNotification  className='icon'/>
            </div>
            </div>

    </div>
  )
}

export default Contentheader