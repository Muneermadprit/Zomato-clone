import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import data from '../components/assets/states.json';

const Admin = () => {
  const [cities, setCities] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const resturentid = sessionStorage.getItem('id');

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
    setImage(event.target.files[0]);
  };

  const addItem = async () => {
    const idvalid = new Date().getTime().toString();
    const formData = {
      foodid: idvalid,
      resturentid: resturentid,
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      offer: offer,
      city: city,
      image: image // Assuming the backend can handle base64 string or image path
    };
    try {
      await axios.post("https://zomato-clone-e1o1.onrender.com/food", formData);
      console.log("Success");

      setName("");
      setDescription("");
      setQuantity("");
      setPrice("");
      setOffer("");
      setCity("");
      setImage(null);

      navigate('/foodsuccess', { state: { id: idvalid } });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="mx-auto col-10 col-md-8 col-lg-6">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Restaurant-Id</Form.Label>
              <Form.Control type="number" placeholder={resturentid} readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Offer-Price</Form.Label>
              <Form.Control type="number" value={offer} onChange={(e) => setOffer(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Select value={city} onChange={(e) => setCity(e.target.value)} required>
                <option value="">Select a city</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </Form.Select>
            </Form.Group>


            <Button variant="primary" onClick={addItem}>
              Add
            </Button>
            <Link to="/viewProduct" className="btn btn-danger ml-2">
              View all
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
