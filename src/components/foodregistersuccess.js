import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from 'cdbreact';
import CheckOutlines from './check.json' 
import LOTTIE from 'lottie-react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { MdOutlineFileCopy } from "react-icons/md";


const FoodsuccessPopup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state || {}; // Get the id from the navigation state
  const [value,setValue] = useState('')
  const [copied,setCopied] = useState(false);

  console.log(id); // This will log the ID to the console

  return (
    < div  style={{
        backgroundImage: `url(${require('./assets/restaurentlogin3.png')})`,
        backgroundSize: 'cover',
        width:'100%',
        height:'100vh'
        /* other background properties */
      }}>
     
      
      <CDBContainer style={{width:'100%', }}>
        <CDBCard style={{ width: '30rem',marginLeft:'30%',height:'40vh',boxShadow: 'rgba(0, 0, 0, 0.50) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
          <CDBCardBody className="mx-4" style={{ width:'25rem',height:'60vh'}}>
            <div className="text-center mt-4 mb-2">
                <LOTTIE animationData={CheckOutlines} onAnimationIteration={1} loop={false } style={{width:'200px',height:'200px',marginLeft:'24%'}}></LOTTIE>
              <p className="h4 font-weight-bold"> Rady to get Orders!!!! </p>
              <p className="h4 font-weight-bold"> Food-Item ID!! </p>
            </div>
            
            
            <input

            placeholder={id}
            
            
            style={{marginLeft:'24%',borderStyle:'groove',textAlign:'center',fontFamily:'monospace'}}
            
            />
          <CopyToClipboard text={id} onCopy={()=>setCopied(true)}>
            
             <button style={{backgroundColor:'white',height:30,width:20}} onClick={() => alert("Copied to clipboard")}><MdOutlineFileCopy /></button>
          </CopyToClipboard>

            <CDBBtn color="primary" style={{ width: '60%' }} className="btn-block mt-4 mx-auto"  >
              <a href='/Resturenthome'>Back to Dashboard </a>
            </CDBBtn>
            <div style={{width:400,height:30}}>
  
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
  
  
      
  
  
  
  
  </div>
  );
};

export default FoodsuccessPopup;
