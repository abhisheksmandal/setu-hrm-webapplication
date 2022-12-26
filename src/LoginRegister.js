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
import { Card, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

function App() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, email: value });
    console.log(formValues);
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6" className="mt-5 pt-4">
          {/* <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </div> */}

          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}

          <label>Email:</label>
          <MDBInput
            wrapperClass="mb-4"
            // label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            value={formValues.email}
            onChange={handleChange}
          />
          <label>Password:</label>
          <MDBInput
            wrapperClass="mb-4"
            // label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            value={formValues.password}
            onChange={handleChange}
          />

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
            <Link to="/starter">
              <Button className="btn mb-0 px-5" size="lg" color="buttonColor">
                Login
              </Button>
            </Link>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?
              <Link to="/register">Register</Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>

      <div className="d-flex mt-5 flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2022. All rights reserved.
        </div>
      </div>
    </MDBContainer>
  );
}

export default App;
