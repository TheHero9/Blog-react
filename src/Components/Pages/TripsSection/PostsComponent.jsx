import { Card, Row } from "react-bootstrap"
import PostCard from "./PostCard"
import { places } from "./PostsInfo"

export default function PostComponent(){
    const placesList = places.map(place => 
    <PostCard 
    key={place.id} 
    country={place.country} 
    city={place.city} 
    description={place.description}
    files={place.files}

    ></PostCard>) 
    return(
        <>
            <div id="posts">
                <h1>My trips: </h1>
                <Row className="row" xs={1}  >
                    {placesList}
                </Row>   
            </div>
        </>
    )
}