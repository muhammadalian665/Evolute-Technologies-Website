import "./Software_Case_Study_Main_Section.css";

import { motion } from "framer-motion";

import ElectionCampaign
    from "../../../assets/Software_Case_Study_Images/ElectionCampaign.png";

import EliteClassLMS
    from "../../../assets/Software_Case_Study_Images/EliteClassLMS.png";

import FitnessWayQ8
    from "../../../assets/Software_Case_Study_Images/FitnessWayQ8.png";

import GTAProperties
    from "../../../assets/Software_Case_Study_Images/GTAProperties.png";

import LiveStreamTriviaApp
    from "../../../assets/Software_Case_Study_Images/LiveStreamTriviaApp.png";

import NetBeatLiveProximous
    from "../../../assets/Software_Case_Study_Images/NetBeatLive&Proximous.png";

import ScalableOTT
    from "../../../assets/Software_Case_Study_Images/ScalableOTT.png";

import SeekerMobileApp
    from "../../../assets/Software_Case_Study_Images/SeekerMobileApp.png";

import TapVax
    from "../../../assets/Software_Case_Study_Images/TapVax.png";


const caseStudies = [
    {
        id: "01",
        image: ElectionCampaign,
        category: "Custom Software Development",
        title: "Election Campaign Management Platform",
        description:
            "A powerful digital platform designed to simplify election campaign management, streamline communication, and organize campaign operations through one centralized system.",
    },

    {
        id: "02",
        image: EliteClassLMS,
        category: "Education Technology",
        title: "EliteClass LMS",
        description:
            "A modern learning management system built to connect students, instructors, and educational content through an intuitive and scalable digital environment.",
    },

    {
        id: "03",
        image: FitnessWayQ8,
        category: "Health & Fitness",
        title: "FitnessWay Q8",
        description:
            "A digital fitness solution designed to deliver a seamless user experience while helping users manage their fitness journey through a modern technology platform.",
    },

    {
        id: "04",
        image: GTAProperties,
        category: "Real Estate Technology",
        title: "GTA Properties",
        description:
            "A modern property platform designed to simplify property discovery, management, and digital interaction for real estate businesses and their customers.",
    },

    {
        id: "05",
        image: LiveStreamTriviaApp,
        category: "Live Streaming",
        title: "LiveStream Trivia App",
        description:
            "An interactive live-streaming experience combining real-time engagement, trivia, and digital entertainment into one connected platform.",
    },

    {
        id: "06",
        image: NetBeatLiveProximous,
        category: "Streaming Technology",
        title: "NetBeat Live & Proximous",
        description:
            "A scalable streaming technology solution engineered to support real-time digital experiences, reliable content delivery, and audience engagement.",
    },

    {
        id: "07",
        image: ScalableOTT,
        category: "OTT Solutions",
        title: "Scalable OTT Platform",
        description:
            "A scalable over-the-top streaming platform designed to support high-quality content delivery, flexible infrastructure, and growing digital audiences.",
    },

    {
        id: "08",
        image: SeekerMobileApp,
        category: "Mobile Application",
        title: "Seeker Mobile App",
        description:
            "A user-focused mobile application developed with a clean experience, intuitive navigation, and scalable architecture for modern mobile users.",
    },

    {
        id: "09",
        image: TapVax,
        category: "Healthcare Technology",
        title: "TapVax",
        description:
            "A healthcare-focused digital solution designed to make vaccination-related processes more accessible, organized, and convenient through technology.",
    },
];


function Software_Case_Study_Main_Section() {

    return (
        <section className="software-case-study-main-section">

            <div className="software-case-study-container">

                {caseStudies.map((study, index) => (

                    <motion.article
                        className="software-case-study-row"
                        key={study.id}

                        /* =========================================
                           SCROLL REVEAL
                        ========================================= */

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

                        <div className="software-case-study-content">

                            <span className="software-case-study-number">
                                {study.id}
                            </span>

                            <span className="software-case-study-category">
                                {study.category}
                            </span>

                            <h2>
                                {study.title}
                            </h2>

                            <p>
                                {study.description}
                            </p>

                            <button className="software-case-study-button">

                                View Case Study

                                <span>
                                    ↗
                                </span>

                            </button>

                        </div>


                        {/* =====================================
                           RIGHT — IMAGE
                        ===================================== */}

                        <div className="software-case-study-image">

                            <img
                                src={study.image}
                                alt={study.title}
                            />

                        </div>

                    </motion.article>

                ))}

            </div>

        </section>
    );
}


export default Software_Case_Study_Main_Section;