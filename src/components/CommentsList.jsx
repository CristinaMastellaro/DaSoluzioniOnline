import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Error from "./Error";
import Loading from "./Loading";

class CommentsList extends Component {
  state = {
    isLoading: true,
    isError: false,
    totalComments: [],
  };

  retrieveComments = () => {
    fetch(this.props.endpoint + this.props.id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODg3NmM1MDEyODg5NzAwMTVmMjdiYWYiLCJpYXQiOjE3NTM3MDU1NTIsImV4cCI6MTc1NDkxNTE1Mn0.1TQwVzn7FvzI-p6nQpG9O5BYg4m_236yDkgmmjo-3QA",
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
        this.setState({ totalComments: commentsRetrieved, isLoading: false });
        console.log("commentsRetrieved", commentsRetrieved);
      })
      .catch((err) => {
        this.setState({ isLoading: false, isError: true }),
          console.log("Errore!", err);
      });
  };

  componentDidMount() {
    this.retrieveComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id || prevProps.changed !== this.props.changed) {
      this.retrieveComments();
    }
  }

  deleteReview = (endpointReview) => {
    fetch(endpointReview, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODg3NmM1MDEyODg5NzAwMTVmMjdiYWYiLCJpYXQiOjE3NTM3MDU1NTIsImV4cCI6MTc1NDkxNTE1Mn0.1TQwVzn7FvzI-p6nQpG9O5BYg4m_236yDkgmmjo-3QA",
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log("endpoint", this.props.endpoint);
        if (res.ok) {
          alert("Commento cancellato!");
          this.setState({ isLoading: false });
          this.retrieveComments();
        } else {
          throw new Error("Non siamo riusciti a cancellare il commento");
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false, isError: true });
        console.log("Errore!", err);
      });
  };

  render() {
    // console.log("endpoint", this.props.endpoint)
    return (
      <ListGroup>
        {this.state.isLoading && !this.state.isError && <Loading />}
        {this.state.isError && (
          <Error message="Non siamo riusciti a caricare i commenti" />
        )}
        {this.state.totalComments.map((comment) => {
          // console.log("comment", comment)
          return (
            <div
              key={comment._id}
              className="d-flex justify-content-between mb-1 align-items-center"
            >
              <ListGroup.Item>
                {comment.comment} - {comment.rate}
              </ListGroup.Item>
              <Button
                variant="danger"
                className="ms-1"
                onClick={() => {
                  this.deleteReview(this.props.endpoint + "/" + comment._id);
                }}
              >
                <i className="bi bi-trash3-fill"></i>
              </Button>
            </div>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentsList;
