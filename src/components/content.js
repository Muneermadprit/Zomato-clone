import React from 'react'
import Contentheader from './contentheader'
import'./resturenthome.css'
import Resturentcard from './resturentcard'
import Resturentfoodlist from './resturentfoodlist'

  const Content = ()=> {
  return (
    <div className='content-new'>
        <Contentheader/>
        <Resturentcard/>
        <Resturentfoodlist/>
    </div>
  )
}

export default Content