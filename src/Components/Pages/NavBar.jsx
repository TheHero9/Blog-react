import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCompass, FaMailBulk, FaDoorOpen, FaDoorClosed, FaSmileBeam, FaMoon, FaKeyboard} from "react-icons/fa"
import { Link } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';

function NavBar(props) {

    const [loggedIn, setLoggedIn] = useState(true)
    const {currentUser} = useAuth()
  return (
    <>
      <Navbar  expand="md" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand> 
          <Link className='nav-link' to="/" relative="path">Dimi's Blog</Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 


            <Link className='nav-link' to="/posts" relative="path"><FaMailBulk className='Emoji'/>Posts</Link>
            <Link className='nav-link' to="/programming" relative="path"><FaKeyboard className='Emoji'/>Programming</Link>
            <Link className='nav-link' to="/footer" relative="path"><FaCompass className='Emoji'/>Contact Me</Link>
            {currentUser ? 
            <Link className='nav-link' to="/dashboard" relative="path"><FaSmileBeam className='Emoji'/> Profile </Link>
            
            :
            <>
            <Link className='nav-link' to="/register" relative="path"><FaDoorClosed className='Emoji'/>Register</Link>
            <Link className='nav-link' to="/login" relative="path"><FaDoorOpen className='Emoji'/>LogIn</Link>
            </>
            } 


            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
}

export default NavBar;