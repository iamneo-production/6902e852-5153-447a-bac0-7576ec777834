import React from "react";
import { Field, Formik, Form } from "formik";
import TextBar from "./TextBar";
import * as Yup from "yup";
import axios from "axios";
import base_url from "../../api/bootapi";
import { useNavigate } from "react-router-dom";
import "../../App.css";
function RegisterForm() {
  const navigate = useNavigate();
  const validate = Yup.object({
    useroradmin: Yup.string()
      .max(5, "Must be 30 characters or less")
      .required("Required"),
    username: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Username is Required"),
    phonenumber: Yup.string()
      .min(10, "should be 10 number")
      .max(10, "should be 10 number")
      .required("Mobilenumber is Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 charaters")
      .required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is required"),
  });

  function postDatatoServer(data) {
    axios.post(`${base_url}/signup`, data).then(
      (response) => {
        if (response.data === "New user") navigate("/Login");
        else console.log("user already exist");
        console.log(response);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  }

  return (
    <Formik
      initialValues={{
        useroradmin: "",
        username: "",
        phonenumber: "",
        email: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        postDatatoServer(values);
      }}
    >
      {(formik, setFieldValue) => (
        <div>
          <h1 className="mt-4" style={{ fontWeight: "bold" }} class="title">
            Register
          </h1>
          <Form>
            <TextBar
              name="useroradmin"
              type="select"
              options={["user", "admin"]}
              placeholder="Enter User/admin"
              id="userorname"
            />

            <TextBar
              name="username"
              type="text"
              placeholder="Enter Username"
              id="username"
            />

            <TextBar
              name="phonenumber"
              type="text"
              placeholder="Enter Mobilenumber"
              id="mobileNumber"
            />
            <TextBar
              name="email"
              type="email"
              placeholder="Enter email"
              id="email"
            />
            <TextBar
              name="password"
              type="password"
              placeholder="Password"
              id="password"
            />
            <TextBar
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
            />
            <button type="submit" id="submitButton" class="button">
              Register
            </button>
            <button class="button" type="reset">
              Reset
            </button>
            <h5 className="mt-4" style={{ fontWeight: "bold" }} id="signinLink">
              Already a User?<a href="/Login">Login</a>
            </h5>
          </Form>
        </div>
      )}
    </Formik>
  );
}
export default RegisterForm;
