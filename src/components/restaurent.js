import React, { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import data from '../components/assets/states.json';

const Restaurent = () => {
  const [cities, setCities] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = () => {
      // Extract all unique cities from the JSON data
      const allCities = [];
      Object.keys(data).forEach(state => {
        allCities.push(...data[state]);
      });
      setCities(allCities);
    };

    fetchCities();
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const validate = () => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!address) errors.address = "Address is required";
    if (!city) errors.city = "City is required";
    if (!category) errors.category = "Category is required";
  
    return errors;
  };

  const addItem = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const idvalid = new Date().getTime().toString();
      setId(idvalid);

      const jsonData = {
        restaurentid: idvalid,
        resturentname: name,
        email: email,
        password: password,
        address: address,
        city: city,
        category: category,
        image:null
      };

      axios
        .post("https://zomato-clone-e1o1.onrender.com/students", jsonData)
        .then(() => {
          console.log("Success");
          setName("");
          setEmail("");
          setPassword("");
          setAddress("");
          setCity("");
          setCategory("");
          setFile(null);
          
          navigate('/success', { state: { id: idvalid } });
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };

  return (
    <div className="row">
      <div className="mx-auto col-10 col-md-8 col-lg-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              id="name"
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              id="email"
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              id="password"
            />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
              id="address"
            />
            {errors.address && <p className="text-danger">{errors.address}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <Form.Select
              aria-label="Select City"
              className="form-select"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
            >
              <option value="">Select a city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Form.Select>
            {errors.city && <p className="text-danger">{errors.city}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
              id="category"
            />
            {errors.category && <p className="text-danger">{errors.category}</p>}
          </div>
        
          <Button type="button" onClick={addItem} className="btn btn-primary">
            Add
          </Button>
          <Link to="/viewProduct" className="btn btn-danger AA">
            View all
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Restaurent;

