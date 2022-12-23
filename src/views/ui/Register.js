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

const Register = () => {
  return (
    <div>
      <Card
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "right",
        }}
      >
        <CardBody className="">
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
                        placeholder="Rocky"
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
                        placeholder="Rocky"
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
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleEmail">PAN No: *</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Address: *</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email address: *</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
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
                  <Button className="btn" color="primary">
                    Generate OTP
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};
export default Register;
