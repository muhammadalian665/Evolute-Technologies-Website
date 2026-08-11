import { useState } from "react";
import "./Software_Services.css";

import { Link } from "react-router-dom";

import {
    Code2,
    Cloud,
    BrainCircuit,
    Smartphone,
    Layers3,
    Users,
    Gamepad2,
    Headphones,
    Lightbulb,
} from "lucide-react";

function Software_Services() {

    const services = [
        {
            title: "Custom Software Development",
            description:
                "Build powerful, scalable software tailored around your business needs and workflows.",
            icon: Code2,
        },

        {
            title: "SaaS Product Development",
            description:
                "Turn your product idea into a scalable SaaS platform built for long-term growth.",
            icon: Layers3,
        },

        {
            title: "AI Integration & Automation",
            description:
                "Integrate intelligent AI solutions and automation to make your business smarter and faster.",
            icon: BrainCircuit,
        },

        {
            title: "Web & Mobile Applications",
            description:
                "Create modern web and mobile applications that deliver seamless digital experiences.",
            icon: Smartphone,
        },

        {
            title: "Scalable Cloud Solutions",
            description:
                "Build secure and scalable cloud infrastructure that grows with your business.",
            icon: Cloud,
        },

        {
            title: "Dedicated Development Teams",
            description:
                "Extend your capabilities with experienced developers dedicated to your product and goals.",
            icon: Users,
        },

        {
            title: "Game Development",
            description:
                "Develop engaging and immersive games with modern technologies and interactive experiences.",
            icon: Gamepad2,
        },

        {
            title: "Maintenance & Support",
            description:
                "Keep your software secure, reliable, updated, and performing at its best.",
            icon: Headphones,
        },

        {
            title: "Technology Consultation",
            description:
                "Get expert technical guidance to choose the right technology and strategy for your project.",
            icon: Lightbulb,
        },
    ];


    // =========================================
    // 4 CARDS PER SLIDE
    // =========================================

    const cardsPerView = 4;

    const totalSlides = Math.ceil(
        services.length / cardsPerView
    );


    const [currentSlide, setCurrentSlide] = useState(0);


    // =========================================
    // NEXT
    // =========================================

    const handleNext = () => {

        setCurrentSlide((prev) => {

            if (prev < totalSlides - 1) {
                return prev + 1;
            }

            return 0;
        });
    };


    // =========================================
    // PREVIOUS
    // =========================================

    const handlePrevious = () => {

        setCurrentSlide((prev) => {

            if (prev > 0) {
                return prev - 1;
            }

            return totalSlides - 1;
        });
    };


    return (
        <section className="software-services-page">

            {/* =========================================
                HEADER
            ========================================= */}

            <div className="software-services-header">

                <span className="software-services-eyebrow">
                    OUR TECHNOLOGY SERVICES
                </span>

                <h1>
                    Technology & Product Development
                </h1>

                <p>
                    From powerful software products to intelligent AI
                    solutions, we build technology that helps businesses
                    innovate, scale, and grow.
                </p>

            </div>


            {/* =========================================
                CAROUSEL
            ========================================= */}

            <div className="software-services-carousel">

                <div className="software-services-track-wrapper">

                    <div
                        className="software-services-track"
                        style={{
                            transform: `translateX(-${
                                currentSlide * 44.444444
                            }%)`,
                        }}
                    >

                        {services.map((service, index) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    className="software-service-slide"
                                    key={index}
                                >

                                    <div className="software-service-card">

                                        <span className="software-service-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>


                                        <div className="software-service-icon">
                                            <Icon
                                                size={27}
                                                strokeWidth={1.8}
                                            />
                                        </div>


                                        <div className="software-service-content">

                                            <h2>
                                                {service.title}
                                            </h2>

                                            <p>
                                                {service.description}
                                            </p>

                                        </div>


                                        <Link
                                            to="#"
                                            className="software-service-link"
                                        >

                                            <span>
                                                Explore Service
                                            </span>

                                            <span className="software-service-arrow">
                                                →
                                            </span>

                                        </Link>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>


                {/* =========================================
                    CONTROLS
                ========================================= */}

                <div className="software-services-controls">

                    <button
                        className="software-services-arrow-button"
                        onClick={handlePrevious}
                        aria-label="Previous services"
                    >
                        ←
                    </button>


                    <div className="software-services-indicator">

                        <span>
                            {String(currentSlide + 1).padStart(2, "0")}
                        </span>

                        <div className="software-services-progress">

                            <div
                                className="software-services-progress-fill"
                                style={{
                                    width: `${
                                        ((currentSlide + 1) /
                                            totalSlides) *
                                        100
                                    }%`,
                                }}
                            ></div>

                        </div>

                        <span>
                            {String(totalSlides).padStart(2, "0")}
                        </span>

                    </div>


                    <button
                        className="software-services-arrow-button"
                        onClick={handleNext}
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