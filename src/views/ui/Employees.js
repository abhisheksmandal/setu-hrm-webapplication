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
import user1 from "../../assets/images/users/user1.jpg";
const Employees = () => {
  return (
    <div>
      <Card>
        {/* <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          Employees
        </CardTitle> */}
        <CardBody className="">
          <Container>
            <Row className="mt-3">
              <Col xs="6">
                <FormGroup>
                  <Label for="projname">Sort By:*</Label>
                  <Input id="proj" name="proj" type="select">
                    <option>Name</option>
                    <option>Department</option>
                    <option>Designation</option>
                    <option>A-z</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label for="search">Search Employee:*</Label>
                  <Input
                    id="search"
                    name="search"
                    placeholder="Search Employee"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-3 mb-4">
            <Col sm="6" lg="6">
                <div className="bg-success p-4 border text-white taskDisplayer">
                  <Row>
                    <Col  sm="2">
                      <img
                        src={user1}
                        alt="profile"
                        className="rounded-circle m-0"
                        width="60"
                      ></img>
                    </Col>
                    <Col>
                      <p className="fw-bold text-dark text-start mb-0">Name:________________</p>
                      <p className="fw-bold text-dark text-start mb-0">Designation:____________</p>
                      <p className="fw-bold text-dark text-start mb-0">Department:____________</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm="6" lg="6">
                <div className="bg-success p-4 border text-white taskDisplayer">
                  <Row>
                    <Col  sm="2">
                      <img
                        src={user1}
                        alt="profile"
                        className="rounded-circle m-0"
                        width="60"
                      ></img>
                    </Col>
                    <Col>
                      <p className="fw-bold text-dark text-start mb-0">Name:________________</p>
                      <p className="fw-bold text-dark text-start mb-0">Designation:____________</p>
                      <p className="fw-bold text-dark text-start mb-0">Department:____________</p>
                    </Col>
                  </Row>
                  
                </div>
              </Col>
            </Row>
            
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Employees;
