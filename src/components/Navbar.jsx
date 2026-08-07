import "./Navbar.css";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <header className="navbar">
      
      <div className="logo">
  <img src={logo} alt="Evolute Technologies Logo" />
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