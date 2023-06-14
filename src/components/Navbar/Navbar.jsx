
import Linkden from "../../assets/images/linkden.png";
import Github from "../../assets/images/github-logo.png"
import "./Navbar.scss";
import { Link } from 'react-scroll';

function Navbar() {
    return (
      
      <header className="navbar">
        
        <nav className="nav">
          <ul className="nav-links">
          <li><button><Link to="Home" smooth={true} duration={500} style={{ cursor: 'none' }}>Home</Link></button></li>
          <li><button><Link to="About_Me" smooth={true} duration={500} style={{ cursor: 'none' }}>About Me</Link></button></li>
          <li><button><Link to="Skills" smooth={true} duration={500} style={{ cursor: 'none' }}>Skills</Link></button></li>
          <li><button><Link to="Projects" smooth={true} duration={500} style={{ cursor: 'none' }}>Projects</Link></button></li>
          <li><button><Link to="Contact" smooth={true} duration={500} style={{ cursor: 'none' }}>Contact</Link></button></li>
          
          </ul>
          <ul className="nav-links nav-links-right">
            <li><a href="https://www.linkedin.com/in/evnul-hossain-bb6036173/" target="_blank" rel="noopener noreferrer"><img src={Linkden} alt="Linkedin" className="img-link" /></a></li>
            <li><a href="https://github.com/evnul000" target="_blank" rel="noopener noreferrer"><img src={Github} alt="GitHub" /></a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Navbar;