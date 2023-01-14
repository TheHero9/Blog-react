import 'bootstrap/dist/css/bootstrap.min.css';
import {FaTwitter, FaInstagram, FaGithub, FaCompass, FaLinkedinIn} from "react-icons/fa"

export default function Footer(){


    
    return ( 
        <div id="footer">
            <h1><FaCompass/>Contact Me:</h1>
            <ul>
                <li><a href="https://github.com/TheHero9">
                <FaGithub className='emoji-footer'/>Github</a></li> 
                <li><a href="https://www.linkedin.com/notifications/?filter=all">
                <FaLinkedinIn className='emoji-footer'/>LinkedIn</a></li> 
                <li><a href="https://twitter.com/herothe9">
                <FaTwitter className='emoji-footer'/>Twitter</a></li>
                
            </ul>
            
        
        </div>
    )
}