import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCompass, FaMailBulk} from "react-icons/fa"

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Dimi's Blog</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#posts"><FaMailBulk/>Posts</Nav.Link>
            <Nav.Link href="#footer"><FaCompass/>ContactMe</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      
      
    </>
  );
}

export default NavBar;