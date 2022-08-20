import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Posts() {
  return (
    <>
   
      <Row xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
        <Col sm>
        <Card className="cardCustom" >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className="cardCustom" >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
        </Col>
      </Row>

    

   
    
    
</>


    
  );
}

export default Posts;