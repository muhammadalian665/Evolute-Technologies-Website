import "./Software_Case_Study_Main_Section.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";


/* =========================================================
   SOFTWARE CASE STUDY IMAGES
========================================================= */

import Bavari
    from "../../../assets/Software_Case_Study_Images/Bavari.jpg";

import Charlotte
    from "../../../assets/Software_Case_Study_Images/Charlotte.jpg";

import Checkmate
    from "../../../assets/Software_Case_Study_Images/Checkmate.jpg";

import ElectionCampaign
    from "../../../assets/Software_Case_Study_Images/ElectionCampaign.png";

import EliteClassLMS
    from "../../../assets/Software_Case_Study_Images/EliteClassLMS.png";

import FitnessWayQ8
    from "../../../assets/Software_Case_Study_Images/FitnessWayQ8.png";

import Fluvanna
    from "../../../assets/Software_Case_Study_Images/Fluvanna.jpg";

import GTAProperties
    from "../../../assets/Software_Case_Study_Images/GTAProperties.png";

import HealthMed
    from "../../../assets/Software_Case_Study_Images/HealthMed.png";

import image
    from "../../../assets/Software_Case_Study_Images/image.jpg";

import JacketMaker
    from "../../../assets/Software_Case_Study_Images/JacketMaker.png";

import LiveStreamTriviaApp
    from "../../../assets/Software_Case_Study_Images/LiveStreamTriviaApp.png";

import NetBeatLiveProximous
    from "../../../assets/Software_Case_Study_Images/NetBeatLive&Proximous.png";

import ScalableOTT
    from "../../../assets/Software_Case_Study_Images/ScalableOTT.png";

import SeekerMobileApp
    from "../../../assets/Software_Case_Study_Images/SeekerMobileApp.png";

import SoapSlave
    from "../../../assets/Software_Case_Study_Images/Soap&Slave.png";

import TapVax
    from "../../../assets/Software_Case_Study_Images/TapVax.png";

import TipsyScoop
    from "../../../assets/Software_Case_Study_Images/TipsyScoop.png";


/* =========================================================
   CASE STUDIES DATA
========================================================= */

