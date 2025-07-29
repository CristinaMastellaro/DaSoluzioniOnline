import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  //   asin: "",
  //   selected: false
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [asin, setAsin] = useState("");
  const [selected, setSelected] = useState(false);

  const modifyState = (newAsin, newSQ, newSelected) => {
    // this.setState(newState)
    setAsin(newAsin);
    setSearchQuery(newSQ);
    setSelected(newSelected);
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className=" mt-3">
        <h1 className="text-center mb-4">{props.title}</h1>
        <Col xs={8} className="overflow-auto" style={{ height: "800px" }}>
          <Row>
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={12} lg={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    modifyState={modifyState}
                    asin={asin}
                    sq={searchQuery}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        {/* <Col xs={4} className="position-fixed end-0 me-5 w-25"> */}
        <Col xs={4} className="ps-5">
          {selected && <CommentArea id={asin} modifyState={modifyState} />}
        </Col>
      </Row>
    </>
  );
};

export default BookList;
