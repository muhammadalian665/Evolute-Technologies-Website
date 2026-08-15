import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./SAAS_product_development.css";


/* =====================================================
   SAAS PRODUCT DEVELOPMENT SERVICES
===================================================== */

const notifications = [
    {
        number: "01",
        name: "SaaS Product Development",
        description:
            "Build scalable SaaS products from concept to launch with modern architecture and reliable technology.",
        status: "Product Ready",
        color: "#3CD2F9",
    },

    {
        number: "02",
        name: "MVP Development",
        description:
            "Validate your SaaS idea quickly with a focused MVP designed to reach the market faster.",
        status: "MVP Ready",
        color: "#3CD2F9",
    },

    {
        number: "03",
        name: "SaaS Architecture",
        description:
            "Design secure and scalable SaaS architectures built to support growing users, features, and data.",
        status: "Architecture Ready",
        color: "#60A5FA",
    },

    {
        number: "04",
        name: "Multi-Tenant SaaS",
        description:
            "Develop efficient multi-tenant platforms that securely serve multiple customers from a single system.",
        status: "Multi-Tenant Active",
        color: "#3CD2F9",
    },

    {
        number: "05",
        name: "SaaS UI & UX",
        description:
            "Create intuitive and conversion-focused interfaces that make complex SaaS products simple to use.",
        status: "Experience Optimized",
        color: "#818CF8",
    },

    {
        number: "06",
        name: "Subscription & Billing",
        description:
            "Implement flexible subscription plans, recurring payments, billing workflows, and customer management.",
        status: "Billing Integrated",
        color: "#3CD2F9",
    },

    {
        number: "07",
        name: "API & Third-Party Integration",
        description:
            "Connect your SaaS platform with APIs, payment gateways, CRMs, analytics tools, and external services.",
        status: "Integration Connected",
        color: "#22D3EE",
    },

    {
        number: "08",
        name: "Cloud & Infrastructure",
        description:
            "Deploy reliable cloud infrastructure designed for performance, availability, security, and scalability.",
        status: "Cloud Optimized",
        color: "#38BDF8",
    },

    {
        number: "09",
        name: "SaaS Security",
        description:
            "Protect your platform and customer data with secure authentication, authorization, encryption, and monitoring.",
        status: "Security Active",
        color: "#67E8F9",
    },

    {
        number: "10",
        name: "SaaS Migration & Modernization",
        description:
            "Transform legacy applications into modern SaaS platforms with scalable architecture and improved performance.",
        status: "Modernization Ready",
        color: "#3CD2F9",
    },

    {
        number: "11",
        name: "Performance Optimization",
        description:
            "Improve application speed, reliability, database performance, and overall SaaS user experience.",
        status: "Performance Optimized",
        color: "#34D399",
    },

    {
        number: "12",
        name: "Continuous SaaS Growth",
        description:
            "Continuously enhance your SaaS product with new features, improvements, monitoring, and technical support.",
        status: "Growth Active",
        color: "#60A5FA",
    },
];


/* =====================================================
   NOTIFICATION CARD
===================================================== */

const Notification = ({
    number,
    name,
    description,
    color,
    status,
}) => {

    return (

        <div
            className="saas-notification"
            style={{
                "--notification-color": color,
            }}
        >

            {/* =================================================
               NOTIFICATION NUMBER
            ================================================= */}

            <div className="saas-notification-number">
                {number}
            </div>


            {/* =================================================
               CONTENT
            ================================================= */}

            <div className="saas-notification-content">

                <div className="saas-notification-top">

                    <h4>
                        {name}
                    </h4>

                    <span className="saas-notification-status">
                        {status}
                    </span>

                </div>


                <p>
                    {description}
                </p>

            </div>

        </div>
    );
};


/* =====================================================
   SAAS PRODUCT DEVELOPMENT
===================================================== */

function SAAS_product_development() {

    /* =================================================
       NAVIGATION
    ================================================= */

    const navigate = useNavigate();


    return (

        <section className="saas-product-development">


            {/* =================================================
               HERO CONTENT
            ================================================= */}

            <div className="saas-product-content">

                {/* =================================================
                   FUTURISTIC DECORATIVE ELEMENTS
                ================================================= */}

                <div className="saas-tech-orbit">
                    <div className="saas-tech-orbit-node" />
                </div>

                <div className="saas-circuit-lines" />

                <div className="saas-tech-scan" />


                <span className="saas-product-eyebrow">
                    SAAS PRODUCT DEVELOPMENT
                </span>


                <h1>
                    Build a SaaS Product
                    <br />
                    That Scales With Your Business.
                </h1>


                <p>
                    We design and develop scalable SaaS products
                    that turn your ideas into powerful digital
                    platforms. From MVP development and cloud
                    architecture to subscriptions, integrations,
                    security, and continuous optimization, we
                    build SaaS solutions designed for long-term
                    growth.
                </p>


                {/* =================================================
                   CTA
                ================================================= */}

                <div className="saas-product-buttons">

                    <button
                        type="button"
                        className="saas-primary-button"
                        onClick={() =>
                            navigate("/contact-us")
                        }
                    >
                        Lets Talk
                    </button>

                </div>

            </div>


            {/* =================================================
               SAAS SERVICES AREA
            ================================================= */}

            <div className="saas-notification-area">


                {/* =================================================
                   DECORATIVE GLOW
                ================================================= */}

                <div className="saas-notification-glow" />


                {/* =================================================
                   SERVICES HEADER
                ================================================= */}

                <div className="saas-notification-header">

                    <div className="saas-status-indicator" />

                    <span>
                        SAAS CAPABILITIES
                    </span>

                </div>


                {/* =================================================
                   SCROLLABLE NOTIFICATION VIEWER
                ================================================= */}

                <div className="saas-notification-list-wrapper">

                    <div className="saas-notification-list">

                        {notifications.map(
                            (
                                notification,
                                index
                            ) => (

                                <motion.div
                                    key={
                                        notification.number
                                    }

                                    className="saas-notification-feed-item"

                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}

                                    transition={{
                                        duration: 0.4,
                                        delay:
                                            index *
                                            0.04,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                >

                                    <Notification
                                        {...notification}
                                    />

                                </motion.div>

                            )
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
}


export default SAAS_product_development;