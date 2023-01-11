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
          <Navbar.Brand href="/posts">Dimi's Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Link className='nav-link' to="/posts" relative="path">Test1</Link>
            {/* <Link className='nav-link' to="Blog-react/#/posts" relative="path">Test2</Link> */}
            {/* <Link className='nav-link' to="../#/posts" relative="path">Test3</Link> */}
            <Link className='nav-link' to=".." relative="path">Test4</Link>

            <Link className='nav-link' to="/posts" relative="path"><FaMailBulk className='Emoji'/>Posts</Link>
            <Link className='nav-link' to="/posts" relative="path"><FaCompass className='Emoji'/>Contact Me</Link>
            <Link className='nav-link' to="/register" relative="path"><FaDoorClosed className='Emoji'/>Register</Link>
            <Link className='nav-link' to="/login" relative="path"><FaDoorOpen className='Emoji'/>LogIn</Link>


            {/* <Nav.Link href="Blog-react/#/posts"><FaMailBulk className='Emoji'/>Posts</Nav.Link>
            <Nav.Link href="#footer"><FaCompass className='Emoji'/>Contact Me</Nav.Link>
            <Nav.Link href="Blog-react/#/register"><FaDoorClosed className='Emoji'/>Register</Nav.Link>
            <Nav.Link href="Blog-react/#/login"><FaDoorOpen className='Emoji'/>LogIn</Nav.Link> */}
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
}

export default NavBar;