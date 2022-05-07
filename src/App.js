
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import{ About} from "./components/About"
import {Contact} from "./components/Contact"
import {Home} from "./components/Home"
import {Footer} from "./components/Footer"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
               <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">WsBCars</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"/"}>Strona Główna</Nav.Link>
        <Nav.Link as={Link} to={"/about"} href="#about">Oferta</Nav.Link>
        <Nav.Link as={Link} to={"/contact"}>Kontakt</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div>
  <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Footer/>}/>
  </Routes>
</div>
 </div>
 </BrowserRouter>
  );
}

export default App;
