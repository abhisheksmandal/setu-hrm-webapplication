import React from 'react'

export default function SalaryDetails() {
  return (
    <div><h3>SalaryDetails</h3>
    <Container className="bg-secondary bg-gradient text-white rounded">
        <h5 className="p-2 text-center">Salary Details</h5>
        <Form>
          <Row className="mt-3">
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="BasicSalary">Basic:</Label>
                <Input id="basic" name="basic" type="text" />
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="HRA">HRA:</Label>
                <Input id="hra" name="HRA" type="text" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <Label for="ConveyanceAllowance">Conveyance Allowance:</Label>
                <Input
                  id="conveyance"
                  name="conveyance"
                  type="text"
                  
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="InternetAllowance">Internet Allowance:</Label>
                <Input id="internet" name="internetallowance" type="text" />
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="PF">PF:</Label>
                <Input id="pf" name="PF" type="text" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <Label for="TotalSalary">Total:</Label>
                <Input
                  id="total"
                  name="total"
                  type="text"
                  disabled={true}
                />
              </FormGroup>
            </Col>
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
