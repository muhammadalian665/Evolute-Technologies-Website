import "./Growth_Case_Study_Main_Sections.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";


/* =========================================================
   GROWTH CASE STUDIES DATA
========================================================= */

const caseStudies = [

    {
        id: "01",

        category: "Appointment Setting",

        title: "Appointment Setting",

        description:
            "A structured outbound appointment-setting system designed to identify qualified prospects, initiate meaningful conversations, and generate consistent sales opportunities.",

        route:
            "/case-studies/growth-tech/appointment-setting",
    },


    {
        id: "02",

        category: "B2B Lead Generation",

        title: "B2B Lead Generation",

        description:
            "A scalable B2B lead generation system built to identify high-value prospects, enrich decision-maker data, and create a predictable pipeline of qualified opportunities.",

        route:
            "/case-studies/growth-tech/b2b-lead-generation",
    },


    {
        id: "03",

        category: "Cold Email Campaign",

        title: "Cold Email Campaign",

        description:
            "A data-driven cold email outreach system designed around targeted prospecting, personalized messaging, automated follow-ups, and measurable campaign performance.",

        route:
            "/case-studies/growth-tech/cold-email-campaign",
    },


    {
        id: "04",

        category: "LinkedIn Outreach",

        title: "LinkedIn Outreach",

        description:
            "A strategic LinkedIn outreach system designed to connect businesses with relevant decision-makers through personalized messaging and consistent relationship-building.",

        route:
            "/case-studies/growth-tech/linkedin-outreach",
    },


    {
        id: "05",

        category: "Outbound Growth Strategy",

        title: "Outbound Growth Strategy",

        description:
            "A complete outbound growth framework combining prospect research, multi-channel outreach, campaign intelligence, and sales development processes.",

        route:
            "/case-studies/growth-tech/outbound-growth-strategy",
    },


    {
        id: "06",

        category: "Sales Automation",

        title: "Sales Automation Systems",

        description:
            "An automated sales infrastructure designed to streamline repetitive workflows, improve lead management, accelerate follow-ups, and support scalable business growth.",

        route:
            "/case-studies/growth-tech/sales-automation-systems",
    },

];


/* =========================================================
   COMPONENT
========================================================= */

function Growth_Case_Study_Main_Sections() {

    return (

        <section className="growth-case-study-main-section">

            <div className="growth-case-study-container">

                {caseStudies.map((study, index) => (

                    <motion.article

                        className="growth-case-study-row"

                        key={study.id}

                        initial={{
                            opacity: 0,
                            y: 90,
                            scale: 0.97,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}

                        viewport={{
                            once: true,
                            amount: 0.18,
                        }}

                        transition={{
                            duration: 0.75,
                            delay: index * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                        }}

                    >

                        {/* =====================================
                           LEFT — TEXT
                        ===================================== */}

                        <div className="growth-case-study-content">

                            <span className="growth-case-study-number">
                                {study.id}
                            </span>


                            <span className="growth-case-study-category">
                                {study.category}
                            </span>


                            <h2>
                                {study.title}
                            </h2>


                            <p>
                                {study.description}
                            </p>


                            {/* =====================================
                               VIEW CASE STUDY BUTTON
                            ===================================== */}

                            <Link
                                to={study.route}
                                className="growth-case-study-button"
                            >

                                View Case Study

                                <span>
                                    ↗
                                </span>

                            </Link>

                        </div>


                        {/* =====================================
                           RIGHT — IMAGE PLACEHOLDER
                        ===================================== */}

                        <Link
                            to={study.route}
                            className="growth-case-study-image"
                        >

                            <div className="growth-case-study-placeholder">

                                <span>
                                    {study.id}
                                </span>

                            </div>

                        </Link>


                    </motion.article>

                ))}

            </div>

        </section>

    );

}


export default Growth_Case_Study_Main_Sections;