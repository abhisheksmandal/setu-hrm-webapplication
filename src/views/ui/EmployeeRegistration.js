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
  TabContent, TabPane,
  NavItem,
  NavLink,
  pills,
} from "reactstrap";
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classnames from 'classnames';




const EmployeeRegistration = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState('1');
  
    // Toggle active state for Tab
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }
  return (
    
    <div>

<div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <h4>Employee Registration
            </h4>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '1'
                        })}
                        onClick={() => { toggle('1'); }}
                    >
                        Personal Details 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '2'
                        })}
                        onClick={() => { toggle('2'); }}
                    >
                        Tab2
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '3'
                        })}
                        onClick={() => { toggle('3'); }}
                    >
                        Tab3
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                        <div>
      <Container className="bg-secondary bg-gradient text-white rounded">
        <h5 className="p-2 text-center">Personal Details</h5>
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
                <Label for="Gender">Gender: </Label>
                <br></br>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
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
                <input type="radio" value="Single" name="single" /> Single
                <input type="radio" value="Married" name="married" /> Married
                <input type="radio" value="Divorcee" name="divorcee" /> Divorcee
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="Nation">Nationality</Label>
                <Input id="nation" name="Nationality" type="select">
                  <option>India</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <Label for="Physical">Physically Handicapped:</Label>
                <br></br>
                <input type="radio" value="Yes" name="Yes" /> Yes
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
              <Label for="address">Street/Locality/Landmark</Label>
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
                <Input id="designation" name="Designation" type="select">
                  <option></option>
                  <option></option>
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
        </Form>
      </Container>
      <Row className="mt-3">
        <Col className="text-center">
          <Button color="primary" href="">
            Save & Proceed
          </Button>
        </Col>
        <Col sm="4">
          <FormGroup>
            <Button color="primary" href="">
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
                            <h5>Sample Tab 2 Content</h5>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                            <h5>Sample Tab 3 Content</h5>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div >




      {/* <h3 className="text-center">Employee Registration</h3> */}
      <div>
        <Nav
          fill
          pills
          className=" p-3 bg-info b rounded border border-1"
          tag="strong"
        >
          <NavItem>
            <NavLink href="">Personal Details</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Salary Details</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Nominee Details</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Bank Details</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              Upload Files
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      {/* <Container className="bg-secondary bg-gradient text-white rounded">
        <h5 className="p-2 text-center">Upload Files</h5>
        <Form>
          <Row className="mt-3">
            <Col xs="6">
              <FormGroup>
                <Label for="DocumentName">Document Name:</Label>
                <Input id="document" name="Dname" type="text" />
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
          <thead className="bg-success">
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
            <Button color="primary" href="">
              Previous
            </Button>
          </FormGroup>
        </Col>
        <Col xs="6" sm="4">
          <FormGroup>
            <Button color="primary" href="">
              Submit
            </Button>
          </FormGroup>
        </Col>
      </Row> */}
    </div>
  );
};

export default EmployeeRegistration;
