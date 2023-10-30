import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTkyMGY2ZTNkZDAwMTQ5NWU0M2QiLCJpYXQiOjE2OTgzMjI3MjAsImV4cCI6MTY5OTUzMjMyMH0.8NXtKegZvDfkkjV9vcx37mfIQ-KR5NTOxNOSOSAiHJI";

class CommentArea extends Component {
  state = {
    Maracas: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };
  getComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          headers: {
            Authorization: key,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("buon compleanno a me!", data);
        this.setState({
          Maracas: {
            comment: data[0].comment,
            rate: data[0].rate,
            elementId: data[0].elementId,
          },
        });
      } else {
        throw new Error("Errore del server");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.bookAsin !== this.props.bookAsin) {
    this.getComments();
    // }
  }
  render() {
    return (
      <>
        <AddComment />
        <CommentList />
        <p>{this.state.Maracas.comment}</p>
        <p>{this.state.Maracas.rate}</p>
        <p>{this.state.Maracas.elementId}</p>
      </>
    );
  }
}

export default CommentArea;
