import { Card } from "react-bootstrap"
import TestCard from "./TestCard"
import { places } from "../../PostsInfo"
import belgrade from "../Photos/belgrade.jpeg"

export default function ListKeys(){
    const belgradePhoto={
        alt: "test",
        src: belgrade,
        class: "photo-cards"
      }

    const placesList = places.map(place => 
    <TestCard 
    key={place.id} 
    country={place.country} 
    city={place.city} 
    description={place.description}
    files={belgradePhoto}

    ></TestCard>) 
    return(
        <>
        <div>{placesList}</div>
        </>
    )
}