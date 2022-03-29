import React, { useState, useEffect } from "react";
import NavUser from "./NavUser";
import { Card, CardText, CardBody, CardTitle, CardImg } from "reactstrap";
import "../UserStyles/UserApp.css";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "../../Fields/TextField";
import { useNavigate, useLocation } from "react-router-dom";
import base_url from "../../api/bootapi";
import axios from "axios";
function DashBoard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState(location.state);
  const validate = Yup.object({
    productName: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    productModelNo: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Model is Required"),
    dateOfPurchase: Yup.date().required("Date is Required"),
    contactNumber: Yup.number()
      .min(13, "Must be 10 characters or less")
      .required("Required"),
    availableSlots: Yup.string().required("Time is required"),
  });

  const initialValues = {
    productName: "",
    productModelNo: "",
    dateOfPurchase: "",
    contactNumber: "",
    availableSlots: "12:00:00",
    problemDescription: "",
  };
  function handleBook(data) {
    data = { ...data, userId: localStorage.getItem("userid") };
    axios.post(`${base_url}/user/addUser`, data).then(
      (response) => {
        console.log(response);

        navigate("/MyBooking");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  }
  return (
    <div>
      <div>
        <NavUser />
      </div>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <div className="DashBoardCard ">
            <Card>
              <CardBody>
                <div>
                  <CardImg
                    style={{ width: "10rem", height: "100px" }}
                    variant="top"
                    src={state.serviceCenterImage}
                  />
                  <CardTitle>{state.serviceCenterName}</CardTitle>
                  <CardText> address :{state.serviceCenterAddress} </CardText>
                  <CardText> Timmings : 00:00 to 23:59</CardText>
                  <CardText> Email : {state.serviceCenterEmail}</CardText>
                  <CardText> Mobile : {state.serviceCenterPhone}</CardText>
                  <CardText> Description : {state.serviceCenterDes}</CardText>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>

        <Col>
          <div className="BookForm">
            <Formik
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);
                handleBook(values);
              }}
            >
              {(formik) => (
                <div>
                  <Form>
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="head">ENTER THE DETAILS</h3>
                        <TextField
                          label="Name of the Product"
                          type="text"
                          name="productName"
                        />
                        <TextField
                          label="Model Number of the Product"
                          type="text"
                          name="productModelNo"
                        />
                        <TextField
                          label="Date of the Product"
                          type="date"
                          name="dateOfPurchase"
                        />
                        <TextField
                          label="Number of the Product"
                          type="text"
                          name="contactNumber"
                        />
                        <TextField
                          label="Available Slot"
                          type="text"
                          name="availableSlots"
                        />
                        <div>
                          <p>Problem of the Product</p>
                          <textarea
                            type="text"
                            name="problemDescription"
                            class="form-control"
                            id="addCentreDescription"
                            rows="3"
                          ></textarea>
                        </div>
                        <div className="btnBook">
                          <button type="submit" class="btn btn-success">
                            Book
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DashBoard;
