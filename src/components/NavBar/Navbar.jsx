import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="navbar">

            {/* Logo */}
            <div className="logo">
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Evolute Technologies"
                    />
                </Link>
            </div>


            {/* Navigation Links */}
            <ul className="nav-links">

                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>


                <li>
                    <Link to="/about">
                        About Us
                    </Link>
                </li>


                {/* Services */}
                <li
                    className="services-dropdown"
                    onClick={() => setServicesOpen(!servicesOpen)}
                >
                    <Link
                        to="/services"
                        onClick={(e) => e.preventDefault()}
                    >
                        Services
                    </Link>

                    <div
                        className={`services-menu ${
                            servicesOpen ? "services-menu-open" : ""
                        }`}
                    >

                        {/* Software Services */}
                        <div
                            className="services-menu-item"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate("/software-services");
                                setServicesOpen(false);
                            }}
                        >
                            Software Services
                        </div>


                        {/* Growth Services */}
                        <div className="services-menu-item">
                            Growth Services
                        </div>

                    </div>
                </li>


                <li>
                    <Link to="/case-studies">
                        Case Studies
                    </Link>
                </li>


                <li>
                    <Link to="/contact-us">
                        Contact Us
                    </Link>
                </li>

            </ul>


            {/* Hire Us Button */}
            <button
                className="hire-btn"
                onClick={() => navigate("/contact-us")}
            >
                Hire Us
            </button>

        </header>
    );
}

export default Navbar;