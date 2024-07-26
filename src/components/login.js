import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useIsMobile from './hooks/useIsMobile';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from 'cdbreact';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checking, setChecking] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile(); 

  const adminCredentials = {
    email: "admin@gmail.com",
    password: "admin"
  };

  const checkUser = () => {
    if (email.trim() === "" || password.trim() === "") {
      window.alert("Please fill in both email and password.");
      return;
    }

    const userData = { email, password };

    if (email === adminCredentials.email && password === adminCredentials.password) {
      sessionStorage.setItem("userType", "admin");
      sessionStorage.setItem("email", email);  // Save email to session storage
      window.alert("Hello Admin");
      navigate("/admin");
    } else {
      axios
        .post("https://zomato-clone-e1o1.onrender.com/signin", userData)
        .then((response) => {
          console.log(JSON.stringify(response.data))
          if (response.data) {
            alert("Login Successful");
            sessionStorage.setItem("email", email);  // Save email to session storage
            setChecking(true);
            navigate("/home/Kollam", { state: { checking: true } }); // Pass state to home page
          }
        })
        .catch((error) => {
          if (error.response) {
            window.alert(error.response.data.message); 
          } else {
            window.alert("An error occurred. Please try again later.");
          }
          console.error(error);
        });

      setEmail("");
      setPassword("");
    }
  };

  return (
    <CDBContainer>
      <CDBCard style={{ width:isMobile? '25rem':'30rem', 
        marginLeft:isMobile?'20px':''
      }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4 font-weight-bold">Login</p>
          </div>
          <CDBInput
            label="Your email"
            type="email"
            icon="envelope"
            iconClass="text-muted"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <CDBInput
            label="Your Password"
            type="password"
            icon="security"
            iconClass="text-muted"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <CDBBtn
            color="primary"
            style={{ width: '60%' }}
            className="btn-block mt-5 mx-auto"
            onClick={checkUser}
          >
            Login
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
}
