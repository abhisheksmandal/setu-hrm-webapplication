import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Form } from "reactstrap";
import { Card, Row, Button } from "reactstrap";
import hash from "./PasswordHashing";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function App() {
  // const initialValues = { email: "", password: "" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const handleChange = (e) => {
  //   // console.log(e.target);
  // };
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onTouched" });

  const onLogin = (values, actions) => {
    const vals = { ...values };

    // Hashing the password
    vals.loginPass = hash.hash(vals.loginPass);
    console.log(vals);

    // // Hashing the confirm password
    // vals.confirmPassword = hash.hash(vals.confirmPassword);

    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vals),
    })
      .then((response) => response.json())
      .then((data) => {
        const messageString = JSON.stringify(data.loginMessage); // Convert the object to a string
        setMessage(messageString);
        console.log(messageString);
        if (messageString === '"Login successful"') {
          console.log(messageString);
          navigate("/starter");
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("An error occurred while submitting the form");
      });
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <Form
        method="post"
        name="userRegistrationForm"
        onSubmit={handleSubmit(onLogin)}
      >
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col="4" md="6" className="mt-5 pt-4">
            <label>Email:</label>
            <MDBInput
              wrapperClass="mb-4"
              // label="Email address"
              id="loginEmail"
              // name="loginEmail"
              // type="email"
              {...register("loginEmail", {
                required: true,
              })}
            />
            <div className="error">
              {errors.loginEmail?.type === "required" && "Email is required"}
            </div>
            <label>Password:</label>
            <MDBInput
              wrapperClass="mb-4"
              // label="Password"
              id="loginPass"
              // name="loginPass"
              type="password"
              size="lg"
              {...register("loginPass", { required: true })}
            />
            <div className="error">
              {errors.loginPass?.type === "required" && "Password is required"}
            </div>

            <div>{message}</div>

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBInput
                type="submit"
                className="btn bg-buttonColor text-white"
                value="Register"
              />
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?
                <Link to="/register">Register</Link>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </Form>

      <div className="d-flex mt-5 flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2022. All rights reserved.
        </div>
      </div>
    </MDBContainer>
  );
}

export default App;
