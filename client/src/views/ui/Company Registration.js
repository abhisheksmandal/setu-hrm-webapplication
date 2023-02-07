import React from 'react'
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



const Grid = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState("1");

  // Toggle active state for Tab
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };
  return (
    <div><Card>
    <CardBody className="">
      <Container>
        <h4 className="text-center">Company Registration</h4>
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
             Company Details
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
              Unit Details
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
             Documents
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
                        <Form>
                          <Row className="mt-3">
                            <Col xs="6">
                              <FormGroup>
                                <Label for="FirstName">Company Name:</Label>
                                <Input id="cname" name="name" type="text" />
                              </FormGroup>
                            </Col>
                            
                          </Row>
                          
                          <Row className="mt-3">
                            <FormGroup>
                              <Label for="address">
                                Address:*
                              </Label>
                              <Input id="address" name="add" type="textarea" />
                            </FormGroup>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" >
                              <FormGroup>
                                <Label for="rpname">Representative First Name:*</Label>
                                <Input id="rpname" name="name" type="text" />
                              </FormGroup>
                            </Col>
                            <Col xs="6" >
                              <FormGroup>
                                <Label for="Mobile">Representative Last Name:*</Label>
                                <Input id="mobile" name="mobile" type="tel" />
                              </FormGroup>
                            </Col>
                            
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" >
                              <FormGroup>
                                <Label for="email">Email Address:*</Label>
                                <Input id="email" name="Email" type="text" />
                              </FormGroup>
                            </Col>
                            <Col xs="6" >
                              <FormGroup>
                                <Label for="Mobile">Contact No:*</Label>
                                <Input id="mobile" name="mobile" type="tel" />
                              </FormGroup>
                            </Col>
                            
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="PAN">PAN no.:</Label>
                                <Input id="pan" name="pan" type="text" />
                              </FormGroup>
                            </Col>
                            <Col xs="6" sm="4">
                              <FormGroup>
                                <Label for="GSTIN">GSTIN no.:</Label>
                                <Input id="gstin" name="gstin" type="text" />
                              </FormGroup>
                            </Col>
                            <Col sm="4">
                              <FormGroup>
                                <Label for="CNI">CNI no.:</Label>
                                <Input id="cni" name="cni" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="Company Typr">Company Type:</Label>
                                <Input
                                  id="c_type"
                                  name="company"
                                  type="select"
                                >
                                  <option>Type 1</option>
                                  <option>Type 2</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                      </Container>
                      <Row className="mt-3">
                        <Col className="text-center">
                          <Button
                            color="primary"
                            href=""
                            onClick={() => {
                              toggle("2");
                            }}
                          >
                            Save & Proceed
                          </Button>
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
                            <Col xs="6">
                              <FormGroup>
                                <Label for="Unit Name">Unit Name:*</Label>
                                <Input id="u_name" name="uname" type="text" />
                              </FormGroup>
                            </Col>
                            <Row className="mt-3">
                            <FormGroup>
                              <Label for="address">
                                Address:*
                              </Label>
                              <Input id="address" name="add" type="textarea" />
                            </FormGroup>
                          </Row>
                          <Col xs="6" sm="4">
                          <FormGroup>
                            <Button
                              color="primary"
                              href=""
                              onClick={() => {
                                toggle("3");
                              }}
                            >
                            Add to Grid
                            </Button>
                          </FormGroup>
                        </Col>

                        <Table bordered hover className="bg-light">
                          <thead className="bg-danger">
                            <tr>
                              <th>Name</th>
                              <th>Address</th>
                              <th>Edit/Delete </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>
                        <br></br>
                          </Row>
                        </Form>
                      </Container>
                      <br></br>
                      <Row>
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
                              Save & Proceed
                            </Button>
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
export default Grid;

