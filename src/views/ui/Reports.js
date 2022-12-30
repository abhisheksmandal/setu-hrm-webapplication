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

const Reports = () => {
  return (
    <div>
      <div>
        <Card>
          <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center ">
            Reports
          </CardTitle>
          <CardBody className="">
            <Container>
              <Row className="mt-3">
                {/* <Col> */}
                {/* <FormGroup tag="fieldset" className=""> */}
                <Col xs="3">
                  <div className="">
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>Individual</Label>
                    </FormGroup>
                  </div>
                </Col>
                <Col xs="3">
                  <div className="">
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>Misc</Label>
                    </FormGroup>
                  </div>
                </Col>
                <Col xs="3">
                  <div className="">
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>Detailed</Label>
                    </FormGroup>
                  </div>
                </Col>
                {/* </FormGroup> */}
                {/* </Col> */}
              </Row>
              <Row className="mt-3">
                <Col xs="6">
                  <FormGroup>
                    <Label for="exampleSelect">Types of Reports</Label>
                    <Input id="exampleSelect" name="select" type="select">
                      <option>Employee Report</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup>
                    <Label for="exampleSelect">Employee Name</Label>
                    <Input id="exampleSelect" name="select" type="select">
                      <option>Abhishek Mandal</option>
                      <option>Hemant </option>
                      <option>Sunil</option>
                      <option>Pranav</option>
                      <option>Pavan</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs="6">
                  <FormGroup>
                    <Label for="exampleEmail">Start Date</Label>
                    <Input id="Sdate" name="date" placeholder="" type="text" />
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup>
                    <Label for="exampleEmail">Email address: *</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
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
                  ></div>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col className="text-center">
                  <Button className="btn text-center" color="primary">
                    Download PDF
                  </Button>
                </Col>
                <Col className="text-center">
                  <Button className="btn text-center" color="primary">
                    Download Excel
                  </Button>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>{" "}
        <br />
        {/* ---------------------------------------------------------------------- */}{" "}
        <Card>
          <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center ">
            Project Allocation
          </CardTitle>
          <CardBody>
            <Container>
              <Row className="mt-3">
                <Col xs="6">
                  <Form>
                    <FormGroup>
                      <Label for="exampleSelect">Project: </Label>
                      <Input id="exampleSelect" name="select" type="select">
                        <option>Project 1</option>
                        <option>Project 2</option>
                        <option>Project 3</option>
                        <option>Project 4</option>
                        <option>Project 5</option>
                      </Input>
                    </FormGroup>
                  </Form>
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
                      <option>Rohit sharma </option>
                      <option>Steve Rogers</option>
                      <option>Bruce Banner</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs="6" sm="4">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Involvement:</Label>
                      <Input
                        id="exampleEmail"
                        name="name"
                        placeholder="50%"
                        type="text"
                      />
                    </FormGroup>
                  </Form>
                </Col>
                <Col xs="6" sm="4">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">From Date:</Label>
                      <Input type="date" id="fromdate" name="fromdate" />
                    </FormGroup>
                  </Form>
                </Col>
                <Col sm="4">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">To Date:</Label>
                      <Input type="date" id="todate" name="todate" />
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="text-center">
                  <Button
                    color="primary"
                    href="task.js"
                    style={{ width: "250px" }}
                  >
                    Add to Grid
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="mt-3">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Involvement</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Edit/Delete</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Rohit sharma</td>
                        <td>programmer</td>
                        <td>50%</td>
                        <td>11 november 2022</td>
                        <td>01 december 2022</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>UI developer</td>
                        <td>35%</td>
                        <td>01 september 2022</td>
                        <td>01 november 2022</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Larry</td>
                        <td>Manager</td>
                        <td>15%</td>
                        <td>02 janauary 2022</td>
                        <td>11 janauary 2022</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="text-center">
                  <Button
                    color="primary"
                    href="task.js"
                    style={{ width: "250px" }}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default Reports;
