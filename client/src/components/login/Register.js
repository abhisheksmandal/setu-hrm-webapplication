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

function disableTxt() {
  document.getElementsByClassName("input").disabled = true;
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

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        fname: "",
        lname: "",
        companyname: "",
        panno: "",
        address: "",
        emailid: "",
      },
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm =
      this.submituserRegistrationForm.bind(this);
    this.submituserRegistrationOTPForm =
      this.submituserRegistrationOTPForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    console.log(e.target);
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateRegisterForm()) {
      let fields = {};
      fields["fname"] = "";
      fields["lname"] = "";
      fields["companyname"] = "";
      fields["panno"] = "";
      fields["address"] = "";
      fields["emailid"] = "";
      this.setState({ fields: fields });
      alert("OTP sent. Please check your mail to get the OTP");
      let abc = document.getElementById("emailid");
      otpBlock();
    }
  }

  validateRegisterForm() {
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
      errors["emailid"] = "*Please enter your email address.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var emailPattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!emailPattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Invalid email address.";
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
        errors["panno"] = "*Invalid Pan No.";
      }
    }
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    this.setState({
      errors: errors,
    });
    console.log(formIsValid);
    return formIsValid;
  }

  submituserRegistrationOTPForm(e) {
    e.preventDefault();
    if (this.validateOTPForm()) {
      let fields = {};
      fields["otpcode"] = "";
      fields["password"] = "";
      fields["confirmpassword"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateOTPForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

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
    console.log(formIsValid);
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
                        <Label for="exampleEmail">First Name: *</Label>
                        <Input
                          id="fname"
                          className="input"
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
                        <Label for="exampleEmail">Last Name: *</Label>
                        <Input
                          id="lname"
                          className="input"
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
                    <FormGroup>
                      <Label for="exampleEmail">Company Name: *</Label>
                      <Input
                        id="companyname"
                        className="input"
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
                        className="input"
                        name="panno"
                        placeholder="Enter your PAN No"
                        type="text"
                        value={this.state.fields.panno}
                        onChange={this.handleChange}
                      />
                      <div className="errorMsg">{this.state.errors.panno}</div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Address: *</Label>
                      <Input
                        id="address"
                        className="input"
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
                      <Label for="exampleEmail">Email Address: *</Label>
                      <Input
                        id="emailid"
                        className="input"
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
              <Form
                method="post"
                name="userRegistrationForm"
                onSubmit={this.submituserRegistrationOTPForm}
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
                      <Label for="exampleEmail">Enter OTP: *</Label>
                      <Input
                        id="otpcode"
                        className="input"
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
                          className="btn bg-buttonColor text-white"
                          value="Register"
                          onClick={this.submituserRegistrationOTPForm}
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
}
export default Register;
