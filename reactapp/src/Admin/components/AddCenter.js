import React from "react";
import img1 from '../Assests/printerimg.png'
import {Formik,Form} from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
import '../Adminstyles/AdminApp.css'
import TextField from "../../Fields/TextField";
import TextArea from "../../Fields/TextArea"
//import { Link} from 'react-router-dom';
import axios from "axios";
import Image from 'react-bootstrap/Image'
//import {Navbar,Nav, Button} from 'react-bootstrap';
import NavAdmin from "./NavAdmin";
import { useNavigate } from 'react-router-dom';
import base_url from "../../api/bootapi";

function AddCenter() {
  const navigate = useNavigate();
  const validate = Yup.object({
    serviceCenterName: Yup.string()
      .max(26, "Must be 15 characters or less")
      .required("Required"),
    serviceCenterEmail: Yup.string()
      .email("Email is invalid")
      .required("Required"),
    serviceCenterAddress: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    serviceCenterPhone: Yup.number()
      .min(13, "Must be 10 characters or less")
      .required("Required"),
    serviceCenterImage: Yup.string().required("Required"),
    serviceCenterDes: Yup.string(),
  });

  const initialValues = {
    serviceCenterName: "",
    serviceCenterPhone: "",
    serviceCenterAddress: "",
    serviceCenterEmail: "",
    serviceCenterImage: "",
    serviceCenterDes: "",
  };
  const onSubmit = async (value) => {
    try {
      const sub = await axios({
        method: "POST",
        url: `${base_url}/admin/add`,
        data: value,
      });
      console.log(value,sub);
      navigate("/CenterProfile");
      alert("Center Added Succesfully !");
    } catch (err) {
      alert("Center Add Failed !");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <div>
          < NavAdmin/>
          <Form>
            <div className="container mt-2 ">
              <div className="row">
                <div className="col-md-4">
                  <div className="loginBlock1">
                    <h1>Add Centre</h1>
                    <TextField
                      label="Name "
                      type="text"
                      name="serviceCenterName"
                      id="addName"
                    />

                    <TextField
                      label="Email"
                      type="email"
                      name="serviceCenterEmail"
                      id="addEmail"
                    />
                    <TextField
                      label="MobileNumber"
                      type="text"
                      name="serviceCenterPhone"
                      id="addNumber"
                    />
                    <TextField
                      label="Address"
                      type="text"
                      name="serviceCenterAddress"
                      id="addAddress"
                    />
                    <TextField
                      label="Image URL"
                      type="text"
                      name="serviceCenterImage"
                      id="addImageUrl"
                    />
                    <div>
                      
                      <TextArea
                        label="Description of Service Center"
                        type="text"
                        name="serviceCenterDes"
                        class="form-control descBox"
                        id="addCentreDescription"
                        rows="3"
                        placeholder=""
                      ></TextArea>
                    </div>

                    <button
                      className="btn btn-dark mt-3 c1"
                      id="addButton"
                      type="submit"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-md-5">
                  <Image src={img1} className="img1class" />
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default AddCenter;
    
/** <img className='img1class' alt='A Printer Image' src={img1} />*/
  

