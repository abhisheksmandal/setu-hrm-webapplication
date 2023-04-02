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

const ProjectAllocationSearch = () => {
  return (
    <div>
      <Card>
        <CardBody className="">
          <Container>
            <Row>
              <h3 className="text-center p-4">Projects</h3>
            </Row>

            <Table bordered hover>
              <thead>
                <tr>
                  <th>Project id.</th>
                  <th>Project Name</th>
                  <th>Created date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>HD Soft Mobile Application</td>
                  <td>15 Oct 2022</td>
                  <td>Allocated</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Chrome Extension</td>
                  <td>10 Oct 2022</td>
                  <td>------</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectAllocationSearch;




