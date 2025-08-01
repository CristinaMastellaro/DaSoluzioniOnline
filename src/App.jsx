import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

// import Fantasy from './data/fantasy.json'
// import Scifi from './data/scifi.json'
// import Romance from './data/romance.json'
// import History from './data/history.json'
// import Horror from './data/horror.json'

const App = () => {
  const [genre, setGenre] = useState([]);
  const [nameGenre, setNameGenre] = useState("");
  // state = {
  //   genre: [],
  //   nameGenre: ""
  // }

  const updateGenre = (newGenre, newNameGenre) => {
    setGenre(newGenre);
    setNameGenre(newNameGenre);
    // this.setState(newGenre)
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.genre !== this.state.genre)
  // }

  return (
    <>
      <MyNav />
      <Container className="flex-fill">
        <Welcome changeGenre={updateGenre} />
        {/* <AllTheBooks /> */}
        <BookList books={genre} title={nameGenre} />
      </Container>
      <MyFooter />
    </>
  );
};

export default App;

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODg3NmM1MDEyODg5NzAwMTVmMjdiYWYiLCJpYXQiOjE3NTM3MDU1NTIsImV4cCI6MTc1NDkxNTE1Mn0.1TQwVzn7FvzI-p6nQpG9O5BYg4m_236yDkgmmjo-3QA"
// }
// })
