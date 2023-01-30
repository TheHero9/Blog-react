import { FaKeyboard, FaMailBulk } from "react-icons/fa"
import { Link } from "react-router-dom"

const Home = function(){
    return (
        <>
            <h1>Welcome to my blog! </h1> <br/>
            <h3>Here you can find: </h3> <br/>

            <Link  to="/posts" relative="path"><FaMailBulk className='Emoji'/>Posts</Link> <br/>
            <Link  to="/programming" relative="path"><FaKeyboard className='Emoji'/>Programming Topics</Link>
        </>
    )
}


export default Home