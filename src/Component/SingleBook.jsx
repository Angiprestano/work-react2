import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class singBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        onClick={() => {
          if (this.state.selected === false) {
            this.setState({
              selected: true,
            });
          } else {
            this.setState({
              selected: true,
            });
          }
        }}
        className={`border-2 border border-info ${
          this.state.selected ? "border-5 border-info" : ""
        }`}
      >
        <Card.Img
          src={this.props.OneBook.img}
          style={{ height: "290px" }}
          className="pt-2 bg-primary-subtle"
        />
        <Card.Body style={{ height: "200px" }} className="bg-primary-subtle">
          <Card.Title className="text-truncate">
            {this.props.OneBook.title}
          </Card.Title>
          <Card.Title>{this.props.OneBook.price}€</Card.Title>
          <Button variant="danger" className="mt-5">
            Add to cart
          </Button>
        </Card.Body>
        {this.state.selected && (
          <CommentArea bookId={this.props.OneBook.asin} />
        )}
      </Card>
    );
  }
}

export default singBook;
