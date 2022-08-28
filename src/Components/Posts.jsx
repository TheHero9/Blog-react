import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {belgradePhoto, positanoPhoto, polskaSkakavitsaPhoto} from "./PhotoRender.jsx"

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

        </Col>
     </Row>   
    
  
    </div>
  );
}
