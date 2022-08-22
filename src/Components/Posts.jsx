import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { propTypes } from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/Row';
import CardMy from "./Card.jsx"


export default function Posts(props) {
  return (
    <div id="posts">
      <Row  md={{rows: 1, cols: 1}}>
        <Col sm>
          
          {/* Generate individual cards for each item from the "notes" array */}
          {props.notes.map((element, index) => {
             return <CardMy 
             key={index} 
             id={index} 
             title={element.title} 
             content={element.content}
             />
          })}

          
        </Col>
     </Row>   
     
    </div>
  );
}
