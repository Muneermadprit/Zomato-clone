import react from 'react';
import Container from "react-bootstrap/esm/Container";
import {Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from 'axios';
import {ReactSession} from "react-client-session";
import { Link } from 'react-router-dom';
import ContryUpload from './contry';



const Contry=()=>{
    
    const [name, setName] = useState("");
   
    const [state, setState] = useState("");
    
   
  
  
    const addItem = () => {
      
      
  
      axios
        .post("http://localhost:8081/addcontry",{
         name:name,
         state:state
        })
        .then(() => {
          console.log("Success");
        
         
     
      
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    };
  
    return (
      <div className="row">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Contry Name
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter State Name
              </label>
              <input
                type="text"
                className="form-control"
                value={state}
                onChange={(event) => setState(event.target.value)}
                required
              />
            </div>
           
           
            
            <button type="button" onClick={addItem} className="btn btn-primary">
              Add
            </button>
            <Link to="/viewProduct" className="btn btn-danger AA">
              View all
            </Link>
          </form>
          <ContryUpload/>

        </div>
      
      </div>
   
    );
  

}
export default Contry;