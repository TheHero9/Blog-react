import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FaMicroscope, FaWrench } from "react-icons/fa"
import { Link } from "react-router-dom"

let ProgrammingTopics = function(){
    return(
        <>
        <h1 style={{"textAlign": "center"}}>
           <FaWrench/>UNDER CONSTRUCTION Topics: </h1>
        <Container fluid="sm">
            <Row xs={1}>
                <Col sm>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                              <FaMicroscope />  Recursion
                            </Card.Title>
                            <Card.Text>
                                What's and how to use recursion!
                            </Card.Text>
                            <Button className='btn-cards'>
                                <Link className='nav-link' to="/programming&recursion" relative="path">Open</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
               
            </Row>
        </Container>
        </>
    )
}


export default ProgrammingTopics