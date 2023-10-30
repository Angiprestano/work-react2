import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col md={8}></Col>
        <Alert variant="warning">
          <Alert.Heading className="fw-bold">Welcome</Alert.Heading>
          <p>
            Hi, this your netx favorite online-library. You can shop any book
            you wany for the best prices avaible
          </p>
          <hr />
          <p className="mb-0">Just start to search your next favorite book!</p>
        </Alert>
        <Form.Label htmlFor="inputPassword5">Search your book</Form.Label>
        <Form.Control type="text" id="inputPassword5" />
        <Form.Text id="passwordHelpBlock" muted></Form.Text>
      </Row>
      <Button className="mt-2">Search</Button>
    </Container>
  );
};

export default Welcome;
