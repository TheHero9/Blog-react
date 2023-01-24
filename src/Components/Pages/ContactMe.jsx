import {Card,  Container, Form} from "react-bootstrap";
import { FaCompass, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

export default function ContactMe(){
    return (
        <>
        <Container  
            className="container-contact d-flex align-items-center justify-content-center" 
            style={{minHeight: "50vh"}}
            >
            <Card className="contact-me-container">
            <Card.Body className="flex-my">
                <h2><FaCompass></FaCompass>My contacts: </h2>
                <Form className="testform">
                    <Form.Group className="mt-4">
                        <li><a href="https://www.linkedin.com/notifications/?filter=all">
                        <FaLinkedinIn className="emoji-card"size={50}/></a>   Linkedin</li>
                    </Form.Group>

                    
                    <Form.Group className="mt-4">
                        <li><a href="https://github.com/TheHero9/">
                        <FaGithub className="emoji-card" size={50}/></a>GitHub</li>
                    </Form.Group>

                    <Form.Group className="mt-4">
                        <li><a href="https://www.instagram.com/dimi.v.9/">
                        <FaInstagram className="emoji-card"  size={50}/></a>Instagram</li>
                    </Form.Group>  

                    <Form.Group className="mt-4">
                        <li><a href="https://www.facebook.com/dimi.v.02/">
                        <FaFacebook className="emoji-card" size={50}/></a>Facebook</li>
                    </Form.Group>

                    <Form.Group className="mt-4">
                        <li>
                        <FaMailBulk className="emoji-card" size={50}/>E-mail</li>
                    </Form.Group>                  
                </Form>
                
            </Card.Body>
          </Card>
          

        </Container>
        </>
      )
    }