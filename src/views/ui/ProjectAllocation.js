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

const ProjectAllocation = () => {
  return (
    <div><Card>
    <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center ">
      {/* <i className="bi bi-bell me-2"> </i> */}
      Project Allocation
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
              <Col xs="6" sm="4">
                <FormGroup>
                  <Label for="descText">Involvement:*</Label>
                  <Input id="description" name="desc" type="text" ></Input>
                </FormGroup>
                </Col>
                <Col xs="6" sm="4">
                <div className="">
                  <FormGroup>
                    <Label for="exampleEmail">From Date*:</Label>
                    <Input type="date" id="startDate" name="startDate" />
                  </FormGroup>
                </div>
              </Col>
              <Col xs="6" sm="4">
                <div className="">
                  <FormGroup>
                    <Label for="exampleEmail">To Date*:</Label>
                    <Input type="date" id="startDate" name="startDate" />
                  </FormGroup>
                </div>
              </Col>
              </Row>
              <Row className="mt-3">
              
              </Row>
              <Row className="mt-3">
                <Col className="text-center">
                  <Button color="primary" href="">
                    Add to Grid
                  </Button>
                  
                </Col>
              </Row>
              <br></br>
              <Table bordered hover>
              <thead>
                <tr className="bg-danger">
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Involvement</th>
                  <th>From date</th>
                  <th>To date</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Tony Stark</th>
                </tr>
                <tr>
                  <th scope="row">Steve Rogers</th>
                </tr>
                <tr>
                  <th scope="row">Bruce Banner</th>
                </tr>
                
              </tbody>
              </Table>
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

export default ProjectAllocation;