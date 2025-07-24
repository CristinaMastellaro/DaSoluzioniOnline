import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  endpoint = "https://striveschool-api.herokuapp.com/api/comments/";

  retrieveComments = (id) => {
    fetch(this.endpoint + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzQ2NDc4Y2RkZjAwMTU1ZDY3YTMiLCJpYXQiOjE3NTIyMjA3NzIsImV4cCI6MTc1MzQzMDM3Mn0.aps4Stj2AnXuaQyOjapUZvfSF2nL9WrlYcWeD7tpoDE",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Non siamo riusciti a caricare i commenti");
        }
      })
      .then((commentsRetrieved) => {
        this.setState({ comments: commentsRetrieved });
      })
      .catch((err) => console.log("Errore!", err));
  };

  componentDidMount() {
    this.retrieveComments(this.props.id);
  }

  render() {
    return (
      <div>
      <CommentsList commentsArray={this.state.comments}/>
      <AddComment id={this.props.id} endpoint={this.endpoint}/>
      </div>
    );
  }
}

export default CommentArea;
