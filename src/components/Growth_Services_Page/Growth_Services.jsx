import { useState } from "react";
import "./Growth_Services.css";

import AIIntegrationAutomation from "../../assets/Software_Services_Cards_Images/AI_Integration_Automation.png";
import CustomSoftwareDevelopment from "../../assets/Software_Services_Cards_Images/Custom_Software_Development.jpg";
import DedicatedDevelopmentTeams from "../../assets/Software_Services_Cards_Images/Dedicated_Development_Teams.png";
import GameDevelopment from "../../assets/Software_Services_Cards_Images/Game_Development.png";
import MaintainenceAndSupport from "../../assets/Software_Services_Cards_Images/Maintainence_And_Support.png";
import SAASProductDevelopment from "../../assets/Software_Services_Cards_Images/SAAS_Product_Development.png";

function Growth_Services() {
    const services = [
        {
            title: "B2B Lead Generation",
            description:
                "Generate high-quality B2B leads through targeted research, ideal customer profiling, and data-driven prospecting strategies.",
            image: CustomSoftwareDevelopment,
        },

        {
            title: "LinkedIn Prospecting & Outreach",
            description:
                "Reach the right decision-makers through personalized LinkedIn prospecting and strategic outreach campaigns.",
            image: SAASProductDevelopment,
        },

        {
            title: "Cold Email Campaigns",
            description:
                "Build targeted cold email campaigns designed to start meaningful conversations and generate qualified business opportunities.",
            image: AIIntegrationAutomation,
        },

        {
            title: "Appointment Setting",
            description:
                "Turn qualified prospects into booked meetings through structured outreach, follow-ups, and conversion-focused appointment setting.",
            image: DedicatedDevelopmentTeams,
        },

        {
            title: "Sales Automation Systems",
            description:
                "Automate repetitive sales processes, lead follow-ups, prospect management, and workflows to improve efficiency and scalability.",
            image: GameDevelopment,
        },

        {
            title: "Outbound Growth Strategies",
            description:
                "Develop scalable outbound growth strategies that combine targeting, messaging, automation, and sales processes to drive predictable growth.",
            image: MaintainenceAndSupport,
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);

    const [isAnimating, setIsAnimating] =
        useState(false);

    const [direction, setDirection] =
        useState("next");

    const [hoveredCard, setHoveredCard] =
        useState(null);

    const cardsPerPage = 4;

    const totalPages = Math.ceil(
        services.length / cardsPerPage
    );

    const visibleServices = services.slice(
        currentPage * cardsPerPage,
        currentPage * cardsPerPage + cardsPerPage
    );

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

    const handlePrevious = () => {
        if (currentPage > 0) {
            changePage(
                currentPage - 1,
                "previous"
            );
        }
    };

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
                                    className={`growth-service-card ${
                                        hoveredCard === index
                                            ? "card-active"
                                            : ""
                                    }`}
                                    key={service.title}
                                    style={{
                                        "--card-index": index,
                                    }}
                                    onMouseEnter={() =>
                                        setHoveredCard(index)
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
                                        WHITE CONTENT AREA
                                    ================================================= */}

                                    <div className="growth-service-card-content">

                                        {/* Card Number */}

                                        <div className="growth-service-card-number">

                                            {String(
                                                globalIndex + 1
                                            ).padStart(2, "0")}

                                        </div>


                                        {/* Card Title */}

                                        <h2>
                                            {service.title}
                                        </h2>


                                        {/* Card Description */}

                                        <p>
                                            {service.description}
                                        </p>


                                        {/* Card Button */}

                                        <button
                                            type="button"
                                            className="growth-service-card-button"
                                        >

                                            <span>
                                                Explore Service
                                            </span>

                                            <span className="growth-service-button-arrow">
                                                →
                                            </span>

                                        </button>

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

                    {/* Previous */}

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


                    {/* Page Indicators */}

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


                    {/* Next */}

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