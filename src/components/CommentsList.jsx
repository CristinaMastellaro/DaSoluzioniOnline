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
    }

    retrieveComments = () => {
        fetch(this.props.endpoint + this.props.id, {
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzQ2NDc4Y2RkZjAwMTU1ZDY3YTMiLCJpYXQiOjE3NTIyMjA3NzIsImV4cCI6MTc1MzQzMDM3Mn0.aps4Stj2AnXuaQyOjapUZvfSF2nL9WrlYcWeD7tpoDE",
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
            this.setState({totalComments: commentsRetrieved, isLoading: false });
            console.log("commentsRetrieved", commentsRetrieved)
        })
        .catch((err) => {
            this.setState({isLoading: false, isError: true}),
            console.log("Errore!", err)
        });
    };

  componentDidMount() {
    this.retrieveComments();
  }
    
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
                this.setState({isLoading: false})
                this.retrieveComments();
            } else {
                throw new Error("Non siamo riusciti a cancellare il commento")
            }
        })
        .catch(err => {
            this.setState({isLoading: false, isError: true})
            console.log("Errore!", err)
        })
    }
    
    render () {
        // console.log("endpoint", this.props.endpoint)
        return(
            <ListGroup>
                {this.state.isLoading && !this.state.isError && <Loading/>}
                {this.state.isError && <Error />}
                {this.state.totalComments.map(comment => 
                    { 
                        // console.log("comment", comment)
                        return(                        
                        <div key={comment._id} className="d-flex justify-content-between mb-1 align-items-center">
                            <ListGroup.Item>{comment.comment} - {comment.rate}</ListGroup.Item>
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