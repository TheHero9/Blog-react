import { useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import {belgradePhoto, positanoPhoto, polskaSkakavitsaPhoto, amalfiPhoto, naplesPhoto} from "./PhotoRender.jsx"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import belgrade from "../Photos/belgrade.jpeg"

export default function TestCard(props){
    // const belgradePhoto={
    //     alt: "test",
    //     src: belgrade,
    //     class: "photo-cards"
    //   }



    let city = props.city
    let country = props.country
    let key = props.key
    let description = props.description
    let files = props.files

    const [isActive, setIsActive] = useState(false);

function handleClick(){
    setIsActive(e => !e)
}

const MyImage = ({ image }) => (
    <div>
      <LazyLoadImage
        alt={image.alt}
        className={image.class}
        effect="blur"
        src={image}/>
      <span>{image.caption}</span>
    </div>
  );

    return(
        <div id="posts">
        <h1>My trips: </h1>
        <Row className="row" xs={1}  >
        <Col  sm>
          <Card  className={isActive ? "cardCustom card--extended" : 'cardCustom'}>
            <div className="photo-div">
               <MyImage className="photo-cards" image={belgradePhoto}/>
            </div>
            <Card.Body>
              <Card.Title className="cardCustom card--extended">Country: {country}</Card.Title>
              <Card.Text className="city-card">City: {city}</Card.Text>
              <Card.Text className={isActive ? "my-p" : 'my-p city-description'}>
                {description}
              </Card.Text>
              <Button className='btn-cards' onClick={() => handleClick()} >{isActive ? "Close" : 'Expand'}</Button>
    
            </Card.Body>
          </Card>
        </Col>

         </Row>   


    </div>

    )
}