import {
  Card,
  Row,
  Col,
  CardTitle,
  Container,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table,
} from "reactstrap";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { func } from "prop-types";
import hash from "./PasswordHashing";
import { Link } from "react-router-dom";
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Employees() {
  // const linker = Link();

  const [genBtn, setState] = useState(false);
  const [btnTxt, changeTxt] = useState("Generate OTP");

  function otpBlock() {
    console.log("otpBlock Unlocked!");
    var x = document.getElementById("otpBlock");
    if (x.style.display === "none") {
      x.style.display = "flex";
    }
    // else {
    //   x.style.display = "none";
    // }
    setState(true);
    changeTxt("Regenerate OTP");

    let registerBtn = document.getElementById("registerBtn");
    registerBtn.value = "Regenerate OTP";
    console.log(registerBtn);
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onTouched" });

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
    reset: reset2,
    watch,
  } = useForm({ mode: "onTouched" });

  const onReg1Submit = (values, actions) => {
    reset2();
    const vals = { ...values };
    console.log(vals);

    // actions.resetForm();
    fetch("http://localhost:4000/auth/reg1", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vals),
    })
      // .catch((err) => {
      //   return;
      // })
      .then((response) => response.json())
      // .then((data) => {
      //   // console.log("Its working");
      //   console.log(data);
      //   // if (!data) return;
      //   // console.log(data);
      // });
      .then((data) => {
        console.log(data); // this will log the entire response object
        // console.log(data.PromiseResult); // this will log the value inside PromiseResult
        // display the value in the frontend as needed
      });
    otpBlock();
  };

  // const linker = Link();

  const onReg2Submit = (values, actions) => {
    const vals = { ...values };
    // Hashing the password
    vals.password = hash.hash(vals.password);

    //Hashing confirm password
    vals.confirmPassword = hash.hash(vals.confirmPassword);
    console.log(vals);

    // actions.resetForm();
    fetch("http://localhost:4000/auth/reg2", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vals),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    // otpBlock();
    // linker.push("/starter");
  };

  const password = watch("password");

  return (
    <div>
      <Card
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "right",
        }}
      >
        <CardBody>
          <Container>
            <Form
              method="post"
              name="userRegistrationForm"
              onSubmit={handleSubmit(onReg1Submit)}
            >
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Register
              </h3>
              <Row
                className="mt-3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Col xs="3">
                  <div className="">
                    <>
                      <label className="mt-3">First Name:</label>
                      <MDBInput
                        className="input1"
                        size="s"
                        placeholder="Enter your first name"
                        type="text"
                        {...register("fname", { required: true })}
                        disabled={genBtn}
                      />
                      <div className="error">
                        {errors.fname?.type === "required" &&
                          "First Name is required"}
                      </div>
                    </>
                  </div>
                </Col>
                <Col xs="3">
                  <>
                    <label className="mt-3">Last Name:</label>
                    <MDBInput
                      className="input1"
                      size="s"
                      placeholder="Enter your last name"
                      type="text"
                      {...register("lname", { required: true })}
                      disabled={genBtn}
                    />
                    <div className="error">
                      {errors.lname?.type === "required" &&
                        "Last Name is required"}
                    </div>
                  </>
                </Col>
              </Row>
              <Row
                className="mt-3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Col xs="6">
                  <>
                    <label className="mt-3">Company Name:</label>
                    <MDBInput
                      className="input1"
                      size="s"
                      placeholder="Enter your company name"
                      type="text"
                      {...register("companyname", { required: true })}
                      disabled={genBtn}
                    />
                    <div className="error">
                      {errors.companyname?.type === "required" &&
                        "Company Name is required"}
                    </div>
                  </>

                  <>
                    <label className="mt-3">PAN No:</label>
                    <MDBInput
                      className="input1"
                      size="s"
                      placeholder="Enter your PAN No"
                      type="text"
                      {...register("panno", {
                        required: true,
                        pattern: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
                      })}
                      disabled={genBtn}
                    />
                    <div className="error">
                      {errors.panno?.type === "required" &&
                        "Pan No is required"}
                      {errors.panno?.type === "pattern" && "Pan No in invalid"}
                    </div>
                  </>
                  <>
                    <label className="mt-3">Address:</label>
                    <MDBInput
                      className="input1"
                      size="s"
                      placeholder="Enter your address"
                      type="text"
                      {...register("address", { required: true })}
                      disabled={genBtn}
                    />
                    <div className="error">
                      {errors.address?.type === "required" &&
                        "Address is required"}
                    </div>
                  </>
                  <>
                    <label className="mt-3">Email:</label>
                    <MDBInput
                      className="input1"
                      size="s"
                      placeholder="Enter your email"
                      {...register("emailid", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                      })}
                      disabled={genBtn}
                    />
                    <div className="error">
                      {errors.emailid?.type === "required" &&
                        "Email is required"}
                      {errors.emailid?.type === "pattern" &&
                        "Entered email is in wrong format"}
                    </div>
                  </>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MDBInput
                      id="registerBtn"
                      type="submit"
                      className="btn bg-buttonColor text-white mt-3"
                      value={btnTxt}
                    />
                  </div>
                </Col>
              </Row>
            </Form>
            <Form
              method="post"
              name="userRegistrationForm"
              onSubmit={handleSubmit2(onReg2Submit)}
            >
              <Row
                id="otpBlock"
                className="mt-3"
                style={{
                  // display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "none",
                }}
              >
                <Col xs="6">
                  <hr />

                  <FormGroup>
                    <label htmlFor="exampleEmail">Enter OTP: *</label>
                    <MDBInput
                      id="otpcode"
                      className="input col-12"
                      placeholder="Enter the OTP you recieved"
                      type="text"
                      {...register2("otpcode", {
                        required: "OTP is required",
                        pattern: {
                          value: /^\d+$/,
                          message: "Numbers only",
                        },
                        minLength: {
                          value: 6,
                          message: "OTP length is 6",
                        },
                        maxLength: {
                          value: 6,
                          message: "OTP length is 6",
                        },
                      })}
                    />
                    <div className="error">
                      {errors2.otpcode && errors2.otpcode.message}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleEmail">Password: *</label>
                    <MDBInput
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter a password"
                      className={"input col-12"}
                      {...register2("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                          message:
                            "Password should include at least one uppercase, one numeric value and one special character",
                        },
                        minLength: {
                          value: 8,
                          message: "Minimum required length is 8",
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum required length is 20",
                        },
                      })}
                    />
                    <div className="error">
                      {errors2.password && errors2.password.message}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleEmail">Confirm Password: *</label>
                    <MDBInput
                      id="confirmPassword"
                      placeholder="Re-enter your password"
                      type="password"
                      className="input col-12"
                      {...register2("confirmPassword", {
                        required: "Password is required",
                        validate: (value) =>
                          value === password || "The passwords do not match",
                      })}
                    />
                    <div className="error">
                      {errors2.confirmPassword &&
                        errors2.confirmPassword.message}
                    </div>
                  </FormGroup>
                </Col>
                <Row>
                  <Col>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MDBInput
                        type="submit"
                        className="btn bg-buttonColor text-white"
                        value="Register"
                      />

                      {/* <Link to="/loginregister">
                            <Button className="btn" color="buttonColor">
                            Register
                            </Button>
                          </Link> */}
                    </div>
                  </Col>
                </Row>
              </Row>
            </Form>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}
