import { Suspense, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { propTypes } from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/Row';
import CardMy from "./Card.jsx"
import belgrade from "./Photos/belgrade.jpeg"
import positano from "./Photos/positano.jpeg"
import polska from "./Photos/polskaskakavitsa.jpeg"
import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      effect="blur"
      src={image.src} // use normal <img> attributes as props
      width={image.width} />
    <span>{image.caption}</span>
  </div>
);

const belgradePhoto={
  alt: "test",
  src: belgrade,
  height: "250px",
  width: "250px"
}

const polskaSkakavitsaPhoto={
  alt: "Polska Skakavitsa, Bulgaria",
  src: polska,
  height: "250px",
  width: "250px"
}

const positanoPhoto={
  alt: "Positano, Italy",
  src: positano,
  height: "250px",
  width: "250px"
}




export default function Posts(props) {
  return (
    <div id="posts">
      <h1>My trips: </h1>
      <Row className="row" xs={1}  >
        
          {/* Prerendered cards */}

          
        <Col sm>
          <Card  className="cardCustom" >
               <MyImage image={belgradePhoto}/>
            <Card.Body>
              <Card.Title className="country-card">Country: Serbia</Card.Title>
              <Card.Text className="city-card">City: Belgrade</Card.Text>
              {/* <Button onClick={handleClick} variant="secondary">Del</Button> */}
            </Card.Body>
            
          </Card>
        </Col>
       
        <Col sm>
          <Card className="cardCustom" >
          <MyImage image={polskaSkakavitsaPhoto}/>
             <Card.Body>
              <Card.Title className="country-card">Country: Bulgaria</Card.Title>
              <Card.Text className="city-card">City: Polska Skakavitsa</Card.Text>
              {/* <Button onClick={handleClick} variant="secondary">Del</Button> */}
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className="cardCustom" >
          <MyImage image={positanoPhoto}/>
             <Card.Body>
              <Card.Title className="country-card">Country: Italy</Card.Title>
              <Card.Text className="city-card">City:Positano</Card.Text>
              {/* <Button onClick={handleClick} variant="secondary">Del</Button> */}
            </Card.Body>
        </Card>

        
          



          {/* Generate individual cards for each item from the "notes" array */}
          {/* REMINDER ::: add COL to each card generated */}
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
