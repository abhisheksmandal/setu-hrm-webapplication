import React from "react";
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
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  pills,
} from "reactstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const EmployeeSearch = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState("1");

  // Toggle active state for Tab
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Card>
        <CardBody className="">
          <Container>
            <h4 className="text-center">Employee Registration</h4>
            <Nav tabs fill pills className="square border border-1">
              <NavItem className="navlinkPointer">
                <NavLink
                  className={classnames({
                    active: currentActiveTab === "1",
                  })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Personal Details
                </NavLink>
              </NavItem>
              <NavItem className="navlinkPointer">
                <NavLink
                  className={classnames({
                    active: currentActiveTab === "2",
                  })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Salary Details
                </NavLink>
              </NavItem>
              <NavItem className="navlinkPointer">
                <NavLink
                  className={classnames({
                    active: currentActiveTab === "3",
                  })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Bank Details
                </NavLink>
              </NavItem>
              <NavItem className="navlinkPointer">
                <NavLink
                  className={classnames({
                    active: currentActiveTab === "4",
                  })}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  Nominee Details
                </NavLink>
              </NavItem>
              <NavItem className="navlinkPointer">
                <NavLink
                  className={classnames({
                    active: currentActiveTab === "5",
                  })}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  Upload Files
                </NavLink>
              </NavItem>
            </Nav>
            <br></br>
            <TabContent activeTab={currentActiveTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <div>
                      <Container className="bg-formGray pt-1 text-black rounded">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="FirstName">First Name:</Label>
                                <input
                                  id="fName"
                                  name="name"
                                  type="text"
                                  {...register("fname", { required: true })}
                                />
                                <div className="error">
                                  {errors.fname?.type === "required" &&
                                    "First Name is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="MiddleName">Middle Name:</Label>
                                <Input id="mName" name="name" type="text" />
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="LastName">Last Name:</Label>
                                <Input id="lName" name="name" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="Gender">Gender: </Label>
                                <br></br>
                                <input
                                  type="radio"
                                  value="Male"
                                  name="gender"
                                />{" "}
                                Male
                                <input
                                  type="radio"
                                  value="Female"
                                  name="gender"
                                />{" "}
                                Female
                                <input
                                  type="radio"
                                  value="Other"
                                  name="gender"
                                />{" "}
                                Other
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="BirthDate">DOB:</Label>
                                <Input id="bDate" name="name" type="date" />
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="Age">Age:</Label>
                                <Input id="age" name="name" type="number" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="MStatus">Marital Status: </Label>
                                <br></br>
                                <input
                                  type="radio"
                                  value="Single"
                                  name="single"
                                />{" "}
                                Single
                                <input
                                  type="radio"
                                  value="Married"
                                  name="married"
                                />{" "}
                                Married
                                <input
                                  type="radio"
                                  value="Divorcee"
                                  name="divorcee"
                                />{" "}
                                Divorcee
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="Nation">Nationality</Label>
                                <Input
                                  id="nation"
                                  name="Nationality"
                                  type="select"
                                >
                                  <option>India</option>
                                  <option>Other</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="Physical">
                                  Physically Handicapped:
                                </Label>
                                <br></br>
                                <input
                                  type="radio"
                                  value="Yes"
                                  name="Yes"
                                />{" "}
                                Yes
                                <input type="radio" value="No" name="No" />
                                No
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="City">City:</Label>
                                <Input id="city" name="name" type="text" />
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="State">State:</Label>
                                <Input id="state" name="name" type="text" />
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="Pin">Pincode:</Label>
                                <Input id="pincode" name="name" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <FormGroup>
                              <Label for="address">
                                Street/Locality/Landmark
                              </Label>
                              <Input id="address" name="add" type="textarea" />
                            </FormGroup>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="Email">Email Address:</Label>
                                <Input id="email" name="email" type="text" />
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="Mobile">Mobile:</Label>
                                <Input id="mobile" name="mobile" type="tel" />
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="Designation">Designation:</Label>
                                <Input
                                  id="designation"
                                  name="Designation"
                                  type="select"
                                >
                                  <option>Manager</option>
                                  <option>Tester</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="UAN">UAN no.:</Label>
                                <Input id="uan" name="uan" type="text" />
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="ESIC">ESIC no.:</Label>
                                <Input id="esic" name="esic" type="text" />
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="PAN">PAN no.:</Label>
                                <Input id="pan" name="pan" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="ADHAR">ADHAR no.:</Label>
                                <Input id="adhar" name="adhar" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Button
                          type="submit"
                            color="primary"
                            href=""
                          >
                            Save & Proceed
                          </Button>
                        </Form>
                      </Container>
                      <Row className="mt-3">
                        <Col className="text-center">
                          
                        </Col>
                        <Col className="text-end">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("2");
                              }}
                            >
                              Next
                            </Button>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <div>
                      <Container className="bg-formGray pt-1 text-black rounded">
                        <Form>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="BasicSalary">Basic:</Label>
                                <Input id="basic" name="basic" type="text" />
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="HRA">HRA:</Label>
                                <Input id="hra" name="HRA" type="text" />
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="ConveyanceAllowance">
                                  Conveyance Allowance:
                                </Label>
                                <Input
                                  id="conveyance"
                                  name="conveyance"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="InternetAllowance">
                                  Internet Allowance:
                                </Label>
                                <Input
                                  id="internet"
                                  name="internetallowance"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="PF">PF:</Label>
                                <Input id="pf" name="PF" type="text" />
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="TotalSalary">Total:</Label>
                                <Input
                                  id="total"
                                  name="total"
                                  type="text"
                                  disabled={true}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                      </Container>
                      <Row className="mt-3">
                        <Col xs="6" sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("1");
                              }}
                            >
                              Previous
                            </Button>
                          </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("3");
                              }}
                            >
                              Save & Proceed
                            </Button>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("3");
                              }}
                            >
                              Next
                            </Button>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <div>
                      <Container className="bg-formGray pt-1 text-black rounded">
                        <Form>
                          <Row className="mt-3">
                            <Col xs="6">
                              <FormGroup>
                                <Label for="BankName">Bank Name:</Label>
                                <Input id="bank" name="bankName" type="select">
                                  <option>BOI</option>
                                  <option>SBI</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col xs="6">
                              <FormGroup>
                                <Label for="BankBranch">Branch Name:</Label>
                                <Input
                                  id="branch"
                                  name="branchName"
                                  type="select"
                                >
                                  <option>Panjim</option>
                                  <option>Mapusa</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="IFSCcode">IFSC Code:</Label>
                                <Input id="ifc" name="IFSC" type="text" />
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="MICRno">MICR:</Label>
                                <Input id="MICR" name="MICR" type="text" />
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="AccountNo">Account No.:</Label>
                                <Input id="acno" name="ACno" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                      </Container>
                      <Row className="mt-3">
                        <Col xs="6" sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("2");
                              }}
                            >
                              Previous
                            </Button>
                          </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("4");
                              }}
                            >
                              Save & Proceed
                            </Button>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("4");
                              }}
                            >
                              Next
                            </Button>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col sm="12">
                    <div>
                      <Container className="bg-formGray pt-1 text-black rounded">
                        <Form>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="FirstName">First Name:</Label>
                                <Input id="fName" name="name" type="text" />
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="MiddleName">Middle Name:</Label>
                                <Input id="mName" name="name" type="text" />
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="LastName">Last Name:</Label>
                                <Input id="lName" name="name" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="Relation">
                                  Relationship With Employee:
                                </Label>
                                <Input
                                  id="relation"
                                  name="realtionship"
                                  type="select"
                                >
                                  <option>Father</option>
                                  <option>Mother</option>
                                  <option>Brother</option>
                                  <option>Sister</option>
                                  <option>Friend</option>
                                  <option>Other</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="Gender">Gender: </Label>
                                <br></br>
                                <input
                                  type="radio"
                                  value="Male"
                                  name="gender"
                                />{" "}
                                Male
                                <input
                                  type="radio"
                                  value="Female"
                                  name="gender"
                                />{" "}
                                Female
                                <input
                                  type="radio"
                                  value="Other"
                                  name="gender"
                                />{" "}
                                Other
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="Mobile">Phone No.:</Label>
                                <Input id="mobile" name="mobile" type="tel" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <FormGroup>
                              <Label for="address">Address</Label>
                              <Input id="address" name="add" type="textarea" />
                            </FormGroup>
                          </Row>
                        </Form>
                      </Container>
                      <Row className="mt-3">
                        <Col xs="6" sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("3");
                              }}
                            >
                              Previous
                            </Button>
                          </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("5");
                              }}
                            >
                              Save & Proceed
                            </Button>
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("5");
                              }}
                            >
                              Next
                            </Button>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="5">
                <Row>
                  <Col sm="12">
                    <div>
                      <Container className="bg-formGray pt-1 text-black rounded">
                        <Form>
                          <Row className="mt-3">
                            <Col xs="6">
                              <FormGroup>
                                <Label for="Designation">Document Name:</Label>
                                <Input
                                  id="designation"
                                  name="Designation"
                                  type="select"
                                >
                                  <option>Birth Certificate</option>
                                  <option>HSSC Marksheet</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col xs="6">
                              <FormGroup>
                                <Label for="File">File</Label>
                                <Input id="file" name="f" type="file" />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                        <Table bordered hover className="bg-light">
                          <thead className="bg-danger">
                            <tr>
                              <th>Sr no.</th>
                              <th>Document Name</th>
                              <th>Document Type</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Photo</td>
                              <td>photo.jpg</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Signature</td>
                              <td>Signature.jpg</td>
                            </tr>
                          </tbody>
                        </Table>
                        <br></br>
                      </Container>
                      <Row className="mt-3">
                        <Col xs="6" sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("4");
                              }}
                            >
                              Previous
                            </Button>
                          </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                          <FormGroup>
                            {/* <Button color="primary" href="">
                        Submit
                      </Button> */}

                            <Link to="/employeeregistration">
                              <div className="button-group">
                                <Button className="btn" color="primary">
                                  Submit
                                </Button>
                              </div>
                            </Link>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};
export default EmployeeSearch;
