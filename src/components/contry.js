import React from "react";
import Container from "react-bootstrap/esm/Container";
import {Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useEffect } from "react";


const ContryUpload=()=>{
 
    const [name, setName] = useState("");
   
    const [file, setFile] = useState(null);
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const addItem = () => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      
      axios
        .post("http://localhost:8081/contry", formData)
        .then(() => {
          console.log("Success");
          setName("");
         
          setFile(null);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });


      
 
        

    };


    return (
        <>

     



      <div className="row">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Contry Name
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Flag Upload
              </label>
              <input
                type="file"
                className="form-control"
                onChange={handleFileChange}
                required
              />
            </div>
            <button type="button" onClick={addItem} className="btn btn-primary">
              Add
            </button>
           
          </form>
        </div>
      </div>
  </>
    );
};
export default ContryUpload;
