import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { useThemeUpdate } from "./Context/ThemeContext"
import { useTheme } from "./Context/ThemeContext"

import React, { useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {belgradePhoto, positanoPhoto, polskaSkakavitsaPhoto, amalfiPhoto, naplesPhoto} from "./PhotoRender.jsx"
import { FaMoon } from 'react-icons/fa';

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
              Belgrade is the capital and largest city of Serbia. It is located at the confluence of 
              the Sava and Danube rivers and is considered the cultural, economic, and political center
              of the country. The city has a rich history dating back to ancient times and has been influenced
              by a variety of cultures and civilizations throughout its long history. The Old Town of Belgrade,
              also known as Kalemegdan, is home to many historical and cultural landmarks, including the Belgrade
              Fortress and the St. Petka Chapel. The city is also known for its vibrant nightlife and many restaurants
              and cafes that serve traditional Serbian cuisine.</Card.Text>
              <Button className='btn-cards' onClick={() => handleClick("belgrade")} >{isActiveBelgrade ? "Close" : 'Expand'}</Button>
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
              Polska Skakavitsa is a picturesque waterfall located in the Rila Mountains of Bulgaria. It is one of the highest waterfalls in the country,
              with a total height of 120 meters. The waterfall is formed by the Skakavitsa River, which cascades down a steep cliff, creating a stunning
              display of water and mist. The waterfall is surrounded by lush greenery, making it a popular spot for hiking and picnicking. Visitors can
              also take a dip in the pools at the base of the waterfall or even climb to the top for a different view. Due to its natural beauty and
              serene atmosphere, Polska Skakavitsa is a must-see destination for nature lovers and outdoor enthusiasts.</Card.Text>
              <Button className='btn-cards' onClick={() => handleClick("skakavitsa")} >{isActiveSkakavitsa ? "Close" : 'Expand'}</Button>
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
              <Card.Text className={isActivePositano ? "my-p" : 'my-p city-description'}>
                Positano is a small town located on the Amalfi Coast of Italy, known for its picturesque setting,
                colorful buildings, and stunning views. The town is built into a cliff and is surrounded by the
                Mediterranean Sea on one side and lush green hills on the other. Positano is a popular tourist destination,
                and it's easy to see why: the town's narrow streets are lined with charming shops and restaurants,
                and the pebble beaches are the perfect place to relax and soak up the sun. Visitors can also take a
                boat tour of the coast to see the town from a different perspective or hike the many trails that wind
                through the hills.</Card.Text>
              <Button className='btn-cards' onClick={() => handleClick("positano")} >{isActivePositano ? "Close" : 'Expand'}</Button>
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
              <Card.Text className={isActiveAmalfi ?  "my-p" : 'my-p city-description'}>
              Amalfi is a picturesque coastal town located in southern Italy, known for its stunning views, rich history, and vibrant atmosphere.
               It is situated in a small bay surrounded by the Mediterranean Sea and steep cliffs, home to the famous Amalfi Cathedral,
                dedicated to Saint Andrew. Amalfi is a popular tourist destination for its charming shops, delicious seafood and traditional dishes,
                 boat tours and other activities, making it an ideal destination for those who love the sea, history, and good food.
              </Card.Text>
              <Button className='btn-cards' onClick={() => handleClick("amalfi")}  >{isActiveAmalfi ? "Close" : 'Expand'}</Button>
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
              <Card.Text className={isActiveNaples ?  "my-p" : 'my-p city-description'}>
              Naples is a city located in southern Italy, known for its rich history, art, and architecture.
              It is situated on the Gulf of Naples and is the capital of the Campania region. Famous for being the birthplace of pizza,
              Naples also boasts many historical sites such as Pompeii, Herculaneum, and the Royal Palace of Naples,
              as well as the historic city center, a UNESCO World Heritage Site, where visitors can admire the baroque architecture and street art.
              </Card.Text>
              <Button className='btn-cards' onClick={() => handleClick("naples")}  >{isActiveNaples ? "Close" : 'Expand'}</Button>
            </Card.Body>
          </Card>
        </Col>

     </Row>   
    
  
    </div>
  );
}
