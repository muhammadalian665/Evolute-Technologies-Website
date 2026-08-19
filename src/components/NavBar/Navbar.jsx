import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const [servicesOpen, setServicesOpen] = useState(false);
    const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setServicesOpen(false);
        setCaseStudiesOpen(false);
    };


    return (

        <header className="navbar">

            {/* =====================================================
                LOGO
            ===================================================== */}

            <div className="logo">

                <Link to="/" onClick={closeMobileMenu}>
                    <img
                        src={Logo}
                        alt="Evolute Technologies"
                    />
                </Link>

            </div>


            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <ul className="nav-links">

                {/* HOME */}
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>


                {/* ABOUT */}
                <li>
                    <Link to="/about">
                        About Us
                    </Link>
                </li>


                {/* SERVICES */}
                <li
                    className="services-dropdown"
                    onClick={() =>
                        setServicesOpen(!servicesOpen)
                    }
                >

                    <Link
                        to="/services"
                        onClick={(e) =>
                            e.preventDefault()
                        }
                    >
                        Services
                    </Link>


                    <div
                        className={`services-menu ${
                            servicesOpen
                                ? "services-menu-open"
                                : ""
                        }`}
                    >

                        <div
                            className="services-menu-item"
                            onClick={(e) => {

                                e.stopPropagation();

                                navigate(
                                    "/software-services"
                                );

                                setServicesOpen(false);

                            }}
                        >
                            Software Services
                        </div>


                        <div
                            className="services-menu-item"
                            onClick={(e) => {

                                e.stopPropagation();

                                navigate(
                                    "/growth-services"
                                );

                                setServicesOpen(false);

                            }}
                        >
                            Growth Services
                        </div>

                    </div>

                </li>


                {/* CASE STUDIES */}
                <li
                    className="case-studies-dropdown"
                    onClick={() =>
                        setCaseStudiesOpen(
                            !caseStudiesOpen
                        )
                    }
                >

                    <Link
                        to="/case-studies"
                        onClick={(e) =>
                            e.preventDefault()
                        }
                    >
                        Case Studies
                    </Link>


                    <div
                        className={`case-studies-menu ${
                            caseStudiesOpen
                                ? "case-studies-menu-open"
                                : ""
                        }`}
                    >

                        <div
                            className="case-studies-menu-item"
                            onClick={(e) => {

                                e.stopPropagation();

                                navigate(
                                    "/case-studies/software-tech"
                                );

                                setCaseStudiesOpen(false);

                            }}
                        >
                            Software Development
                        </div>


                        <div
                            className="case-studies-menu-item"
                            onClick={(e) => {

                                e.stopPropagation();

                                navigate(
                                    "/case-studies/growth"
                                );

                                setCaseStudiesOpen(false);

                            }}
                        >
                            Growth
                        </div>

                    </div>

                </li>


                {/* CONTACT */}
                <li>
                    <Link to="/contact-us">
                        Contact Us
                    </Link>
                </li>

            </ul>


            {/* =====================================================
                DESKTOP HIRE BUTTON
            ===================================================== */}

            <button
                className="hire-btn"
                onClick={() =>
                    navigate("/contact-us")
                }
            >
                Hire Us
            </button>


            {/* =====================================================
                MOBILE / TABLET HAMBURGER
            ===================================================== */}

            <button
                className={`hamburger ${
                    mobileMenuOpen
                        ? "hamburger-active"
                        : ""
                }`}
                onClick={() =>
                    setMobileMenuOpen(
                        !mobileMenuOpen
                    )
                }
                aria-label="Toggle navigation menu"
            >

                <span></span>
                <span></span>
                <span></span>

            </button>


            {/* =====================================================
                MOBILE / TABLET MENU
            ===================================================== */}

            <div
                className={`mobile-nav-menu ${
                    mobileMenuOpen
                        ? "mobile-nav-menu-open"
                        : ""
                }`}
            >

                {/* HOME */}
                <Link
                    to="/"
                    onClick={closeMobileMenu}
                >
                    Home
                </Link>


                {/* ABOUT */}
                <Link
                    to="/about"
                    onClick={closeMobileMenu}
                >
                    About Us
                </Link>


                {/* SERVICES */}
                <div className="mobile-menu-dropdown">

                    <button
                        className="mobile-menu-title"
                        onClick={() =>
                            setServicesOpen(
                                !servicesOpen
                            )
                        }
                    >
                        <span>Services</span>

                        <span
                            className={
                                servicesOpen
                                    ? "mobile-arrow rotate"
                                    : "mobile-arrow"
                            }
                        >
                            +
                        </span>

                    </button>


                    {servicesOpen && (

                        <div className="mobile-submenu">

                            <button
                                onClick={() => {

                                    navigate(
                                        "/software-services"
                                    );

                                    closeMobileMenu();

                                }}
                            >
                                Software Services
                            </button>


                            <button
                                onClick={() => {

                                    navigate(
                                        "/growth-services"
                                    );

                                    closeMobileMenu();

                                }}
                            >
                                Growth Services
                            </button>

                        </div>

                    )}

                </div>


                {/* CASE STUDIES */}
                <div className="mobile-menu-dropdown">

                    <button
                        className="mobile-menu-title"
                        onClick={() =>
                            setCaseStudiesOpen(
                                !caseStudiesOpen
                            )
                        }
                    >

                        <span>
                            Case Studies
                        </span>

                        <span
                            className={
                                caseStudiesOpen
                                    ? "mobile-arrow rotate"
                                    : "mobile-arrow"
                            }
                        >
                            +
                        </span>

                    </button>


                    {caseStudiesOpen && (

                        <div className="mobile-submenu">

                            <button
                                onClick={() => {

                                    navigate(
                                        "/case-studies/software-tech"
                                    );

                                    closeMobileMenu();

                                }}
                            >
                                Software Development
                            </button>


                            <button
                                onClick={() => {

                                    navigate(
                                        "/case-studies/growth"
                                    );

                                    closeMobileMenu();

                                }}
                            >
                                Growth
                            </button>

                        </div>

                    )}

                </div>


                {/* CONTACT */}
                <Link
                    to="/contact-us"
                    onClick={closeMobileMenu}
                >
                    Contact Us
                </Link>


                {/* MOBILE HIRE BUTTON */}
                <button
                    className="mobile-hire-btn"
                    onClick={() => {

                        navigate("/contact-us");

                        closeMobileMenu();

                    }}
                >
                    Hire Us
                    <span>→</span>
                </button>

            </div>

        </header>

    );
}

export default Navbar;