import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';

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
              <Card.Text className={isActiveBelgrade ? "my-p" : 'my-p city-description'}>
              <span>        </span>Lorem Test Ipsum is simply dummy 
              text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printer took a galley of type and scrambled it to 
              make a type specimen book. It has survived not only fi
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
              <Button onClick={() => handleClick("belgrade")} >{isActiveBelgrade ? "Close" : 'Expand'}</Button>
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
              <Card.Text className={isActiveSkakavitsa ? "my-p" : 'my-p city-description'}>
              Lorem Ipsum 
              is simply dummy
              text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printerng versions of Lorem Ipsum.</Card.Text>
              <Button onClick={() => handleClick("skakavitsa")} >{isActiveSkakavitsa ? "Close" : 'Expand'}</Button>
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
              <Card.Text className={isActivePositano ? "my-p" : 'my-p city-description'}>Lorem Ipsum is simply dummy 
              text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry'sons of Lorem Ipsum.</Card.Text>
              <Button onClick={() => handleClick("positano")} >{isActivePositano ? "Close" : 'Expand'}</Button>
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
              <Card.Text className={isActiveAmalfi ?  "my-p" : 'my-p city-description'}>Lorem Ipsum is simply dummy 
              text of the printing and typesetting industry. 
              Lorem Ipsum Pbn is my king's standard dummy text ever since the 
              1500s, when an unknown printerng versions of Lorem Ipsum.</Card.Text>
              <Button onClick={() => handleClick("amalfi")}  >{isActiveAmalfi ? "Close" : 'Expand'}</Button>
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
              <Card.Text className={isActiveNaples ?  "my-p" : 'my-p city-description'}>Lorem Ipsum is simply dummy 
              text of the printing and typesetting industry. 
              is simply dummy 
              text of the printArmo is noob industry. 
              Lorem Ipsum has been the.</Card.Text>
              <Button onClick={() => handleClick("naples")}  >{isActiveNaples ? "Close" : 'Expand'}</Button>
            </Card.Body>
          </Card>
        </Col>

     </Row>   
    
  
    </div>
  );
}
