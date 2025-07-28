import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'

import fantasy from './data/fantasy.json'

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  )
}

export default App


// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODg3NmM1MDEyODg5NzAwMTVmMjdiYWYiLCJpYXQiOjE3NTM3MDU1NTIsImV4cCI6MTc1NDkxNTE1Mn0.1TQwVzn7FvzI-p6nQpG9O5BYg4m_236yDkgmmjo-3QA"
// }
// })