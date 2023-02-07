import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table,
  Button,
  ButtonGroup,
  Badge,
} from "reactstrap";

const TaskAllocation = () => {
  return (
    <div>
      <Card>
        <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center ">
          {/* <i className="bi bi-bell me-2"> </i> */}
          Task Allocation
        </CardTitle>
        <CardBody>
          <Container>
            <Form>
              <Row className="mt-3">
                <Col xs="6">
                  <FormGroup>
                    <Label for="projname">Project:*</Label>
                    <Input id="proj" name="proj" type="select">
                      <option>Project 1</option>
                      <option>Project 2</option>
                      <option>Project 3</option>
                      <option>Project 4</option>
                      <option>Project 5</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs="6" sm="4">
                  <FormGroup>
                    <Label for="designation">Designation:*</Label>
                    <Input id="desi" name="desi" type="select">
                      <option>Manager</option>
                      <option>Tester</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="6" sm="4"></Col>
                <Col sm="4">
                  <FormGroup>
                    <Label for="employee">Employee:*</Label>
                    <Input id="emp" name="employee" type="select">
                      <option>Tony Stark</option>
                      <option>Steve Rogers</option>
                      <option>Bruce Banner</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row className="mt-3">
                <FormGroup>
                  <Label for="descText">Description:*</Label>
                  <Input id="description" name="desc" type="textarea" placeholder="Enter your project description"/>
                </FormGroup>
              </Row>

              <Row className="mt-3">
                <Col xs="6" sm="4">
                  <FormGroup>
                    <Label for="prio">Priority:*</Label>
                    <Input id="priority" name="prio" type="select">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="4"></Col>
                <Col sm="4">
                  <FormGroup>
                    <Label for="estDays">Estimated Days:*</Label>
                    <Input
                      id="estimatedDays"
                      name="days"
                      // placeholder="with a placeholder"
                      type="number"
                    />
                  </FormGroup>
                </Col>
              </Row>
              {/* <Row className="mt-3">
              <Col xs="6" sm="4">
              <FormGroup>
              
               <Label for="stat">Status</Label>
                <Input id="status" name="status" type="select">
                  <option>Complete</option>
                  <option>Pending</option>
                  <option>Active</option>
                  
                </Input>
              </FormGroup>
              </Col>
              </Row> */}
              <Row className="mt-3">
                <Col xs="6" sm="4">
                  <FormGroup>
                    <Label for="File">File</Label>
                    <Input id="file" name="f" type="file" />
                  </FormGroup>
                </Col>
                <Col sm="4" className="d-flex align-items-center mt-3">
                  <Button color="info">Upload</Button>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col xs="6" sm="4">
                  <div>
                    <h4>
                      <Badge href="" color="warning" className="ms-3">
                        Doc1.jpeg
                      </Badge>
                    </h4>
                  </div>
                </Col>
                <Col xs="6" sm="4">
                  <div>
                    <h4>
                      <Badge href="" color="warning" className="ms-3">
                        Doc2.jpeg
                      </Badge>
                    </h4>
                  </div>
                </Col>
                <Col sm="4">
                  <div>
                    <h4>
                      <Badge href="" color="warning" className="ms-3">
                        Doc3.jpeg
                      </Badge>
                    </h4>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="text-center">
                  <Button color="primary" href="task.js">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default TaskAllocation;
