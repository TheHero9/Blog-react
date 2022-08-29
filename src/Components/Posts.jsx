import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import React, { useRef, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {belgradePhoto, positanoPhoto, polskaSkakavitsaPhoto, amalfiPhoto, naplesPhoto} from "./PhotoRender.jsx"

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      className={image.class}
      effect="blur"
      src={image.src}/>
    <span>{image.caption}</span>
  </div>
);



export default function Posts(props) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = event => {
    console.log(event.target)
    setIsActive(current => !current)
  }

  return (
    <div id="posts">
      <h1>My trips: </h1>
      <Row className="row" xs={1}  >
        
          {/* Prerendered cards */}

        <Col className="test9" sm>
          <Card className={isActive ? "cardCustom card--extended" : 'cardCustom'}>
            <div className="photo-div">
               <MyImage className="photo-cards" image={belgradePhoto}/>
            </div>
            <Card.Body>
              <Card.Title className="country-card">Country: Serbia</Card.Title>
              <Card.Text className="city-card">City: Belgrade</Card.Text>
              <Card.Text className={isActive ? "" : 'city-description'}>Lorem Ipsum is simply dummy 
              text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printer took a galley of type and scrambled it to 
              make a type specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
              <Button onClick={handleClick} variant="primary">Expand</Button>
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
        </Col>

        <Col sm>
          <Card className="cardCustom" >
          <MyImage image={amalfiPhoto}/>
             <Card.Body>
              <Card.Title className="country-card">Country: Italy</Card.Title>
              <Card.Text className="city-card">City: Amalfi</Card.Text>
              {/* <Button onClick={handleClick} variant="secondary">Del</Button> */}
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className="cardCustom" >
          <MyImage image={naplesPhoto}/>
             <Card.Body>
              <Card.Title className="country-card">Country: Italy</Card.Title>
              <Card.Text className="city-card">City: Naples</Card.Text>
              {/* <Button onClick={handleClick} variant="secondary">Del</Button> */}
            </Card.Body>
          </Card>
        </Col>

     </Row>   
    
  
    </div>
  );
}
