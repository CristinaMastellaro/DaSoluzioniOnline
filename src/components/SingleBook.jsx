import { useState } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  //   asin: this.props.book.asin,
  // };

  const [selected, setSelected] = useState(false);
  const [asin, setAsin] = useState(props.book.asin);

  // componentDidUpdate() {
  //   console.log("Sono dentro componentDidUpdate");
  // }

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
    >
      {/* <Card.Img variant="top" src={this.props.book.img} onClick={() => this.setState({ selected: !this.state.selected })} /> */}
      <Card.Img
        variant="top"
        src={props.book.img}
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
