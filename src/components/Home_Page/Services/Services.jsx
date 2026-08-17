import "./Services.css";

import {
    ArrowUpRight,
    Code2,
    Target,
    Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";


function Services() {

    const services = [
        {
            number: "01",
            label: "TECHNOLOGY & PRODUCT",
            title: "Software Services",

            description:
                "Build scalable digital products, intelligent applications, SaaS platforms, and cloud systems engineered around your business goals.",

            icon: Code2,

            route: "/software-services",
        },

        {
            number: "02",
            label: "REVENUE & GROWTH",
            title: "Growth Services",

            description:
                "Create predictable revenue through targeted outreach, intelligent automation, lead generation, and scalable sales systems.",

            icon: Target,

            route: "/growth-services",
        },
    ];


    return (
        <section className="services-section">

            <div className="services-container">

                {/* =====================================================
                    SECTION HEADER
                ===================================================== */}

                <div className="services-header">

                    <div className="services-header-content">

                        <div className="services-eyebrow">
                            <Sparkles size={15} />
                            <span>WHAT WE DO</span>
                        </div>

                        <h2>
                            Solutions built for
                            <span> ambitious businesses.</span>
                        </h2>

                        <p>
                            From building powerful digital products to creating
                            predictable growth systems, we help businesses
                            move from ideas to measurable outcomes.
                        </p>

                    </div>

                </div>


                {/* =====================================================
                    SERVICES GRID
                ===================================================== */}

                <div className="services-grid">

                    {services.map((service) => {

                        const ServiceIcon = service.icon;

                        return (
                            <div
                                className="service-column"
                                key={service.number}
                            >

                                <Link
                                    to={service.route}
                                    className="service-card"
                                >

                                    {/* =================================================
                                        FLOATING PARTICLES
                                    ================================================= */}

                                    <div
                                        className="service-particles"
                                        aria-hidden="true"
                                    >
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>


                                    {/* =================================================
                                        CARD DECORATIVE GLOW
                                    ================================================= */}

                                    <div className="service-card-glow" />


                                    {/* =================================================
                                        CARD TOP
                                    ================================================= */}

                                    <div className="service-card-top">

                                        <span className="service-number">
                                            {service.number}
                                        </span>

                                        <span className="service-label">
                                            {service.label}
                                        </span>

                                    </div>


                                    {/* =================================================
                                        CARD CONTENT
                                    ================================================= */}

                                    <div className="service-card-content">

                                        {/* ICON */}

                                        <div className="service-icon">

                                            <ServiceIcon
                                                size={23}
                                                strokeWidth={1.8}
                                            />

                                        </div>


                                        {/* TITLE */}

                                        <h3>
                                            {service.title}
                                        </h3>


                                        {/* DESCRIPTION */}

                                        <p>
                                            {service.description}
                                        </p>


                                        {/* CTA */}

                                        <div className="service-card-cta">

                                            <span>
                                                Explore Service
                                            </span>

                                            <span className="service-arrow">
                                                <ArrowUpRight size={19} />
                                            </span>

                                        </div>

                                    </div>

                                </Link>

                            </div>
                        );
                    })}

                </div>


                {/* =====================================================
                    BOTTOM STATEMENT
                ===================================================== */}

                <div className="services-bottom">

                    <span className="services-bottom-line" />

                    <p>
                        Technology + Growth
                        <strong> built around your goals.</strong>
                    </p>

                    <span className="services-bottom-line" />

                </div>

            </div>

        </section>
    );
}


export default Services;