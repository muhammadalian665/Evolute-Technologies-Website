import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <header className="navbar">


      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Evolute Technologies" />
        </Link>
      </div>


      {/* Navigation Links */}
      <ul className="nav-links">


        <li>
          <Link to="/">Home</Link>
        </li>


        <li>
          <Link to="/about">About Us</Link>
        </li>


        <li>
          <Link to="/services">Services</Link>
        </li>


        <li>
          <Link to="/case-studies">Case Studies</Link>
        </li>


        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>


      </ul>


      {/* Hire Button */}
      <button className="hire-btn">
        Hire Us
      </button>


    </header>
  );
}


export default Navbar;