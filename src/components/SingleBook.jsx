import { Component } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
    asin: this.props.book.asin,
  };

  componentDidUpdate() {
    console.log("Sono dentro componentDidUpdate");
  }

  putClassSelected = () => {
    if (this.props.book.asin !== this.props.asin) {
      this.setState({ selected: false });
    } else {
      this.setState({ selected: !this.state.selected });
      this.props.modifyState({
        selected: this.state.selected,
      });
    }
  };

  render() {
    return (
      <Card
        style={{
          border:
            this.state.asin === this.props.asin && !this.state.selected
              ? "3px solid red"
              : "none",
        }}
      >
        {/* <Card.Img variant="top" src={this.props.book.img} onClick={() => this.setState({ selected: !this.state.selected })} /> */}
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() => {
            this.props.modifyState({
              asin: this.props.book.asin,
              selected: true,
            });
            this.putClassSelected();
          }}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>
        {/* {this.state.selected && (<CommentArea id={this.props.book.asin}/>)} */}
      </Card>
    );
  }
}

export default SingleBook;
