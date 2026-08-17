import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    Building2,
    Check,
    CheckCircle2,
    ChevronDown,
    ChevronRight,
    CircleDollarSign,
    Crosshair,
    Database,
    Filter,
    Layers3,
    Mail,
    MessageSquare,
    Network,
    Radar,
    RefreshCw,
    Search,
    Send,
    ShieldCheck,
    Sparkles,
    Target,
    TrendingUp,
    UserCheck,
    Users,
    Workflow,
    Zap,
} from "lucide-react";

import "./B2B_Lead_Generation.css";


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
        x: -40,
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
        x: 40,
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
            staggerChildren: 0.09,
        },
    },
};


/* =========================================================
   LEAD GENERATION CHANNELS
========================================================= */

const channels = [
    {
        icon: Network,
        number: "01",
        title: "LinkedIn Prospecting",
        description:
            "Identify decision-makers, build highly targeted prospect lists and create personalized outreach sequences designed around relevance instead of spam.",
        tags: [
            "ICP Research",
            "Decision Makers",
            "Personalization",
        ],
    },

    {
        icon: Mail,
        number: "02",
        title: "Cold Email Outreach",
        description:
            "Build targeted email campaigns with segmentation, personalization, deliverability-conscious sending and structured follow-up sequences.",
        tags: [
            "Email Sequences",
            "Personalization",
            "Follow-ups",
        ],
    },

    {
        icon: Search,
        number: "03",
        title: "Targeted Prospect Research",
        description:
            "Find companies that actually match your ideal customer profile using firmographic, geographic, technological and role-based criteria.",
        tags: [
            "Company Research",
            "ICP Matching",
            "Data Enrichment",
        ],
    },

    {
        icon: Radar,
        number: "04",
        title: "Lead Qualification",
        description:
            "Separate relevant prospects from noise using qualification criteria aligned with your offer, market, company size and buying signals.",
        tags: [
            "Lead Scoring",
            "Qualification",
            "Intent",
        ],
    },

    {
        icon: MessageSquare,
        number: "05",
        title: "Multi-Touch Outreach",
        description:
            "Coordinate email, LinkedIn and follow-up touchpoints into one structured prospecting journey instead of relying on a single message.",
        tags: [
            "Sequences",
            "Follow-ups",
            "Multi-channel",
        ],
    },

    {
        icon: TrendingUp,
        number: "06",
        title: "Pipeline Optimization",
        description:
            "Track what happens after outreach and continuously improve targeting, messaging, qualification and conversion points.",
        tags: [
            "Analytics",
            "Optimization",
            "Reporting",
        ],
    },
];


/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
    {
        number: "01",
        icon: Target,
        title: "Define Your ICP",
        description:
            "Identify the industries, company sizes, locations, roles, pain points and buying characteristics that define your ideal customer.",
    },

    {
        number: "02",
        icon: Database,
        title: "Build the Prospect Universe",
        description:
            "Research relevant companies and decision-makers and organize them into a clean, structured prospect database.",
    },

    {
        number: "03",
        icon: Filter,
        title: "Qualify & Segment",
        description:
            "Segment prospects according to fit, relevance, role, market and campaign objective before outreach begins.",
    },

    {
        number: "04",
        icon: Sparkles,
        title: "Personalize the Message",
        description:
            "Adapt messaging around the prospect's actual business context instead of sending the same generic pitch to everyone.",
    },

    {
        number: "05",
        icon: Send,
        title: "Launch Outreach",
        description:
            "Deploy structured outreach sequences across the appropriate channels with follow-ups and response handling.",
    },

    {
        number: "06",
        icon: BarChart3,
        title: "Measure & Optimize",
        description:
            "Monitor campaign signals and continuously improve targeting, messaging and qualification based on performance data.",
    },
];


/* =========================================================
   DELIVERABLES
========================================================= */

