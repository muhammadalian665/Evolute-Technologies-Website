import "./Navbar.css";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Evolute Technologies" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About Us</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#case-studies">Case Studies</a>
        </li>

        <li>
          <a href="#blogs">Blogs</a>
        </li>

        <li>
          <a href="#contact">Contact Us</a>
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