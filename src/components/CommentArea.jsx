import { useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   changed: false,
  // };

  const [comments, setComments] = useState([]);
  const [changed, setChanged] = useState(false);

  const updateComments = (newComment, newChanged) => {
    // this.setState(newComment);
    setComments(newComment);
    setChanged(newChanged);
    // this.setState({changed: false})
    // console.log("this.state.changed", this.state.changed);
  };

  const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";

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

  // console.log("Sto rifacendo il render")
  return (
    <div>
      {/* <CommentsList commentsArray={this.state.comments} endpoint={this.endpoint} id={this.props.id}/> */}

      <AddComment
        id={props.id}
        endpoint={endpoint}
        update={updateComments}
        comments={comments}
      />
      <CommentsList
        endpoint={endpoint}
        id={props.id}
        modifyState={updateComments}
        changed={changed}
        comments={comments}
      />
    </div>
  );
};

export default CommentArea;
