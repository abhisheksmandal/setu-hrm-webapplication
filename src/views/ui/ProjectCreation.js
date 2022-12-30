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
        <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center ">
          {/* <i className="bi bi-bell me-2"> </i> */}
          Create Project
        </CardTitle>
        <CardBody className="">
          <Container>
            <Row className="mt-3">
              <Col>
                <div className="">
                  <FormGroup>
                    <Label for="exampleEmail">Name*:</Label>
                    <Input id="exampleEmail" name="ProjectName" />
                  </FormGroup>
                </div>
              </Col>
              <Col>
                <div className="">
                  {" "}
                  <FormGroup>
                    <Label for="exampleEmail">Type*:</Label>
                    <Input id="exampleEmail" name="ProjectType" />
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="">
                  <FormGroup>
                    <Label for="exampleEmail">Start Date*:</Label>
                    <Input type="date" id="startDate" name="startDate" />
                  </FormGroup>
                </div>
              </Col>
              <Col>
                <div className="">
                  {" "}
                  <FormGroup>
                    <Label for="exampleEmail">End Date*:</Label>
                    <Input type="date" id="exampleEmail" name="ProjectType" />
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <FormGroup>
                <Label for="exampleText">Description*:</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="">
                  <FormGroup>
                    <Label for="exampleEmail">Budget*:</Label>
                    <Input id="exampleEmail" name="ProjectName" type="number" />
                  </FormGroup>
                </div>
              </Col>

              <Col>
                <div className="">
                  <FormGroup>
                    <Label for="exampleSelect">Billable*:</Label>
                    <Input id="exampleSelect" name="select" type="select">
                      <option>Yes</option>
                      <option>No</option>
                    </Input>
                  </FormGroup>
                </div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <div className="">
                  <FormGroup>
                    <Label for="exampleSelect">Manager*:</Label>
                    <Input id="exampleSelect" name="select" type="select">
                      <option>Abhishek Mandal</option>
                      <option>Sunil Joshi</option>
                      <option>Hemant Mhalsekar</option>
                    </Input>
                  </FormGroup>
                </div>
              </Col>
              <Col>
                <div className="">
                  <FormGroup>
                    <Label for="exampleSelect">Status*:</Label>
                    <Input id="exampleSelect" name="select" type="select">
                      <option>On Going</option>
                      <option>Pending</option>
                      <option>Completed</option>
                    </Input>
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Link
                to="/project"
                // className={
                //   location.pathname === "/projectcreation"
                //     ? "text-primary nav-link py-3"
                //     : "nav-link text-secondary py-3 primary"
                // }
              >
                <div className="button-group text-center">
                  <Button className="btn" color="buttonColor">
                    Create new project
                  </Button>
                </div>
              </Link>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCreation;
