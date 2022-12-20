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

// const Reports = () => {
//   return (
//     <div>
//       <h3 className="text-center p-4">Reports</h3>

//       <Card>
//         <CardBody className="">
//           <Container>
//             <Row className="mt-3">
//               {/* <Col> */}
//               {/* <FormGroup tag="fieldset" className=""> */}
//                 <Col xs="3">
//                   <div className="">
//                     <FormGroup check>
//                       <Input name="radio1" type="radio" />{" "}
//                       <Label check>Individual</Label>
//                     </FormGroup>
//                   </div>
//                 </Col>
//                 <Col xs="3">
//                   <div className="">
//                     <FormGroup check>
//                       <Input name="radio1" type="radio" />{" "}
//                       <Label check>Misc</Label>
//                     </FormGroup>
//                   </div>
//                 </Col>
//                 <Col xs="3">
//                   <div className="">
//                     <FormGroup check>
//                       <Input name="radio1" type="radio" />{" "}
//                       <Label check>Detailed</Label>
//                     </FormGroup>
//                   </div>
//                 </Col>
//               {/* </FormGroup> */}
//               {/* </Col> */}
//             </Row>
//             <Row className="mt-3">
//               <Col xs="6">
//                 <FormGroup>
//                   <Label for="exampleSelect">Types of Reports</Label>
//                   <Input id="exampleSelect" name="select" type="select">
//                     <option>Employee Report</option>
//                   </Input>
//                 </FormGroup>
//               </Col>
//               <Col xs="6">
//                 <FormGroup>
//                   <Label for="exampleSelect">Employee Name</Label>
//                   <Input id="exampleSelect" name="select" type="select">
//                     <option>Abhishek Mandal</option>
//                     <option>Hemant </option>
//                     <option>Sunil</option>
//                     <option>Pranav</option>
//                     <option>Pavan</option>
//                   </Input>
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row className="mt-3">
//               <Col xs="6">
//                 <FormGroup>
//                   <Label for="exampleEmail">Start Date</Label>
//                   <Input id="Sdate" name="date" placeholder="" type="text" />
//                 </FormGroup>
//               </Col>
//               <Col xs="6">
//                 <FormGroup>
//                   <Label for="exampleEmail">End Date</Label>
//                   <Input id="Edate" name="date" placeholder="" type="text" />
//                 </FormGroup>{" "}
//               </Col>
//             </Row>
//             <Row className="mt-3">

//                 <Col xs="6">
//                   <Button className="btn text-center" color="primary">
//                     Download PDF
//                   </Button>
//                 </Col>
//                 <Col xs="6">
//                   <Button className="btn text-center" color="primary">
//                     Download Excel
//                   </Button>
//                 </Col>

//             </Row>
//           </Container>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

