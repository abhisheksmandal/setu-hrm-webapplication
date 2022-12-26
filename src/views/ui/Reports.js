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
        <h3 className="text-center p-4">Reports</h3>
        <Card>
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
                >
                  <Button className="btn" color="primary">
                   Generate OTP
                  </Button>
                </div>
              </Col>
              </Row>
                
            <Row className="mt-3">
             
                <Col className="text-center">
                  <Button className="btn text-center" color="primary">
                    Download PDF
                  </Button>
                </Col>
                <Col xs="6">
                  <Button className="btn text-center" color="primary">
                    Download Excel
                  </Button>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>
      <br />
      
      <br />;
      
    </div>
  );
};
export default Reports;
