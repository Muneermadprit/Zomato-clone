import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from 'cdbreact';
import { TbScanPosition } from "react-icons/tb";

export default function Restaurentlogin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const adminmail = "admin1234";
  const adminpass = "admin";
  const navigate = useNavigate();
  let usertype = "";

  const checkUser = () => {
    const userData = { id: id, password: password };

    if (id === adminmail && password === adminpass) {
      usertype = "admin";
      sessionStorage.setItem("userType", usertype);
      window.alert("Hello admin");
      navigate("/admin");
    } else {
      axios
        .get(`https://zomato-clone-e1o1.onrender.com/students/${id}`, userData)
        .then((response) => {
          if (response.data[0].password === password) {
            usertype = "user";
            sessionStorage.setItem("userType", usertype);
            sessionStorage.setItem("id", id);
            sessionStorage.setItem("resturentname", response.data[0].resturentname);
            sessionStorage.setItem("password", response.data[0].password);
            window.alert("Welcome User\nYou : " + response.data[0].resturentname);
            navigate("/Resturenthome");
          } else {
            window.alert("Invalid password.");
          }
        })
        .catch((error) => {
          if (error.response) {
            window.alert(error.response.data.message);
          } else {
            window.alert("An error occurred. Please try again later.");
          }
        });

      setId("");
      setPassword("");
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${require('./assets/restaurentlogin3.png')})`,
      backgroundSize: 'cover',
      justifyContent: 'center',
      alignItems:'center',
      width: '100%',
      height: '100vh'
    }}>
      <CDBContainer style={{ width: '100%' ,position:'absolute',}}>
        <CDBCard style={{
          width: '90%',
          maxWidth: '30rem',
          margin: '5% auto',
          boxShadow: 'rgba(0, 0, 0, 0.50) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        }}>
          <CDBCardBody className="mx-4">
            <div className="text-center mt-4 mb-2">
              <p className="h4 font-weight-bold"> Login </p>
            </div>
            <CDBInput
              label="Resturent ID"
              type="text"
              icon="user"
              iconClass="text-muted"
              id="email"
              value={id}
              onChange={(event) => setId(event.target.value)}
              required
            />
            <CDBInput
              label="Your Password"
              type="password"
              icon="lock"
              iconClass="text-muted"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <CDBBtn color="primary" style={{ width: '60%' }} className="btn-block mt-5 mx-auto" onClick={checkUser}>
              Login
            </CDBBtn>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
    </div>
  );
}

