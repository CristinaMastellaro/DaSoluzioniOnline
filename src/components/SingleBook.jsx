import { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea' 

class SingleBook extends Component {
  state = {
    selected: false
  }

  render() {
    return (
      <Card
        style={{ border: this.state.selected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={this.props.book.img} onClick={() => this.setState({ selected: !this.state.selected })} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>
        {this.state.selected && (<CommentArea id={this.props.book.asin}/>)}
      </Card>
    )
  }
}

export default SingleBook
