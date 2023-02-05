import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FaKeyboard, FaMailBulk } from "react-icons/fa"
import { Link } from "react-router-dom"
import comp from "../../../Pictures/comp.png"
import travel from "../../../Pictures/travel.png"

const Home = function(){
    return (
        <Container id="home">

            <h1>Welcome to my blog! </h1> <br/>
            <h3>Here you can find: </h3> <br/>

            <Row id="home-row" className="justify-content-md-center" xs={1}>
                <Col className="col-home" sm>
                    <Link className="link-home" to="/posts" relative="path">
                        <Card className="card-home">
                            <Card.Img className="img-home"  src={travel} alt="TravelImage" />
                            <Card.Body>
                                <Card.Title>My Trips</Card.Title>
                                <Card.Text>
                                Find out more about my trips
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

                <Col sm>

                    <Link className="link-home" to="/programming" relative="path">
                        <Card className="card-home">
                            <Card.Img className="img-home"  src={comp} alt="LaptopImage" />
                            <Card.Body>
                                <Card.Title>Programming Topics WORK IN PROGRESS</Card.Title>
                                <Card.Text>
                                    Explore my topic analysis
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}


export default Home