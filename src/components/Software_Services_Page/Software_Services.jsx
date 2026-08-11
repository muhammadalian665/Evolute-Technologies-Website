import { useState } from "react";
import "./Software_Services.css";

import AIIntegrationAutomation from "../../assets/Software_Services_Cards_Images/AI_Integration_Automation.png";
import CustomSoftwareDevelopment from "../../assets/Software_Services_Cards_Images/Custom_Software_Development.jpg";
import DedicatedDevelopmentTeams from "../../assets/Software_Services_Cards_Images/Dedicated_Development_Teams.png";
import GameDevelopment from "../../assets/Software_Services_Cards_Images/Game_Development.png";
import MaintainenceAndSupport from "../../assets/Software_Services_Cards_Images/Maintainence_And_Support.png";
import SAASProductDevelopment from "../../assets/Software_Services_Cards_Images/SAAS_Product_Development.png";
import ScalableCloudSolutions from "../../assets/Software_Services_Cards_Images/Scalable_Cloud_Solutions.png";
import TechnologyConsultation from "../../assets/Software_Services_Cards_Images/Technology_Consultation.png";
import WebAndMobileApplications from "../../assets/Software_Services_Cards_Images/Web_AND_Mobile_Applications.png";


function Software_Services() {

    const services = [
        {
            title: "Custom Software Development",
            description:
                "Tailored software solutions built around your business requirements, workflows, and long-term goals.",
            image: CustomSoftwareDevelopment,
        },

        {
            title: "SaaS Product Development",
            description:
                "Scalable SaaS products designed to deliver seamless user experiences and support business growth.",
            image: SAASProductDevelopment,
        },

        {
            title: "AI Integration & Automation",
            description:
                "Integrate AI-powered automation into your business to improve efficiency, productivity, and decision-making.",
            image: AIIntegrationAutomation,
        },

        {
            title: "Web & Mobile Applications",
            description:
                "Modern web and mobile applications built for performance, usability, and scalability.",
            image: WebAndMobileApplications,
        },

        {
            title: "Scalable Cloud Solutions",
            description:
                "Secure and scalable cloud solutions that help your applications perform reliably as your business grows.",
            image: ScalableCloudSolutions,
        },

        {
            title: "Dedicated Development Teams",
            description:
                "Build your own dedicated development team with skilled professionals aligned with your project goals.",
            image: DedicatedDevelopmentTeams,
        },

        {
            title: "Game Development",
            description:
                "Engaging and interactive game experiences built with modern technologies and performance in mind.",
            image: GameDevelopment,
        },

        {
            title: "Maintenance & Support",
            description:
                "Reliable ongoing maintenance, monitoring, optimization, and technical support for your software.",
            image: MaintainenceAndSupport,
        },

        {
            title: "Technology Consultation",
            description:
                "Expert technology guidance to help you choose the right architecture, tools, and development strategy.",
            image: TechnologyConsultation,
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

        <section className="software-services-section">

            <div className="software-services-container">


                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="software-services-header">

                    <h1>
                        Technology & Product Development
                    </h1>


                    <p>
                        Transform your ideas into powerful digital
                        products with scalable technology solutions
                        designed to accelerate your business growth.
                    </p>

                </div>



                {/* =====================================================
                    SERVICES CARDS
                ===================================================== */}

                <div
                    className={`software-services-grid ${
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
                                    className={`software-service-card ${
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

                                    <div className="software-service-card-image">

                                        <img
                                            src={service.image}
                                            alt={service.title}
                                        />

                                    </div>



                                    {/* =================================================
                                        WHITE CONTENT AREA
                                    ================================================= */}

                                    <div className="software-service-card-content">


                                        {/* Card Number */}

                                        <div className="software-service-card-number">

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
                                            className="software-service-card-button"
                                        >

                                            <span>
                                                Explore Service
                                            </span>


                                            <span className="service-button-arrow">
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

                <div className="software-services-controls">


                    {/* Previous */}

                    <button
                        type="button"
                        className="software-services-arrow"
                        onClick={handlePrevious}
                        disabled={
                            currentPage === 0 ||
                            isAnimating
                        }
                        aria-label="Previous services"
                    >
                        ←
                    </button>



                    {/* Page Indicators */}

                    <div className="software-services-pages">

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
                        className="software-services-arrow"
                        onClick={handleNext}
                        disabled={
                            currentPage ===
                                totalPages - 1 ||
                            isAnimating
                        }
                        aria-label="Next services"
                    >
                        →
                    </button>


                </div>

            </div>

        </section>

    );
}


export default Software_Services;