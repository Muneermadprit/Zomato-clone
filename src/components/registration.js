import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './registration.css';
import useIsMobile from './hooks/useIsMobile'; 


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const isMobile = useIsMobile();

  const addItem = () => {
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please fill the form");
    } else {
      axios.post("https://zomato-clone-e1o1.onrender.com/signup", {
        username: username,
        email: email,
        password: password
      })
      .then(() => {
        console.log("Success");
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
        setUsername("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
    }
  };

  return (
    <>
      <div className='login template d-flex justify-content-centre align-item-centre 100vh bg-primary' style={{width: "1500", position: "", right: "10" ,backgroundColor:'red'}}>
        <div className='p-5 rounded' id='form'>
          <form>
            <h3>Sign in</h3>
            <div className='mb-4'>
              <label>Name</label>
              <input
                type='text'
                id='name'
                className='form-control'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='email'>Email</label>
              <input
                type='Email'
                id='email'
                className='form-control'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className='mb-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                className='form-control'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div style={{width: 300}}>
              <input
                type='button'
                contentEditable
                className='btn btn-primary'
                value={'Register'}
                onClick={addItem}
              />
            </div>

            {showSuccess && (
              <div className="alert alert-success mt-3" role="alert">
                Registration successful! Please log in.
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
