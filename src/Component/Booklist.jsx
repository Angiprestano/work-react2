import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";

class Booklist extends Component {
  render() {
    return (
      <Container className="mb-5 mt-3">
        <Row className="g-3 mb-4">
          {this.props.arrayOfBooks.map((book) => {
            return (
              <Col xs={6} sm={4} md={3} lg={2} key={book.asin}>
                <SingleBook OneBook={book} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Booklist;
