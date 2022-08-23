import logo from "./Photos/positano.jpeg"

export default function Photo(){
    return(
        <div className="photo-box">
            <h3>Photo of the day: </h3>
            <img src={logo} alt="backround-image" />
            <h4>Date and hour(Local time): </h4>
        </div>
    )
}
