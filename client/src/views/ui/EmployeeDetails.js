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
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
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
                                <MDBInput
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
                                <MDBInput
                                  id="mName"
                                  name="name"
                                  type="text"
                                  {...register("mname", { required: true })}
                                />
                                <div className="error">
                                  {errors.mname?.type === "required" &&
                                    "Middle Name is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="LastName">Last Name:</Label>
                                <MDBInput
                                  id="lName"
                                  name="lname"
                                  type="text"
                                  {...register("lname", { required: true })}
                                />
                                <div className="error">
                                  {errors.lname?.type === "required" &&
                                    "Last Name is required"}
                                </div>
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
                                <MDBInput
                                  id="bDate"
                                  name="name"
                                  type="date"
                                  {...register("bdate", { required: true })}
                                />
                                <div className="error">
                                  {errors.bdate?.type === "required" &&
                                    "Birthday date is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="Age">Age:</Label>
                                <MDBInput
                                  id="age"
                                  name="name"
                                  type="text"
                                  {...register("age", { required: true })}
                                />
                                <div className="error">
                                  {errors.age?.type === "required" &&
                                    "Age is required"}
                                </div>
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
                                <select
                                  id="exampleSelect"
                                  name="select"
                                  className="col-12 p-2 border rounded-3"
                                  {...register("nationality", {
                                    required: true,
                                  })}
                                >
                                  <option value="">
                                    --Please choose an option--
                                  </option>
                                  <option>India</option>
                                  <option>Other</option>
                                </select>
                                {errors.selectedOption && (
                                  <div className="error">
                                    Please choose an option.
                                  </div>
                                )}
                                {/* <Input
                                  id="nation"
                                  name="Nationality"
                                  type="select"
                                >
                                  <option>India</option>
                                  <option>Other</option>
                                </Input> */}
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
                                <MDBInput
                                  id="city"
                                  name="name"
                                  type="text"
                                  {...register("city", { required: true })}
                                />
                                <div className="error">
                                  {errors.city?.type === "required" &&
                                    "City is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="State">State:</Label>
                                <MDBInput
                                  id="state"
                                  name="name"
                                  type="text"
                                  {...register("state", { required: true })}
                                />
                                <div className="error">
                                  {errors.state?.type === "required" &&
                                    "State is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="Pin">Pincode:</Label>
                                <MDBInput
                                  id="pincode"
                                  name="name"
                                  type="text"
                                  {...register("pincode", { required: true })}
                                />
                                <div className="error">
                                  {errors.pincode?.type === "required" &&
                                    "Pincode is required"}
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <FormGroup>
                              <Label for="address">
                                Street/Locality/Landmark
                              </Label>
                              <MDBInput
                                  id="address"
                                  name="name"
                                  type="textarea"
                                  {...register("address", { required: true })}
                                />
                                <div className="error">
                                  {errors.address?.type === "required" &&
                                    "Address is required"}
                                </div>
                            </FormGroup>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="Email">Email Address:</Label>
                                <MDBInput
                                  id="email"
                                  name="name"
                                  type="text"
                                  {...register("email", { required: true })}
                                />
                                <div className="error">
                                  {errors.email?.type === "required" &&
                                    "Email is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="Mobile">Mobile:</Label>
                                <MDBInput
                                  id="mobile"
                                  name="name"
                                  type="tel"
                                  {...register("mobile", { required: true })}
                                />
                                <div className="error">
                                  {errors.mobile?.type === "required" &&
                                    "Mobile number is required"}
                                </div>
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
                                <MDBInput
                                  id="uan"
                                  name="uan"
                                  type="text"
                                  {...register("uan", { required: true })}
                                />
                                <div className="error">
                                  {errors.uan?.type === "required" &&
                                    "UAN is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="ESIC">ESIC no.:</Label>
                                <MDBInput
                                  id="esic"
                                  name="esic"
                                  type="text"
                                  {...register("esic", { required: true })}
                                />
                                <div className="error">
                                  {errors.esic?.type === "required" &&
                                    "ESIC is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="PAN">PAN no.:</Label>
                                <MDBInput
                                  id="pan"
                                  name="pan"
                                  type="text"
                                  {...register("pan", { required: true })}
                                />
                                <div className="error">
                                  {errors.pan?.type === "required" &&
                                    "PAN is required"}
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="AADHAR">AADHAR no.:</Label>
                                <MDBInput
                                  id="aadhar"
                                  name="aadhar"
                                  type="text"
                                  {...register("aadhar", { required: true })}
                                />
                                <div className="error">
                                  {errors.aadhar?.type === "required" &&
                                    "Aadhar is required"}
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Button type="submit" color="primary" href="">
                            Save & Proceed
                          </Button>
                        </Form>
                      </Container>
                      <Row className="mt-3">
                        <Col className="text-center"></Col>
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
                                <MDBInput
                                  id="basic"
                                  name="basic"
                                  type="text"
                                  {...register("basic", { required: true })}
                                />
                                <div className="error">
                                  {errors.basic?.type === "required" &&
                                    "Basic Salary is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="HRA">HRA:</Label>
                                <MDBInput
                                  id="hra"
                                  name="hra"
                                  type="text"
                                  {...register("hra", { required: true })}
                                />
                                <div className="error">
                                  {errors.hra?.type === "required" &&
                                    "HRA is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="ConveyanceAllowance">
                                  Conveyance Allowance:
                                </Label>
                                <MDBInput
                                  id="conveyance"
                                  name="conveyance"
                                  type="text"
                                  {...register("conveyance", { required: true })}
                                />
                                <div className="error">
                                  {errors.conveyance?.type === "required" &&
                                    "Conveyance Allowance is required"}
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="InternetAllowance">
                                  Internet Allowance:
                                </Label>
                                <MDBInput
                                  id="internet"
                                  name="internet"
                                  type="text"
                                  {...register("internet", { required: true })}
                                />
                                <div className="error">
                                  {errors.internet?.type === "required" &&
                                    "Internet Allowance is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="PF">PF:</Label>
                                <MDBInput
                                  id="pf"
                                  name="pf"
                                  type="text"
                                  {...register("pf", { required: true })}
                                />
                                <div className="error">
                                  {errors.pf?.type === "required" &&
                                    "PF is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="TotalSalary">Total:</Label>
                                <MDBInput
                                  id="total"
                                  name="total"
                                  type="text"
                                  disabled={true}
                                  {...register("total", { required: true })}
                                />
                                <div className="error">
                                  {errors.total?.type === "required" &&
                                    "Total Salary is required"}
                                </div>
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
                                <MDBInput
                                  id="ifsc"
                                  name="ifsc"
                                  type="text"
                                  {...register("ifsc", { required: true })}
                                />
                                <div className="error">
                                  {errors.ifsc?.type === "required" &&
                                    "IFSC is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="MICRno">MICR:</Label>
                                <MDBInput
                                  id="micr"
                                  name="micr"
                                  type="text"
                                  {...register("micr", { required: true })}
                                />
                                <div className="error">
                                  {errors.micr?.type === "required" &&
                                    "micr is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="AccountNo">Account No.:</Label>
                                <MDBInput
                                  id="acno"
                                  name="acno"
                                  type="text"
                                  {...register("acno", { required: true })}
                                />
                                <div className="error">
                                  {errors.acno?.type === "required" &&
                                    "Account number is required"}
                                </div>
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
                                <MDBInput
                                  id="nomFName"
                                  name="nomFName"
                                  type="text"
                                  {...register("nomFName", { required: true })}
                                />
                                <div className="error">
                                  {errors.nomFName?.type === "required" &&
                                    "First name is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="MiddleName">Middle Name:</Label>
                                <MDBInput
                                  id="nomMName"
                                  name="nomMName"
                                  type="text"
                                  {...register("nomMName", { required: true })}
                                />
                                <div className="error">
                                  {errors.nomMName?.type === "required" &&
                                    "Middle name is required"}
                                </div>
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="LastName">Last Name:</Label>
                                <MDBInput
                                  id="nomLName"
                                  name="nomLName"
                                  type="text"
                                  {...register("nomLName", { required: true })}
                                />
                                <div className="error">
                                  {errors.nomLName?.type === "required" &&
                                    "Last Name is required"}
                                </div>
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
                                <MDBInput
                                  id="nomMobile"
                                  name="nomMobile"
                                  type="tel"
                                  {...register("nomMobile", { required: true })}
                                />
                                <div className="error">
                                  {errors.nomMobile?.type === "required" &&
                                    "Mobile is required"}
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <FormGroup>
                              <Label for="address">Address</Label>
                              <MDBInput
                                  id="nomAddress"
                                  name="nomAddress"
                                  type="textarea"
                                  {...register("nomAddress", { required: true })}
                                />
                                <div className="error">
                                  {errors.nomAddress?.type === "required" &&
                                    "Address is required"}
                                </div>
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
                                <MDBInput
                                  id="file"
                                  name="f"
                                  type="file"
                                  {...register("file", { required: true })}
                                />
                                <div className="error">
                                  {errors.file?.type === "required" &&
                                    "File is required"}
                                </div>
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
