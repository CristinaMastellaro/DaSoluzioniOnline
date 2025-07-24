import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentsList extends Component {
    render () {
        return(
            <ListGroup>
                {this.props.commentsArray.map(comment => 
                    { return(<ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>)})}
            </ListGroup>
        )
    }
}

export default CommentsList