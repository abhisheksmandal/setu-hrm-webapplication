import { TRUE } from "node-sass";
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

const ProjectView = () => {
  return (
    <div>
      <Card>
        <CardBody className="">
          <Container>
            <Row>
              <h3 className="text-center p-4">View Project</h3>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="">
                  <FormGroup>
                    <Label for="exampleEmail">Name*:</Label>
                    <Input
                      id="exampleEmail"
                      name="ProjectName"
                      disabled={TRUE}
                    />
                  </FormGroup>
                </div>
              </Col>
              <Col>
                <div className="">
                  {" "}
                  <FormGroup>
                    <Label for="exampleEmail">Type*:</Label>
                    <Input
                      id="exampleEmail"
                      name="ProjectType"
                      disabled={TRUE}
                    />
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="">
                  <FormGroup>
                    <Label for="exampleEmail">Start Date*:</Label>
                    <Input
                      id="exampleEmail"
                      name="ProjectName"
                      disabled={TRUE}
                    />
                  </FormGroup>
                </div>
              </Col>
              <Col>
                <div className="">
                  {" "}
                  <FormGroup>
                    <Label for="exampleEmail">End Date*:</Label>
                    <Input
                      id="exampleEmail"
                      name="ProjectType"
                      disabled={TRUE}
                    />
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <FormGroup>
                <Label for="exampleText">Description*:</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  disabled={TRUE}
                />
              </FormGroup>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="">
                  <FormGroup>
                    <Label for="exampleEmail">Budget*:</Label>
                    <Input
                      id="exampleEmail"
                      name="ProjectName"
                      disabled={TRUE}
                    />
                  </FormGroup>
                </div>
              </Col>

              <Col>
                <div className="">
                  <FormGroup>
                    <Label for="exampleSelect">Billable*:</Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      disabled={TRUE}
                    >
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
                    <Label for="exampleSelect">Manger*:</Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      disabled={TRUE}
                    >
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
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      disabled={TRUE}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectView;