const deliverables = [
    "Ideal Customer Profile (ICP) definition",
    "Target account research",
    "Decision-maker identification",
    "Prospect database structure",
    "Lead qualification framework",
    "LinkedIn prospecting",
    "Cold email campaigns",
    "Personalized outreach messaging",
    "Multi-step follow-up sequences",
    "Lead segmentation",
    "Campaign tracking",
    "Performance reporting",
];


/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
    "SaaS & Technology",
    "Software Companies",
    "IT Services",
    "Professional Services",
    "Consulting",
    "Digital Agencies",
    "B2B Startups",
    "Manufacturing",
    "Logistics & Supply Chain",
    "FinTech",
    "HealthTech",
    "Enterprise Solutions",
];


/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
    {
        icon: Crosshair,
        title: "Precision Targeting",
        description:
            "Reach accounts and decision-makers that match your business instead of wasting resources on irrelevant contacts.",
    },

    {
        icon: Workflow,
        title: "Repeatable Process",
        description:
            "Turn prospecting into a structured acquisition workflow that can be measured, improved and scaled.",
    },

    {
        icon: Sparkles,
        title: "Relevant Messaging",
        description:
            "Build outreach around the prospect's business context, role, challenges and potential use cases.",
    },

    {
        icon: BarChart3,
        title: "Measurable Growth",
        description:
            "Track campaign performance and use real signals to improve targeting, messaging and conversion.",
    },
];


/* =========================================================
   FAQ
========================================================= */

