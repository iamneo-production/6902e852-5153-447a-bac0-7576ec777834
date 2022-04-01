import React, { useState,  } from "react";
import NavUser from "./NavUser";
import { Card, CardText, CardBody, CardTitle, CardImg } from "reactstrap";
import "../UserStyles/UserApp.css";
import * as Yup from "yup";
import { Formik, Form,Field } from "formik";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "../../Fields/TextField";
import { useNavigate, useLocation } from "react-router-dom";
import base_url from "../../api/bootapi";
import axios from "axios";
//import Alert from '@mui/material/Alert';
function DashBoard() {

  function validateDate(dateChoosen){
    const today = new Date();
    const currentMonth =  today.getMonth()+1
    const currentDate = today.getDate()
    console.log(currentDate)
    //check whether current month is single digit or not 
    // Is signle digit add 0 before month digit -- since in booked Date from form - getting 03

    const Length = currentMonth.toString().length;
    let thisMonth = "";
    if(Length === 1){
      thisMonth = "0"+ currentMonth.toString();
    }
    else
      thisMonth = currentMonth;

    const dateLength = currentDate.toString().length;
    //console.log("Date Length :",dateLength)
    let thisDate = "";
    if(dateLength === 1){
      thisDate = "0"+ currentDate.toString();   
    }
    else
      thisDate = currentDate;
      
        //Calculate todays date & current time
    const todayDate = `${today.getFullYear()}-${thisMonth}-${thisDate}`;
    console.log("Todays date",todayDate)
    console.log("Choosen date",dateChoosen)
    if(todayDate <= dateChoosen){
      return true;
    }
    return false;
  }

  const navigate = useNavigate();
  const location = useLocation();
  const [state] = useState(location.state);
  const validate = Yup.object({
    productName: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    productModelNo: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Model is Required"),
    dateOfPurchase: Yup.date().required("Date is Required"),
    contactNumber:Yup.string()
    .min(10, "should be 10 number")
    .max(10, "should be 10 number")
      .required("Required"),
    availableSlots: Yup.string().required("Time is required"),
  });

  const initialValues = {
    productName: "",
    productModelNo: "",
    dateOfPurchase: "",
    contactNumber: "",
    availableSlots:"",
    problemDescription: "",
  };
  //Booking Slot
  function handleBook(data) {
    
    data = { ...data, userId: localStorage.getItem("userid") };
    axios.post(`${base_url}/user/addUserAppointment`, data ,{
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },}
      ).then(
      (response) => {
        console.log(response.data);
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
                //console.log(values);
                //handleBook(values);
                if(validateDate(values.dateOfPurchase)){
                  handleBook(values);
                }
                else
                alert("Date choosen should not be less than Current Date")
                //console.log(values.dateOfPurchase);
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
                          label="Contact Number"
                          type="text"
                          name="contactNumber"
                        />
                        Available Slot
                        <Field
                          label="Available Slot"
                          type="time"
                          name="availableSlots"
                        />
                        <div>
                          <p>Problem of the Product</p>
                          <textarea
                            type="text"
                            name="problemDescription"
                            class="descBox"
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
