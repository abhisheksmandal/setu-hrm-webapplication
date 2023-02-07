import React from 'react'

export default function TaskAllocationView() {
  return (
    <div><Card>
    <CardTitle tag="h3" className="border-bottom p-3 mb-0 text-center ">
      {/* <i className="bi bi-bell me-2"> </i> */}
      Task Allocation
    </CardTitle>
    <CardBody>
      <Container>
        <Form>
          <Row className="mt-3">
            <Col xs="6">
              <FormGroup>
                <Label for="projname">Project</Label>
                <Input id="proj" name="proj" type="select" disabled={true}>
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
                <Label for="designation">Designation</Label>
                <Input id="desi" name="desi" type="select" disabled={true}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <Label for="employee">Employee</Label>
                <Input id="emp" name="employee" type="select" disabled={true}>
                  <option>Person 1</option>
                  <option>Person 2</option>
                  <option>Person 3</option>
                  <option>Person 4</option>
                  <option>Person 5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-3">
            <FormGroup>
              <Label for="descText">Description</Label>
              <Input id="description" name="desc" type="textarea" disabled={true} />
            </FormGroup>
          </Row>

          <Row className="mt-3">
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="prio">Priority</Label>
                <Input id="priority" name="prio" type="select" disabled={true}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <Label for="estDays">Estimated Days</Label>
                <Input
                  id="estimatedDays"
                  name="days"
                  // placeholder="with a placeholder"
                  type="number"
                  disabled={true}
                />
              </FormGroup>
            </Col>
          </Row>
          
          {/* <Row className="mt-3">
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="File">File</Label>
                <Input id="file" name="f" type="file" />
              </FormGroup>
            </Col>
            <Col sm="4" className="d-flex align-items-center mt-3">
              <Button color="info" >Upload</Button>
            </Col>
          </Row> */}

          <Row className="mt-3">
            <Col xs="6" sm="4">
              <div>
                <h4>
                  <Badge href="" color="warning" className="ms-3">
                    Doc1.jpeg
                  </Badge>
                </h4>
              </div>
            </Col>
            <Col xs="6" sm="4">
              <div>
                <h4>
                  <Badge href="" color="warning" className="ms-3">
                    Doc2.jpeg
                  </Badge>
                </h4>
              </div>
            </Col>
            <Col sm="4">
              <div>
                <h4>
                  <Badge href="" color="warning" className="ms-3">
                    Doc3.jpeg
                  </Badge>
                </h4>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
          <Col xs="6" sm="4">
          <FormGroup>
          
           <Label for="stat">Status</Label>
            <Input id="status" name="status" type="select" disabled={true}>
              <option>Complete</option>
              <option>Pending</option>
              <option>Active</option>
            </Input>
          </FormGroup>
          </Col>
          <Col xs="6" sm="4">
          <FormGroup>
              <Label for="startDate">Start Date</Label>
              <Input id="startdate" name="date" type="date" disabled={true} />
            </FormGroup>
          </Col>
          <Col sm="4">
          <FormGroup>
              <Label for="EstDate">Estimated Date</Label>
              <Input id="Estdate" name="date" type="date" disabled={true}/>
            </FormGroup>
          </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              <Button color="primary" href="">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </CardBody>
  </Card></div>
  )
}
