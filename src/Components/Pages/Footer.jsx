import 'bootstrap/dist/css/bootstrap.min.css';
import {FaTwitter, FaInstagram, FaGithub, FaCompass} from "react-icons/fa"

export default function Footer(){


    
    return ( 
        <div id="footer">
            <h1><FaCompass/>Contact Me:</h1>
            <ul>
                <li><a href="https://github.com/TheHero9">
                <FaGithub/>Github</a></li> 
                <li><a href="https://www.instagram.com/dimi.v.9/">
                <FaInstagram/>Instagram</a></li> 
                <li><a href="https://twitter.com/herothe9">
                <FaTwitter/>Twitter</a></li>
                
            </ul>
            
        
        </div>
    )
}