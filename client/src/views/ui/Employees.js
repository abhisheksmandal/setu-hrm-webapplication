import {
  Card,
  Row,
  Col,
  // CardTitle,
  Container,
  CardBody,
  // Button,
  Form,
  FormGroup,
  Label,
  Input,
  // FormText,
  // Table,
} from "reactstrap";
// import { Link } from "react-router-dom";
// import { render } from "@testing-library/react";
import React from "react";

const Employees = () => {
  return (
    <div>
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
              <Form method="post" name="userRegistrationForm">
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
                        <Label for="exampleEmail">First Name: *</Label>
                        <Input
                          id="fname"
                          className="input"
                          name="fname"
                          placeholder="Enter your first name"
                          type="text"
                        />
                      </FormGroup>
                    </div>
                  </Col>
                  <Col xs="3">
                    <div className="">
                      <FormGroup>
                        <Label for="exampleEmail">Last Name: *</Label>
                        <Input
                          id="lname"
                          className="input"
                          name="lname"
                          placeholder="Enter your last name"
                          type="text"
                        />
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
                      <Label for="exampleEmail">Company Name: *</Label>
                      <Input
                        id="companyname"
                        className="input"
                        name="companyname"
                        placeholder="Enter your company name"
                        type="text"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="exampleEmail">PAN No: *</Label>
                      <Input
                        id="panno"
                        className="input"
                        name="panno"
                        placeholder="Enter your PAN No"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Address: *</Label>
                      <Input
                        id="address"
                        className="input"
                        name="address"
                        placeholder="Enter your address"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Email Address: *</Label>
                      <Input
                        id="emailid"
                        className="input"
                        name="emailid"
                        placeholder="Enter your email address"
                        type="email"
                      />
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
                      {/* <Button
                          className="btn"
                          color="buttonColor"
                          onClick={otpBlock}
                          >
                          Generate OTP
                        </Button> */}

                      <input
                        id="registerBtn"
                        type="submit"
                        className="btn bg-buttonColor text-white"
                        value="Generate OTP"
                        // onClick={this.submituserRegistrationForm}
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
                      </div>
                    </Col>
                  </Row>
                </Row>
              </Form>
            </Container>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Employees;
