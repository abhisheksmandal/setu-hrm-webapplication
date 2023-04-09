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
                    <select
                      id="exampleSelect"
                      name="select"
                      className="col-12 p-2 border rounded-3"
                      {...register("typeOfReport", {
                        required: true,
                      })}
                    >
                      <option value="">--Please choose an option--</option>
                      <option>Employee Report</option>
                      <option>Other</option>
                    </select>
                    {/* <Input id="exampleSelect" name="select" type="select">
                      <option>Employee Report</option>
                    </Input> */}
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup>
                    <Label for="exampleSelect">Employee Name</Label>
                    <select
                      id="exampleSelect"
                      name="select"
                      className="col-12 p-2 border rounded-3"
                      {...register("employeeName", {
                        required: true,
                      })}
                    >
                      <option value="">--Please choose an option--</option>
                      <option>Abhishek Mandal</option>
                      <option>Hemant Mhalsekar</option>
                    </select>
                    {/* <Input id="exampleSelect" name="select" type="select">
                      <option>Abhishek Mandal</option>
                      <option>Hemant </option>
                      <option>Sunil</option>
                      <option>Pranav</option>
                      <option>Pavan</option>
                    </Input> */}
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
        <br />
        <br />
        <Card>
          <CardBody>
            <Container>
              <Row className="mt-3">
                <Col xs="9">
                  <div style={{ height: "50px" }}>
                    <Form>
                      <FormGroup>
                        <Input
                          style={{ height: "50px" }}
                          id="search"
                          name="search"
                          placeholder="Search Employee"
                          type="text"
                        />
                      </FormGroup>
                    </Form>
                  </div>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="3">
                  <div style={{ heigth: "50px" }}>
                    <label>Total searches: 3 </label>
                  </div>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Mark</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                      </tr>
                      <tr>
                        <td>Larry</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
        <br />
        <br />
        <h3 className="border-bottom p-3 mb-0 text-center ">
          Terminate Employee
        </h3>
        <Card>
          <CardBody>
            <Row className="mt-3">
              <Col xs="6">
                <FormGroup>
                  <Label for="exampleEmail">Employee name:</Label>
                  <Input id="" name="date" placeholder="" type="text" />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label for="date">Termination Date:</Label>
                  <Input type="date" id="fromdate" name="date" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="6">
                <FormGroup>
                  <Label for="exampleEmail">Current Designation:</Label>
                  <Input id="" name="date" placeholder="" type="text" />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label for="designation">Termination Reason</Label>
                  <Input id="desi" name="desi" type="select" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="exampleText">Secondary Reason</Label>
                  <Input id="exampleText" name="text" type="textarea" />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <Row>
            <Col>
              {" "}
              <br />
              <h5 className=" p-3 mb-0 text-center ">
                Pavan Pawar has been alloted 5 tasks. Do you want to delete
                those tasks or shift to unallocated tasks?
              </h5>
            </Col>
          </Row>
          <br />

          <Row className="mt-3">
            <Col className="text-center">
              <Input name="radio1" type="radio" />
              <Label check> Shift to Unallocated Tasks</Label>
            </Col>
            <Col className="text-center">
              <Input name="radio1" type="radio" />
              <Label check> Delete the Tasks</Label>
            </Col>
          </Row>
        </Card>
        <Row className="mt-3">
          <Col className="text-center">
            <Button className="btn text-center" color="primary">
              Save & Terminate
            </Button>
          </Col>
          <Col className="text-center">
            <Button className="btn text-center" color="primary">
              Cancel
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <h3 className="border-bottom p-3 mb-0 text-center ">Promote</h3>
        <Card>
          <CardBody>
            <Row className="mt-3">
              <Col xs="6">
                <FormGroup>
                  <Label for="exampleEmail">Employee name:</Label>
                  <Input id="" name="date" placeholder="" type="text" />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label for="date">Promotion Date:</Label>
                  <Input type="date" id="fromdate" name="date" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="6">
                <FormGroup>
                  <Label for="exampleEmail">Current Designation:</Label>
                  <Input id="" name="date" placeholder="" type="text" />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label for="designation">Current Salary</Label>
                  <Input id="" name="salary" type="text" />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Row className="mt-3">
              <Col xs="6">
                <FormGroup>
                  <Label for="exampleEmail">New Designation:</Label>
                  <Input id="desi" name="desi" type="select" />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label for="date">Salary:</Label>
                  <Input type="text" id="fromdate" name="date" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="6" sm="4">
                <Form>
                  <FormGroup>
                    <Label for="">Basic: *</Label>
                    <Input id="text" name="text" placeholder="" type="text" />
                  </FormGroup>
                </Form>
              </Col>
              <Col xs="6" sm="4">
                <Form>
                  <FormGroup>
                    <Label for="">HRA: * </Label>
                    <Input type="text" id="text" name="text" />
                  </FormGroup>
                </Form>
              </Col>
              <Col sm="4">
                <Form>
                  <FormGroup>
                    <Label for="">Conveyance Allowance: *</Label>
                    <Input type="text" id="text" name="text" />
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="6" sm="4">
                <Form>
                  <FormGroup>
                    <Label for="">Internet Allowance: </Label>
                    <Input id="text" name="text" placeholder="" type="text" />
                  </FormGroup>
                </Form>
              </Col>
              <Col xs="6" sm="4">
                <Form>
                  <FormGroup>
                    <Label for="">PF: * </Label>
                    <Input type="text" id="text" name="text" />
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col className="text-center">
            <Button className="btn text-center" color="primary">
              Save & Proceed
            </Button>
          </Col>
          <Col className="text-center">
            <Button className="btn text-center" color="primary">
              Cancel
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Reports;