<br />;
// const Reports = () => {
//   return (
//     <div>
//       <Card>
//         <CardBody className="">
//           <Container className="mt-5 ">
//             <Row
//               className="mt-3"
//               style={{
//                 display: "flex",
//                 justifyContent: "right",
//                 alignItems: "right",
//               }}
//             >
//               <Col xs="3">
//                 <div className="">
//                   <Form>
//                     <FormGroup>
//                       <Label for="exampleEmail">Name: </Label>
//                       <Input
//                         id="name"
//                         name="name"
//                         placeholder="Rocky"
//                         type="text"
//                       />
//                     </FormGroup>
//                   </Form>
//                 </div>
//               </Col>
//               <Col xs="3">
//                 <div className="">
//                   <Form>
//                     <FormGroup>
//                       <Label for="exampleEmail">Designation: </Label>
//                       <Input
//                         id="designation"
//                         name="designation"
//                         placeholder="CEO of India"
//                         type="text"
//                       />
//                     </FormGroup>
//                   </Form>
//                 </div>
//               </Col>
//             </Row>
//             <Row
//               className="mt-3"
//               style={{
//                 display: "flex",
//                 justifyContent: "right",
//                 alignItems: "right",
//               }}
//             >
//               <Col xs="3">
//                 <div className="">
//                   <Form>
//                     <FormGroup>
//                       <Label for="exampleEmail">Email: </Label>
//                       <Input
//                         id="email"
//                         name="email"
//                         placeholder="Eg. rocky@gmail.com"
//                         type="email"
//                       />
//                     </FormGroup>
//                   </Form>
//                 </div>
//               </Col>
//               <Col xs="3">
//                 <div className="">
//                   <Form>
//                     <FormGroup>
//                       <Label for="exampleEmail">Phone no: </Label>
//                       <Input
//                         id="designation"
//                         name="designation"
//                         placeholder="Eg. 1234567890"
//                         type="text"
//                       />
//                     </FormGroup>
//                   </Form>
//                 </div>
//               </Col>
//             </Row>
//             <Row
//               className="mt-3"
//               style={{
//                 display: "flex",
//                 justifyContent: "right",
//                 alignItems: "right",
//               }}
//             >
//               <Col xs="3">
//                 <div className="">
//                   <Form>
//                     <FormGroup>
//                       <Label for="exampleEmail">Age: </Label>
//                       <Input
//                         id="age"
//                         name="age"
//                         placeholder="Eg. 31"
//                         type="text"
//                       />
//                     </FormGroup>
//                   </Form>
//                 </div>
//               </Col>
//               <Col xs="3">
//                 <div className="">
//                   <Form>
//                     <FormGroup>
//                       <Label for="">Salary: </Label>
//                       <Input
//                         id="salary"
//                         name="salary"
//                         placeholder=" Eg. 600000000000000/-"
//                         type="text"
//                       />
//                     </FormGroup>
//                   </Form>
//                 </div>
//               </Col>
//             </Row>
//             <Row
//               className="mt-3"
//               style={{
//                 display: "flex",
//                 justifyContent: "right",
//                 alignItems: "right",
//               }}
//             >
//               <Col xs="6">
//                 <div className="">
//                   <Form>
//                     {/* <FormGroup> */}
//                       {/* <Label for="exampleEmail">Address: </Label>
//                       <Input
//                         id="name"
//                         name="name"
//                         placeholder="eg. Porvorim, Bardez, North-Goa, Goa"
//                         type="text"
//                         style={{height: "80px"}}
//                       /> */}
//                       {/* </FormGroup> */}
//                       <FormGroup>
//                         <Label for="exampleText">Address</Label>
//                         <Input
//                           id="exampleText"
//                           name="text"
//                           placeholder="Eg. Porvorim, Bardez, North-Goa, Goa"
//                           type="textarea"
//                           style={{ height: "80px" }}
//                         />
//                       </FormGroup>

//                   </Form>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </CardBody>
//       </Card>
//       {/* <div className="button-group ml-mr-50">
//         <Button className="btn" color="primary" size="lg" block>
//           Edit Profile Details
//         </Button>
//       </div> */}
//       <div
//         className=""
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Button className="btn" color="primary">
//           Edit Profile Details
//         </Button>
//       </div>
//     </div>
//   );
// };

<br />;
const Reports = () => {
  return (
    <div>
      <Card
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "right",
        }}
      >
        <CardBody className="">
          <Container>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Register
            </h3>
            <Row
              className="mt-3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col xs="3">
                <div className="">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">First Name: </Label>
                      <Input
                        id="fname"
                        name="fname"
                        placeholder="Rocky"
                        type="text"
                      />
                    </FormGroup>
                  </Form>
                </div>
              </Col>
              <Col xs="3">
                <div className="">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Last Name: </Label>
                      <Input
                        id="lname"
                        name="lname"
                        placeholder="Rocky"
                        type="text"
                      />
                    </FormGroup>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row className="mt-3"  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
              <Col xs="6" >
                <Form >
                  <FormGroup>
                    <Label for="exampleEmail">Company Name: *</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                
                  <FormGroup>
                    <Label for="exampleEmail">PAN No: *</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Address: *</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email address: *</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Form>
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
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};
export default Reports;
