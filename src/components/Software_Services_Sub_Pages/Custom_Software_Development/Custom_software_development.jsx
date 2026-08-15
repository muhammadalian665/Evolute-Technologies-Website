import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Custom_software_development.css";


/* =====================================================
   CUSTOM SOFTWARE DEVELOPMENT SERVICES
===================================================== */

const notifications = [
    {
        number: "01",
        name: "Custom Software Development",
        description:
            "Build powerful custom software tailored precisely to your business requirements, workflows, and goals.",
        status: "Custom Built",
        color: "#3CD2F9",
    },

    {
        number: "02",
        name: "Enterprise Software",
        description:
            "Develop scalable enterprise software that streamlines operations, improves productivity, and supports business growth.",
        status: "Enterprise Ready",
        color: "#3CD2F9",
    },

    {
        number: "03",
        name: "Software Modernization",
        description:
            "Modernize outdated software systems with improved architecture, performance, security, and maintainability.",
        status: "Modernization Active",
        color: "#60A5FA",
    },

    {
        number: "04",
        name: "Business Process Automation",
        description:
            "Transform manual business processes into efficient automated workflows using modern software solutions.",
        status: "Automation Ready",
        color: "#3CD2F9",
    },

    {
        number: "05",
        name: "API Development",
        description:
            "Build secure and scalable APIs that connect your applications, platforms, services, and business systems.",
        status: "API Connected",
        color: "#818CF8",
    },

    {
        number: "06",
        name: "Third-Party Integrations",
        description:
            "Connect your software with CRMs, ERPs, payment gateways, cloud platforms, and other third-party services.",
        status: "Integration Ready",
        color: "#3CD2F9",
    },

    {
        number: "07",
        name: "Scalable Architecture",
        description:
            "Design robust software architectures that can scale smoothly as your users, data, and business requirements grow.",
        status: "Scale Ready",
        color: "#22D3EE",
    },

    {
        number: "08",
        name: "Cloud-Based Software",
        description:
            "Develop secure cloud-enabled applications that provide flexibility, accessibility, reliability, and performance.",
        status: "Cloud Ready",
        color: "#38BDF8",
    },

    {
        number: "09",
        name: "Software Security",
        description:
            "Implement strong security practices to protect applications, business data, users, and critical systems.",
        status: "Security Active",
        color: "#67E8F9",
    },

    {
        number: "10",
        name: "Database Solutions",
        description:
            "Design optimized database architectures for reliable data storage, fast access, scalability, and business intelligence.",
        status: "Data Optimized",
        color: "#3CD2F9",
    },

    {
        number: "11",
        name: "Quality Assurance",
        description:
            "Test software thoroughly to identify issues, improve reliability, and deliver stable high-quality applications.",
        status: "Quality Verified",
        color: "#34D399",
    },

    {
        number: "12",
        name: "Ongoing Software Support",
        description:
            "Continuously maintain, monitor, improve, and optimize your software as your business evolves.",
        status: "Support Active",
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
            className="custom-software-notification"
            style={{
                "--notification-color": color,
            }}
        >

            {/* =================================================
               NOTIFICATION NUMBER
            ================================================= */}

            <div className="custom-software-notification-number">
                {number}
            </div>


            {/* =================================================
               CONTENT
            ================================================= */}

            <div className="custom-software-notification-content">

                <div className="custom-software-notification-top">

                    <h4>
                        {name}
                    </h4>

                    <span className="custom-software-notification-status">
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
   CUSTOM SOFTWARE DEVELOPMENT
===================================================== */

function Custom_Software_Development() {

    /* =================================================
       NAVIGATION
    ================================================= */

    const navigate = useNavigate();


    return (

        <section className="custom-software-development">


            {/* =================================================
               HERO CONTENT
            ================================================= */}

            <div className="custom-software-content">

                <span className="custom-software-eyebrow">
                    CUSTOM SOFTWARE DEVELOPMENT
                </span>


                <h1>
                    Software Built
                    <br />
                    Around Your Business.
                </h1>


                <p>
                    We design and develop powerful custom software
                    solutions tailored to your business requirements,
                    workflows, and long-term goals. From enterprise
                    platforms to scalable business applications, we
                    build software that helps your organization
                    operate smarter, faster, and more efficiently.
                </p>


                {/* =================================================
                   CTA
                ================================================= */}

                <div className="custom-software-buttons">

                    <button
                        type="button"
                        className="custom-software-primary-button"
                        onClick={() =>
                            navigate("/contact-us")
                        }
                    >
                        Lets Talk
                    </button>

                </div>

            </div>


            {/* =================================================
               SOFTWARE SERVICES AREA
            ================================================= */}

            <div className="custom-software-notification-area">


                {/* =================================================
                   DECORATIVE GLOW
                ================================================= */}

                <div className="custom-software-notification-glow" />


                {/* =================================================
                   SERVICES HEADER
                ================================================= */}

                <div className="custom-software-notification-header">

                    <div className="custom-software-status-indicator" />

                    <span>
                        SOFTWARE CAPABILITIES
                    </span>

                </div>


                {/* =================================================
                   SCROLLABLE NOTIFICATION VIEWER
                ================================================= */}

                <div className="custom-software-notification-list-wrapper">

                    <div className="custom-software-notification-list">

                        {notifications.map(
                            (
                                notification,
                                index
                            ) => (

                                <motion.div
                                    key={
                                        notification.number
                                    }

                                    className="custom-software-notification-feed-item"

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


export default Custom_Software_Development;