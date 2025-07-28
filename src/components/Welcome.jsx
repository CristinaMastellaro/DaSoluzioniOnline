import { Alert, Dropdown } from "react-bootstrap";
import Fantasy from '../data/fantasy.json'
import Scifi from '../data/scifi.json'
import Romance from '../data/romance.json'
import History from '../data/history.json'
import Horror from '../data/horror.json'

const Welcome = (props) => (
  <>
    <Alert className="text-center" variant="warning">
      <h1>Benvenuti in EpiBooks!</h1>
    </Alert>
     <Dropdown className="mt-3">
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Genere
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => {props.changeGenre({genre: Fantasy, nameGenre: "Fantasy"})}}>Fantasy</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={() => {props.changeGenre({genre: Romance, nameGenre: "Romance"})}}>Romance</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={() => {props.changeGenre({genre: Horror, nameGenre: "Horror"})}}>Horror</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={() => {props.changeGenre({genre: Scifi, nameGenre: "Scifi"})}}>Scifi</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={() => {props.changeGenre({genre: History, nameGenre: "History"})}}>History</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
);

export default Welcome;
