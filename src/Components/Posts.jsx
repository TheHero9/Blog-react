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
  const [isActiveBelgrade, setIsActiveBelgrade] = useState(false);
  const [isActiveSkakavitsa, setIsActiveSkakavitsa] = useState(false);
  const [isActiveNaples, setIsActiveNaples] = useState(false);
  const [isActiveAmalfi, setIsActiveAmalfi] = useState(false);
  const [isActivePositano, setIsActivePositano] = useState(false);

  const handleClick = name => {
   
  
    if(name==="belgrade"){
      setIsActiveBelgrade(current => !current)
    } else if(name==="skakavitsa"){
      setIsActiveSkakavitsa(current => !current)
    } else if(name==="positano"){
      setIsActivePositano(current=> !current)
    } else if(name==="amalfi"){
      setIsActiveAmalfi(current => !current)
    } else if(name==="naples"){
      setIsActiveNaples(current => !current)
    }
    
  }

  return (
    <div id="posts">
      <h1>My trips: </h1>
      <Row className="row" xs={1}  >
        
          {/* Prerendered cards */}

        <Col  sm>
          <Card className={isActiveBelgrade ? "cardCustom card--extended" : 'cardCustom'}>
            <div className="photo-div">
               <MyImage className="photo-cards" image={belgradePhoto}/>
            </div>
            <Card.Body>
              <Card.Title className="country-card">Country: Serbia</Card.Title>
              <Card.Text className="city-card">City: Belgrade</Card.Text>
              <Card.Text className={isActiveBelgrade ? "" : 'city-description'}>Lorem Ipsum is simply dummy 
              text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printer took a galley of type and scrambled it to 
              make a type specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
              <Button onClick={() => handleClick("belgrade")} key="1"  variant="primary">Expand</Button>
            </Card.Body>
          </Card>
        </Col>
       

        <Col sm>
          <Card className={isActiveSkakavitsa ? "cardCustom card--extended" : 'cardCustom'} >  
            <div className="photo-div"> 
              <MyImage image={polskaSkakavitsaPhoto}/>
            </div>
             <Card.Body>
              <Card.Title className="country-card">Country: Bulgaria</Card.Title>
              <Card.Text className="city-card">City: Polska Skakavitsa</Card.Text>
              <Card.Text className={isActiveSkakavitsa ? "" : 'city-description'}>Lorem Ipsum <br></br>
              is simply dummy <br></br>
              text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printerng versions of Lorem Ipsum.</Card.Text>
              <Button onClick={() => handleClick("skakavitsa")}   variant="primary">Expand</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className={isActivePositano ? "cardCustom card--extended" : 'cardCustom'} >
          <div className="photo-div">
          <MyImage image={positanoPhoto}/>
          </div>
             <Card.Body>
              <Card.Title className="country-card">Country: Italy</Card.Title>
              <Card.Text className="city-card">City:Positano</Card.Text>
              <Card.Text className={isActivePositano ? "" : 'city-description'}>Lorem Ipsum is simply dummy 
              text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry'sons of Lorem Ipsum.</Card.Text>
              <Button onClick={() => handleClick("positano")}   variant="primary">Expand</Button>
            </Card.Body>
        </Card>
        </Col>

        <Col sm>
          <Card className={isActiveAmalfi ? "cardCustom card--extended" : 'cardCustom'} >
          <div className="photo-div">
          <MyImage image={amalfiPhoto}/>
          </div>
             <Card.Body>
              <Card.Title className="country-card">Country: Italy</Card.Title>
              <Card.Text className="city-card">City: Amalfi</Card.Text>
              <Card.Text className={isActiveAmalfi ? "" : 'city-description'}>Lorem Ipsum is simply dummy 
              text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printerng versions of Lorem Ipsum.</Card.Text>
              <Button onClick={() => handleClick("amalfi")}   variant="primary">Expand</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className={isActiveNaples ? "cardCustom card--extended" : 'cardCustom'} >
          <div className="photo-div">
          <MyImage image={naplesPhoto}/>
          </div>
             <Card.Body>
              <Card.Title className="country-card">Country: Italy</Card.Title>
              <Card.Text className="city-card">City: Naples</Card.Text>
              <Card.Text className={isActiveNaples ? "" : 'city-description'}>Lorem Ipsum is simply dummy 
              text of the printing and typesetting industry. 
              Lorem Ipsum has been the.</Card.Text>
              <Button onClick={() => handleClick("naples")}   variant="primary">Expand</Button>
            </Card.Body>
          </Card>
        </Col>

     </Row>   
    
  
    </div>
  );
}