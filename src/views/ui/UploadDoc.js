import React from 'react'

export default function UploadDoc() {
  return (
    <div><Container className="bg-secondary bg-gradient text-white rounded">
    <h5 className="p-2 text-center">Upload Files</h5>
    <Form>
      <Row className="mt-3">
        <Col xs="6">
          <FormGroup>
            <Label for="DocumentName">Document Name:</Label>
            <Input id="document" name="Dname" type="text" />
          </FormGroup>
        </Col>
        <Col xs="6">
        <FormGroup>
                <Label for="File">File</Label>
                <Input id="file" name="f" type="file" />
              </FormGroup>
        </Col>
        </Row>
        </Form>
        <Table bordered hover className="bg-light">
          <thead className="bg-success">
            <tr>
              <th>Sr no.</th>
              <th>Document Name</th>
              <th>Document Type</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Photo</td>
              <td>photo.jpg</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Signature</td>
              <td>Signature.jpg</td>
              
            </tr>
            
          </tbody>
        </Table>
        <br></br>
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
          Submit
        </Button>
          </FormGroup>
        </Col>
        </Row></div>
  )
}
