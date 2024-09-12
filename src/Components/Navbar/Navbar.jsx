import "./Navbar.css"
import PlaceholderImage from '../../Resources/Images/PlaceholderImage.png';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({selectedPage, setSelectedPage}) => {
  return (
    <nav>
      <div className="profile">
        <img src={PlaceholderImage} alt="Zagyi Gergő" className="profile-pic" />
        <h2 className="name">Zagyi Gergő</h2>
      </div>
      <ul className="menu">
        <li
          onClick={()=> setSelectedPage('Home')}
          className={selectedPage === 'Home' ? 'active' : ''}
        >
          HOME
        </li>
        <li
          onClick={()=> setSelectedPage('About Me')}
          className={selectedPage === 'About Me' ? 'active' : ''}
        >
          ABOUT ME
        </li>
        <li>CREDENTIALS</li>
        <li>CONTACT </li>
      </ul>
      <div className="icons">
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faLinkedin}/>
      <FontAwesomeIcon icon={faFacebook}/>
      <FontAwesomeIcon/>
      </div>
    </nav>
  );
};

export default Navbar;