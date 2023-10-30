import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class Booklist extends Component {
  state = {
    searchValue: "",
    bookAsin: "",
  };

  setBooklist = (asin) => {
    this.setState({
      bookAsin: asin,
    });
  };

  render() {
    return (
      <>
        <Container className="mb-5 mt-3">
          <Row className="g-3 mb-4">
            <Col lg={9}>
              <Row>
                {this.props.arrayOfBooks.map((book) => {
                  return (
                    <Col xs={6} sm={4} md={3} key={book.asin}>
                      <SingleBook OneBook={book} setBook={this.setBooklist} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col lg={3}>
              <h1>Ciao</h1>
              <CommentArea bookAsin={this.state.bookAsin} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Booklist;
