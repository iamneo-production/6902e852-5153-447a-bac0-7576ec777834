import React from "react";
import { Formik, Form } from "formik";
import TextBar from "./TextBar";
import * as Yup from "yup";
import axios from "axios";
import base_url from "../../api/bootapi";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 charaters")
      .required("Password is required"),
  });
  function postDatatoServer(data) {
    axios.post(`${base_url}/user/login`, data).then(
      (response) => {
        console.log(response.data);
        if (response.data.useroradmin === "user") {
          localStorage.setItem("userid", response.data.id);
          navigate("/HomeUser");
        } else if (response.data.useroradmin === "admin") {
          localStorage.setItem("userid", response.data.id);
          navigate("/AddCenter");
        } else {
          alert("Invalid Credentials");
        }
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
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        postDatatoServer(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="mt-4" style={{ fontWeight: "bold" }} class="title">
            Login
          </h1>
          <Form>
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
            <button type="submit" id="submitButton" class="button">
              Login
            </button>
            <h5 className="mt-4" style={{ fontWeight: "bold" }} id="">
              New User/Admin?<a href="/Register">Register</a>
            </h5>
          </Form>
        </div>
      )}
    </Formik>
  );
}
export default LoginForm;
