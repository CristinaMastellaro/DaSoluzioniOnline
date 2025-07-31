import { Alert, Dropdown } from "react-bootstrap";
import Fantasy from "../data/fantasy.json";
import Scifi from "../data/scifi.json";
import Romance from "../data/romance.json";
import History from "../data/history.json";
import Horror from "../data/horror.json";

const Welcome = (props) => (
  <>
    <Alert className="text-center" variant="warning">
      <h1>Benvenuti in EpiBooks!</h1>
    </Alert>
    <Dropdown className="mt-3 text-center">
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Genere
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          href="#/action-1"
          onClick={() => {
            props.changeGenre(Fantasy, "Fantasy");
          }}
        >
          Fantasy
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-2"
          onClick={() => {
            // console.log("Romance", Romance.length);
            props.changeGenre(Romance, "Romance");
          }}
        >
          Romance
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          onClick={() => {
            props.changeGenre(Horror, "Horror");
          }}
        >
          Horror
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          onClick={() => {
            props.changeGenre(Scifi, "Scifi");
          }}
        >
          Scifi
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          onClick={() => {
            props.changeGenre(History, "History");
          }}
        >
          History
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
);

export default Welcome;
