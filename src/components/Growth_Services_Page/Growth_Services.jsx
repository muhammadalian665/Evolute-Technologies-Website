import { useState } from "react";
import { Link } from "react-router-dom";

import "./Growth_Services.css";

/* =====================================================
   GROWTH SERVICES CARD IMAGES
===================================================== */

import AppointmentSetting
    from "../../assets/Growth_Services_Cards_Images/Appointment_Setting.png";

import B2BLeadGeneration
    from "../../assets/Growth_Services_Cards_Images/B2B_Lead_Generation.png";

import ColdEmailCampaigns
    from "../../assets/Growth_Services_Cards_Images/Cold_Email_Campaigns.png";

import LinkedinProspectingOutreach
    from "../../assets/Growth_Services_Cards_Images/Linkedin_Prospecting_and_Outreach.png";

import OutboundGrowthStrategies
    from "../../assets/Growth_Services_Cards_Images/Outbound_Growth_Strategies.png";

import SalesAutomation
    from "../../assets/Growth_Services_Cards_Images/Sales_Automation.png";


function Growth_Services() {

    /* =====================================================
       SERVICES DATA
    ===================================================== */

    const services = [

        {
            title: "B2B Lead Generation",

            description:
                "Generate high-quality B2B leads through targeted research, ideal customer profiling, and data-driven prospecting strategies.",

            image: B2BLeadGeneration,

            route: "/b2b-lead-generation",
        },

        {
            title: "LinkedIn Prospecting & Outreach",

            description:
                "Reach the right decision-makers through personalized LinkedIn prospecting and strategic outreach campaigns.",

            image: LinkedinProspectingOutreach,

            route: "/linkedin-outreach",
        },

        {
            title: "Cold Email Campaigns",

            description:
                "Build targeted cold email campaigns designed to start meaningful conversations and generate qualified business opportunities.",

            image: ColdEmailCampaigns,

            route: "/cold-email-campaigns",
        },

        {
            title: "Appointment Setting",

            description:
                "Turn qualified prospects into booked meetings through structured outreach, follow-ups, and conversion-focused appointment setting.",

            image: AppointmentSetting,

            route: "/appointment-settings",
        },

        {
            title: "Sales Automation Systems",

            description:
                "Automate repetitive sales processes, lead follow-ups, prospect management, and workflows to improve efficiency and scalability.",

            image: SalesAutomation,

            route: "/sales-automation-systems",
        },

        {
            title: "Outbound Growth Strategies",

            description:
                "Develop scalable outbound growth strategies that combine targeting, messaging, automation, and sales processes to drive predictable growth.",

            image: OutboundGrowthStrategies,

            route: "/outbound-growth-strategy",
        },

    ];


    /* =====================================================
       PAGINATION STATE
    ===================================================== */

    const [currentPage, setCurrentPage] =
        useState(0);

    const [isAnimating, setIsAnimating] =
        useState(false);

    const [direction, setDirection] =
        useState("next");

    const [hoveredCard, setHoveredCard] =
        useState(null);


    /* =====================================================
       PAGINATION CONFIG
    ===================================================== */

    const cardsPerPage = 4;

    const totalPages = Math.ceil(
        services.length / cardsPerPage
    );


    /* =====================================================
       VISIBLE SERVICES
    ===================================================== */

    const visibleServices = services.slice(
        currentPage * cardsPerPage,
        currentPage * cardsPerPage + cardsPerPage
    );


    /* =====================================================
       PAGE CHANGE
    ===================================================== */

    const changePage = (
        newPage,
        newDirection
    ) => {

        if (isAnimating) {
            return;
        }

        if (
            newPage < 0 ||
            newPage >= totalPages
        ) {
            return;
        }

        setHoveredCard(null);

        setDirection(newDirection);

        setIsAnimating(true);


        setTimeout(() => {

            setCurrentPage(newPage);

        }, 300);


        setTimeout(() => {

            setIsAnimating(false);

        }, 900);

    };


    /* =====================================================
       NEXT PAGE
    ===================================================== */

    const handleNext = () => {

        if (
            currentPage <
            totalPages - 1
        ) {

            changePage(
                currentPage + 1,
                "next"
            );

        }

    };


    /* =====================================================
       PREVIOUS PAGE
    ===================================================== */

    const handlePrevious = () => {

        if (currentPage > 0) {

            changePage(
                currentPage - 1,
                "previous"
            );

        }

    };


    /* =====================================================
       RETURN
    ===================================================== */

    return (

        <section className="growth-services-section">

            <div className="growth-services-container">


                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="growth-services-header">

                    <h1>
                        Growth & Sales Enablement
                    </h1>

                    <p>
                        Build predictable business growth through
                        targeted prospecting, strategic outreach,
                        sales automation, and scalable outbound
                        growth systems.
                    </p>

                </div>


                {/* =====================================================
                    SERVICES CARDS
                ===================================================== */}

                <div
                    className={`growth-services-grid ${
                        isAnimating
                            ? `slide-${direction}`
                            : ""
                    }`}
                >

                    {visibleServices.map(
                        (service, index) => {

                            const globalIndex =
                                currentPage *
                                    cardsPerPage +
                                index;


                            return (

                                <div
                                    key={service.title}

                                    className={`growth-service-card ${
                                        hoveredCard === index
                                            ? "card-active"
                                            : ""
                                    }`}

                                    style={{
                                        "--card-index": index,
                                    }}

                                    onMouseEnter={() =>
                                        setHoveredCard(index)
                                    }

                                    onMouseLeave={() =>
                                        setHoveredCard(null)
                                    }
                                >


                                    {/* =================================================
                                        SERVICE IMAGE
                                    ================================================= */}

                                    <div className="growth-service-card-image">

                                        <img
                                            src={service.image}
                                            alt={service.title}
                                        />

                                    </div>


                                    {/* =================================================
                                        CARD CONTENT
                                    ================================================= */}

                                    <div className="growth-service-card-content">


                                        {/* CARD NUMBER */}

                                        <div className="growth-service-card-number">

                                            {String(
                                                globalIndex + 1
                                            ).padStart(2, "0")}

                                        </div>


                                        {/* CARD TITLE */}

                                        <h2>
                                            {service.title}
                                        </h2>


                                        {/* CARD DESCRIPTION */}

                                        <p>
                                            {service.description}
                                        </p>


                                        {/* =================================================
                                            CARD BUTTON
                                        ================================================= */}

                                        <Link
                                            to={service.route}
                                            className="growth-service-card-button"
                                        >

                                            <span>
                                                Explore Service
                                            </span>

                                            <span className="growth-service-button-arrow">
                                                →
                                            </span>

                                        </Link>

                                    </div>

                                </div>

                            );

                        }
                    )}

                </div>


                {/* =====================================================
                    NAVIGATION CONTROLS
                ===================================================== */}

                <div className="growth-services-controls">


                    {/* PREVIOUS */}

                    <button
                        type="button"
                        className="growth-services-arrow"
                        onClick={handlePrevious}
                        disabled={
                            currentPage === 0 ||
                            isAnimating
                        }
                        aria-label="Previous growth services"
                    >
                        ←
                    </button>


                    {/* PAGE INDICATORS */}

                    <div className="growth-services-pages">

                        {Array.from(
                            {
                                length: totalPages,
                            },

                            (_, index) => (

                                <span
                                    key={index}
                                    className={
                                        currentPage === index
                                            ? "active"
                                            : ""
                                    }
                                ></span>

                            )
                        )}

                    </div>


                    {/* NEXT */}

                    <button
                        type="button"
                        className="growth-services-arrow"
                        onClick={handleNext}
                        disabled={
                            currentPage ===
                                totalPages - 1 ||
                            isAnimating
                        }
                        aria-label="Next growth services"
                    >
                        →
                    </button>

                </div>

            </div>

        </section>

    );
}


export default Growth_Services;