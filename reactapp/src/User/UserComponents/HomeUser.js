import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import "../UserStyles/UserApp.css";

//import {Navbar,Nav} from 'react-bootstrap';
import NavUser from "./NavUser";
function HomeUser() {
  const [serviceList, setServiceList] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/allService").then(({ data }) => {
      console.log(data);
      setServiceList(data);
    });
  }, []);
  const handleNext = (values) => {
    navigate("/Dashboard", { state: values });
  };
  return (
    <div>
      <NavUser />
      <div className="search">
        <input
          type="text"
          placeholder="Search Centers by Name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div>
        <Container className="mainCardUser">
          <Row>
            {serviceList
              .filter((center) => {
                if (search === "") {
                  return center;
                } else if (
                  center.serviceCenterName
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return center;
                }
              })
              .map((center) => {
                return (
                  <Col style={{ marginBottom: "20px" }} sm={4} key={center.id}>
                    <Card>
                      <Card.Img
                        style={{ width: "10rem", height: "100px" }}
                        variant="top"
                        src={center.serviceCenterImage}
                      />
                      <Card.Body>
                        <Card.Title> {center.serviceCenterName} </Card.Title>
                        <Card.Text>
                          <Row>
                            <Col sm={8}>
                              <div>Address:{center.serviceCenterAddress}</div>
                            </Col>
                            <Col sm={8}>
                              <div>Timming:0:00 - 23:59</div>
                            </Col>
                          </Row>

                          {/* <Link to="/Dashboard">
                            <Button variant="danger">Book Slot</Button>
                          </Link> */}

                          <button
                            onClick={() => {
                              handleNext(center);
                            }}
                            type="submit"
                            class="btn btn-success"
                          >
                            Book SLot
                          </button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeUser;
/*
const setID = (id,name,email,mobile,address,ima,desc) =>{
    
    localStorage.setItem('ID', id)
    localStorage.setItem('Name', name)
    localStorage.setItem('Email', email)
    localStorage.setItem('Mobile', mobile)
    localStorage.setItem('Address', address)
    localStorage.setItem('ImageURL', ima)
    localStorage.setItem('Desc', desc)
    console.log(id," ",name," ",email);
  }
*/
