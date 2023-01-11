import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCompass, FaMailBulk, FaDoorOpen, FaDoorClosed, FaArrowRight} from "react-icons/fa"

function NavBar() {
  return (
    <>
      <Navbar expand="md" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/posts">Dimi's Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link href="Blog-react/#/posts"><FaMailBulk className='Emoji'/>Posts</Nav.Link>
            <Nav.Link href="#footer"><FaCompass className='Emoji'/>Contact Me</Nav.Link>
            <Nav.Link href="Blog-react/#/register"><FaDoorClosed className='Emoji'/>Register</Nav.Link>
            <Nav.Link href="Blog-react/#/login"><FaDoorOpen className='Emoji'/>LogIn</Nav.Link>
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
}

export default NavBar;