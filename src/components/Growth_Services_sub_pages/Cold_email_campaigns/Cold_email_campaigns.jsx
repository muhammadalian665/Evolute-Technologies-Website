import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    Check,
    CheckCircle2,
    ChevronDown,
    Crosshair,
    Database,
    
    Mail,
    MessageSquare,

    Radar,
    Search,
    Send,
    ShieldCheck,
    Sparkles,
    Target,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react";

import "./Cold_email_campaigns.css";

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
            "Define the companies, industries, roles and decision-makers most likely to become valuable customers.",
        items: [
            "Ideal customer profile",
            "Industry targeting",
            "Decision-maker identification",
            "Company size & location filters",
        ],
    },

    {
        number: "02",
        icon: Database,
        title: "Lead Research & Data",
        description:
            "Build a focused prospect database using commercial criteria instead of relying on generic contact lists.",
        items: [
            "Prospect research",
            "Contact verification",
            "Company intelligence",
            "Qualified lead databases",
        ],
    },

    {
        number: "03",
        icon: Sparkles,
        title: "Email Personalization",
        description:
            "Create relevant emails that connect your offer with the prospect's business, role and potential challenges.",
        items: [
            "Personalized opening lines",
            "Role-based messaging",
            "Business context",
            "Relevant CTAs",
        ],
    },

    {
        number: "04",
        icon: Send,
        title: "Multi-Step Email Sequences",
        description:
            "Build structured sequences that give prospects multiple opportunities to respond without becoming repetitive.",
        items: [
            "Initial outreach",
            "Strategic follow-ups",
            "Value-based emails",
            "Response handling",
        ],
    },

    {
        number: "05",
        icon: ShieldCheck,
        title: "Deliverability Setup",
        description:
            "Build campaigns around responsible sending practices and a strong foundation for long-term email performance.",
        items: [
            "Sending infrastructure",
            "Domain strategy",
            "List hygiene",
            "Deliverability monitoring",
        ],
    },

    {
        number: "06",
        icon: BarChart3,
        title: "Campaign Optimization",
        description:
            "Use campaign signals to continuously improve targeting, messaging, sequences and overall conversion performance.",
        items: [
            "Campaign tracking",
            "Reply analysis",
            "A/B testing",
            "Performance optimization",
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
            "We establish your ICP, target market, buyer roles and the commercial outcome the campaign needs to generate.",
        icon: Crosshair,
    },

    {
        number: "02",
        title: "Build",
        description:
            "We research relevant companies and decision-makers and build a focused prospect database around your criteria.",
        icon: Database,
    },

    {
        number: "03",
        title: "Personalize",
        description:
            "We create messaging that connects your offer with the prospect's role, business context and potential needs.",
        icon: Sparkles,
    },

    {
        number: "04",
        title: "Launch",
        description:
            "Prospects enter a structured email sequence designed to create relevant conversations and measurable responses.",
        icon: Send,
    },

    {
        number: "05",
        title: "Qualify",
        description:
            "Responses are reviewed and qualified so genuine buying conversations can move into your sales process.",
        icon: CheckCircle2,
    },

    {
        number: "06",
        title: "Optimize",
        description:
            "Campaign data is continuously analyzed to improve targeting, messaging, deliverability and conversion.",
        icon: TrendingUp,
    },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
    {
        icon: Users,
        title: "Reach the right buyers",
        description:
            "Put your offer in front of decision-makers who actually match your ideal customer profile.",
    },

    {
        icon: MessageSquare,
        title: "Start relevant conversations",
        description:
            "Move away from generic sales emails and create outreach that gives prospects a reason to respond.",
    },

    {
        icon: Zap,
        title: "Create a repeatable channel",
        description:
            "Turn cold email into a structured acquisition process that can be measured, refined and scaled.",
    },

    {
        icon: TrendingUp,
        title: "Improve with real data",
        description:
            "Use campaign signals and response patterns to continuously improve your outbound performance.",
    },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
    {
        question: "Who is cold email outreach best suited for?",
        answer:
            "Cold email works especially well for B2B companies, SaaS businesses, software agencies, consultants, professional services and other businesses where a specific buyer or decision-maker can be identified.",
    },

    {
        question: "Do you provide the prospect list?",
        answer:
            "Yes. Campaigns can include ICP definition, company research, decision-maker identification, contact verification and qualified prospect database building.",
    },

    {
        question: "Are the emails personalized?",
        answer:
            "Yes. The objective is not to send generic mass emails. Messaging can be personalized around the prospect's company, role, industry, business context and potential use cases.",
    },

    {
        question: "How many emails are included in a sequence?",
        answer:
            "The sequence depends on the target audience, offer and campaign objective. We build a structured series of touchpoints designed to stay relevant without overwhelming prospects.",
    },

    {
        question: "How do you measure campaign performance?",
        answer:
            "We look beyond opens and clicks. Important signals include replies, positive response rates, qualified conversations, opportunities and the overall efficiency of the outbound campaign.",
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
            className={`cold-email-section-heading cold-email-align-${align}`}
            variants={fadeUp}
        >
            <span className="cold-email-eyebrow">
                <span className="cold-email-eyebrow-dot" />
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

function Cold_email_campaigns() {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate("/contact-us");
    };

    const [openFaq, setOpenFaq] = React.useState(0);

    return (
        <main className="cold-email-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="cold-email-hero">

                <div className="cold-email-hero-grid" />

                <div className="cold-email-hero-glow cold-email-glow-one" />
                <div className="cold-email-hero-glow cold-email-glow-two" />

                <div className="cold-email-container cold-email-hero-container">

                    {/* HERO CONTENT */}

                    <motion.div
                        className="cold-email-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >

                        <motion.div
                            className="cold-email-hero-badge"
                            variants={fadeUp}
                        >
                            <span className="cold-email-badge-icon">
                                <Mail size={16} />
                            </span>

                            Cold Email Campaigns
                        </motion.div>

                        <motion.h1 variants={fadeUp}>
                            Turn cold email into a
                            <span>
                                {" "}
                                predictable B2B growth channel.
                            </span>
                        </motion.h1>

                        <motion.p
                            className="cold-email-hero-description"
                            variants={fadeUp}
                        >
                            Reach the right decision-makers, deliver relevant
                            messages and turn cold prospects into qualified
                            business conversations through a structured email
                            outreach system.
                        </motion.p>

                        <motion.div
                            className="cold-email-hero-actions"
                            variants={fadeUp}
                        >

                            <button
                                type="button"
                                onClick={goToContact}
                                className="cold-email-primary-btn"
                            >
                                Start a Conversation
                                <ArrowUpRight size={18} />
                            </button>

                            <a
                                href="#how-it-works"
                                className="cold-email-secondary-btn"
                            >
                                Explore the Process
                                <ArrowRight size={17} />
                            </a>

                        </motion.div>

                        <motion.div
                            className="cold-email-hero-proof"
                            variants={fadeUp}
                        >

                            <div>
                                <Check size={15} />
                                <span>Targeted prospects</span>
                            </div>

                            <div>
                                <Check size={15} />
                                <span>Personalized emails</span>
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
                        className="cold-email-hero-visual"
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

                        <div className="cold-email-orbit cold-email-orbit-one" />
                        <div className="cold-email-orbit cold-email-orbit-two" />

                        {/* FLOATING NODE 1 */}

                        <motion.div
                            className="cold-email-floating-node cold-email-node-one"
                            animate={{
                                y: [0, -12, 0],
                                rotate: [0, 3, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Target size={18} />
                            <span>Target Buyers</span>
                        </motion.div>

                        {/* FLOATING NODE 2 */}

                        <motion.div
                            className="cold-email-floating-node cold-email-node-two"
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, -3, 0],
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Mail size={18} />
                            <span>Email Sequence</span>
                        </motion.div>

                        {/* FLOATING NODE 3 */}

                        <motion.div
                            className="cold-email-floating-node cold-email-node-three"
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

                        <div className="cold-email-dashboard">

                            <div className="cold-email-dashboard-top">

                                <div className="cold-email-dashboard-brand">

                                    <div className="cold-email-mini-logo">
                                        <Mail size={19} />
                                    </div>

                                    <div>
                                        <strong>
                                            Outbound Engine
                                        </strong>

                                        <span>
                                            Email campaign overview
                                        </span>
                                    </div>

                                </div>

                                <div className="cold-email-live">
                                    <span />
                                    Live
                                </div>

                            </div>

                            <div className="cold-email-dashboard-main">

                                {/* CONTACT */}

                                <div className="cold-email-profile-card">

                                    <div className="cold-email-profile-avatar">
                                        JD
                                    </div>

                                    <div className="cold-email-profile-info">

                                        <strong>
                                            James Davidson
                                        </strong>

                                        <span>
                                            VP of Growth · B2B SaaS
                                        </span>

                                    </div>

                                    <div className="cold-email-match">
                                        94%
                                    </div>

                                </div>

                                {/* EMAIL */}

                                <div className="cold-email-message-preview">

                                    <div className="cold-email-message-header">

                                        <div>
                                            <span className="cold-email-status-dot" />
                                            Personalized email
                                        </div>

                                        <span>
                                            Just now
                                        </span>

                                    </div>

                                    <p>
                                        Hi James, noticed your team is
                                        expanding its outbound motion...
                                    </p>

                                    <div className="cold-email-message-actions">
                                        <span>Relevant</span>
                                        <span>Personalized</span>
                                        <span>Ready</span>
                                    </div>

                                </div>

                                {/* STATS */}

                                <div className="cold-email-dashboard-stats">

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

                                <div className="cold-email-chart">

                                    <div className="cold-email-chart-header">
                                        <span>
                                            Campaign momentum
                                        </span>

                                        <span>
                                            Last 30 days
                                        </span>
                                    </div>

                                    <div className="cold-email-chart-line">
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

            <section className="cold-email-intro">

                <div className="cold-email-container">

                    <motion.div
                        className="cold-email-intro-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={staggerContainer}
                    >

                        <motion.div variants={fadeLeft}>

                            <span className="cold-email-small-label">
                                Cold email should be more than sending emails.
                            </span>

                            <h2>
                                Your next customer may already be
                                <span>
                                    {" "}
                                    one relevant message away.
                                </span>
                            </h2>

                        </motion.div>

                        <motion.div
                            className="cold-email-intro-copy"
                            variants={fadeRight}
                        >

                            <p>
                                The challenge is not simply finding email
                                addresses. It is identifying the right buyers,
                                understanding their context and giving them a
                                compelling reason to start a conversation.
                            </p>

                            <p>
                                Our cold email campaigns combine strategic
                                targeting, prospect research, personalized
                                messaging, structured sequences and campaign
                                optimization into one focused outbound system.
                            </p>

                        </motion.div>

                    </motion.div>

                </div>

            </section>

            {/* =====================================================
                SERVICES
            ===================================================== */}

            <section className="cold-email-services">

                <div className="cold-email-container">

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
                            title="Everything required to turn cold email into a system."
                            description="From defining your audience to optimizing campaign performance, every part of the outbound workflow is connected."
                            align="center"
                        />

                        <div className="cold-email-services-grid">

                            {services.map((service) => {

                                const Icon = service.icon;

                                return (
                                    <motion.article
                                        className="cold-email-service-card"
                                        key={service.number}
                                        variants={fadeUp}
                                        whileHover={{
                                            y: -8,
                                            transition: {
                                                duration: 0.25,
                                            },
                                        }}
                                    >

                                        <div className="cold-email-service-top">

                                            <span>
                                                {service.number}
                                            </span>

                                            <div className="cold-email-service-icon">
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

                                        <div className="cold-email-card-arrow">
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

            <section className="cold-email-why">

                <div className="cold-email-container">

                    <motion.div
                        className="cold-email-why-grid"
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
                            className="cold-email-why-visual"
                            variants={fadeLeft}
                        >

                            <div className="cold-email-radar">

                                <div className="cold-email-radar-ring cold-email-radar-ring-one" />
                                <div className="cold-email-radar-ring cold-email-radar-ring-two" />
                                <div className="cold-email-radar-ring cold-email-radar-ring-three" />

                                <div className="cold-email-radar-cross horizontal" />
                                <div className="cold-email-radar-cross vertical" />

                                <motion.div
                                    className="cold-email-radar-sweep"
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                <div className="cold-email-radar-center">
                                    <Radar size={25} />
                                </div>

                                <motion.span
                                    className="cold-email-radar-point point-a"
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
                                    className="cold-email-radar-point point-b"
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
                                    className="cold-email-radar-point point-c"
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
                            className="cold-email-why-content"
                            variants={fadeRight}
                        >

                            <span className="cold-email-eyebrow">
                                <span className="cold-email-eyebrow-dot" />
                                WHY THIS WORKS
                            </span>

                            <h2>
                                Stop sending more emails.
                                <span>
                                    {" "}
                                    Start sending better ones.
                                </span>
                            </h2>

                            <p>
                                More emails do not automatically create more
                                customers. Effective outbound starts with
                                knowing who is worth contacting, what matters
                                to them and why your offer is relevant.
                            </p>

                            <div className="cold-email-why-points">

                                <div className="cold-email-why-point">

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

                                <div className="cold-email-why-point">

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

                                <div className="cold-email-why-point">

                                    <div>
                                        <TrendingUp size={19} />
                                    </div>

                                    <section>

                                        <h4>
                                            Continuous optimization
                                        </h4>

                                        <p>
                                            Learn from actual campaign signals
                                            and continuously improve the
                                            outbound system.
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
                className="cold-email-process"
                id="how-it-works"
            >

                <div className="cold-email-container">

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
                            title="A structured email outreach process, built around your business."
                            description="We connect strategy, research, personalization and optimization so cold email becomes a repeatable acquisition channel."
                            align="center"
                        />

                        <div className="cold-email-process-grid">

                            <div className="cold-email-process-line" />

                            {process.map((item) => {

                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        className="cold-email-process-item"
                                        key={item.number}
                                        variants={fadeUp}
                                    >

                                        <div className="cold-email-process-number">
                                            {item.number}
                                        </div>

                                        <div className="cold-email-process-icon">
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

            <section className="cold-email-benefits">

                <div className="cold-email-container">

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
                            description="The objective is not to simply increase email volume. It is to create a healthier flow of relevant business conversations."
                            align="center"
                        />

                        <div className="cold-email-benefits-grid">

                            {benefits.map((benefit) => {

                                const Icon = benefit.icon;

                                return (
                                    <motion.div
                                        className="cold-email-benefit-card"
                                        key={benefit.title}
                                        variants={fadeUp}
                                        whileHover={{
                                            y: -7,
                                            transition: {
                                                duration: 0.25,
                                            },
                                        }}
                                    >

                                        <div className="cold-email-benefit-icon">
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

            <section className="cold-email-stack">

                <div className="cold-email-container">

                    <motion.div
                        className="cold-email-stack-box"
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

                        <div className="cold-email-stack-content">

                            <span className="cold-email-eyebrow">
                                <span className="cold-email-eyebrow-dot" />
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

                            <div className="cold-email-stack-list">

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
                                    <strong>Personalize</strong>
                                    <small>
                                        Create relevant messaging
                                    </small>
                                </div>

                                <div>
                                    <span>04</span>
                                    <strong>Engage</strong>
                                    <small>
                                        Start conversations
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

                        <div className="cold-email-stack-visual">

                            <motion.div
                                className="cold-email-stack-center"
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
                                <Mail size={30} />
                            </motion.div>

                            <div className="cold-email-stack-node cold-email-stack-node-one">
                                <Target size={17} />
                                Target
                            </div>

                            <div className="cold-email-stack-node cold-email-stack-node-two">
                                <Search size={17} />
                                Research
                            </div>

                            <div className="cold-email-stack-node cold-email-stack-node-three">
                                <Sparkles size={17} />
                                Personalize
                            </div>

                            <div className="cold-email-stack-node cold-email-stack-node-four">
                                <Send size={17} />
                                Engage
                            </div>

                            <div className="cold-email-stack-node cold-email-stack-node-five">
                                <BarChart3 size={17} />
                                Optimize
                            </div>

                            <div className="cold-email-stack-line line-one" />
                            <div className="cold-email-stack-line line-two" />
                            <div className="cold-email-stack-line line-three" />
                            <div className="cold-email-stack-line line-four" />
                            <div className="cold-email-stack-line line-five" />

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* =====================================================
                FAQ
            ===================================================== */}

            <section className="cold-email-faq">

                <div className="cold-email-container">

                    <motion.div
                        className="cold-email-faq-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={staggerContainer}
                    >

                        <motion.div variants={fadeLeft}>

                            <span className="cold-email-eyebrow">
                                <span className="cold-email-eyebrow-dot" />
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
                                usually have before launching a cold email
                                campaign.
                            </p>

                            <button
                                type="button"
                                onClick={goToContact}
                                className="cold-email-faq-contact"
                            >
                                Talk to our team
                                <ArrowUpRight size={17} />
                            </button>

                        </motion.div>

                        <motion.div
                            className="cold-email-faq-list"
                            variants={fadeRight}
                        >

                            {faqs.map((faq, index) => {

                                const isOpen = openFaq === index;

                                return (
                                    <div
                                        className={`cold-email-faq-item ${
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
                                            className="cold-email-faq-answer"
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

            <section className="cold-email-final-cta">

                <div className="cold-email-final-grid" />

                <motion.div
                    className="cold-email-final-glow"
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

                <div className="cold-email-container">

                    <motion.div
                        className="cold-email-cta-content"
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

                        <span className="cold-email-cta-badge">
                            <Sparkles size={15} />
                            Ready to build your outbound engine?
                        </span>

                        <h2>
                            Make cold email work
                            <span>
                                {" "}
                                harder for your business.
                            </span>
                        </h2>

                        <p>
                            Let's build a focused email outreach system around
                            your market, your buyers and your growth goals.
                        </p>

                        <div className="cold-email-cta-actions">

                            <button
                                type="button"
                                onClick={goToContact}
                                className="cold-email-primary-btn cold-email-cta-btn"
                            >
                                Let's Talk
                                <ArrowUpRight size={18} />
                            </button>

                            

                        </div>

                    </motion.div>

                </div>

            </section>

        </main>
    );
}

export default Cold_email_campaigns;