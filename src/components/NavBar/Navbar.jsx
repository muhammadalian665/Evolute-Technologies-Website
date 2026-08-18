import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const [servicesOpen, setServicesOpen] =
        useState(false);

    const [caseStudiesOpen, setCaseStudiesOpen] =
        useState(false);


    return (

        <header className="navbar">


            {/* =====================================================
                LOGO
            ===================================================== */}

            <div className="logo">

                <Link to="/">
                    <img
                        src={Logo}
                        alt="Evolute Technologies"
                    />
                </Link>

            </div>


            {/* =====================================================
                NAVIGATION LINKS
            ===================================================== */}

            <ul className="nav-links">


                {/* =================================================
                    HOME
                ================================================= */}

                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>


                {/* =================================================
                    ABOUT
                ================================================= */}

                <li>
                    <Link to="/about">
                        About Us
                    </Link>
                </li>


                {/* =================================================
                    SERVICES DROPDOWN
                ================================================= */}

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


                    {/* =================================================
                        SERVICES MENU
                    ================================================= */}

                    <div
                        className={`services-menu ${
                            servicesOpen
                                ? "services-menu-open"
                                : ""
                        }`}
                    >


                        {/* =============================================
                            SOFTWARE SERVICES
                        ============================================= */}

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


                        {/* =============================================
                            GROWTH SERVICES
                        ============================================= */}

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


                {/* =================================================
                    CASE STUDIES DROPDOWN
                ================================================= */}

                <li
                    className="case-studies-dropdown"

                    onClick={() =>
                        setCaseStudiesOpen(!caseStudiesOpen)
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


                    {/* =================================================
                        CASE STUDIES MENU
                    ================================================= */}

                    <div
                        className={`case-studies-menu ${
                            caseStudiesOpen
                                ? "case-studies-menu-open"
                                : ""
                        }`}
                    >


                        {/* =============================================
                            SOFTWARE & TECH CASE STUDIES
                        ============================================= */}

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
                            Software & Tech Case Studies
                        </div>


                        {/* =============================================
                            GROWTH CASE STUDIES
                        ============================================= */}

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
                            Growth Case Studies
                        </div>

                    </div>

                </li>


                {/* =================================================
                    CONTACT
                ================================================= */}

                <li>
                    <Link to="/contact-us">
                        Contact Us
                    </Link>
                </li>

            </ul>


            {/* =====================================================
                HIRE US BUTTON
            ===================================================== */}

            <button
                className="hire-btn"

                onClick={() =>
                    navigate("/contact-us")
                }
            >
                Hire Us
            </button>


        </header>

    );

}


export default Navbar;