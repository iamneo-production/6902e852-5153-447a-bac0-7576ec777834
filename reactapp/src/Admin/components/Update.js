import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Adminstyles/AdminApp.css'

function Update() {
    const navigate = useNavigate();
    const location = useLocation();
    const [state, setState] = useState(location.state);
    const handleUpdate = (e) => {
      e.preventDefault();
      console.log("submitted");
      axios
        .put(`http://localhost:8080/update/${state.id}`, state)
        .then((data) => {
          navigate("/CenterProfile");
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const changeState = (value, name) => {
      setState({ ...state, [name]: value });
    };
    console.log(navigate);
    const {
      serviceCenterName,
      serviceCenterPhone,
      serviceCenterAddress,
      serviceCenterImage,
      serviceCenterEmail,
    } = state;
    return (
      <div className="Updatemain ">
        <Form className="formCard">
          <h2>Update Service</h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <br></br>
            <Form.Control
              name="serviceCenterName"
              value={serviceCenterName}
              onChange={(e) => changeState(e.target.value, e.target.name)}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <br></br>
            <Form.Control
              name="serviceCenterEmail"
              type="text"
              value={serviceCenterEmail}
              onChange={(e) => changeState(e.target.value, e.target.name)}
              placeholder="Enter Email"
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <br></br>
            <Form.Control
              name="serviceCenterPhone"
              type="text"
              value={serviceCenterPhone}
              onChange={(e) => changeState(e.target.value, e.target.name)}
              placeholder="Enter Phone"
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <br></br>
            <Form.Control
              name="serviceCenterAddress"
              type="text"
              value={serviceCenterAddress}
              onChange={(e) => changeState(e.target.value, e.target.name)}
              placeholder="Enter Address"
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Img Url</Form.Label>
            <br></br>
            <Form.Control
              name="serviceCenterImage"
              type="text"
              value={serviceCenterImage}
              onChange={(e) => changeState(e.target.value, e.target.name)}
              placeholder="Enter ImageUrl"
            />
          </Form.Group>
  
          <Button variant="danger" type="submit" onClick={handleUpdate}>
            Submit
          </Button>
          <Link to="/CenterProfile">
            <Button variant="danger" className="deleteCard">
              Back
            </Button>
          </Link>
        </Form>
      </div>
    );
  }

export default Update