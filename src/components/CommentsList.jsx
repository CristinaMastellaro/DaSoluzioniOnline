import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Error from "./Error";
import Loading from "./Loading";

const CommentsList = (props) => {
  // state = {
  //   isLoading: true,
  //   isError: false,
  //   totalComments: [],
  // };

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalComments, setTotalComments] = useState([]);

  const retrieveComments = () => {
    fetch(props.endpoint + props.id, {
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
        setTotalComments(commentsRetrieved);
        setIsLoading(false);
        // this.setState({ totalComments: commentsRetrieved, isLoading: false });
        console.log("commentsRetrieved", commentsRetrieved);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        // this.setState({ isLoading: false, isError: true }),
        console.log("Errore!", err);
      });
  };

  useEffect(() => {
    retrieveComments();
    props.modifyState(props.comments, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [props.changed]);
  }, [props.changed, props.id]);
  // componentDidMount() {
  //   this.retrieveComments();

  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.id !== this.props.id || prevProps.changed !== this.props.changed) {
  //     this.retrieveComments();
  //     this.props.modifyState({changed: false})
  //   }
  // }

  const deleteReview = (endpointReview) => {
    fetch(endpointReview, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODg3NmM1MDEyODg5NzAwMTVmMjdiYWYiLCJpYXQiOjE3NTM3MDU1NTIsImV4cCI6MTc1NDkxNTE1Mn0.1TQwVzn7FvzI-p6nQpG9O5BYg4m_236yDkgmmjo-3QA",
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log("endpoint", props.endpoint);
        if (res.ok) {
          alert("Commento cancellato!");
          // this.setState({ isLoading: false });
          setIsLoading(false);
          retrieveComments();
        } else {
          throw new Error("Non siamo riusciti a cancellare il commento");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        // this.setState({ isLoading: false, isError: true });
        console.log("Errore!", err);
      });
  };

  // console.log("endpoint", this.props.endpoint)
  // console.log("this.props.changed inside Cl", this.props.changed)
  return (
    <>
      <h4>Recensioni</h4>
      <ListGroup className="overflow-auto" style={{ maxHeight: "350px" }}>
        {isLoading && !isError && <Loading />}
        {isError && (
          <Error message="Non siamo riusciti a caricare i commenti" />
        )}
        {totalComments.map((comment) => {
          // console.log("comment", comment)
          return (
            <div
              key={comment._id}
              className="d-flex justify-content-between mb-1 align-items-center"
              data-testid="comment"
            >
              <ListGroup.Item>
                {comment.comment} - {comment.rate}
              </ListGroup.Item>
              <Button
                variant="danger"
                className="ms-1"
                onClick={() => {
                  deleteReview(props.endpoint + "/" + comment._id);
                }}
              >
                <i className="bi bi-trash3-fill"></i>
              </Button>
            </div>
          );
        })}
      </ListGroup>
    </>
  );
};

export default CommentsList;
