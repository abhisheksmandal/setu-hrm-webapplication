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
import { Link } from "react-router-dom";

const Project = () => {
  // let location = useLocation();

  return (
    <div>
      <Card>
        <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center ">
          {/* <i className="bi bi-bell me-2"> </i> */}
          Projects
        </CardTitle>
        <CardBody className="projectsBody">
          <Container>
            <Row>
              <Col>
                <FormGroup>
                  <Input id="exampleSelect" name="select" type="select" className="bg-themeblue">
                    <option>Ongoing Projects</option>
                    <option>Pending Projects</option>
                    <option>Completed Projects</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <Link
                  to="/projectcreation"
                  // className={
                  //   location.pathname === "/projectcreation"
                  //     ? "text-primary nav-link py-3"
                  //     : "nav-link text-secondary py-3 primary"
                  // }
                >
                  <div className="button-group text-end">
                    <Button className="btn" color="buttonColor">
                      Create new project
                    </Button>
                  </div>
                </Link>
              </Col>
            </Row>

            <Table bordered hover>
              <thead>
                <tr className="bg-danger">
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
