import React from "react";
import { motion } from "framer-motion";

import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    Check,
    CheckCircle2,
    ChevronDown,
    Crosshair,
    Database,
    Filter,
    Mail,
    MessageSquare,
    Network,
    Radar,
    Search,
    Send,
    Sparkles,
    Target,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react";

import "./Linkedin_Outreach.css";

/* =========================================================
   CUSTOM LINKEDIN ICON
   Avoids lucide-react Linkedin export compatibility issue
========================================================= */

function LinkedInIcon({ size = 20, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.33 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.55 20.45h3.56V8.99H3.55v11.46Z" />
        </svg>
    );
}

/* =========================================================
   ANIMATION VARIANTS
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

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -35,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 35,
    },

    visible: {
        opacity: 1,
        x: 0,
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

/* =========================================================
   SERVICES
========================================================= */

const services = [
    {
        number: "01",
        icon: Target,
        title: "ICP & Audience Targeting",
        description:
            "Define the companies, industries, job titles, seniority levels and buying signals that matter to your business.",
        items: [
            "Ideal customer profile",
            "Industry & company filters",
            "Decision-maker targeting",
            "Location & market segmentation",
        ],
    },

    {
        number: "02",
        icon: Search,
        title: "Lead Research & Prospecting",
        description:
            "Build focused prospect lists instead of collecting random connections. Every lead is selected around your commercial criteria.",
        items: [
            "Decision-maker identification",
            "Company research",
            "Lead qualification",
            "Prospect database building",
        ],
    },

    {
        number: "03",
        icon: MessageSquare,
        title: "Personalized Messaging",
        description:
            "Turn cold outreach into relevant conversations with messaging built around the prospect's role, company and context.",
        items: [
            "Connection messages",
            "Personalized openers",
            "Pain-point messaging",
            "Conversation-based CTAs",
        ],
    },

    {
        number: "04",
        icon: Network,
        title: "Multi-Step Outreach",
        description:
            "Use structured follow-up sequences that create multiple opportunities to start a conversation without becoming repetitive.",
        items: [
            "Connection workflow",
            "Follow-up sequences",
            "Value-based touchpoints",
            "Response handling",
        ],
    },

    {
        number: "05",
        icon: Filter,
        title: "Lead Qualification",
        description:
            "Separate genuine opportunities from casual responses so your sales team can spend time where it actually matters.",
        items: [
            "Interest detection",
            "Lead qualification",
            "Opportunity categorization",
            "Sales handoff",
        ],
    },

    {
        number: "06",
        icon: BarChart3,
        title: "Campaign Optimization",
        description:
            "Measure what is working and continuously refine targeting, messaging and sequences using real campaign signals.",
        items: [
            "Campaign tracking",
            "Response analysis",
            "Messaging optimization",
            "Performance reporting",
        ],
    },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
    {
        number: "01",
        title: "Define",
        description:
            "We establish your ICP, target market, decision-makers and the commercial outcome the campaign needs to generate.",
        icon: Crosshair,
    },

    {
        number: "02",
        title: "Research",
        description:
            "We identify relevant companies and decision-makers and build a qualified prospect pool around your criteria.",
        icon: Database,
    },

    {
        number: "03",
        title: "Personalize",
        description:
            "Messaging is developed around the prospect's context instead of relying on generic copy-paste outreach.",
        icon: Sparkles,
    },

    {
        number: "04",
        title: "Engage",
        description:
            "Prospects enter a structured outreach flow designed to start conversations naturally and consistently.",
        icon: Send,
    },

    {
        number: "05",
        title: "Qualify",
        description:
            "Responses are monitored and qualified so genuine buying conversations can move toward your sales process.",
        icon: CheckCircle2,
    },

    {
        number: "06",
        title: "Optimize",
        description:
            "Campaign data is reviewed continuously to improve targeting, messaging and conversion performance.",
        icon: TrendingUp,
    },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
    {
        icon: Users,
        title: "Reach the right people",
        description:
            "Focus your outbound effort on decision-makers who fit your actual customer profile.",
    },

    {
        icon: MessageSquare,
        title: "Start better conversations",
        description:
            "Lead with relevance instead of sending the same generic pitch to everyone.",
    },

    {
        icon: Zap,
        title: "Create a repeatable system",
        description:
            "Turn LinkedIn prospecting into a structured process your business can measure and improve.",
    },

    {
        icon: TrendingUp,
        title: "Improve over time",
        description:
            "Use response data to continuously improve targeting, messaging and campaign performance.",
    },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
    {
        question: "Who is LinkedIn outreach best suited for?",
        answer:
            "LinkedIn outreach works especially well for B2B companies, software agencies, SaaS businesses, consultants, professional services and other businesses where a specific decision-maker can be identified.",
    },

    {
        question: "Do you only send connection requests?",
        answer:
            "No. The system covers the complete outreach journey — audience targeting, prospect research, connection messaging, follow-ups, conversation handling, qualification and performance optimization.",
    },

    {
        question: "Are the messages personalized?",
        answer:
            "Yes. The goal is not to blast generic messages. Outreach can be personalized around role, company, industry, business context, challenges and relevant use cases.",
    },

    {
        question: "Can you target specific industries or countries?",
        answer:
            "Yes. Campaigns can be structured around specific industries, company sizes, job titles, seniority levels, locations and other ICP criteria.",
    },

    {
        question: "How do you measure campaign performance?",
        answer:
            "We look beyond connection volume. Important signals include acceptance, engagement, response quality, qualified conversations, opportunities and the overall efficiency of the campaign.",
    },
];

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}) {
    return (
        <motion.div
            className={`linkedin-section-heading linkedin-align-${align}`}
            variants={fadeUp}
        >
            <span className="linkedin-eyebrow">
                <span className="linkedin-eyebrow-dot" />
                {eyebrow}
            </span>

            <h2>{title}</h2>

            {description && <p>{description}</p>}
        </motion.div>
    );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function Linkedin_Outreach() {
    const [openFaq, setOpenFaq] = React.useState(0);

    return (
        <main className="linkedin-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="linkedin-hero">
                <div className="linkedin-hero-grid" />

                <div className="linkedin-hero-glow linkedin-glow-one" />
                <div className="linkedin-hero-glow linkedin-glow-two" />

                <div className="linkedin-container linkedin-hero-container">

                    {/* HERO CONTENT */}

                    <motion.div
                        className="linkedin-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >

                        <motion.div
                            className="linkedin-hero-badge"
                            variants={fadeUp}
                        >
                            <span className="linkedin-badge-icon">
                                <LinkedInIcon size={16} />
                            </span>

                            LinkedIn Outreach
                        </motion.div>

                        <motion.h1 variants={fadeUp}>
                            Turn LinkedIn into a
                            <span>
                                {" "}
                                predictable B2B growth channel.
                            </span>
                        </motion.h1>

                        <motion.p
                            className="linkedin-hero-description"
                            variants={fadeUp}
                        >
                            Reach the right decision-makers, start relevant
                            conversations and turn LinkedIn prospecting into a
                            structured pipeline generation system.
                        </motion.p>

                        <motion.div
                            className="linkedin-hero-actions"
                            variants={fadeUp}
                        >
                            <a
                                href="/contact"
                                className="linkedin-primary-btn"
                            >
                                Start a Conversation
                                <ArrowUpRight size={18} />
                            </a>

                            <a
                                href="#how-it-works"
                                className="linkedin-secondary-btn"
                            >
                                Explore the Process
                                <ArrowRight size={17} />
                            </a>
                        </motion.div>

                        <motion.div
                            className="linkedin-hero-proof"
                            variants={fadeUp}
                        >
                            <div>
                                <Check size={15} />
                                <span>Targeted prospects</span>
                            </div>

                            <div>
                                <Check size={15} />
                                <span>Personalized messaging</span>
                            </div>

                            <div>
                                <Check size={15} />
                                <span>Measurable campaigns</span>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* =================================================
                        HERO VISUAL
                    ================================================= */}

                    <motion.div
                        className="linkedin-hero-visual"
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            x: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <div className="linkedin-orbit orbit-one" />
                        <div className="linkedin-orbit orbit-two" />

                        {/* FLOATING NODE 1 */}

                        <motion.div
                            className="linkedin-floating-node node-one"
                            animate={{
                                y: [0, -12, 0],
                                rotate: [0, 4, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Users size={18} />
                            <span>Decision Makers</span>
                        </motion.div>

                        {/* FLOATING NODE 2 */}

                        <motion.div
                            className="linkedin-floating-node node-two"
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, -4, 0],
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <MessageSquare size={18} />
                            <span>Conversations</span>
                        </motion.div>

                        {/* FLOATING NODE 3 */}

                        <motion.div
                            className="linkedin-floating-node node-three"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 3.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <TrendingUp size={18} />
                            <span>Pipeline</span>
                        </motion.div>

                        {/* DASHBOARD */}

                        <div className="linkedin-dashboard">

                            <div className="linkedin-dashboard-top">

                                <div className="linkedin-dashboard-brand">

                                    <div className="linkedin-mini-logo">
                                        <LinkedInIcon size={19} />
                                    </div>

                                    <div>
                                        <strong>
                                            Outbound Engine
                                        </strong>

                                        <span>
                                            Campaign overview
                                        </span>
                                    </div>

                                </div>

                                <div className="linkedin-live">
                                    <span />
                                    Live
                                </div>

                            </div>

                            <div className="linkedin-dashboard-main">

                                {/* PROFILE */}

                                <div className="linkedin-profile-card">

                                    <div className="linkedin-profile-avatar">
                                        JD
                                    </div>

                                    <div className="linkedin-profile-info">
                                        <strong>
                                            Decision Maker
                                        </strong>

                                        <span>
                                            VP of Growth · B2B SaaS
                                        </span>
                                    </div>

                                    <div className="linkedin-match">
                                        94%
                                    </div>

                                </div>

                                {/* MESSAGE */}

                                <div className="linkedin-message-preview">

                                    <div className="linkedin-message-header">

                                        <div>
                                            <span className="linkedin-status-dot" />
                                            Personalized outreach
                                        </div>

                                        <span>
                                            Just now
                                        </span>

                                    </div>

                                    <p>
                                        Hi James, noticed your team is
                                        expanding its outbound motion...
                                    </p>

                                    <div className="linkedin-message-actions">
                                        <span>Relevant</span>
                                        <span>Personalized</span>
                                        <span>Ready</span>
                                    </div>

                                </div>

                                {/* STATS */}

                                <div className="linkedin-dashboard-stats">

                                    <div>
                                        <span>
                                            Prospects
                                        </span>

                                        <strong>
                                            1,284
                                        </strong>

                                        <small>
                                            <TrendingUp size={11} />
                                            18.4%
                                        </small>
                                    </div>

                                    <div>
                                        <span>
                                            Replies
                                        </span>

                                        <strong>
                                            186
                                        </strong>

                                        <small>
                                            <TrendingUp size={11} />
                                            12.8%
                                        </small>
                                    </div>

                                    <div>
                                        <span>
                                            Qualified
                                        </span>

                                        <strong>
                                            42
                                        </strong>

                                        <small>
                                            <TrendingUp size={11} />
                                            9.6%
                                        </small>
                                    </div>

                                </div>

                                {/* CHART */}

                                <div className="linkedin-chart">

                                    <div className="linkedin-chart-header">
                                        <span>
                                            Campaign momentum
                                        </span>

                                        <span>
                                            Last 30 days
                                        </span>
                                    </div>

                                    <div className="linkedin-chart-line">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>

                                </div>

                            </div>
                        </div>

                    </motion.div>

                </div>
            </section>

            {/* =====================================================
                INTRO
            ===================================================== */}

            <section className="linkedin-intro">
                <div className="linkedin-container">

                    <motion.div
                        className="linkedin-intro-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={staggerContainer}
                    >

                        <motion.div variants={fadeLeft}>

                            <span className="linkedin-small-label">
                                LinkedIn should be more than networking.
                            </span>

                            <h2>
                                Your next customer is already
                                <span>
                                    {" "}
                                    somewhere in your network.
                                </span>
                            </h2>

                        </motion.div>

                        <motion.div
                            className="linkedin-intro-copy"
                            variants={fadeRight}
                        >

                            <p>
                                The challenge is finding the right people,
                                reaching them with the right context and
                                turning a cold profile view into an actual
                                business conversation.
                            </p>

                            <p>
                                Our LinkedIn outreach service combines
                                strategic targeting, prospect research,
                                personalized messaging and structured
                                follow-ups into one focused outbound system.
                            </p>

                        </motion.div>

                    </motion.div>

                </div>
            </section>

            {/* =====================================================
                SERVICES
            ===================================================== */}

            <section className="linkedin-services">
                <div className="linkedin-container">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={staggerContainer}
                    >

                        <SectionHeading
                            eyebrow="WHAT WE HANDLE"
                            title="Everything required to turn outreach into a system."
                            description="From defining who you should reach to analyzing which conversations create opportunities, every part of the workflow is connected."
                            align="center"
                        />

                        <div className="linkedin-services-grid">

                            {services.map((service) => {

                                const Icon = service.icon;

                                return (
                                    <motion.article
                                        className="linkedin-service-card"
                                        key={service.number}
                                        variants={fadeUp}
                                        whileHover={{
                                            y: -8,
                                            transition: {
                                                duration: 0.25,
                                            },
                                        }}
                                    >

                                        <div className="linkedin-service-top">

                                            <span>
                                                {service.number}
                                            </span>

                                            <div className="linkedin-service-icon">
                                                <Icon size={21} />
                                            </div>

                                        </div>

                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.description}
                                        </p>

                                        <ul>
                                            {service.items.map((item) => (
                                                <li key={item}>
                                                    <Check size={14} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="linkedin-card-arrow">
                                            <ArrowUpRight size={18} />
                                        </div>

                                    </motion.article>
                                );
                            })}

                        </div>

                    </motion.div>

                </div>
            </section>

            {/* =====================================================
                WHY IT WORKS
            ===================================================== */}

            <section className="linkedin-why">
                <div className="linkedin-container">

                    <motion.div
                        className="linkedin-why-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={staggerContainer}
                    >

                        {/* RADAR */}

                        <motion.div
                            className="linkedin-why-visual"
                            variants={fadeLeft}
                        >

                            <div className="linkedin-radar">

                                <div className="radar-ring radar-ring-one" />
                                <div className="radar-ring radar-ring-two" />
                                <div className="radar-ring radar-ring-three" />

                                <div className="radar-cross horizontal" />
                                <div className="radar-cross vertical" />

                                <motion.div
                                    className="radar-sweep"
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                <div className="radar-center">
                                    <Radar size={25} />
                                </div>

                                <motion.span
                                    className="radar-point point-a"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />

                                <motion.span
                                    className="radar-point point-b"
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                    }}
                                />

                                <motion.span
                                    className="radar-point point-c"
                                    animate={{
                                        scale: [1, 1.6, 1],
                                        opacity: [0.4, 1, 0.4],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />

                            </div>

                        </motion.div>

                        {/* CONTENT */}

                        <motion.div
                            className="linkedin-why-content"
                            variants={fadeRight}
                        >

                            <span className="linkedin-eyebrow">
                                <span className="linkedin-eyebrow-dot" />
                                WHY THIS WORKS
                            </span>

                            <h2>
                                Stop chasing volume.
                                <span>
                                    {" "}
                                    Start building relevance.
                                </span>
                            </h2>

                            <p>
                                More connection requests do not automatically
                                mean more customers. Effective outbound starts
                                with understanding who is worth contacting and
                                why they should care.
                            </p>

                            <div className="linkedin-why-points">

                                <div className="linkedin-why-point">

                                    <div>
                                        <Crosshair size={19} />
                                    </div>

                                    <section>
                                        <h4>
                                            Precision targeting
                                        </h4>

                                        <p>
                                            Focus on accounts and
                                            decision-makers that fit your
                                            commercial criteria.
                                        </p>
                                    </section>

                                </div>

                                <div className="linkedin-why-point">

                                    <div>
                                        <Sparkles size={19} />
                                    </div>

                                    <section>
                                        <h4>
                                            Context-driven messaging
                                        </h4>

                                        <p>
                                            Give prospects a reason to respond
                                            instead of another generic sales
                                            pitch.
                                        </p>
                                    </section>

                                </div>

                                <div className="linkedin-why-point">

                                    <div>
                                        <TrendingUp size={19} />
                                    </div>

                                    <section>
                                        <h4>
                                            Continuous optimization
                                        </h4>

                                        <p>
                                            Learn from actual responses and
                                            continuously improve the campaign.
                                        </p>
                                    </section>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                </div>
            </section>

            {/* =====================================================
                HOW IT WORKS
            ===================================================== */}

            <section
                className="linkedin-process"
                id="how-it-works"
            >
                <div className="linkedin-container">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={staggerContainer}
                    >

                        <SectionHeading
                            eyebrow="HOW IT WORKS"
                            title="A structured outbound process, built around your business."
                            description="We connect strategy, research, messaging and optimization so LinkedIn becomes a repeatable acquisition channel."
                            align="center"
                        />

                        <div className="linkedin-process-grid">

                            <div className="linkedin-process-line" />

                            {process.map((item) => {

                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        className="linkedin-process-item"
                                        key={item.number}
                                        variants={fadeUp}
                                    >

                                        <div className="linkedin-process-number">
                                            {item.number}
                                        </div>

                                        <div className="linkedin-process-icon">
                                            <Icon size={20} />
                                        </div>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>

                                    </motion.div>
                                );
                            })}

                        </div>

                    </motion.div>

                </div>
            </section>

            {/* =====================================================
                BENEFITS
            ===================================================== */}

            <section className="linkedin-benefits">
                <div className="linkedin-container">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={staggerContainer}
                    >

                        <SectionHeading
                            eyebrow="THE OUTCOME"
                            title="Built around what actually moves B2B buyers."
                            description="The objective is not to make your LinkedIn account look busy. It is to create a healthier flow of relevant business conversations."
                            align="center"
                        />

                        <div className="linkedin-benefits-grid">

                            {benefits.map((benefit) => {

                                const Icon = benefit.icon;

                                return (
                                    <motion.div
                                        className="linkedin-benefit-card"
                                        key={benefit.title}
                                        variants={fadeUp}
                                        whileHover={{
                                            y: -7,
                                            transition: {
                                                duration: 0.25,
                                            },
                                        }}
                                    >

                                        <div className="linkedin-benefit-icon">
                                            <Icon size={21} />
                                        </div>

                                        <h3>
                                            {benefit.title}
                                        </h3>

                                        <p>
                                            {benefit.description}
                                        </p>

                                    </motion.div>
                                );
                            })}

                        </div>

                    </motion.div>

                </div>
            </section>

            {/* =====================================================
                CAMPAIGN STACK
            ===================================================== */}

            <section className="linkedin-stack">
                <div className="linkedin-container">

                    <motion.div
                        className="linkedin-stack-box"
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >

                        <div className="linkedin-stack-content">

                            <span className="linkedin-eyebrow">
                                <span className="linkedin-eyebrow-dot" />
                                THE OUTBOUND STACK
                            </span>

                            <h2>
                                One connected system.
                                <span>
                                    {" "}
                                    Multiple growth signals.
                                </span>
                            </h2>

                            <p>
                                Every stage feeds information into the next,
                                creating a stronger outbound loop instead of
                                disconnected marketing activities.
                            </p>

                            <div className="linkedin-stack-list">

                                <div>
                                    <span>01</span>
                                    <strong>Target</strong>
                                    <small>
                                        Find the right accounts
                                    </small>
                                </div>

                                <div>
                                    <span>02</span>
                                    <strong>Research</strong>
                                    <small>
                                        Understand the prospect
                                    </small>
                                </div>

                                <div>
                                    <span>03</span>
                                    <strong>Engage</strong>
                                    <small>
                                        Start relevant conversations
                                    </small>
                                </div>

                                <div>
                                    <span>04</span>
                                    <strong>Qualify</strong>
                                    <small>
                                        Identify genuine opportunities
                                    </small>
                                </div>

                                <div>
                                    <span>05</span>
                                    <strong>Optimize</strong>
                                    <small>
                                        Improve from real data
                                    </small>
                                </div>

                            </div>

                        </div>

                        <div className="linkedin-stack-visual">

                            <motion.div
                                className="stack-center"
                                animate={{
                                    boxShadow: [
                                        "0 0 0 rgba(60,210,249,0)",
                                        "0 0 40px rgba(60,210,249,.18)",
                                        "0 0 0 rgba(60,210,249,0)",
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                }}
                            >
                                <LinkedInIcon size={30} />
                            </motion.div>

                            <div className="stack-node stack-node-one">
                                <Target size={17} />
                                Target
                            </div>

                            <div className="stack-node stack-node-two">
                                <Search size={17} />
                                Research
                            </div>

                            <div className="stack-node stack-node-three">
                                <MessageSquare size={17} />
                                Engage
                            </div>

                            <div className="stack-node stack-node-four">
                                <CheckCircle2 size={17} />
                                Qualify
                            </div>

                            <div className="stack-node stack-node-five">
                                <BarChart3 size={17} />
                                Optimize
                            </div>

                            <div className="stack-line line-one" />
                            <div className="stack-line line-two" />
                            <div className="stack-line line-three" />
                            <div className="stack-line line-four" />
                            <div className="stack-line line-five" />

                        </div>

                    </motion.div>

                </div>
            </section>

            {/* =====================================================
                FAQ
            ===================================================== */}

            <section className="linkedin-faq">
                <div className="linkedin-container">

                    <motion.div
                        className="linkedin-faq-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={staggerContainer}
                    >

                        <motion.div variants={fadeLeft}>

                            <span className="linkedin-eyebrow">
                                <span className="linkedin-eyebrow-dot" />
                                FAQ
                            </span>

                            <h2>
                                Questions before
                                <span>
                                    {" "}
                                    getting started?
                                </span>
                            </h2>

                            <p>
                                Here are some of the questions businesses
                                usually have before launching a LinkedIn
                                outreach campaign.
                            </p>

                            <a
                                href="/contact"
                                className="linkedin-faq-contact"
                            >
                                Talk to our team
                                <ArrowUpRight size={17} />
                            </a>

                        </motion.div>

                        <motion.div
                            className="linkedin-faq-list"
                            variants={fadeRight}
                        >

                            {faqs.map((faq, index) => {

                                const isOpen = openFaq === index;

                                return (
                                    <div
                                        className={`linkedin-faq-item ${
                                            isOpen ? "active" : ""
                                        }`}
                                        key={faq.question}
                                    >

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen ? -1 : index
                                                )
                                            }
                                        >

                                            <span>
                                                {faq.question}
                                            </span>

                                            <ChevronDown
                                                size={18}
                                                className={
                                                    isOpen
                                                        ? "faq-chevron-open"
                                                        : ""
                                                }
                                            />

                                        </button>

                                        <motion.div
                                            className="linkedin-faq-answer"
                                            initial={false}
                                            animate={{
                                                height: isOpen
                                                    ? "auto"
                                                    : 0,
                                                opacity: isOpen
                                                    ? 1
                                                    : 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                        >
                                            <p>
                                                {faq.answer}
                                            </p>
                                        </motion.div>

                                    </div>
                                );
                            })}

                        </motion.div>

                    </motion.div>

                </div>
            </section>

            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="linkedin-final-cta">

                <div className="linkedin-final-grid" />

                <motion.div
                    className="linkedin-final-glow"
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <div className="linkedin-container">

                    <motion.div
                        className="linkedin-cta-content"
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >

                        <span className="linkedin-cta-badge">
                            <Sparkles size={15} />
                            Ready to build your outbound engine?
                        </span>

                        <h2>
                            Make LinkedIn work
                            <span>
                                {" "}
                                harder for your business.
                            </span>
                        </h2>

                        <p>
                            Let's build a focused outreach system around your
                            market, your buyers and your growth goals.
                        </p>

                        <div className="linkedin-cta-actions">

                            <a
                                href="/contact"
                                className="linkedin-primary-btn linkedin-cta-btn"
                            >
                                Let's Talk
                                <ArrowUpRight size={18} />
                            </a>

                            <a
                                href="mailto:hello@evolutetechnologies.com"
                                className="linkedin-cta-email"
                            >
                                <Mail size={17} />
                                hello@evolutetechnologies.com
                            </a>

                        </div>

                    </motion.div>

                </div>

            </section>

        </main>
    );
}

export default Linkedin_Outreach;