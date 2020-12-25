import { Link } from 'react-router-dom';
import { RiToolsLine, RiHome2Line, RiCodeSSlashLine, RiUser3Line, RiChat4Line } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';
import './index.css';

export default function NavigationBar(){
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand><Link className="navbar-item" to="/">STEFFANO MALAGA</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-row">
          <Link to="/" className="nav-link" onMouseEnter>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, className:'icon', attr: { 'data-hover': 'Home' } }}>
              <RiHome2Line/> - Home
            </IconContext.Provider>
          </Link>
          <Link to="/About" className="nav-link">
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, className:'icon', attr: { 'data-hover': 'About' } }}>
              <RiUser3Line/> - About Me
            </IconContext.Provider>
          </Link>
          <Link to="/Skills" className="nav-link">
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, className:'icon', attr: { 'data-hover': 'Skills' } }}>
              <RiToolsLine/> - Skills
            </IconContext.Provider>
          </Link>
          <Link to="/Projects" className="nav-link">
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, className:'icon', attr: { 'data-hover': 'Projects' } }}>
              <RiCodeSSlashLine/> - Projects
            </IconContext.Provider>
          </Link>
          <Link to="/Contact" className="nav-link">
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, className:'icon', attr: { 'data-hover': 'Contact' } }}>
              <RiChat4Line/> - Contact Me
            </IconContext.Provider>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
