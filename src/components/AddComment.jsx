import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Error from "./Error";

const basicTotalComment = {
        comment: "",
        rate: 1,
        elementId: ""
    }

class AddComment extends Component {    
    
    state = {
        totalComment: basicTotalComment,
        isError: false
    }

    letsReview = (e) => {
        e.preventDefault()

        fetch(this.props.endpoint, {
            method: "POST",
            body: JSON.stringify(this.state.totalComment),
            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODg3NmM1MDEyODg5NzAwMTVmMjdiYWYiLCJpYXQiOjE3NTM3MDU1NTIsImV4cCI6MTc1NDkxNTE1Mn0.1TQwVzn7FvzI-p6nQpG9O5BYg4m_236yDkgmmjo-3QA",
                "Content-type": "application/json"
      }})
      .then(res => {
        if (res.ok) {
            alert("Commento salvato, grazie per la recensione!")
            this.setState({totalComment: basicTotalComment})
            this.props.update({changed: true})
        } else {
            throw new Error("Non siamo riusciti a salvare la recensione, ci dispiace")
        }
      })
      .catch(err => {
        this.setState({isError: true})
        console.log("Errore!", err)})
    }

    render() {
        return(
            <Form className="mt-4 border border-1 border-warning p-3" onSubmit={this.letsReview}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Commento</Form.Label>
                    <Form.Control as="textarea" rows={5} className="p-3" placeholder="Facci sapere cosa pensi di questo libro!" value={this.state.totalComment.comment} onChange={(e) => {
                        this.setState({totalComment: {...this.state.totalComment, comment: e.target.value, elementId: this.props.id}})
                    }}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Select value={this.state.totalComment.review} onChange={(e) => {
                        this.setState({totalComment: {...this.state.totalComment, rate: e.target.value}})
                    }}>
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
                {this.state.isError && <Error message="Non siamo riusciti a caricare il tuo commento" />}
            </Form>
        )
    }
}

export default AddComment