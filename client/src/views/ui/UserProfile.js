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
} from "reactstrap";
import { Link } from "react-router-dom";

const ProjectCreation = () => {
  return (
    <div>
      <Card>
        <CardBody className="">
          <Container className="mt-5 ">
            <Row
              className="mt-3"
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "right",
              }}
            >
              <Col xs="3">
                <div className="">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Name: </Label>
                      <Input
                        id="name"
                        name="name"
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
                      <Label for="exampleEmail">Designation: </Label>
                      <Input
                        id="designation"
                        name="designation"
                        placeholder="CEO of India"
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
                justifyContent: "right",
                alignItems: "right",
              }}
            >
              <Col xs="3">
                <div className="">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Email: </Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Eg. rocky@gmail.com"
                        type="email"
                      />
                    </FormGroup>
                  </Form>
                </div>
              </Col>
              <Col xs="3">
                <div className="">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Phone no: </Label>
                      <Input
                        id="designation"
                        name="designation"
                        placeholder="Eg. 1234567890"
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
                justifyContent: "right",
                alignItems: "right",
              }}
            >
              <Col xs="3">
                <div className="">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Age: </Label>
                      <Input
                        id="age"
                        name="age"
                        placeholder="Eg. 31"
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
                      <Label for="">Salary: </Label>
                      <Input
                        id="salary"
                        name="salary"
                        placeholder=" Eg. 600000000000000/-"
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
                justifyContent: "right",
                alignItems: "right",
              }}
            >
              <Col xs="6">
                <div className="">
                  <Form>
                    <FormGroup>
                      <Label for="exampleText">Address</Label>
                      <Input
                        id="exampleText"
                        name="text"
                        placeholder="Eg. Porvorim, Bardez, North-Goa, Goa"
                        type="textarea"
                        style={{ height: "80px" }}
                      />
                    </FormGroup>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button className="btn" color="primary">
          Edit Profile Details
        </Button>
      </div>
    </div>
  );
};

export default ProjectCreation;
