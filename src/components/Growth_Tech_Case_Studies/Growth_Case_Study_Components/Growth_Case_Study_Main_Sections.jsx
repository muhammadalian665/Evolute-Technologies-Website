import "./Growth_Case_Study_Main_Sections.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Growth Case Study Images
import executiveKeynote from "../../../assets/Growth_Case_Study_Images/Executive_kEYNOTE_booking.png";
import highTicketB2B from "../../../assets/Growth_Case_Study_Images/High_ticket_B2B_Service.png";
import shopifyGrowth from "../../../assets/Growth_Case_Study_Images/Shopify_eCommerceGrowth.png";
import multiChannelClinic from "../../../assets/Growth_Case_Study_Images/Multi_Chaneel_Clinic_Outreach.png";
import codergize from "../../../assets/Growth_Case_Study_Images/Codergiz.png";
import nglLu from "../../../assets/Growth_Case_Study_Images/NGL&LU.png";
import beTopLocal from "../../../assets/Growth_Case_Study_Images/BeTopLocal.png";
import atoZSolutions from "../../../assets/Growth_Case_Study_Images/AtoZSolutions.png";
import alisaWatlington from "../../../assets/Growth_Case_Study_Images/Alisa_Wetlington.png";
import smbCybersecurity from "../../../assets/Growth_Case_Study_Images/SMB_CyberSecurity.png";


/* =========================================================
   GROWTH CASE STUDIES DATA
========================================================= */

const caseStudies = [

    {
        id: "01",

        category: "Appointment Setting",

        title: "Executive Keynote Bookings",

        description:
            "A structured outbound appointment-setting system designed to identify qualified corporate decision-makers, initiate meaningful conversations, and generate consistent speaking opportunities.",

        image: executiveKeynote,

        route:
            "/case-studies/growth-tech/cs1",
    },


    {
        id: "02",

        category: "B2B Lead Generation",

        title: "High-Ticket B2B Services",

        description:
            "A multi-channel LinkedIn and email outreach system built to connect high-ticket B2B services with relevant decision-makers through targeted prospecting and personalized engagement.",

        image: highTicketB2B,

        route:
            "/case-studies/growth-tech/cs2",
    },


    {
        id: "03",

        category: "Cold Email Campaign",

        title: "Shopify eCommerce Growth",

        description:
            "A structured cold email growth system designed for Shopify and DTC brands, combining focused targeting, personalized messaging, strategic follow-ups, and campaign optimization.",

        image: shopifyGrowth,

        route:
            "/case-studies/growth-tech/cs3",
    },


    {
        id: "04",

        category: "Appointment Generation",

        title: "Multi-Channel Clinic Outreach",

        description:
            "A multi-channel outreach campaign designed to connect healthcare clinics with relevant decision-makers through targeted prospect research, personalized messaging, and consistent follow-up.",

        image: multiChannelClinic,

        route:
            "/case-studies/growth-tech/cs4",
    },


    {
        id: "05",

        category: "B2B Lead Generation",

        title: "Codergize",

        description:
            "A targeted LinkedIn and email outreach system designed to help a technology services company reach founders, business owners, and senior decision-makers with relevant technology solutions.",

        image: codergize,

        route:
            "/case-studies/growth-tech/cs5",
    },


    {
        id: "06",

        category: "LinkedIn Outreach",

        title: "NGL & LU",

        description:
            "A trigger-based LinkedIn outreach campaign designed to connect leadership development services with HR decision-makers using company growth signals and personalized messaging.",

        image: nglLu,

        route:
            "/case-studies/growth-tech/cs6",
    },


    {
        id: "07",

        category: "Cold Email Campaign",

        title: "Be Top Local",

        description:
            "A targeted cold email campaign focused on helping functional and integrated medical clinics generate qualified patients, booked appointments, and measurable marketing outcomes.",

        image: beTopLocal,

        route:
            "/case-studies/growth-tech/cs7",
    },


    {
        id: "08",

        category: "Multi-Channel Outreach",

        title: "AtoZ Solutions",

        description:
            "A personalized LinkedIn and email outreach campaign designed to identify brands with strong college-student audiences and connect them with campus-based acquisition opportunities.",

        image: atoZSolutions,

        route:
            "/case-studies/growth-tech/cs8",
    },


    {
        id: "09",

        category: "Industrial Manufacturing",

        title: "Alisa Watlington",

        description:
            "A targeted LinkedIn outreach campaign designed to connect industrial manufacturing businesses with qualified lead-generation and marketing opportunities.",

        image: alisaWatlington,

        route:
            "/case-studies/growth-tech/cs9",
    },


    {
        id: "10",

        category: "Cybersecurity Outreach",

        title: "SMB Cybersecurity Initiative",

        description:
            "A structured LinkedIn and email outreach campaign designed to engage U.S. SMB decision-makers around practical cybersecurity, resilience, and recovery readiness.",

        image: smbCybersecurity,

        route:
            "/case-studies/growth-tech/cs10",
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
                           RIGHT — CASE STUDY IMAGE
                        ===================================== */}

                        <Link
                            to={study.route}
                            className="growth-case-study-image"
                        >

                            <div className="growth-case-study-placeholder">

                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="growth-case-study-card-image"
                                />

                            </div>

                        </Link>


                    </motion.article>

                ))}

            </div>

        </section>

    );

}


export default Growth_Case_Study_Main_Sections;