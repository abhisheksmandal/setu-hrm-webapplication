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
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import React from "react";

function otpBlock() {
  console.log("clicked");
  var x = document.getElementById("otpBlock");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm =
      this.submituserRegistrationForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["fname"] = "";
      fields["lname"] = "";
      fields["companyname"] = "";
      fields["panno"] = "";
      fields["address"] = "";
      fields["emailid"] = "";
      fields["otpcode"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      fields["confirmpassword"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = "*Please enter your first name.";
    }
    if (typeof fields["fname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["fname"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["lname"]) {
      formIsValid = false;
      errors["lname"] = "*Please enter your last name.";
    }

    if (typeof fields["lname"] !== "undefined") {
      if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lname"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["companyname"]) {
      formIsValid = false;
      errors["companyname"] = "*Please enter your company name.";
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var emailPattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!emailPattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }
    if (!fields["panno"]) {
      formIsValid = false;
      errors["panno"] = "*Please enter your PAN No.";
    }

    if (typeof fields["panno"] !== "undefined") {
      //regular expression for email validation
      var panPattern = new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);
      if (!panPattern.test(fields["panno"])) {
        formIsValid = false;
        errors["panno"] = "*Please enter valid email-ID.";
      }
    }
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }
    if (!fields["otpcode"]) {
      formIsValid = false;
      errors["otpcode"] = "*Please enter the OTP you recieved.";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    if (!fields["confirmpassword"]) {
      formIsValid = false;
      errors["confirmpassword"] = "*Please re-enter your password.";
    }

    if (fields["confirmpassword"] !== fields["password"]) {
      formIsValid = false;
      errors["confirmpassword"] = "*Re-entered password don't match.";
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
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
                onSubmit={this.submituserRegistrationForm}
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
                        <Label for="exampleEmail">First Name: </Label>
                        <Input
                          id="fname"
                          name="fname"
                          placeholder="Enter your first name"
                          type="text"
                          value={this.state.fields.fname}
                          onChange={this.handleChange}
                        />
                        <div className="errorMsg">
                          {this.state.errors.fname}
                        </div>
                      </FormGroup>
                    </div>
                  </Col>
                  <Col xs="3">
                    <div className="">
                      <FormGroup>
                        <Label for="exampleEmail">Last Name: </Label>
                        <Input
                          id="lname"
                          name="lname"
                          placeholder="Enter your last name"
                          type="text"
                          value={this.state.fields.lname}
                          onChange={this.handleChange}
                        />
                        <div className="errorMsg">
                          {this.state.errors.lname}
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
                    <Form>
                      <FormGroup>
                        <Label for="exampleEmail">Company Name: *</Label>
                        <Input
                          id="companyname"
                          name="companyname"
                          placeholder="Enter your company name"
                          type="text"
                          value={this.state.fields.companyname}
                          onChange={this.handleChange}
                        />
                        <div className="errorMsg">
                          {this.state.errors.companyname}
                        </div>
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleEmail">PAN No: *</Label>
                        <Input
                          id="panno"
                          name="panno"
                          placeholder="Enter your PAN No"
                          type="text"
                          value={this.state.fields.panno}
                          onChange={this.handleChange}
                        />
                        <div className="errorMsg">
                          {this.state.errors.panno}
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Address: *</Label>
                        <Input
                          id="address"
                          name="address"
                          placeholder="Enter your address"
                          type="text"
                          value={this.state.fields.address}
                          onChange={this.handleChange}
                        />
                        <div className="errorMsg">
                          {this.state.errors.address}
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Email address: *</Label>
                        <Input
                          id="emailid"
                          name="emailid"
                          placeholder="Enter your email address"
                          type="email"
                          value={this.state.fields.emailid}
                          onChange={this.handleChange}
                        />
                        <div className="errorMsg">
                          {this.state.errors.emailid}
                        </div>
                      </FormGroup>
                    </Form>
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
                      <Button
                        className="btn"
                        color="buttonColor"
                        onClick={otpBlock}
                      >
                        Generate OTP
                      </Button>
                    </div>
                  </Col>
                </Row>

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
                        name="otpcode"
                        placeholder="Enter the OTP you recieved"
                        type="text"
                        value={this.state.fields.otpcode}
                        onChange={this.handleChange}
                      />
                      <div className="errorMsg">
                        {this.state.errors.otpcode}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Password: *</Label>
                      <Input
                        id="password"
                        name="password"
                        placeholder="Enter a password"
                        type="password"
                        value={this.state.fields.password}
                        onChange={this.handleChange}
                      />
                      <div className="errorMsg">
                        {this.state.errors.password}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Confirm Password: *</Label>
                      <Input
                        id="confirmpassword"
                        name="confirmpassword"
                        placeholder="Re-enter your password"
                        type="password"
                        value={this.state.fields.confirmpassword}
                        onChange={this.handleChange}
                      />
                      <div className="errorMsg">
                        {this.state.errors.confirmpassword}
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
                          className="button"
                          value="Register"
                        />

                        <Link to="/loginregister">
                          <Button className="btn" color="buttonColor">
                            Register
                          </Button>
                        </Link>
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
}
export default RegisterForm;
