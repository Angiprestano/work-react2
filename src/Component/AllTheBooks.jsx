import { Button, Card, Container, Row, Col } from "react-bootstrap";
import romanceBooks from "../Data/romance.json";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="g-4">
        {romanceBooks.map((book, index) => {
          return (
            <Col xs={6} sm={4} md={3} lg={2} key={index}>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src={book.img}
                  style={{ height: "290px" }}
                />
                <Card.Body>
                  <Card.Title className="text-nowrap text-truncate">
                    {book.title}
                  </Card.Title>
                  <Card.Text>{book.price}€</Card.Text>
                  <Button variant="info">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
