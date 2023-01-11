import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCompass, FaMailBulk, FaDoorOpen, FaDoorClosed, FaArrowRight} from "react-icons/fa"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar expand="md" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand> Dimi's Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Link className='nav-link' to="/posts" relative="path"><FaMailBulk className='Emoji'/>Posts</Link>
            <Link className='nav-link' to="/footer" relative="path"><FaCompass className='Emoji'/>Contact Me</Link>
            <Link className='nav-link' to="/register" relative="path"><FaDoorClosed className='Emoji'/>Register</Link>
            <Link className='nav-link' to="/login" relative="path"><FaDoorOpen className='Emoji'/>LogIn</Link>

            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
}

export default NavBar;