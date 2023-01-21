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

export default function Employees() {
  function disableTxt() {
    let inp = document.getElementsByTagName("input");
    console.log(inp);
    inp.disabled = true;
  }

  function otpBlock() {
    console.log("clicked");
    var x = document.getElementById("otpBlock");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
    disableTxt();
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (values, actions) => {
    const vals = { ...values };
    // actions.resetForm();
    fetch("http://localhost:4000/auth/signup", {
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
              onSubmit={handleSubmit(onSubmit)}
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
                    <FormGroup>
                      <div for="exampleEmail">First Name: *</div>
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
                    </FormGroup>
                  </div>
                </Col>
                <Col xs="3">
                  <div className="">
                    <FormGroup>
                      <div for="exampleEmail">Last Name: *</div>
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
                    </FormGroup>
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
                  <FormGroup>
                    <div for="exampleEmail">Company Name: *</div>
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
                  </FormGroup>

                  <FormGroup>
                    <div for="exampleEmail">PAN No: *</div>
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
                  </FormGroup>
                  <FormGroup>
                    <div for="exampleEmail">Address: *</div>
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
                  </FormGroup>
                  <FormGroup>
                    <div>Email Id:</div>
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
                      {errors.email?.type === "required" && "Email is required"}
                      {errors.email?.type === "pattern" &&
                        "Entered email is in wrong format"}
                    </div>
                  </FormGroup>
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
            <Form method="post" name="userRegistrationForm">
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
                    <Label for="exampleEmail">Enter OTP: *</Label>
                    <Input
                      id="otpcode"
                      className="input"
                      name="otpcode"
                      placeholder="Enter the OTP you recieved"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Password: *</Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Enter a password"
                      type="password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Confirm Password: *</Label>
                    <Input
                      id="confirmpassword"
                      name="confirmpassword"
                      placeholder="Re-enter your password"
                      type="password"
                    />
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
