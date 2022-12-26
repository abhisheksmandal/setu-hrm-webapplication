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

function otpBlock() {
  console.log("clicked");
  var x = document.getElementById("otpBlock");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

const Register = () => {
  const initialValues = { firstname: "", lastname: ""}
  
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
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">First Name: </Label>
                      <Input
                        id="fname"
                        name="fname"
                        placeholder="Enter your first name"
                        type="text"
                      />
                    </FormGroup>
                  </Form>
                </div>
              </Col>
              <Col xs="3">
                <div className="">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Last Name: </Label>
                      <Input
                        id="lname"
                        name="lname"
                        placeholder="Enter your last name"
                        type="text"
                      />
                    </FormGroup>
                  </Form>
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
                      name="email"
                      placeholder="Enter your address"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email address: *</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter your email address"
                      type="email"
                    />
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: "none",
              }}
            >
              <Col xs="6">
                <hr />
                <Form>
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
                    />
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
                </Form>
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
                    <Link to="/loginregister">
                      <Button className="btn" color="buttonColor">
                        Register
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};
export default Register;
