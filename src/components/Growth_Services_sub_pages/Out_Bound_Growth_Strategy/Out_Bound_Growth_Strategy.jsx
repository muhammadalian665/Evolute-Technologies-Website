import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    Bot,
    Check,
    ChevronRight,
    CircleCheck,
    Database,
    Globe2,
    Mail,
    MessageSquare,
    Network,
    Rocket,
    Send,
    ShieldCheck,
    Sparkles,
    Target,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react";

import "./Out_Bound_Growth_Strategy.css";


/* =========================================================
   OUTBOUND GROWTH STRATEGY
   Evolute Technologies
========================================================= */

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};


const staggerContainer = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};


const scaleReveal = {
    hidden: {
        opacity: 0,
        scale: 0.94,
    },

    visible: {
        opacity: 1,
        scale: 1,

        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};


/* =========================================================
   DATA
========================================================= */

const services = [
    {
        number: "01",
        icon: Target,
        title: "Targeted Lead Generation",
        text: "Build highly focused prospect lists around your ideal customer profile, buying signals, industry, role and business requirements.",

        points: [
            "ICP & buyer persona research",
            "Decision-maker identification",
            "Intent-based prospecting",
        ],
    },

    {
        number: "02",
        icon: Mail,
        title: "Cold Email Campaigns",
        text: "Turn cold prospects into conversations with strategic messaging, personalized sequences and continuously optimized campaigns.",

        points: [
            "Personalized email sequences",
            "Domain & inbox setup",
            "Campaign optimization",
        ],
    },

    {
        number: "03",
        icon: MessageSquare,
        title: "LinkedIn Outreach",
        text: "Reach the right decision-makers directly through thoughtful LinkedIn campaigns designed to start genuine business conversations.",

        points: [
            "Connection strategy",
            "Personalized outreach",
            "Follow-up sequences",
        ],
    },

    {
        number: "04",
        icon: Bot,
        title: "AI Lead Personalization",
        text: "Use AI-assisted research and personalization to create relevant outreach at scale without making every message sound automated.",

        points: [
            "AI-assisted research",
            "Personalized messaging",
            "Lead enrichment",
        ],
    },

    {
        number: "05",
        icon: Network,
        title: "Outbound Sales Systems",
        text: "Create a repeatable outbound engine connecting prospecting, outreach, qualification, follow-ups and reporting into one system.",

        points: [
            "CRM workflow design",
            "Lead routing",
            "Sales pipeline automation",
        ],
    },

    {
        number: "06",
        icon: BarChart3,
        title: "Campaign Optimization",
        text: "Track what is actually generating conversations and continuously improve targeting, messaging and campaign performance.",

        points: [
            "Performance analytics",
            "A/B testing",
            "Conversion optimization",
        ],
    },
];


const capabilities = [
    {
        icon: Users,
        title: "Ideal Customer Profiling",
        text: "Define exactly who your sales team should be speaking with.",
    },

    {
        icon: Database,
        title: "Lead Intelligence",
        text: "Enrich prospect data with relevant company and decision-maker insights.",
    },

    {
        icon: Sparkles,
        title: "Message Personalization",
        text: "Create outreach that feels researched, relevant and human.",
    },

    {
        icon: Send,
        title: "Multi-Channel Outreach",
        text: "Coordinate email, LinkedIn and follow-up touchpoints.",
    },

    {
        icon: TrendingUp,
        title: "Performance Tracking",
        text: "Measure replies, meetings, conversion rates and pipeline contribution.",
    },

    {
        icon: Zap,
        title: "Workflow Automation",
        text: "Reduce repetitive sales work while keeping control over the process.",
    },
];


const process = [
    {
        step: "01",
        title: "Research",
        text: "We understand your offer, market, ICP and sales objectives before building the campaign.",
    },

    {
        step: "02",
        title: "Build",
        text: "We create targeted lists, messaging frameworks, sequences and the supporting outbound infrastructure.",
    },

    {
        step: "03",
        title: "Launch",
        text: "Campaigns go live across the selected channels with controlled testing and monitoring.",
    },

    {
        step: "04",
        title: "Optimize",
        text: "Performance data is used to refine targeting, messaging and conversion opportunities.",
    },
];


const results = [
    {
        value: "3×",
        label: "More qualified conversations",
    },

    {
        value: "24/7",
        label: "Outbound activity",
    },

    {
        value: "1",
        label: "Connected growth system",
    },
];


/* =========================================================
   REUSABLE REVEAL COMPONENT
========================================================= */

function Reveal({
    children,
    className = "",
    delay = 0,
}) {
    const ref = useRef(null);

    const inView = useInView(ref, {
        once: true,
        amount: 0.15,
    });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Out_Bound_Growth_Strategy() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, []);


    return (
        <main className="outbound-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="outbound-hero">

                <div className="outbound-hero-grid" />

                <div className="outbound-container">

                    <div className="outbound-hero-layout">


                        {/* LEFT */}

                        <motion.div
                            className="outbound-hero-content"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >

                            <motion.div
                                className="outbound-eyebrow"
                                variants={fadeUp}
                            >
                                <span className="eyebrow-dot" />

                                OUTBOUND GROWTH STRATEGY
                            </motion.div>


                            <motion.h1 variants={fadeUp}>

                                Turn cold prospects into

                                <span>
                                    {" "}
                                    real sales conversations.
                                </span>

                            </motion.h1>


                            <motion.p
                                className="outbound-hero-description"
                                variants={fadeUp}
                            >
                                We build targeted outbound systems that help
                                B2B companies consistently reach the right
                                decision-makers, start meaningful conversations
                                and create qualified pipeline.
                            </motion.p>


                            {/* =================================================
                                HERO CTA BUTTONS
                            ================================================= */}

                            <motion.div
                                className="outbound-hero-actions"
                                variants={fadeUp}
                            >

                                {/* CONTACT US */}

                                <a
                                    href="/contact-us"
                                    className="outbound-btn outbound-btn-primary"
                                >
                                    Build Your Growth Engine

                                    <ArrowUpRight size={18} />
                                </a>


                                {/* CONTACT US */}

                                <a
                                    href="/contact-us"
                                    className="outbound-btn outbound-btn-secondary"
                                >
                                    Explore Strategy

                                    <ArrowRight size={17} />
                                </a>

                            </motion.div>


                            <motion.div
                                className="outbound-trust-row"
                                variants={fadeUp}
                            >

                                <div className="trust-item">
                                    <CircleCheck size={17} />
                                    <span>Targeted outreach</span>
                                </div>


                                <div className="trust-item">
                                    <CircleCheck size={17} />
                                    <span>Data-driven campaigns</span>
                                </div>


                                <div className="trust-item">
                                    <CircleCheck size={17} />
                                    <span>Scalable systems</span>
                                </div>

                            </motion.div>

                        </motion.div>


                        {/* =================================================
                            RIGHT VISUAL
                        ================================================= */}

                        <motion.div
                            className="outbound-hero-visual"
                            initial={{
                                opacity: 0,
                                x: 45,
                                scale: 0.94,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            <div className="hero-visual-glow" />


                            <div className="outbound-dashboard">

                                <div className="dashboard-top">

                                    <div>

                                        <span className="dashboard-label">
                                            OUTBOUND PIPELINE
                                        </span>

                                        <strong>
                                            Growth Overview
                                        </strong>

                                    </div>


                                    <div className="dashboard-status">

                                        <span />

                                        Live

                                    </div>

                                </div>


                                <div className="dashboard-metrics">

                                    <div className="dashboard-metric">

                                        <span>
                                            Qualified Leads
                                        </span>

                                        <strong>
                                            248
                                        </strong>

                                        <small>
                                            <TrendingUp size={12} />
                                            +28.4%
                                        </small>

                                    </div>


                                    <div className="dashboard-metric">

                                        <span>
                                            Meetings
                                        </span>

                                        <strong>
                                            64
                                        </strong>

                                        <small>
                                            <TrendingUp size={12} />
                                            +18.7%
                                        </small>

                                    </div>

                                </div>


                                <div className="dashboard-chart">

                                    <div className="chart-header">

                                        <span>
                                            Pipeline Growth
                                        </span>

                                        <span>
                                            Last 30 days
                                        </span>

                                    </div>


                                    <div className="chart-area">

                                        <div className="chart-line">

                                            <span className="chart-point point-1" />
                                            <span className="chart-point point-2" />
                                            <span className="chart-point point-3" />
                                            <span className="chart-point point-4" />
                                            <span className="chart-point point-5" />

                                        </div>

                                    </div>

                                </div>


                                <div className="dashboard-footer">

                                    <div className="mini-avatar-group">

                                        <span>JD</span>
                                        <span>MK</span>
                                        <span>AL</span>

                                    </div>

                                    <span>
                                        32 active campaigns
                                    </span>

                                </div>

                            </div>


                            {/* FLOATING LEAD CARD */}

                            <motion.div
                                className="floating-lead-card"
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >

                                <div className="floating-icon">
                                    <Target size={17} />
                                </div>

                                <div>

                                    <span>
                                        New qualified lead
                                    </span>

                                    <strong>
                                        +1 opportunity
                                    </strong>

                                </div>

                                <Check size={17} />

                            </motion.div>


                            {/* FLOATING MESSAGE */}

                            <motion.div
                                className="floating-message-card"
                                animate={{
                                    y: [0, 7, 0],
                                }}
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >

                                <MessageSquare size={16} />

                                <span>
                                    Reply received
                                </span>

                            </motion.div>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =================================================
                INTRO / RESULTS
            ================================================= */}

            <section className="outbound-intro-section">

                <div className="outbound-container">

                    <Reveal>

                        <div className="outbound-intro">

                            <div className="section-kicker">
                                A BETTER WAY TO BUILD PIPELINE
                            </div>


                            <h2>

                                Outbound shouldn't feel like

                                <span>
                                    {" "}
                                    sending messages into the void.
                                </span>

                            </h2>


                            <p>
                                The right outbound strategy combines precise
                                targeting, strong positioning, relevant
                                messaging and a system that gets smarter with
                                every campaign.
                            </p>

                        </div>

                    </Reveal>


                    <motion.div
                        className="results-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={staggerContainer}
                    >

                        {results.map((result, index) => (

                            <motion.div
                                className="result-item"
                                key={result.label}
                                variants={fadeUp}
                                custom={index}
                            >

                                <strong>
                                    {result.value}
                                </strong>

                                <span>
                                    {result.label}
                                </span>

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                SERVICES
            ================================================= */}

            <section
                className="outbound-services-section"
                id="services"
            >

                <div className="outbound-container">

                    <Reveal>

                        <div className="section-heading-row">

                            <div>

                                <div className="section-kicker">
                                    WHAT WE DO
                                </div>


                                <h2>

                                    Everything your outbound engine

                                    <span>
                                        {" "}
                                        needs to perform.
                                    </span>

                                </h2>

                            </div>


                            <p>
                                From finding the right accounts to turning
                                conversations into opportunities, we build the
                                system around your sales goals.
                            </p>

                        </div>

                    </Reveal>


                    <motion.div
                        className="services-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.12,
                        }}
                        variants={staggerContainer}
                    >

                        {services.map((service) => {

                            const Icon = service.icon;

                            return (

                                <motion.article
                                    className="outbound-service-card"
                                    key={service.number}
                                    variants={fadeUp}
                                >

                                    <div className="service-card-top">

                                        <span className="service-number">
                                            {service.number}
                                        </span>


                                        <div className="service-icon">

                                            <Icon size={21} />

                                        </div>

                                    </div>


                                    <div className="service-card-content">

                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.text}
                                        </p>

                                    </div>


                                    <ul className="service-points">

                                        {service.points.map((point) => (

                                            <li key={point}>

                                                <Check size={15} />

                                                {point}

                                            </li>

                                        ))}

                                    </ul>


                                    <div className="service-card-arrow">

                                        <ArrowUpRight size={19} />

                                    </div>

                                </motion.article>

                            );

                        })}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                STRATEGY SECTION
            ================================================= */}

            <section className="outbound-strategy-section">

                <div className="outbound-container">

                    <div className="strategy-layout">


                        <Reveal className="strategy-content">

                            <div className="section-kicker">
                                THE SYSTEM
                            </div>


                            <h2>

                                Build a growth system,

                                <span>
                                    {" "}
                                    not a one-off campaign.
                                </span>

                            </h2>


                            <p>
                                Sustainable outbound performance comes from
                                connecting the entire journey — from identifying
                                the right account to creating the right
                                conversation at the right time.
                            </p>


                            <div className="strategy-list">


                                <div className="strategy-list-item">

                                    <div className="strategy-list-icon">
                                        <Target size={18} />
                                    </div>

                                    <div>

                                        <strong>
                                            Precision targeting
                                        </strong>

                                        <span>
                                            Focus your effort on accounts that
                                            actually fit your business.
                                        </span>

                                    </div>

                                </div>


                                <div className="strategy-list-item">

                                    <div className="strategy-list-icon">
                                        <Sparkles size={18} />
                                    </div>

                                    <div>

                                        <strong>
                                            Relevant messaging
                                        </strong>

                                        <span>
                                            Give prospects a reason to start a
                                            conversation.
                                        </span>

                                    </div>

                                </div>


                                <div className="strategy-list-item">

                                    <div className="strategy-list-icon">
                                        <TrendingUp size={18} />
                                    </div>

                                    <div>

                                        <strong>
                                            Continuous optimization
                                        </strong>

                                        <span>
                                            Improve campaigns using real
                                            performance data.
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </Reveal>


                        <Reveal className="strategy-visual">

                            <div className="strategy-orbit">

                                <div className="orbit-ring orbit-ring-one" />
                                <div className="orbit-ring orbit-ring-two" />
                                <div className="orbit-ring orbit-ring-three" />


                                <motion.div
                                    className="orbit-center"
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 22,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >

                                    <div className="orbit-center-inner">
                                        <Rocket size={27} />
                                    </div>

                                </motion.div>


                                <motion.div
                                    className="orbit-node orbit-node-one"
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Users size={18} />
                                </motion.div>


                                <motion.div
                                    className="orbit-node orbit-node-two"
                                    animate={{
                                        y: [0, 8, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Mail size={18} />
                                </motion.div>


                                <motion.div
                                    className="orbit-node orbit-node-three"
                                    animate={{
                                        x: [0, 8, 0],
                                    }}
                                    transition={{
                                        duration: 3.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <BarChart3 size={18} />
                                </motion.div>


                                <motion.div
                                    className="orbit-node orbit-node-four"
                                    animate={{
                                        x: [0, -8, 0],
                                    }}
                                    transition={{
                                        duration: 4.2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <MessageSquare size={18} />
                                </motion.div>

                            </div>

                        </Reveal>

                    </div>

                </div>

            </section>


            {/* =================================================
                CAPABILITIES
            ================================================= */}

            <section className="outbound-capabilities-section">

                <div className="outbound-container">

                    <Reveal>

                        <div className="center-section-heading">

                            <div className="section-kicker">
                                CAPABILITIES
                            </div>


                            <h2>

                                The pieces behind a

                                <span>
                                    {" "}
                                    high-performing outbound engine.
                                </span>

                            </h2>


                            <p>
                                A strategic combination of people, data,
                                technology and messaging.
                            </p>

                        </div>

                    </Reveal>


                    <motion.div
                        className="capabilities-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={staggerContainer}
                    >

                        {capabilities.map((item) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    className="capability-card"
                                    key={item.title}
                                    variants={scaleReveal}
                                >

                                    <div className="capability-icon">
                                        <Icon size={20} />
                                    </div>


                                    <h3>
                                        {item.title}
                                    </h3>


                                    <p>
                                        {item.text}
                                    </p>


                                    <ChevronRight
                                        className="capability-arrow"
                                        size={18}
                                    />

                                </motion.div>

                            );

                        })}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                PROCESS
            ================================================= */}

            <section className="outbound-process-section">

                <div className="outbound-container">

                    <Reveal>

                        <div className="section-heading-row process-heading">

                            <div>

                                <div className="section-kicker">
                                    HOW IT WORKS
                                </div>


                                <h2>

                                    From strategy to

                                    <span>
                                        {" "}
                                        qualified pipeline.
                                    </span>

                                </h2>

                            </div>


                            <p>
                                A simple process designed to create clarity,
                                momentum and measurable progress.
                            </p>

                        </div>

                    </Reveal>


                    <div className="process-wrapper">

                        <div className="process-line" />


                        <motion.div
                            className="process-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={staggerContainer}
                        >

                            {process.map((item) => (

                                <motion.div
                                    className="process-item"
                                    key={item.step}
                                    variants={fadeUp}
                                >

                                    <div className="process-number">
                                        {item.step}
                                    </div>


                                    <h3>
                                        {item.title}
                                    </h3>


                                    <p>
                                        {item.text}
                                    </p>

                                </motion.div>

                            ))}

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =================================================
                WHY EVOLUTE
            ================================================= */}

            <section className="outbound-why-section">

                <div className="outbound-container">

                    <div className="why-layout">


                        <Reveal>

                            <div className="why-card">

                                <div className="why-card-badge">

                                    <ShieldCheck size={17} />

                                    BUILT FOR B2B

                                </div>


                                <h2>

                                    Growth infrastructure

                                    <span>
                                        {" "}
                                        that compounds.
                                    </span>

                                </h2>


                                <p>
                                    Instead of chasing random leads, build an
                                    outbound system that becomes more effective
                                    as your data, messaging and market knowledge
                                    improve.
                                </p>


                                {/* CONTACT US */}

                                <a
                                    href="/contact-us"
                                    className="why-link"
                                >

                                    Talk to our growth team

                                    <ArrowUpRight size={18} />

                                </a>

                            </div>

                        </Reveal>


                        <motion.div
                            className="why-points"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            variants={staggerContainer}
                        >


                            <motion.div
                                className="why-point"
                                variants={fadeUp}
                            >

                                <div>
                                    <Globe2 size={20} />
                                </div>


                                <section>

                                    <h3>
                                        Reach beyond your network
                                    </h3>


                                    <p>
                                        Open conversations with companies and
                                        decision-makers you wouldn't normally
                                        reach through referrals.
                                    </p>

                                </section>

                            </motion.div>


                            <motion.div
                                className="why-point"
                                variants={fadeUp}
                            >

                                <div>
                                    <Zap size={20} />
                                </div>


                                <section>

                                    <h3>
                                        Move faster
                                    </h3>


                                    <p>
                                        Replace manual prospecting with a
                                        structured system designed for
                                        consistent execution.
                                    </p>

                                </section>

                            </motion.div>


                            <motion.div
                                className="why-point"
                                variants={fadeUp}
                            >

                                <div>
                                    <BarChart3 size={20} />
                                </div>


                                <section>

                                    <h3>
                                        Know what works
                                    </h3>


                                    <p>
                                        Use campaign data to understand which
                                        audiences, messages and channels drive
                                        real opportunities.
                                    </p>

                                </section>

                            </motion.div>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="outbound-final-cta">

                <div className="cta-background-grid" />


                <div className="outbound-container">

                    <motion.div
                        className="final-cta-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        variants={staggerContainer}
                    >


                        <motion.div
                            className="cta-icon"
                            variants={scaleReveal}
                        >

                            <Rocket size={24} />

                        </motion.div>


                        <motion.div variants={fadeUp}>

                            <div className="section-kicker">
                                READY TO SCALE?
                            </div>


                            <h2>

                                Your next growth channel

                                <span>
                                    {" "}
                                    starts with the right system.
                                </span>

                            </h2>


                            <p>
                                Let's build an outbound strategy around your
                                market, your offer and the customers you want
                                to win.
                            </p>

                        </motion.div>


                        <motion.div
                            className="final-cta-actions"
                            variants={fadeUp}
                        >

                            {/* CONTACT US */}

                            <a
                                href="/contact-us"
                                className="outbound-btn outbound-btn-light"
                            >

                                Start a Conversation

                                <ArrowUpRight size={18} />

                            </a>


                            {/* CONTACT US */}

                            <a
                                href="/contact-us"
                                className="cta-text-link"
                            >

                                View all services

                                <ArrowRight size={16} />

                            </a>

                        </motion.div>

                    </motion.div>

                </div>

            </section>

        </main>
    );
}