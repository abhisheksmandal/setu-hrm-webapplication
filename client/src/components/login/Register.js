// for

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
import React from "react";
import { useForm } from "react-hook-form";
import { func } from "prop-types";
import hash from "./PasswordHashing";
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Employees() {
  function disableTxt() {
    let inp = document.getElementById("lname");
    console.log(inp);
    inp.disabled = true;
    console.log("Working");
  }

  function otpBlock() {
    console.log("otpBlock Unlocked!");
    var x = document.getElementById("otpBlock");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
    // disableTxt();

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
    watch,
  } = useForm({ mode: "onTouched" });

  const onReg1Submit = (values, actions) => {
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
      .catch((err) => {
        return;
      })
      .then((res) => {
        if (!res || !res.ok || res.status >= 400) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        // console.log(data);
      });
    otpBlock();
  };

  const onReg2Submit = (values, actions) => {
    const vals = { ...values };
    console.log(vals);
    // Hashing the password
    vals.password = hash.hash(vals.password);
    console.log(vals.password);
    console.log(vals);

    //Hashing confirm password
    vals.confirmPassword = hash.hash(vals.confirmPassword);
    console.log(vals.confirmPassword);
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
      .catch((err) => {
        return;
      })
      .then((res) => {
        if (!res || !res.ok || res.status >= 400) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        // console.log(data);
      });
    otpBlock();
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
                      <label>First Name: *</label>
                      <input
                        id="fname"
                        className="input col-12"
                        name="fname"
                        placeholder="Enter your first name"
                        type="text"
                        {...register("fname", { required: true })}
                      />
                      <div className="error">
                        {errors.fname?.type === "required" &&
                          "First Name is required"}
                      </div>
                    </>
                  </div>
                </Col>
                <Col xs="3">
                  <div className="">
                    <>
                      <label>Last Name: *</label>
                      <input
                        id="lname"
                        className="input col-12"
                        name="lname"
                        placeholder="Enter your last name"
                        type="text"
                        {...register("lname", { required: true })}
                      />
                      <div className="error">
                        {errors.lname?.type === "required" &&
                          "Last Name is required"}
                      </div>
                    </>
                  </div>
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
                    <label>Company Name: *</label>
                    <input
                      id="companyname"
                      className="input col-12"
                      name="companyname"
                      placeholder="Enter your company name"
                      type="text"
                      {...register("companyname", { required: true })}
                    />
                    <div className="error">
                      {errors.companyname?.type === "required" &&
                        "Company Name is required"}
                    </div>
                  </>

                  <>
                    <label>PAN No: *</label>
                    <input
                      id="panno"
                      className="input col-12"
                      name="panno"
                      placeholder="Enter your PAN No"
                      type="text"
                      {...register("panno", {
                        required: true,
                        pattern: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
                      })}
                    />
                    <div className="error">
                      {errors.panno?.type === "required" &&
                        "Pan No is required"}
                      {errors.panno?.type === "pattern" && "Pan No in invalid"}
                    </div>
                  </>
                  <>
                    <label>Address: *</label>
                    <input
                      id="address"
                      className="input col-12"
                      name="address"
                      placeholder="Enter your address"
                      type="text"
                      {...register("address", { required: true })}
                    />
                    <div className="error">
                      {errors.address?.type === "required" &&
                        "Address is required"}
                    </div>
                  </>
                  <>
                    <label>Email Id:</label>
                    <input
                      className="col-12"
                      placeholder="Enter primary email"
                      {...register("emailid", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                      })}
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
                    <input
                      id="registerBtn"
                      type="submit"
                      className="btn bg-buttonColor text-white"
                      value="Generate OTP"
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
                  // display: "none",
                }}
              >
                <Col xs="6">
                  <hr />

                  <FormGroup>
                    <label htmlFor="exampleEmail">Enter OTP: *</label>
                    <input
                      id="otpcode"
                      className="input col-12"
                      placeholder="Enter the OTP you recieved"
                      type="text"
                      {...register2("otpcode", { required: true })}
                    />
                    <div className="error">
                      {errors2.otpcode?.type === "required" &&
                        "OTP is required"}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleEmail">Password: *</label>
                    <input
                      id="password"
                      name="password"
                      placeholder="Enter a password"
                      type="password"
                      className={"input col-12"}
                      {...register2("password", {
                        required: "Password is required",
                        pattern: {
                          value: "",
                          message: "",
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
                    <input
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
                      <input
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
