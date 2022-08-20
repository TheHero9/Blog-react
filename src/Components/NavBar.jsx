import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Dimi's Blog</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Posts</Nav.Link>
            <Nav.Link href="#features">ContactMe</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      
      
    </>
  );
}

export default NavBar;