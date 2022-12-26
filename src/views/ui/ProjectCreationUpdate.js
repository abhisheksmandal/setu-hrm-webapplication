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

const ProjectCreationUpdate = () => {
  return (
    <div>
      <Card>
        <CardBody className="">
          <Container>
            <Row>
              <h3 className="text-center p-4">Create Project</h3>
            </Row>
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
                    <Input type="date" id="exampleEmail" name="ProjectName" />
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
                    <Input id="exampleEmail" name="ProjectName" />
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
                    <Label for="exampleSelect">Manger*:</Label>
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
            <Row className="mt-3 mb-3">
              <Col>
                <div className="button-group text-center">
                  <Button className="btn" color="primary">
                    Edit project
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

export default ProjectCreationUpdate;
