import { useState } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);
  const [asin, setAsin] = useState(props.book.asin);

  const putClassSelected = () => {
    if (props.book.asin !== props.asin) {
      setSelected(false);
    } else {
      // this.setState({ selected: !this.state.selected });
      setSelected(!selected);
      props.modifyState(props.asin, props.sq, selected);
    }
  };

  return (
    <Card
      style={{
        border: asin === props.asin && !selected ? "3px solid red" : "none",
      }}
      data-testid={"book" + asin}
    >
      <Card.Img
        variant="top"
        src={props.book.img}
        data-testid={asin}
        onClick={() => {
          props.modifyState(props.book.asin, props.sq, true);
          putClassSelected();
        }}
      />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
      </Card.Body>
      {/* {this.state.selected && (<CommentArea id={this.props.book.asin}/>)} */}
    </Card>
  );
};

export default SingleBook;
