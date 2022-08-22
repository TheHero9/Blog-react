import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CardMy(props){
    function handleClick(){
        props.onDelete(props.id)
    }

    return (
        <Card className="cardCustom" >
        <Card.Body>
              <Card.Title><h1>{props.title}</h1></Card.Title>
              <Card.Text>{props.content}</Card.Text>
              {/* <Button onClick={handleClick} variant="secondary">Del</Button> */}
        </Card.Body>
        </Card>
)}