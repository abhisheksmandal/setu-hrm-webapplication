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
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";
import { Link } from "react-router-dom";

const EmployeeRegistration = () => {
  return (
    <div>
      <Card>
        <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center ">
            Employee Registration
          </CardTitle>
        <CardBody className="">
          <Container>
            
            <Row>
              <Col>
                <Form>
                  <FormGroup>
                    <Input
                      id="search"
                      name="search"
                      placeholder="Search Employee"
                      type="text"
                    />
                  </FormGroup>
                </Form>
              </Col>
              <Col>
                <Link to="/employeedetails">
                  {/* <div className="button-group">
                    <Button className="btn" color="primary">
                      Add Employee
                    </Button>
                  </div> */}
                  <div className="button-group text-end">
                    <Button className="btn" color="primary">
                      Create new project
                    </Button>
                  </div>
                </Link>
              </Col>
            </Row>

            <Table bordered hover>
              <thead>
                <tr>
                  <th>Sr no.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>joining date</th>
                  <th>Age</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>programmer</td>
                  <td>11/02/2013</td>
                  <td>37</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>UI developer</td>
                  <td>01/03/2015</td>
                  <td>34</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>Manager</td>
                  <td>02/05/2010</td>
                  <td>40</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default EmployeeRegistration;
