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
  Nav,
  NavItem,
  Table,
} from "reactstrap";

const Project = () => {
  return (
    <div>
      <Card>
        <CardBody className="">
          <Container>
            <Row>
              <h3 className="text-center p-4">Projects</h3>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Ongoing Projects</option>
                    <option>Pending Projects</option>
                    <option>Completed Projects</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <div className="button-group">
                  <Button className="btn" color="primary">
                    Create new project
                  </Button>
                </div>
              </Col>
            </Row>

            <Table bordered hover>
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Project Name</th>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>HD Soft Mobile Application</td>
                  <td>15 Oct 2022</td>
                  <td>30 Nov 2022</td>
                  <th>Edit</th>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Chrome Extension</td>
                  <td>10 Oct 2022</td>
                  <td>30 Nov 2022</td>
                  <th>Edit</th>
                </tr>
              </tbody>
            </Table>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Project;
