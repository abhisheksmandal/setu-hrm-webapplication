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
                        {...register("projectname", { required: true })}
                      />
                      <div className="error">
                        {errors.projectname?.type === "required" &&
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
                      <select
                        name="select"
                        className="col-12 p-2 border rounded-3"
                        {...register("projecttype", { required: true })}
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="personal">Personal</option>
                        <option value="external">External</option>
                      </select>
                      <div className="error">
                        {errors.projecttype?.type === "required" &&
                          "Project Type is required"}
                      </div>
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
                        {...register("projectstartDate", { required: true })}
                      />
                      <div className="error">
                        {errors.projectstartDate?.type === "required" &&
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
                        {...register("projectendDate", { required: true })}
                      />
                      <div className="error">
                        {errors.projectendDate?.type === "required" &&
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
                    {...register("projectdescription", { required: true })}
                  />
                  <div className="error">
                    {errors.projectdescription?.type === "required" &&
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
                        {...register("projectbudget", { required: true })}
                      />
                      <div className="error">
                        {errors.projectbudget?.type === "required" &&
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
                        name="select"
                        className="col-12 p-2 border rounded-3"
                        {...register("projectbillable", { required: true })}
                      >
                        <option value="">--Please choose an option--</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                      {errors.projectbillable && (
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
                        name="select"
                        className="col-12 p-2 border rounded-3"
                        {...register("projectmanager", { required: true })}
                      >
                        <option value="">--Please choose an option--</option>
                        <option>Abhishek Mandal</option>
                        <option>Sunil Joshi</option>
                        <option>Hemant Mhalsekar</option>
                      </select>
                      {errors.projectmanager && (
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
                        name="select"
                        className="col-12 p-2 border rounded-3"
                        {...register("projectstatus", { required: true })}
                      >
                        <option value="">--Please choose an option--</option>
                        <option>On Going</option>
                        <option>Completed</option>
                        <option>Pending</option>
                      </select>
                      {errors.projectstatus && (
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
                    Create New Project
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
