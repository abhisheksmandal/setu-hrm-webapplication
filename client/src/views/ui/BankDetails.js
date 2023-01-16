import React from 'react'

export default function 
() {
  return (
    <div>
              <Container className="bg-secondary bg-gradient text-white rounded">
        <h5 className="p-2 text-center">Bank Details</h5>
        <Form>
        <Row className="mt-3">
              <Col xs="6">
              <FormGroup>
                <Label for="BankName">Bank Name:</Label>
                <Input id="bank" name="bankName" type="select">
                  <option>BOI</option>
                  <option>SBI</option>
                </Input>
              </FormGroup>
              </Col>
              <Col xs="6">
              <FormGroup>
                <Label for="BankBranch">Branch Name:</Label>
                <Input id="branch" name="branchName" type="select">
                  <option>Panjim</option>
                  <option>Mapusa</option>
                </Input>
              </FormGroup>
              </Col>
              </Row>
              <Row className="mt-3">
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="IFSCcode">IFSC Code:</Label>
                <Input id="ifc" name="IFSC" type="text" />
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup>
                <Label for="MICRno">MICR:</Label>
                <Input id="MICR" name="MICR" type="text" />
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <Label for="AccountNo">Account No.:</Label>
                <Input id="acno" name="ACno" type="text" />
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