const faqs = [
    {
        question: "What exactly does B2B lead generation include?",
        answer:
            "B2B lead generation involves identifying companies and decision-makers that fit your ideal customer profile, qualifying those prospects, reaching them through relevant channels and moving interested prospects toward a sales conversation.",
    },

    {
        question: "Do you only generate leads or also qualify them?",
        answer:
            "The system can cover both. Instead of simply delivering a large spreadsheet of contacts, we structure prospecting around your ICP and qualification criteria so your sales team can focus on more relevant opportunities.",
    },

    {
        question: "Which channels do you use?",
        answer:
            "Depending on the target market, campaigns can use LinkedIn prospecting, cold email, targeted account research and coordinated multi-touch follow-ups. The channel mix is selected based on where your buyers are most reachable.",
    },

    {
        question: "Can you target specific countries?",
        answer:
            "Yes. Campaigns can be segmented by geography, industry, company size, role, technology stack and other criteria so the campaign focuses on the markets that matter to your business.",
    },

    {
        question: "Can you work with our existing CRM?",
        answer:
            "The workflow can be designed around your existing CRM and sales process where the required integrations and access are available. The goal is to keep prospect information organized and usable by your sales team.",
    },

    {
        question: "How do you personalize outreach?",
        answer:
            "Personalization can be based on company context, role, industry, business problem, technology environment, recent activity or other relevant signals. The objective is relevance, not simply inserting a first name into a template.",
    },

    {
        question: "How long does it take to launch a campaign?",
        answer:
            "It depends on the ICP complexity, market, data requirements and campaign scope. The initial stage normally focuses on defining targeting, building the prospect universe and preparing the messaging system before launch.",
    },

    {
        question: "Do you guarantee a specific number of leads?",
        answer:
            "We don't believe responsible B2B lead generation should promise arbitrary lead numbers without understanding the market, offer, ICP and sales process. We focus on building a measurable system around qualified prospects and continuously improving it.",
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
            className={`b2b-section-heading ${
                align === "center" ? "is-center" : ""
            }`}
            variants={fadeUp}
        >
            <span className="b2b-eyebrow">
                <span className="b2b-eyebrow-line" />
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

function B2B_Lead_Generation() {
    const navigate = useNavigate();

    const [openFaq, setOpenFaq] = React.useState(0);

    const goToContact = () => {
        navigate("/contact");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <main className="b2b-lead-page">


            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="b2b-hero">

                <div className="b2b-hero-grid" />

                <div className="b2b-hero-glow b2b-glow-one" />
                <div className="b2b-hero-glow b2b-glow-two" />

                <div className="b2b-container b2b-hero-container">

                    <motion.div
                        className="b2b-hero-copy"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >

                        <motion.div
                            className="b2b-hero-badge"
                            variants={fadeUp}
                        >
                            <span className="b2b-status-dot" />

                            B2B Growth & Demand Generation
                        </motion.div>


                        <motion.h1 variants={fadeUp}>
                            Turn the right{" "}
                            <span>prospects</span>{" "}
                            into real sales conversations.
                        </motion.h1>


                        <motion.p
                            className="b2b-hero-description"
                            variants={fadeUp}
                        >
                            We build targeted B2B lead generation systems
                            that identify the right companies, reach the
                            right decision-makers and create a predictable
                            path from prospecting to pipeline.
                        </motion.p>


                        <motion.div
                            className="b2b-hero-actions"
                            variants={fadeUp}
                        >

                            <motion.button
                                className="b2b-btn b2b-btn-primary"
                                onClick={goToContact}
                                whileHover={{
                                    y: -3,
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                            >
                                <span>
                                    Build My Lead Engine
                                </span>

                                <ArrowUpRight size={18} />
                            </motion.button>


                            <motion.a
                                href="#how-it-works"
                                className="b2b-btn b2b-btn-secondary"
                                whileHover={{
                                    y: -3,
                                }}
                            >
                                See How It Works
                                <ArrowRight size={17} />
                            </motion.a>

                        </motion.div>


                        <motion.div
                            className="b2b-hero-trust"
                            variants={fadeUp}
                        >

                            <div className="b2b-trust-item">
                                <ShieldCheck size={17} />
                                <span>
                                    Targeted prospecting
                                </span>
                            </div>

                            <div className="b2b-trust-divider" />

                            <div className="b2b-trust-item">
                                <UserCheck size={17} />
                                <span>
                                    Decision-maker focused
                                </span>
                            </div>

                            <div className="b2b-trust-divider" />

                            <div className="b2b-trust-item">
                                <BarChart3 size={17} />
                                <span>
                                    Data-driven optimization
                                </span>
                            </div>

                        </motion.div>

                    </motion.div>


                    {/* HERO DASHBOARD */}

                    <motion.div
                        className="b2b-hero-visual"
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <motion.div
                            className="b2b-dashboard"
                            animate={{
                                y: [0, -7, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <div className="b2b-dashboard-top">

                                <div>
                                    <span className="b2b-mini-label">
                                        PIPELINE ENGINE
                                    </span>

                                    <strong>
                                        Prospect Flow
                                    </strong>
                                </div>

                                <div className="b2b-live-pill">
                                    <span />
                                    LIVE
                                </div>

                            </div>


                            <div className="b2b-dashboard-chart">

                                <div className="b2b-chart-label">
                                    <span>
                                        Qualified prospects
                                    </span>

                                    <strong>
                                        +68%
                                    </strong>
                                </div>


                                <div className="b2b-chart">

                                    <div className="b2b-chart-line">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>


                                    <div className="b2b-chart-bars">
                                        <i style={{ height: "30%" }} />
                                        <i style={{ height: "44%" }} />
                                        <i style={{ height: "39%" }} />
                                        <i style={{ height: "58%" }} />
                                        <i style={{ height: "53%" }} />
                                        <i style={{ height: "74%" }} />
                                        <i style={{ height: "91%" }} />
                                    </div>

                                </div>

                            </div>


                            <div className="b2b-funnel">

                                <div className="b2b-funnel-title">
                                    <span>
                                        LEAD FUNNEL
                                    </span>

                                    <small>
                                        Target → Conversation
                                    </small>
                                </div>


                                {[
                                    {
                                        icon: Target,
                                        title: "Target Accounts",
                                        value: "100%",
                                        width: "100%",
                                    },
                                    {
                                        icon: Users,
                                        title: "Qualified Prospects",
                                        value: "72%",
                                        width: "72%",
                                    },
                                    {
                                        icon: MessageSquare,
                                        title: "Sales Conversations",
                                        value: "44%",
                                        width: "44%",
                                    },
                                ].map((item) => {

                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            className="b2b-funnel-step"
                                            key={item.title}
                                            whileHover={{
                                                x: 5,
                                            }}
                                        >

                                            <div className="b2b-funnel-icon">
                                                <Icon size={15} />
                                            </div>

                                            <div className="b2b-funnel-info">

                                                <span>
                                                    {item.title}
                                                </span>

                                                <div className="b2b-progress">
                                                    <i
                                                        style={{
                                                            width: item.width,
                                                        }}
                                                    />
                                                </div>

                                            </div>

                                            <strong>
                                                {item.value}
                                            </strong>

                                        </motion.div>
                                    );
                                })}

                            </div>

                        </motion.div>


                        {/* FLOATING CARD */}

                        <motion.div
                            className="b2b-floating-card b2b-floating-top"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <div className="b2b-floating-icon">
                                <Crosshair size={17} />
                            </div>

                            <div>
                                <small>
                                    ICP MATCH
                                </small>

                                <strong>
                                    High-fit prospect
                                </strong>
                            </div>

                            <CheckCircle2 size={18} />

                        </motion.div>


                        <motion.div
                            className="b2b-floating-card b2b-floating-bottom"
                            animate={{
                                y: [0, 7, 0],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <div className="b2b-avatar-stack">
                                <span>JD</span>
                                <span>MK</span>
                                <span>AR</span>
                            </div>

                            <div>
                                <small>
                                    DECISION MAKERS
                                </small>

                                <strong>
                                    Connected
                                </strong>
                            </div>

                        </motion.div>

                    </motion.div>

                </div>


                <a
                    href="#problem"
                    className="b2b-scroll-indicator"
                >
                    <span>
                        Scroll to explore
                    </span>

                    <ChevronDown size={17} />
                </a>

            </section>


            {/* =====================================================
                PROBLEM
            ===================================================== */}

            <section
                className="b2b-problem"
                id="problem"
            >

                <div className="b2b-container">

                    <motion.div
                        className="b2b-problem-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={staggerContainer}
                    >

                        <motion.div
                            className="b2b-problem-intro"
                            variants={fadeLeft}
                        >

                            <span className="b2b-dark-eyebrow">
                                THE REAL PROBLEM
                            </span>

                            <h2>
                                More leads aren't always the answer.

                                <span>
                                    {" "}Better leads are.
                                </span>
                            </h2>

                        </motion.div>


                        <motion.div
                            className="b2b-problem-copy"
                            variants={fadeRight}
                        >

                            <p>
                                A huge database doesn't automatically create
                                revenue. If the wrong companies are targeted,
                                the wrong people are contacted, or the message
                                has no relevance, your sales team ends up
                                spending time chasing noise.
                            </p>

                            <p>
                                Evolute builds the system behind the outreach:
                                clear targeting, structured prospect research,
                                qualification, personalized messaging and
                                continuous optimization.
                            </p>

                        </motion.div>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                BENEFITS / METRICS
            ===================================================== */}

            <section className="b2b-metrics">

                <div className="b2b-container">

                    <motion.div
                        className="b2b-metric-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={staggerContainer}
                    >

                        <motion.div
                            className="b2b-metric"
                            variants={fadeUp}
                            whileHover={{
                                y: -8,
                            }}
                        >
                            <Target size={22} />

                            <strong>
                                ICP-first
                            </strong>

                            <span>
                                Targeting starts with your ideal customer,
                                not a random contact list.
                            </span>
                        </motion.div>


                        <motion.div
                            className="b2b-metric"
                            variants={fadeUp}
                            whileHover={{
                                y: -8,
                            }}
                        >
                            <Layers3 size={22} />

                            <strong>
                                Multi-channel
                            </strong>

                            <span>
                                Combine prospecting channels into one
                                coordinated workflow.
                            </span>
                        </motion.div>


                        <motion.div
                            className="b2b-metric"
                            variants={fadeUp}
                            whileHover={{
                                y: -8,
                            }}
                        >
                            <RefreshCw size={22} />

                            <strong>
                                Continuous
                            </strong>

                            <span>
                                Campaigns improve through testing,
                                tracking and iteration.
                            </span>
                        </motion.div>


                        <motion.div
                            className="b2b-metric"
                            variants={fadeUp}
                            whileHover={{
                                y: -8,
                            }}
                        >
                            <CircleDollarSign size={22} />

                            <strong>
                                Revenue-focused
                            </strong>

                            <span>
                                The objective is meaningful sales
                                conversations — not vanity metrics.
                            </span>
                        </motion.div>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                CHANNELS
            ===================================================== */}

            <section className="b2b-channels">

                <div className="b2b-container">

                    <SectionHeading
                        eyebrow="WHAT WE BUILD"
                        title="A lead generation system, not a list of contacts."
                        description="Every part of the system is designed to move from a defined target market toward qualified sales conversations."
                    />


                    <motion.div
                        className="b2b-channel-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={staggerContainer}
                    >

                        {channels.map((channel) => {

                            const Icon = channel.icon;

                            return (
                                <motion.article
                                    className="b2b-channel-card"
                                    key={channel.number}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -10,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                >

                                    <div className="b2b-channel-top">

                                        <div className="b2b-channel-icon">
                                            <Icon size={21} />
                                        </div>

                                        <span>
                                            {channel.number}
                                        </span>

                                    </div>


                                    <h3>
                                        {channel.title}
                                    </h3>


                                    <p>
                                        {channel.description}
                                    </p>


                                    <div className="b2b-tag-list">

                                        {channel.tags.map((tag) => (
                                            <span key={tag}>
                                                {tag}
                                            </span>
                                        ))}

                                    </div>


                                    <div className="b2b-card-arrow">
                                        <ArrowUpRight size={18} />
                                    </div>

                                </motion.article>
                            );
                        })}

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                PROCESS
            ===================================================== */}

            <section
                className="b2b-process"
                id="how-it-works"
            >

                <div className="b2b-process-glow" />

                <div className="b2b-container">

                    <SectionHeading
                        eyebrow="THE SYSTEM"
                        title="From ideal customer to active pipeline."
                        description="A structured workflow removes guesswork from prospecting and creates a repeatable acquisition process."
                    />


                    <motion.div
                        className="b2b-process-list"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={staggerContainer}
                    >

                        {processSteps.map((step, index) => {

                            const Icon = step.icon;

                            return (
                                <motion.div
                                    className="b2b-process-item"
                                    key={step.number}
                                    variants={fadeUp}
                                    whileHover={{
                                        x: 8,
                                    }}
                                >

                                    <div className="b2b-process-number">
                                        {step.number}
                                    </div>


                                    <div className="b2b-process-icon">
                                        <Icon size={21} />
                                    </div>


                                    <div className="b2b-process-content">

                                        <h3>
                                            {step.title}
                                        </h3>

                                        <p>
                                            {step.description}
                                        </p>

                                    </div>


                                    {index !== processSteps.length - 1 && (
                                        <div className="b2b-process-line" />
                                    )}

                                </motion.div>
                            );
                        })}

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                PRECISION TARGETING
            ===================================================== */}

            <section className="b2b-targeting">

                <div className="b2b-container">

                    <div className="b2b-targeting-grid">

                        <motion.div
                            className="b2b-targeting-visual"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                            variants={fadeLeft}
                        >

                            <motion.div
                                className="b2b-target-card"
                                whileHover={{
                                    y: -8,
                                }}
                            >

                                <div className="b2b-target-header">

                                    <div>

                                        <span>
                                            ICP BUILDER
                                        </span>

                                        <strong>
                                            Ideal Customer Profile
                                        </strong>

                                    </div>

                                    <Target size={20} />

                                </div>


                                <div className="b2b-target-row">
                                    <span>
                                        Industry
                                    </span>

                                    <strong>
                                        SaaS / Technology
                                    </strong>
                                </div>


                                <div className="b2b-target-row">
                                    <span>
                                        Company size
                                    </span>

                                    <strong>
                                        50 — 500
                                    </strong>
                                </div>


                                <div className="b2b-target-row">
                                    <span>
                                        Market
                                    </span>

                                    <strong>
                                        North America
                                    </strong>
                                </div>


                                <div className="b2b-target-row">
                                    <span>
                                        Decision maker
                                    </span>

                                    <strong>
                                        Founder / VP / Head
                                    </strong>
                                </div>


                                <div className="b2b-match-score">

                                    <div className="b2b-score-ring">
                                        <span>
                                            94
                                        </span>
                                    </div>


                                    <div>

                                        <small>
                                            FIT SCORE
                                        </small>

                                        <strong>
                                            High-fit account
                                        </strong>

                                    </div>

                                </div>

                            </motion.div>

                        </motion.div>


                        <motion.div
                            className="b2b-targeting-copy"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                            variants={fadeRight}
                        >

                            <span className="b2b-eyebrow">

                                <span className="b2b-eyebrow-line" />

                                PRECISION TARGETING

                            </span>


                            <h2>
                                Stop talking to everyone.

                                <span>
                                    {" "}Start reaching the right people.
                                </span>
                            </h2>


                            <p>
                                Effective B2B prospecting starts long before
                                the first message. We define the characteristics
                                that make an account valuable and use those
                                criteria to structure the campaign.
                            </p>


                            <div className="b2b-check-list">

                                {[
                                    "Industry & vertical",
                                    "Company size & revenue profile",
                                    "Geography & market",
                                    "Decision-maker role",
                                    "Business problems & use cases",
                                    "Technology & buying signals",
                                ].map((item) => (

                                    <motion.div
                                        key={item}
                                        whileHover={{
                                            x: 6,
                                        }}
                                    >
                                        <CheckCircle2 size={19} />

                                        <span>
                                            {item}
                                        </span>
                                    </motion.div>

                                ))}

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                BENEFITS
            ===================================================== */}

            <section className="b2b-benefits">

                <div className="b2b-container">

                    <SectionHeading
                        eyebrow="WHY IT WORKS"
                        title="Built around what actually moves B2B buyers."
                        description="A good outbound system connects targeting, data, messaging, outreach and optimization instead of treating them as separate activities."
                        align="center"
                    />


                    <motion.div
                        className="b2b-benefits-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={staggerContainer}
                    >

                        {benefits.map((benefit, index) => {

                            const Icon = benefit.icon;

                            return (
                                <motion.div
                                    className="b2b-benefit-card"
                                    key={benefit.title}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -10,
                                    }}
                                >

                                    <div className="b2b-benefit-number">
                                        0{index + 1}
                                    </div>

                                    <div className="b2b-benefit-icon">
                                        <Icon size={22} />
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

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                DELIVERABLES
            ===================================================== */}

            <section className="b2b-deliverables">

                <div className="b2b-container">

                    <SectionHeading
                        eyebrow="WHAT YOU GET"
                        title="Everything required to run a structured outbound engine."
                        description="The exact scope can be adapted to your market, sales process and growth objectives."
                    />


                    <motion.div
                        className="b2b-deliverables-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={staggerContainer}
                    >

                        <div className="b2b-deliverable-column">

                            {deliverables.slice(0, 6).map((item) => (

                                <motion.div
                                    className="b2b-deliverable"
                                    key={item}
                                    variants={fadeUp}
                                    whileHover={{
                                        x: 7,
                                    }}
                                >

                                    <span>
                                        <Check size={14} />
                                    </span>

                                    <p>
                                        {item}
                                    </p>

                                </motion.div>

                            ))}

                        </div>


                        <div className="b2b-deliverable-column">

                            {deliverables.slice(6).map((item) => (

                                <motion.div
                                    className="b2b-deliverable"
                                    key={item}
                                    variants={fadeUp}
                                    whileHover={{
                                        x: 7,
                                    }}
                                >

                                    <span>
                                        <Check size={14} />
                                    </span>

                                    <p>
                                        {item}
                                    </p>

                                </motion.div>

                            ))}

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                INDUSTRIES
            ===================================================== */}

            <section className="b2b-industries">

                <div className="b2b-container">

                    <div className="b2b-industries-layout">

                        <motion.div
                            className="b2b-industries-copy"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                            variants={fadeLeft}
                        >

                            <span className="b2b-eyebrow">

                                <span className="b2b-eyebrow-line" />

                                BUILT FOR B2B

                            </span>


                            <h2>
                                Built around the way

                                <span>
                                    {" "}business buyers
                                </span>

                                actually buy.
                            </h2>


                            <p>
                                Lead generation becomes significantly more
                                useful when targeting is connected to the
                                commercial reality of the business.
                            </p>


                            <motion.button
                                className="b2b-text-link"
                                onClick={goToContact}
                                whileHover={{
                                    x: 6,
                                }}
                            >
                                Discuss your market

                                <ArrowRight size={17} />
                            </motion.button>

                        </motion.div>


                        <motion.div
                            className="b2b-industry-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            variants={staggerContainer}
                        >

                            {industries.map((industry) => (

                                <motion.div
                                    className="b2b-industry"
                                    key={industry}
                                    variants={fadeUp}
                                    whileHover={{
                                        x: 7,
                                    }}
                                >

                                    <Building2 size={16} />

                                    <span>
                                        {industry}
                                    </span>

                                    <ChevronRight size={15} />

                                </motion.div>

                            ))}

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                ACQUISITION ENGINE
            ===================================================== */}

            <section className="b2b-engine">

                <div className="b2b-container">

                    <motion.div
                        className="b2b-engine-box"
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

                        <div className="b2b-engine-header">

                            <div>

                                <span>
                                    YOUR ACQUISITION SYSTEM
                                </span>

                                <h2>
                                    One connected flow.

                                    <br />

                                    <span>
                                        Multiple growth signals.
                                    </span>
                                </h2>

                            </div>


                            <div className="b2b-engine-status">
                                <span />
                                SYSTEMATIC
                            </div>

                        </div>


                        <div className="b2b-engine-flow">

                            {[
                                {
                                    icon: Target,
                                    title: "ICP",
                                },
                                {
                                    icon: Database,
                                    title: "DATA",
                                },
                                {
                                    icon: Sparkles,
                                    title: "MESSAGE",
                                },
                                {
                                    icon: Send,
                                    title: "OUTREACH",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "PIPELINE",
                                },
                            ].map((item, index) => {

                                const Icon = item.icon;

                                return (
                                    <React.Fragment key={item.title}>

                                        <motion.div
                                            className="b2b-engine-node"
                                            whileHover={{
                                                y: -7,
                                                scale: 1.05,
                                            }}
                                        >

                                            <div>
                                                <Icon size={21} />
                                            </div>

                                            <span>
                                                {item.title}
                                            </span>

                                        </motion.div>


                                        {index !== 4 && (
                                            <div className="b2b-engine-connector">
                                                <i />
                                            </div>
                                        )}

                                    </React.Fragment>
                                );
                            })}

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                WHY EVOLUTE
            ===================================================== */}

            <section className="b2b-why">

                <div className="b2b-container">

                    <SectionHeading
                        eyebrow="WHY EVOLUTE"
                        title="Built as a growth system — not a one-off campaign."
                        description="The difference is in how the pieces connect. Strategy, data, outreach and optimization work together."
                    />


                    <motion.div
                        className="b2b-why-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={staggerContainer}
                    >

                        {[
                            {
                                number: "01",
                                icon: Crosshair,
                                title: "Precision over volume",
                                description:
                                    "More contacts do not automatically mean more revenue. We prioritize relevance and fit.",
                            },

                            {
                                number: "02",
                                icon: Workflow,
                                title: "Process over randomness",
                                description:
                                    "Prospecting follows a repeatable workflow rather than disconnected manual activities.",
                            },

                            {
                                number: "03",
                                icon: BarChart3,
                                title: "Optimization over assumptions",
                                description:
                                    "Campaign signals guide improvements in targeting, messaging and conversion.",
                            },

                            {
                                number: "04",
                                icon: Network,
                                title: "Pipeline over vanity metrics",
                                description:
                                    "The focus stays on business outcomes rather than impressive-looking activity numbers.",
                            },
                        ].map((item) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    className="b2b-why-card"
                                    key={item.number}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -9,
                                    }}
                                >

                                    <div className="b2b-why-number">
                                        {item.number}
                                    </div>

                                    <Icon size={22} />

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                </motion.div>
                            );
                        })}

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                FAQ
            ===================================================== */}

            <section className="b2b-faq">

                <div className="b2b-container">

                    <div className="b2b-faq-layout">

                        <motion.div
                            className="b2b-faq-intro"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                            variants={fadeLeft}
                        >

                            <span className="b2b-eyebrow">

                                <span className="b2b-eyebrow-line" />

                                FAQ

                            </span>


                            <h2>
                                Questions before

                                <span>
                                    {" "}getting started?
                                </span>
                            </h2>


                            <p>
                                Here are answers to the questions businesses
                                usually have before building a B2B lead
                                generation system.
                            </p>


                            <motion.div
                                className="b2b-faq-contact-card"
                                whileHover={{
                                    y: -5,
                                }}
                            >

                                <MessageSquare size={20} />

                                <div>

                                    <strong>
                                        Still have a question?
                                    </strong>

                                    <span>
                                        Let's talk about your growth goals.
                                    </span>

                                </div>


                                <motion.button
                                    onClick={goToContact}
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                >
                                    <ArrowUpRight size={18} />
                                </motion.button>

                            </motion.div>

                        </motion.div>


                        <motion.div
                            className="b2b-faq-list"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            variants={staggerContainer}
                        >

                            {faqs.map((faq, index) => {

                                const isOpen =
                                    openFaq === index;

                                return (

                                    <motion.div
                                        className={`b2b-faq-item ${
                                            isOpen
                                                ? "is-open"
                                                : ""
                                        }`}
                                        key={faq.question}
                                        variants={fadeUp}
                                    >

                                        <button
                                            className="b2b-faq-question"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen
                                                        ? -1
                                                        : index
                                                )
                                            }
                                        >

                                            <span>
                                                {faq.question}
                                            </span>

                                            <motion.span
                                                animate={{
                                                    rotate: isOpen
                                                        ? 180
                                                        : 0,
                                                }}
                                            >
                                                <ChevronDown
                                                    size={19}
                                                />
                                            </motion.span>

                                        </button>


                                        <motion.div
                                            className="b2b-faq-answer"
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
                                                ease: "easeInOut",
                                            }}
                                        >

                                            <p>
                                                {faq.answer}
                                            </p>

                                        </motion.div>

                                    </motion.div>
                                );
                            })}

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="b2b-final-cta">

                <div className="b2b-cta-grid" />

                <div className="b2b-cta-orb b2b-cta-orb-one" />
                <div className="b2b-cta-orb b2b-cta-orb-two" />


                <div className="b2b-container">

                    <motion.div
                        className="b2b-final-content"
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
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >

                        <span className="b2b-final-badge">

                            <Zap size={15} />

                            READY TO BUILD YOUR PIPELINE?

                        </span>


                        <h2>
                            Your next client

                            <br />

                            could be

                            <span>
                                {" "}one conversation away.
                            </span>
                        </h2>


                        <p>
                            Tell us who you want to reach, what you sell and
                            where you want to grow. We'll help you turn that
                            into a structured B2B acquisition strategy.
                        </p>


                        <motion.button
                            className="b2b-btn b2b-btn-white"
                            onClick={goToContact}
                            whileHover={{
                                y: -4,
                                scale: 1.02,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                        >

                            Start a Conversation

                            <ArrowUpRight size={18} />

                        </motion.button>


                        <div className="b2b-final-note">

                            <Check size={15} />

                            No generic pitch. Let's discuss your actual market.

                        </div>

                    </motion.div>

                </div>

            </section>

        </main>
    );
}


export default B2B_Lead_Generation;
