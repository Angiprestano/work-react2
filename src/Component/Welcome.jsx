import { Container, Row, Col } from "react-bootstrap";
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
      </Row>
    </Container>
  );
};

export default Welcome;
