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
      fields["email"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
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
      errors["fname"] = "*Please enter your First Name.";
    }
    if (!fields["lname"]) {
      formIsValid = false;
      errors["lname"] = "*Please enter your Last Name.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
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
                          id="exampleEmail"
                          name="email"
                          placeholder="Enter your company name"
                          type="email"
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleEmail">PAN No: *</Label>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="Enter your PAN No"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Address: *</Label>
                        <Input
                          id="exampleEmail"
                          name="address"
                          placeholder="Enter your address"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Email address: *</Label>
                        <Input
                          id="exampleEmail"
                          name="email"
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
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter the OTP you recieved"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Password: *</Label>
                      <Input
                        id="exampleEmail"
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
                        id="exampleEmail"
                        name="password"
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