const caseStudies = [

    {
        id: "01",
        image: Fluvanna,
        category: "Web Application",
        title: "Fluvanna",
        description:
            "A scalable web-based experience designed to simplify digital interactions through intuitive design and modern application architecture.",
        route: "/case-studies/software-tech/fluvanna",
    },

    {
        id: "02",
        image: GTAProperties,
        category: "Real Estate Technology",
        title: "GTA Properties",
        description:
            "A modern property platform designed to simplify property discovery, management, and digital interaction for real estate businesses and their customers.",
        route: "/case-studies/software-tech/gta-properties",
    },

    {
        id: "03",
        image: SoapSlave,
        category: "E-Commerce Platform",
        title: "Soap & Slave",
        description:
            "A distinctive digital commerce platform designed around a clean user experience, product presentation, and scalable online functionality.",

        /* FIXED ROUTE */
        route: "/case-studies/software-tech/soap-and-slave",
    },

    {
        id: "04",
        image: SeekerMobileApp,
        category: "Mobile Application",
        title: "Seeker Mobile App",
        description:
            "A user-focused mobile application developed with a clean experience, intuitive navigation, and scalable architecture for modern mobile users.",
        route: "/case-studies/software-tech/seeker-mobile-app",
    },

    {
        id: "05",
        image: image,
        category: "Digital Solution",
        title: "Enterprise Digital Platform",
        description:
            "A custom digital solution engineered to deliver a seamless user experience, scalable infrastructure, and reliable business functionality.",

        /* FIXED ROUTE
           Enterprise Digital Platform = Caire Compressors
        */
        route: "/case-studies/software-tech/caire-compressors",
    },

    {
        id: "06",
        image: EliteClassLMS,
        category: "Education Technology",
        title: "EliteClass LMS",
        description:
            "A modern learning management system built to connect students, instructors, and educational content through an intuitive and scalable digital environment.",
        route: "/case-studies/software-tech/elite-class-lms",
    },

    {
        id: "07",
        image: TipsyScoop,
        category: "Food & Beverage Technology",
        title: "Tipsy Scoop",
        description:
            "A modern digital experience designed to connect customers with products through engaging visuals, intuitive navigation, and a premium interface.",
        route: "/case-studies/software-tech/tipsy-scoop",
    },

    {
        id: "08",
        image: NetBeatLiveProximous,
        category: "Streaming Technology",
        title: "NetBeat Live & Proximous",
        description:
            "A scalable streaming technology solution engineered to support real-time digital experiences, reliable content delivery, and audience engagement.",
        route: "/case-studies/software-tech/netbeat-live",
    },

    {
        id: "09",
        image: Charlotte,
        category: "Digital Platform",
        title: "Charlotte",
        description:
            "A polished digital solution designed to provide an intuitive experience while supporting modern business and technology requirements.",
        route: "/case-studies/software-tech/charlotte",
    },

    {
        id: "10",
        image: ElectionCampaign,
        category: "Custom Software Development",
        title: "Election Campaign Management Platform",
        description:
            "A powerful digital platform designed to simplify election campaign management, streamline communication, and organize campaign operations through one centralized system.",
        route: "/case-studies/software-tech/election-campaign-management",
    },

    {
        id: "11",
        image: JacketMaker,
        category: "E-Commerce Technology",
        title: "JacketMaker",
        description:
            "A modern digital commerce experience designed to simplify product discovery, customization, and online customer interaction.",
        route: "/case-studies/software-tech/jacketmaker",
    },

    {
        id: "12",
        image: TapVax,
        category: "Healthcare Technology",
        title: "TapVax",
        description:
            "A healthcare-focused digital solution designed to make vaccination-related processes more accessible, organized, and convenient through technology.",
        route: "/case-studies/software-tech/tapvax",
    },

    {
        id: "13",
        image: LiveStreamTriviaApp,
        category: "Live Streaming",
        title: "LiveStream Trivia App",
        description:
            "An interactive live-streaming experience combining real-time engagement, trivia, and digital entertainment into one connected platform.",
        route: "/case-studies/software-tech/livestream-trivia-app",
    },

    {
        id: "14",
        image: HealthMed,
        category: "Healthcare Technology",
        title: "HealthMed",
        description:
            "A healthcare-focused digital platform designed to improve accessibility, organization, and digital interaction through modern technology.",
        route: "/case-studies/software-tech/healthmed",
    },

    {
        id: "15",
        image: ScalableOTT,
        category: "OTT Solutions",
        title: "Scalable OTT Platform",
        description:
            "A scalable over-the-top streaming platform designed to support high-quality content delivery, flexible infrastructure, and growing digital audiences.",
        route: "/case-studies/software-tech/scalable-ott-platform",
    },

    {
        id: "16",
        image: Checkmate,
        category: "Technology Platform",
        title: "Checkmate",
        description:
            "A modern technology solution focused on delivering an efficient digital experience with scalable functionality and a clean interface.",
        route: "/case-studies/software-tech/checkmate",
    },

    {
        id: "17",
        image: FitnessWayQ8,
        category: "Health & Fitness",
        title: "FitnessWay Q8",
        description:
            "A digital fitness solution designed to deliver a seamless user experience while helping users manage their fitness journey through a modern technology platform.",
        route: "/case-studies/software-tech/fitnessway-q8",
    },

    {
        id: "18",
        image: Bavari,
        category: "Digital Experience",
        title: "Bavari",
        description:
            "A modern digital platform developed with a premium user experience, scalable architecture, and technology-focused solutions.",
        route: "/case-studies/software-tech/bavari",
    },

];


/* =========================================================
   COMPONENT
========================================================= */

function Software_Case_Study_Main_Section() {

    return (

        <section className="software-case-study-main-section">

            <div className="software-case-study-container">

                {caseStudies.map((study, index) => (

                    <motion.article
                        className="software-case-study-row"
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


                            {/* =====================================
                               VIEW CASE STUDY BUTTON
                            ===================================== */}

                            <Link
                                to={study.route}
                                className="software-case-study-button"
                            >

                                View Case Study

                                <span>
                                    ↗
                                </span>

                            </Link>

                        </div>


                        {/* =====================================
                           RIGHT — IMAGE
                        ===================================== */}

                        <Link
                            to={study.route}
                            className="software-case-study-image"
                        >

                            <img
                                src={study.image}
                                alt={study.title}
                            />

                        </Link>

                    </motion.article>

                ))}

            </div>

        </section>

    );

}


export default Software_Case_Study_Main_Section;