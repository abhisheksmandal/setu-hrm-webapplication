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
} from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";


import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/project",
    icon: "bi bi-speedometer2",
  }]



const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = () => {
  return (
    <div>
      {/* **Top Cards**
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Yearly Earning"
            earning="$21k"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Refund given"
            earning="$1k"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Yearly Project"
            earning="456"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Weekly Sales"
            earning="210"
            icon="bi bi-bag"
          />
        </Col>
      </Row>
      **Sales & Feed**
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      **Table **
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      **Blog Cards**
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
      {/* Dashboard Code Starts Here */}
      <Card>
        <CardBody className="">
          <Container>
            <Row>
              <h1 className="text-center p-4">Welcome, User</h1>
            </Row>
            {/* <Row>
              <Col sm="6" lg="6">
                <TopCards
                  bg="bg-light-success text-success"
                  // title="Profit"
                  subtitle="Worked in a Month"
                  earning="_ _ : Hours"
                  // icon="bi bi-wallet"
                />
              </Col>
              <Col sm="6" lg="6">
                <TopCards
                  // bg="bg-light-danger text-danger"
                  // title="Refunds"
                  subtitle="Extra in a Month"
                  earning="_ _ : Hours"
                  // icon="bi bi-coin"
                />
              </Col>
            </Row> */}
            <Row className="mt-3 mb-4">
              <Col sm="6" lg="6">
                <div className="bg-success p-4 border text-white taskDisplayer">
                  <h4 className="text-center">_ _ : Hours</h4>
                  <p className="text-center mb-0">Worked in a Month</p>
                </div>
              </Col>
              <Col sm="6" lg="6">
                <div className="bg-success p-4 border text-white taskDisplayer">
                  <h4 className="text-center">_ _ : Hours</h4>
                  <p className="text-center mb-0">Extra in a Month</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="6" lg="6">
                <FormGroup>
                  <Label for="exampleSelect">Projects</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm="6" lg="6">
                <div className="bg-danger p-4 border text-white taskDisplayer">
                  Pending
                </div>
              </Col>
              <Col sm="6" lg="6">
                <div className="bg-warning p-4 border text-white taskDisplayer">
                  In Progress
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm="6" lg="6">
                <div className="bg-success p-4 border text-white taskDisplayer">
                  Completed
                </div>
              </Col>
              <Col sm="6" lg="6">
                <div className="bg-info p-4 border text-white taskDisplayer">
                  Unallocated
                </div>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col lg="12">
                <Table bordered hover>
                  <tbody>
                    <tr className="notificationRow">
                      <th scope="row">1</th>
                      <td>
                        <h6>Hemant has applied for a sick leave</h6>
                      </td>
                      <td>Half Day Leave</td>
                      <td>
                        <span>
                          <Button
                            className="btn"
                            color="buttonColor"
                            size="sm"
                            block
                          >
                            Review
                          </Button>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <div className="btnOwn p-2 sm" color="primary">
              Click
            </div>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Starter;
