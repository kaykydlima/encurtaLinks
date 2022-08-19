import './index.css';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <nav className="menu">
            <a className="menu-social" href="https://www.linkedin.com/in/kayky-lima-41181b1a1/"><BsLinkedin color="#FFF" size="24"/></a>
            <Link to="/links" className="menu-item">Meus Links</Link>
        </nav>
    );
}

export default Menu;