import React from 'react'

export default function 
() {
  return (
    <div>
          <Container className="bg-secondary bg-gradient text-white rounded">
        <h5 className="p-2 text-center">Nominee Details</h5>
        <Form>
          <Row className="mt-3">
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="FirstName">First Name:</Label>
                <Input id="fName" name="name" type="text" />
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="MiddleName">Middle Name:</Label>
                <Input id="mName" name="name" type="text" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <Label for="LastName">Last Name:</Label>
                <Input id="lName" name="name" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="6" sm="4">
              <FormGroup>
              <Label for="Relation">Relationship With Employee:</Label>
                <Input id="relation" name="realtionship" type="select">
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Brother</option>
                  <option>Sister</option>
                  <option>Friend</option>
                  <option>Other</option>
                  </Input>
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup>
              <Label for="Gender">Gender: </Label>
                <br></br>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
              <Label for="Mobile">Phone No.:</Label>
                <Input id="mobile" name="mobile" type="tel" />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-3">
            <FormGroup>
              <Label for="address">Address</Label>
              <Input id="address" name="add" type="textarea" />
            </FormGroup>
          </Row>
          
          </Form>
          </Container>
          <Row className="mt-3">
            <Col xs="6" sm="4">
              <FormGroup>
              <Button color="primary" href="">
              Previous
            </Button>
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup>
              <Button color="primary" href="">
              Save & Proceed
            </Button>
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
              <Button color="primary" href="">
              Next
            </Button>
              </FormGroup>
            </Col>
          </Row>
    </div>
  )
}

