import { Component } from "react";
import { Card, Button } from "react-bootstrap";

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
        className={this.state.selected ? "border-5 border-primary" : ""}
      >
        <Card.Img src={this.props.OneBook.img} style={{ width: "100%" }} />
        <Card.Body>
          <Card.Title>{this.props.OneBook.title}</Card.Title>
          <Card.Title>{this.props.OneBook.price}€</Card.Title>
          <Button variant="info">Add to cart</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default singBook;
