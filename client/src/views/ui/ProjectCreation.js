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
} from "reactstrap";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  Select,
} from "mdb-react-ui-kit";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ProjectCreation = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onTouched" });

  const onProjCreate = (values, actions) => {
    const vals = { ...values };
    console.log(vals);

    // actions.resetForm();
    fetch("http://localhost:4000/auth/projcreate", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vals),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <Card>
        <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center ">
          {/* <i className="bi bi-bell me-2"> </i> */}
          Create Project
        </CardTitle>
        <CardBody className="">
          <Container>
            <Form
              method="post"
              name="ProjectCreateForm"
              onSubmit={handleSubmit(onProjCreate)}
            >
              <Row className="mt-3">
                <Col>
                  <div className="">
                    <FormGroup>
                      <Label for="exampleEmail">Project Name*:</Label>
                      <MDBInput
                        className="input1"
                        size="s"
                        placeholder="Enter your project name"
                        type="text"
                        {...register("name", { required: true })}
                      />
                      <div className="error">
                        {errors.name?.type === "required" &&
                          "Project Name is required"}
                      </div>
                    </FormGroup>
                  </div>
                </Col>
                <Col>
                  <div className="">
                    {" "}
                    <FormGroup>
                      <Label for="exampleEmail">Type*:</Label>
                      <Input id="exampleEmail" name="ProjectType" />
                    </FormGroup>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="">
                    <FormGroup>
                      <Label for="exampleEmail">Start Date*:</Label>
                      <MDBInput
                        className="input1"
                        size="s"
                        // placeholder="Enter your project name"
                        type="date"
                        {...register("startDate", { required: true })}
                      />
                      <div className="error">
                        {errors.startDate?.type === "required" &&
                          "Start Date is required"}
                      </div>
                    </FormGroup>
                  </div>
                </Col>
                <Col>
                  <div className="">
                    {" "}
                    <FormGroup>
                      <Label>End Date*:</Label>
                      <MDBInput
                        className="input1"
                        size="s"
                        // placeholder="Enter your project name"
                        type="date"
                        {...register("endDate", { required: true })}
                      />
                      <div className="error">
                        {errors.endDate?.type === "required" &&
                          "End Date is required"}
                      </div>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <FormGroup>
                  <Label for="exampleText">Description*:</Label>
                  <MDBInput
                    type="textarea"
                    {...register("description", { required: true })}
                  />
                  <div className="error">
                    {errors.description?.type === "required" &&
                      "Description is required"}
                  </div>
                  {/* <MDBInput
                    id="exampleText"
                    name="text"
                    type="textarea"
                    {...register("startDate", { required: true })}
                  />
                  <div className="error">
                    {errors.startDate?.type === "required" &&
                      "Start Date is required"}
                  </div> */}
                </FormGroup>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="">
                    <FormGroup>
                      <Label for="exampleEmail">Budget*:</Label>
                      <MDBInput
                        type="number"
                        {...register("budget", { required: true })}
                      />
                      <div className="error">
                        {errors.budget?.type === "required" &&
                          "Budget is required"}
                      </div>
                    </FormGroup>
                  </div>
                </Col>

                <Col>
                  <div className="">
                    <FormGroup>
                      <Label>Billable*:</Label>
                      <select
                        id="exampleSelect"
                        name="select"
                        className="col-12 p-2 border rounded-3"
                        {...register("billable", { required: true })}
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {errors.selectedOption && (
                        <div className="error">Please choose an option.</div>
                      )}
                    </FormGroup>
                  </div>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <div className="">
                    <FormGroup>
                      <Label for="exampleSelect">Manager*:</Label>
                      <select
                        id="exampleSelect"
                        name="select"
                        className="col-12 p-2 border rounded-3"
                        {...register("selectedOption", { required: true })}
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="Abhishek Mandal">Abhishek Mandal</option>
                        <option value="Sunil Joshi">Sunil Joshi</option>
                        <option value="Hemant Mhalsekar">
                          Hemant Mhalsekar
                        </option>
                      </select>
                      {errors.selectedOption && (
                        <div className="error">Please choose an option.</div>
                      )}
                    </FormGroup>
                  </div>
                </Col>
                <Col>
                  <div className="">
                    <FormGroup>
                      <Label for="exampleSelect">Status*:</Label>
                      <select
                        id="exampleSelect"
                        name="select"
                        className="col-12 p-2 border rounded-3"
                        {...register("status", { required: true })}
                      >
                        <option value="">--Please choose an option--</option>
                        <option>On Going</option>
                        <option>Completed</option>
                        <option>Pending</option>
                      </select>
                      {errors.selectedOption && (
                        <div className="error">Please choose an option.</div>
                      )}
                    </FormGroup>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3 mb-3">
                {/* <Link
                to="/project"
                // className={
                //   location.pathname === "/projectcreation"
                //     ? "text-primary nav-link py-3"
                //     : "nav-link text-secondary py-3 primary"
                // }
              > */}
                <div className="button-group text-center">
                  <Button id="registerBtn" type="submit" color="buttonColor">
                    Create new project
                  </Button>
                  {/* <MDBInput
                    id="registerBtn"
                    type="submit"
                    className="btn btn bg-buttonColor text-white mt-3"
                    value="Create new project"
                  /> */}
                </div>
                {/* </Link> */}
              </Row>
            </Form>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCreation;
