import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Error from "./Error";

const basicTotalComment = {
  comment: "",
  rate: 1,
  elementId: "",
};

const AddComment = (props) => {
  //   state = {
  //     totalComment: basicTotalComment,
  //     isError: false,
  //   };

  const [totalComment, setTotalComment] = useState(basicTotalComment);
  const [isError, setIsError] = useState(false);

  const letsReview = (e) => {
    e.preventDefault();

    fetch(props.endpoint, {
      method: "POST",
      body: JSON.stringify(totalComment),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODg3NmM1MDEyODg5NzAwMTVmMjdiYWYiLCJpYXQiOjE3NTM3MDU1NTIsImV4cCI6MTc1NDkxNTE1Mn0.1TQwVzn7FvzI-p6nQpG9O5BYg4m_236yDkgmmjo-3QA",
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Commento salvato, grazie per la recensione!");
          //   this.setState({ totalComment: basicTotalComment });
          setTotalComment(basicTotalComment);
          props.update(props.comments, true);
        } else {
          throw new Error(
            "Non siamo riusciti a salvare la recensione, ci dispiace"
          );
        }
      })
      .catch((err) => {
        setIsError(true);
        console.log("Errore!", err);
      });
  };

  return (
    <>
      <h4>Lasciaci un commento!</h4>
      <Form
        className="mb-4 border border-1 border-warning p-3"
        onSubmit={letsReview}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            className="p-3"
            placeholder="Facci sapere cosa pensi di questo libro!"
            value={totalComment.comment}
            onChange={(e) => {
              // this.setState({
              //   totalComment: {
              //     ...totalComment,
              //     comment: e.target.value,
              //     elementId: this.props.id,
              //   },
              // });
              setTotalComment({
                ...totalComment,
                comment: e.target.value,
                elementId: props.id,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            value={totalComment.review}
            onChange={(e) => {
              // this.setState({
              //   totalComment: {
              //     ...totalComment,
              //     rate: e.target.value,
              //   },
              // });
              setTotalComment({
                ...totalComment,
                rate: e.target.value,
              });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="warning" type="submit">
          Recensisci!
        </Button>
        {isError && (
          <Error message="Non siamo riusciti a caricare il tuo commento" />
        )}
      </Form>
    </>
  );
};

export default AddComment;
