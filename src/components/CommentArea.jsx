import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    changed: false
  };

  updateComments = (newComment) => {
    this.setState(newComment)
    // this.setState({changed: false})
    console.log("this.state.changed", this.state.changed)
  }

  endpoint = "https://striveschool-api.herokuapp.com/api/comments/";

//   retrieveComments = (id) => {
//     fetch(this.endpoint + id, {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzQ2NDc4Y2RkZjAwMTU1ZDY3YTMiLCJpYXQiOjE3NTIyMjA3NzIsImV4cCI6MTc1MzQzMDM3Mn0.aps4Stj2AnXuaQyOjapUZvfSF2nL9WrlYcWeD7tpoDE",
//       },
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           throw new Error("Non siamo riusciti a caricare i commenti");
//         }
//       })
//       .then((commentsRetrieved) => {
//         this.setState({ comments: commentsRetrieved });
//       })
//       .catch((err) => console.log("Errore!", err));
//   };

//   componentDidMount() {
//     this.retrieveComments(this.props.id);
//   }

  render() {
    // console.log("Sto rifacendo il render")
    return (
      <div className="position-fixed end-0 me-5 w-25">
      {/* <CommentsList commentsArray={this.state.comments} endpoint={this.endpoint} id={this.props.id}/> */}
      <CommentsList endpoint={this.endpoint} id={this.props.id} modifyState={this.updateComments} changed={this.state.changed} />
      <AddComment id={this.props.id} endpoint={this.endpoint} update={this.updateComments}/>
      </div>
    );
  }
}

export default CommentArea;
