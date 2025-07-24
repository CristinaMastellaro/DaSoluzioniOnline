import { Alert } from "react-bootstrap"

const Error = (props) => {
    return (
        <Alert className="mt-3" variant="danger">{props.message}</Alert>
    )
}

export default Error