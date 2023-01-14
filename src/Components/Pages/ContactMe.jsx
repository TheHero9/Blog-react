import {Card, CardGroup, Container, Form, Link} from "react-bootstrap";
import { FaCompass, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactMe(){
    return (
        <>
        <Container  
            className="d-flex align-items-center justify-content-center" 
            style={{minHeight: "50vh"}}
            >
            <Card>
            <Card.Body className="flex-my">
                <h2><FaCompass></FaCompass>My contacts: </h2>
                <Form >
                    <Form.Group className="mt-4">
                        <li><a href="https://www.linkedin.com/notifications/?filter=all">
                        <FaLinkedinIn size={40}/></a>   Linkedin</li>
                    </Form.Group>

                    
                    <Form.Group className="mt-4">
                        <li><a href="https://github.com/TheHero9/">
                        <FaGithub size={40}/></a>GitHub</li>
                    </Form.Group>

                    <Form.Group className="mt-4">
                        <li><a href="https://www.instagram.com/dimi.v.9/">
                        <FaInstagram size={40}/></a>Instagram</li>
                    </Form.Group>                 
                </Form>
                
            </Card.Body>
          </Card>
          

        </Container>
        </>
      )
    }