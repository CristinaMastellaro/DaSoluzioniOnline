import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

class CommentsList extends Component {
    
    deleteReview = (endpointReview) => {
        fetch(endpointReview, {
            method: "DELETE",
            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzQ2NDc4Y2RkZjAwMTU1ZDY3YTMiLCJpYXQiOjE3NTIyMjA3NzIsImV4cCI6MTc1MzQzMDM3Mn0.aps4Stj2AnXuaQyOjapUZvfSF2nL9WrlYcWeD7tpoDE",
                "Content-type": "application/json"
      }
        })
        .then(res => {
            console.log("endpoint", this.props.endpoint)
            if (res.ok) {
                alert("Commento cancellato!")
            } else {
                throw new Error("Non siamo riusciti a cancellare il commento")
            }
        })
        .catch(err => {console.log("Errore!", err)})
    }
    
    render () {
        // console.log("endpoint", this.props.endpoint)
        return(
            <ListGroup>
                {this.props.commentsArray.map(comment => 
                    { 
                        // console.log("comment", comment)
                        return(                        
                        <div key={comment._id} className="d-flex justify-content-between mb-1 align-items-center">
                            <ListGroup.Item>{comment.comment}</ListGroup.Item>
                            <Button variant="danger" className="ms-1" onClick={() => {
                                this.deleteReview(this.props.endpoint + "/" + comment._id)
                            }}><i className="bi bi-trash3-fill"></i></Button>
                        </div>
                    )})}
            </ListGroup>
        )
    }
}

export default CommentsList