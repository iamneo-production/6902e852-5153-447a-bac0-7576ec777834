import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import NavAdmin from "./NavAdmin";
import NavAdmin from "./NavAdmin";

//import base_url from "../../api/bootapi";

function CenterProfile() {
  const [serviceList, setServiceList] = useState([]);
  const [show, setShow] = useState(false);
  const [serviceCenterById, setserviceCenterById] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/admin/getAllServiceCenters"
    ,{headers: { Authorization: "Bearer " + localStorage.getItem("token") },}
    ).then(({ data }) => {
      console.log(data);
      setServiceList(data);
    });
  }, []);
  const handleUpdate = (center) => {
    navigate("/Update", { state: center });
  };
  
  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/admin/deleteServiceCenter/${serviceCenterById}`,{
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((data) => {
        navigate("/CenterProfile");
        setShow(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavAdmin />
      <div>
        <Container className="mainCardAdmin">
          <Row>
            {serviceList.map((center) => {
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
                        <Row>
                          <Col>
                            <PencilSquare
                              onClick={() => {
                                handleUpdate(center);
                              }}
                            ></PencilSquare>
                          </Col>
                          <Col>
                            <Trash
                              onClick={() => {
                                setserviceCenterById(center.id);
                                setShow(true);
                              }}
                            />
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>Confirm the delete operation</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleDelete}>
                Confrim
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    </div>
  );
}

export default CenterProfile;
