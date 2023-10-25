import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container
      fluid
      className="position-fixed text-center bottom-0 border-top-2 border-secondary border-top bg-primary "
    >
      <Row>
        <Col>Epicode school 2023 &copy;</Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
