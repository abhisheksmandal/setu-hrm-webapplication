
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

const EmployeeRegistration = () => {
  return (
    <div>
      <Card>
        <CardBody className="">
          <Container>
            <Row>
              <h3 className="text-center p-4">Employee Registration</h3>
            </Row>
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
                <div className="button-group">
                  <Button className="btn" color="primary" >
                    Add Employee
                  </Button>
                </div>
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
