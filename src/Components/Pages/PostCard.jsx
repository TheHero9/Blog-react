import { useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import {belgradePhoto, positanoPhoto, polskaSkakavitsaPhoto, amalfiPhoto, naplesPhoto} from "./UnusedPages/PhotoRender.jsx"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function PostCard(props){
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
        alt={String(image)}
        className="photo-cards"
        effect="blur"
        src={image}/>
    </div>
  );

    return(


      <Col  sm>
        <Card  className={isActive ? "cardCustom card--extended" : 'cardCustom'}>
          <div className="photo-div">
              <MyImage className="photo-cards" image={files}/>
          </div>
          <Card.Body>
            <Card.Title className="country-card">Country: {country}</Card.Title>
            <Card.Text className="city-card">City: {city}</Card.Text>
            <Card.Text className={isActive ? "my-p" : 'my-p city-description'}>
              {description}
            </Card.Text>
            <Button className='btn-cards' onClick={() => handleClick()} >{isActive ? "Close" : 'Expand'}</Button>
          </Card.Body>
        </Card>
      </Col>

        

    )
}