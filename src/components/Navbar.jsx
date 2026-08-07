import "./Navbar.css";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <img src={Logo} alt="Evolute Technologies" />
      </div>


      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Case Studies</li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>


      <button className="hire-btn">
        Hire Us
      </button>

    </header>
  );
}

export default Navbar;