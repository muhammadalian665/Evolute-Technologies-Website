import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    ShieldCheck,
    Zap,
    Clock3,
    Target,
    BrainCircuit,
    Code2,
    Cloud,
    Database,
    Layers3,
    Smartphone,
    Globe2,
    Settings2,
    MessageSquare,
    Search,
    Lightbulb,
    Rocket,
    Cpu,
    Workflow,
    Server,
    LockKeyhole,
    Gauge,
    Users,
    CircleCheck,
    ChevronRight,
    Sparkles,
    MonitorSmartphone,
    
    Boxes,
    Headphones,
} from "lucide-react";

import "./Technology_Consultation.css";


/* =====================================================
   ANIMATION VARIANTS
===================================================== */

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
        x: -45,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};


const fadeRight = {
    hidden: {
        opacity: 0,
        x: 45,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
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


/* =====================================================
   CONSULTATION SERVICES
===================================================== */

const consultationServices = [
    {
        number: "01",
        icon: Search,
        title: "Technology Assessment",

        description:
            "Evaluate your existing technology landscape, identify bottlenecks, and uncover opportunities for modernization and improvement.",

        points: [
            "Architecture assessment",
            "Technology gap analysis",
            "Technical debt review",
        ],
    },

    {
        number: "02",
        icon: Layers3,
        title: "Solution Architecture",

        description:
            "Design scalable, secure, and maintainable architectures aligned with your product goals, business requirements, and future growth.",

        points: [
            "System architecture",
            "Scalability planning",
            "Integration strategy",
        ],
    },

    {
        number: "03",
        icon: BrainCircuit,
        title: "AI & Automation Strategy",

        description:
            "Discover practical opportunities to integrate AI, intelligent automation, and data-driven workflows into your business.",

        points: [
            "AI opportunity mapping",
            "Automation roadmap",
            "AI implementation planning",
        ],
    },

    {
        number: "04",
        icon: Cloud,
        title: "Cloud Consulting",

        description:
            "Plan and optimize cloud infrastructure for reliability, scalability, performance, security, and cost efficiency.",

        points: [
            "Cloud architecture",
            "Migration planning",
            "Infrastructure optimization",
        ],
    },

    {
        number: "05",
        icon: Code2,
        title: "Product Engineering",

        description:
            "Transform product ideas into technically sound development strategies with the right architecture, technologies, and delivery roadmap.",

        points: [
            "MVP planning",
            "Technology selection",
            "Engineering roadmap",
        ],
    },

    {
        number: "06",
        icon: ShieldCheck,
        title: "Security & Reliability",

        description:
            "Strengthen your applications and infrastructure with security-conscious architecture, monitoring, resilience, and engineering best practices.",

        points: [
            "Security assessment",
            "Reliability planning",
            "Risk identification",
        ],
    },
];


/* =====================================================
   EXPERTISE
===================================================== */

const expertise = [
    {
        icon: Code2,
        title: "Software Architecture",

        description:
            "Build a technical foundation that remains maintainable, flexible, and scalable as your business grows.",
    },

    {
        icon: Cloud,
        title: "Cloud & DevOps",

        description:
            "Optimize cloud infrastructure, deployment workflows, environments, monitoring, and operational efficiency.",
    },

    {
        icon: BrainCircuit,
        title: "AI & Intelligent Systems",

        description:
            "Identify where AI and automation can create measurable improvements across products and business operations.",
    },

    {
        icon: Database,
        title: "Data & Backend Systems",

        description:
            "Design reliable APIs, databases, data flows, and backend systems capable of supporting demanding workloads.",
    },

    {
        icon: MonitorSmartphone,
        title: "Web & Mobile Products",

        description:
            "Plan modern digital experiences across responsive web platforms, mobile applications, and cross-platform products.",
    },

    {
        icon: LockKeyhole,
        title: "Security & Compliance",

        description:
            "Introduce security principles into architecture, development, infrastructure, access, and operational workflows.",
    },
];


/* =====================================================
   PROCESS
===================================================== */

const processSteps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discovery Call",

        description:
            "We understand your business objectives, technical challenges, users, constraints, and priorities.",
    },

    {
        number: "02",
        icon: Search,
        title: "Technical Analysis",

        description:
            "Our experts analyze your current systems, requirements, architecture, workflows, and technology landscape.",
    },

    {
        number: "03",
        icon: Lightbulb,
        title: "Recommendations",

        description:
            "We identify the best technical direction and explain the trade-offs, opportunities, risks, and priorities.",
    },

    {
        number: "04",
        icon: Layers3,
        title: "Solution Blueprint",

        description:
            "You receive a practical architecture and implementation direction tailored to your business requirements.",
    },

    {
        number: "05",
        icon: Rocket,
        title: "Execution Roadmap",

        description:
            "We define clear milestones, priorities, technologies, resources, and next steps for implementation.",
    },
];


/* =====================================================
   TECHNOLOGY LANDSCAPE
   Technology-Agnostic
===================================================== */

const technologies = [
    {
        icon: Layers3,
        name: "Frontend Technologies",
    },

    {
        icon: Server,
        name: "Backend & API Systems",
    },

    {
        icon: Database,
        name: "Database Technologies",
    },

    {
        icon: Cloud,
        name: "Cloud & Infrastructure",
    },

    {
        icon: Boxes,
        name: "DevOps & Deployment",
    },

    {
        icon: BrainCircuit,
        name: "AI & Machine Learning",
    },

    {
        icon: Smartphone,
        name: "Mobile Technologies",
    },

    {
        icon: Globe2,
        name: "Web Technologies",
    },

    {
        icon: ShieldCheck,
        name: "Security Technologies",
    },

    {
        icon: Workflow,
        name: "Automation & Integrations",
    },
];


/* =====================================================
   ENGAGEMENT MODELS
===================================================== */

const engagementModels = [
    {
        icon: Clock3,
        title: "One-Time Consultation",

        description:
            "A focused session for solving a specific technical challenge, reviewing an architecture, or validating an idea.",

        features: [
            "Focused technical session",
            "Expert recommendations",
            "Actionable next steps",
        ],
    },

    {
        icon: Target,
        title: "Technical Strategy",

        description:
            "A deeper engagement for businesses that need a complete technology strategy, architecture, and execution roadmap.",

        features: [
            "Technology assessment",
            "Architecture blueprint",
            "Implementation roadmap",
        ],

        featured: true,
    },

    {
        icon: Users,
        title: "Ongoing Advisory",

        description:
            "Continuous access to technical expertise for evolving products, architecture decisions, scaling, and technology planning.",

        features: [
            "Recurring advisory sessions",
            "Architecture guidance",
            "Ongoing technical support",
        ],
    },
];


/* =====================================================
   FAQ
===================================================== */

const faqs = [
    {
        number: "01",

        question:
            "What does a technology consultation include?",

        answer:
            "A consultation typically includes understanding your business and technical goals, reviewing the current situation, identifying challenges, evaluating options, and providing practical recommendations and next steps.",
    },

    {
        number: "02",

        question:
            "Can you review an existing application or architecture?",

        answer:
            "Yes. We can review application architecture, APIs, databases, infrastructure, development workflows, performance considerations, security practices, and scalability concerns.",
    },

    {
        number: "03",

        question:
            "Can you help us choose the right technology stack?",

        answer:
            "Absolutely. We evaluate your requirements, team capabilities, scalability expectations, budget, integrations, security requirements, existing systems, and long-term product goals before recommending the most suitable technologies.",
    },

    {
        number: "04",

        question:
            "Do you provide AI and automation consulting?",

        answer:
            "Yes. We help businesses identify valuable AI and automation opportunities, select appropriate approaches, design integrations, and create implementation roadmaps.",
    },

    {
        number: "05",

        question:
            "Can consultation lead to development?",

        answer:
            "Yes. If implementation is required, Evolute Technologies can continue from strategy and architecture into product development, cloud deployment, integrations, AI solutions, or dedicated engineering support.",
    },

    {
        number: "06",

        question:
            "Is consultation suitable for startups?",

        answer:
            "Yes. Startups can use consultation to validate architecture, choose suitable technologies, plan an MVP, avoid unnecessary complexity, and establish a scalable technical foundation from the beginning.",
    },
];


/* =====================================================
   HERO DASHBOARD
===================================================== */

function ConsultationDashboard() {
    return (
        <motion.div
            className="tc-hero-visual"

            initial={{
                opacity: 0,
                scale: 0.9,
                y: 25,
            }}

            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
            }}

            transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
            }}
        >

            {/* =================================================
               ORBITS
            ================================================= */}

            <motion.div
                className="tc-orbit tc-orbit-one"

                animate={{
                    rotate: 360,
                }}

                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="tc-orbit tc-orbit-two"

                animate={{
                    rotate: -360,
                }}

                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="tc-orbit tc-orbit-three"

                animate={{
                    rotate: 360,
                }}

                transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />


            {/* =================================================
               MAIN DASHBOARD
            ================================================= */}

            <motion.div
                className="tc-dashboard"

                animate={{
                    y: [0, -9, 0],
                }}

                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >

                {/* Dashboard Header */}

                <div className="tc-dashboard-top">

                    <div className="tc-dashboard-title">

                        <div className="tc-dashboard-icon">
                            <BrainCircuit size={20} />
                        </div>

                        <div>
                            <strong>
                                Technology Strategy
                            </strong>

                            <span>
                                Consultation workspace
                            </span>
                        </div>

                    </div>


                    <div className="tc-dashboard-status">
                        <span />
                        Strategy Active
                    </div>

                </div>


                {/* =================================================
                   SCORE
                ================================================= */}

                <div className="tc-dashboard-score">

                    <div className="tc-score-ring">

                        <div className="tc-score-inner">
                            <strong>
                                92%
                            </strong>

                            <span>
                                Readiness
                            </span>
                        </div>

                    </div>


                    <div className="tc-health-details">

                        <div className="tc-health-row">
                            <span>
                                Architecture
                            </span>

                            <b>
                                Strong
                            </b>
                        </div>

                        <div className="tc-health-bar">
                            <span
                                style={{
                                    width: "88%",
                                }}
                            />
                        </div>


                        <div className="tc-health-row">
                            <span>
                                Scalability
                            </span>

                            <b>
                                Ready
                            </b>
                        </div>

                        <div className="tc-health-bar">
                            <span
                                style={{
                                    width: "94%",
                                }}
                            />
                        </div>


                        <div className="tc-health-row">
                            <span>
                                Security
                            </span>

                            <b>
                                Strong
                            </b>
                        </div>

                        <div className="tc-health-bar">
                            <span
                                style={{
                                    width: "91%",
                                }}
                            />
                        </div>

                    </div>

                </div>


                {/* =================================================
                   DASHBOARD CARDS
                ================================================= */}

                <div className="tc-dashboard-cards">

                    <div className="tc-mini-card">

                        <div className="tc-mini-icon">
                            <Target size={15} />
                        </div>

                        <div>
                            <span>
                                Strategy
                            </span>

                            <strong>
                                Defined
                            </strong>
                        </div>

                    </div>


                    <div className="tc-mini-card">

                        <div className="tc-mini-icon">
                            <Zap size={15} />
                        </div>

                        <div>
                            <span>
                                Performance
                            </span>

                            <strong>
                                Optimized
                            </strong>
                        </div>

                    </div>


                    <div className="tc-mini-card">

                        <div className="tc-mini-icon">
                            <ShieldCheck size={15} />
                        </div>

                        <div>
                            <span>
                                Security
                            </span>

                            <strong>
                                Protected
                            </strong>
                        </div>

                    </div>


                    <div className="tc-mini-card">

                        <div className="tc-mini-icon">
                            <Gauge size={15} />
                        </div>

                        <div>
                            <span>
                                Scalability
                            </span>

                            <strong>
                                High
                            </strong>
                        </div>

                    </div>

                </div>


                {/* =================================================
                   ANALYSIS LOG
                ================================================= */}

                <div className="tc-dashboard-log">

                    <div className="tc-log-header">
                        <span>
                            TECHNICAL ANALYSIS
                        </span>

                        <span>
                            LIVE
                        </span>
                    </div>


                    <div className="tc-log-item">

                        <CheckCircle2 size={13} />

                        <span>
                            Architecture review completed
                        </span>

                        <small>
                            Done
                        </small>

                    </div>


                    <div className="tc-log-item">

                        <CheckCircle2 size={13} />

                        <span>
                            Technology landscape evaluated
                        </span>

                        <small>
                            Done
                        </small>

                    </div>


                    <div className="tc-log-item">

                        <CheckCircle2 size={13} />

                        <span>
                            Scalability roadmap generated
                        </span>

                        <small>
                            Ready
                        </small>

                    </div>

                </div>

            </motion.div>


            {/* =================================================
               FLOATING RECOMMENDATION
            ================================================= */}

            <motion.div
                className="tc-floating-card tc-floating-advisor"

                animate={{
                    y: [0, -8, 0],
                }}

                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >

                <div className="tc-floating-icon">
                    <Lightbulb size={17} />
                </div>

                <div>

                    <strong>
                        Expert Recommendation
                    </strong>

                    <span>
                        Architecture optimized
                    </span>

                </div>

            </motion.div>


            {/* =================================================
               FLOATING SECURITY
            ================================================= */}

            <motion.div
                className="tc-floating-card tc-floating-security"

                animate={{
                    y: [0, 7, 0],
                }}

                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >

                <ShieldCheck size={15} />

                <span>
                    Security Reviewed
                </span>

            </motion.div>

        </motion.div>
    );
}


/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function Technology_Consultation() {

    const navigate = useNavigate();


    /* =================================================
       NAVIGATION
    ================================================= */

    const goToContact = () => {
        navigate("/contact");
    };


    const goToQuote = () => {
        navigate("/get-a-quote");
    };


    return (
        <main className="technology-consultation-page">


            {/* =================================================
               HERO
            ================================================= */}

            <section className="tc-hero">

                <div className="tc-hero-grid" />

                <div className="tc-hero-glow tc-glow-one" />

                <div className="tc-hero-glow tc-glow-two" />


                <div className="tc-hero-content">


                    {/* =================================================
                       HERO COPY
                    ================================================= */}

                    <motion.div
                        className="tc-hero-copy"

                        variants={fadeLeft}

                        initial="hidden"

                        animate="visible"
                    >

                        <motion.div
                            className="tc-eyebrow"

                            initial={{
                                opacity: 0,
                                y: 15,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                            }}

                            transition={{
                                duration: 0.6,
                            }}
                        >

                            <span className="tc-eyebrow-dot" />

                            TECHNOLOGY CONSULTATION

                        </motion.div>


                        <h1>
                            Make Better

                            <span>
                                Technology Decisions.
                            </span>
                        </h1>


                        <p>
                            Turn complex technology challenges into clear,
                            scalable, and actionable strategies with expert
                            guidance from experienced software engineers,
                            architects, and technology consultants.
                        </p>


                        <div className="tc-hero-actions">

                            <motion.button
                                className="tc-primary-btn"

                                onClick={goToContact}

                                whileHover={{
                                    y: -3,
                                    scale: 1.02,
                                }}

                                whileTap={{
                                    scale: 0.98,
                                }}
                            >
                                Talk to an Expert

                                <ArrowRight size={17} />

                            </motion.button>


                            <motion.button
                                className="tc-secondary-btn"

                                onClick={goToQuote}

                                whileHover={{
                                    y: -3,
                                }}

                                whileTap={{
                                    scale: 0.98,
                                }}
                            >
                                Request Consultation

                                <ArrowUpRight size={16} />

                            </motion.button>

                        </div>


                        <div className="tc-hero-trust">

                            <div className="tc-trust-item">

                                <CheckCircle2 size={15} />

                                Practical Recommendations

                            </div>


                            <div className="tc-trust-item">

                                <ShieldCheck size={15} />

                                Security-Focused

                            </div>


                            <div className="tc-trust-item">

                                <Zap size={15} />

                                Business-Aligned

                            </div>

                        </div>

                    </motion.div>


                    {/* =================================================
                       HERO VISUAL
                    ================================================= */}

                    <ConsultationDashboard />

                </div>

            </section>


            {/* =================================================
               INTRO
            ================================================= */}

            <motion.section
                className="tc-intro"

                initial="hidden"

                whileInView="visible"

                viewport={{
                    once: true,
                    amount: 0.2,
                }}

                variants={staggerContainer}
            >

                <div className="tc-container tc-intro-grid">


                    <motion.div
                        className="tc-intro-heading"

                        variants={fadeLeft}
                    >

                        <span className="tc-section-label">

                            <Sparkles size={14} />

                            STRATEGIC TECHNOLOGY GUIDANCE

                        </span>


                        <h2>
                            Clarity before

                            <span>
                                complexity.
                            </span>
                        </h2>

                    </motion.div>


                    <motion.div
                        className="tc-intro-text"

                        variants={fadeRight}
                    >

                        <p>
                            Technology decisions can have long-term effects
                            on your product, team, budget, security, and
                            ability to scale. We help you make those decisions
                            with confidence.
                        </p>

                        <p>
                            From validating an early-stage product idea to
                            modernizing an enterprise platform, our consultants
                            combine technical expertise with business thinking
                            to create practical solutions.
                        </p>

                    </motion.div>

                </div>

            </motion.section>


            {/* =================================================
               STATS
            ================================================= */}

            <section className="tc-stats">

                <div className="tc-container tc-stats-grid">


                    <motion.div
                        className="tc-stat"

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        viewport={{
                            once: true,
                        }}
                    >

                        <strong>
                            360°
                        </strong>

                        <span>
                            Technology Perspective
                        </span>

                    </motion.div>


                    <motion.div
                        className="tc-stat"

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            delay: 0.1,
                        }}

                        viewport={{
                            once: true,
                        }}
                    >

                        <strong>
                            5+
                        </strong>

                        <span>
                            Core Technology Domains
                        </span>

                    </motion.div>


                    <motion.div
                        className="tc-stat"

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            delay: 0.2,
                        }}

                        viewport={{
                            once: true,
                        }}
                    >

                        <strong>
                            End-to-End
                        </strong>

                        <span>
                            Strategy to Execution
                        </span>

                    </motion.div>


                    <motion.div
                        className="tc-stat"

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            delay: 0.3,
                        }}

                        viewport={{
                            once: true,
                        }}
                    >

                        <strong>
                            Future
                        </strong>

                        <span>
                            Ready Architecture
                        </span>

                    </motion.div>

                </div>

            </section>


            {/* =================================================
               SERVICES
            ================================================= */}

            <section className="tc-services">

                <div className="tc-container">


                    <motion.div
                        className="tc-section-heading"

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}

                        variants={fadeUp}
                    >

                        <span className="tc-section-label">

                            <Settings2 size={14} />

                            WHAT WE CONSULT ON

                        </span>


                        <h2>
                            Technology expertise for

                            <span>
                                real business challenges.
                            </span>
                        </h2>


                        <p>
                            Whether you're launching a new product, scaling
                            an existing platform, or dealing with technical
                            complexity, our consultation services provide a
                            clear path forward.
                        </p>

                    </motion.div>


                    <motion.div
                        className="tc-services-grid"

                        variants={staggerContainer}

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.12,
                        }}
                    >

                        {consultationServices.map((service) => {

                            const Icon = service.icon;

                            return (
                                <motion.article
                                    className="tc-service-card"

                                    key={service.number}

                                    variants={fadeUp}

                                    whileHover={{
                                        y: -8,
                                    }}
                                >

                                    <div className="tc-service-card-top">

                                        <div className="tc-service-icon">
                                            <Icon size={21} />
                                        </div>

                                        <span className="tc-service-number">
                                            {service.number}
                                        </span>

                                    </div>


                                    <h3>
                                        {service.title}
                                    </h3>


                                    <p>
                                        {service.description}
                                    </p>


                                    <div className="tc-service-points">

                                        {service.points.map((point) => (

                                            <div
                                                className="tc-service-point"

                                                key={point}
                                            >

                                                <CheckCircle2 size={14} />

                                                {point}

                                            </div>

                                        ))}

                                    </div>


                                    <div className="tc-service-line" />

                                </motion.article>
                            );
                        })}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
               EXPERTISE
            ================================================= */}

            <section className="tc-expertise">

                <div className="tc-container tc-expertise-layout">


                    <motion.div
                        className="tc-expertise-content"

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}

                        variants={fadeLeft}
                    >

                        <span className="tc-section-label">

                            <BrainCircuit size={14} />

                            OUR EXPERTISE

                        </span>


                        <h2>
                            Deep technical knowledge.

                            <span>
                                Practical thinking.
                            </span>
                        </h2>


                        <p>
                            Our consultants understand the full technology
                            lifecycle — from product strategy and architecture
                            to development, cloud infrastructure, security,
                            and ongoing optimization.
                        </p>


                        <motion.button
                            className="tc-text-btn"

                            onClick={goToContact}

                            whileHover={{
                                x: 5,
                            }}

                            whileTap={{
                                scale: 0.98,
                            }}
                        >

                            Discuss your challenge

                            <ArrowRight size={16} />

                        </motion.button>

                    </motion.div>


                    <motion.div
                        className="tc-expertise-grid"

                        variants={staggerContainer}

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                    >

                        {expertise.map((item) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    className="tc-expertise-card"

                                    key={item.title}

                                    variants={fadeUp}

                                    whileHover={{
                                        y: -6,
                                    }}
                                >

                                    <div className="tc-expertise-icon">
                                        <Icon size={19} />
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

                    </motion.div>

                </div>

            </section>


            {/* =================================================
               PROCESS
            ================================================= */}

            <section className="tc-process">

                <div className="tc-container">


                    <motion.div
                        className="tc-section-heading tc-process-heading"

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}

                        variants={fadeUp}
                    >

                        <span className="tc-section-label">

                            <Workflow size={14} />

                            OUR CONSULTATION PROCESS

                        </span>


                        <h2>
                            From uncertainty to

                            <span>
                                clear direction.
                            </span>
                        </h2>


                        <p>
                            A structured consultation process designed to
                            transform technical uncertainty into practical
                            decisions and an executable roadmap.
                        </p>

                    </motion.div>


                    <div className="tc-process-line" />


                    <motion.div
                        className="tc-process-grid"

                        variants={staggerContainer}

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.12,
                        }}
                    >

                        {processSteps.map((step) => {

                            const Icon = step.icon;

                            return (
                                <motion.div
                                    className="tc-process-step"

                                    key={step.number}

                                    variants={fadeUp}
                                >

                                    <span className="tc-process-number">
                                        {step.number}
                                    </span>


                                    <motion.div
                                        className="tc-process-icon"

                                        whileHover={{
                                            rotate: 5,
                                            scale: 1.08,
                                        }}
                                    >

                                        <Icon size={20} />

                                    </motion.div>


                                    <h3>
                                        {step.title}
                                    </h3>


                                    <p>
                                        {step.description}
                                    </p>

                                </motion.div>
                            );
                        })}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
               TECHNOLOGY LANDSCAPE
            ================================================= */}

            <section className="tc-tech">

                <div className="tc-tech-glow" />


                <div className="tc-container tc-tech-box">


                    <motion.div
                        className="tc-tech-content"

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}

                        variants={fadeLeft}
                    >

                        <span className="tc-section-label">

                            <Cpu size={14} />

                            TECHNOLOGY LANDSCAPE

                        </span>


                        <h2>
                            Advice built around the

                            <span>
                                right technology.
                            </span>
                        </h2>


                        <p>
                            We work across a broad range of technologies,
                            frameworks, platforms, and development ecosystems.
                            Instead of forcing every project into a fixed
                            technology stack, we recommend solutions based on
                            your product requirements, existing systems, team
                            capabilities, budget, security needs, and
                            long-term growth.
                        </p>


                        <div className="tc-tech-highlight">

                            <div className="tc-tech-highlight-icon">
                                <Target size={19} />
                            </div>


                            <div>

                                <strong>
                                    The right technology depends on the business.
                                </strong>

                                <span>
                                    We evaluate your requirements first and
                                    recommend the technologies, platforms,
                                    and architecture that best fit your goals.
                                </span>

                            </div>

                        </div>

                    </motion.div>


                    <motion.div
                        className="tc-technology-list"

                        variants={staggerContainer}

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                    >

                        {technologies.map((technology) => {

                            const Icon = technology.icon;

                            return (
                                <motion.div
                                    className="tc-technology-pill"

                                    key={technology.name}

                                    variants={fadeUp}

                                    whileHover={{
                                        y: -4,
                                        scale: 1.02,
                                    }}
                                >

                                    <Icon size={16} />

                                    {technology.name}

                                </motion.div>
                            );
                        })}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
               ENGAGEMENT MODELS
            ================================================= */}

            <section className="tc-engagement">

                <div className="tc-container">


                    <motion.div
                        className="tc-section-heading"

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}

                        variants={fadeUp}
                    >

                        <span className="tc-section-label">

                            <Users size={14} />

                            ENGAGEMENT OPTIONS

                        </span>


                        <h2>
                            Choose the level of

                            <span>
                                guidance you need.
                            </span>
                        </h2>


                        <p>
                            From a focused technical discussion to ongoing
                            strategic advisory, choose an engagement model
                            that fits your current stage and objectives.
                        </p>

                    </motion.div>


                    <motion.div
                        className="tc-engagement-grid"

                        variants={staggerContainer}

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                    >

                        {engagementModels.map((model) => {

                            const Icon = model.icon;

                            return (
                                <motion.article
                                    className={`tc-engagement-card ${
                                        model.featured
                                            ? "tc-engagement-featured"
                                            : ""
                                    }`}

                                    key={model.title}

                                    variants={fadeUp}

                                    whileHover={{
                                        y: -8,
                                    }}
                                >

                                    {model.featured && (
                                        <div className="tc-model-badge">
                                            MOST POPULAR
                                        </div>
                                    )}


                                    <div className="tc-model-icon">
                                        <Icon size={21} />
                                    </div>


                                    <span className="tc-model-label">
                                        CONSULTING MODEL
                                    </span>


                                    <h3>
                                        {model.title}
                                    </h3>


                                    <p>
                                        {model.description}
                                    </p>


                                    <div className="tc-model-divider" />


                                    <div className="tc-model-features">

                                        {model.features.map((feature) => (

                                            <div
                                                className="tc-model-feature"

                                                key={feature}
                                            >

                                                <CheckCircle2 size={14} />

                                                {feature}

                                            </div>

                                        ))}

                                    </div>


                                    <motion.button
                                        className={`tc-model-button ${
                                            model.featured
                                                ? "tc-model-button-primary"
                                                : ""
                                        }`}

                                        onClick={goToContact}

                                        whileHover={{
                                            x: 4,
                                        }}

                                        whileTap={{
                                            scale: 0.98,
                                        }}
                                    >

                                        Discuss This Option

                                        <ArrowRight size={15} />

                                    </motion.button>

                                </motion.article>
                            );
                        })}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
               FAQ
            ================================================= */}

            <section className="tc-faq">

                <div className="tc-container">


                    <motion.div
                        className="tc-section-heading tc-faq-heading"

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}

                        variants={fadeUp}
                    >

                        <span className="tc-section-label">

                            <CircleCheck size={14} />

                            COMMON QUESTIONS

                        </span>


                        <h2>
                            Technology consultation,

                            <span>
                                simplified.
                            </span>
                        </h2>


                        <p>
                            Here are answers to some common questions about
                            working with our technology consultants.
                        </p>

                    </motion.div>


                    <motion.div
                        className="tc-faq-list"

                        variants={staggerContainer}

                        initial="hidden"

                        whileInView="visible"

                        viewport={{
                            once: true,
                            amount: 0.12,
                        }}
                    >

                        {faqs.map((faq) => (

                            <motion.div
                                className="tc-faq-item"

                                key={faq.number}

                                variants={fadeUp}

                                whileHover={{
                                    x: 4,
                                }}
                            >

                                <span className="tc-faq-number">
                                    {faq.number}
                                </span>


                                <div className="tc-faq-content">

                                    <h3>
                                        {faq.question}
                                    </h3>

                                    <p>
                                        {faq.answer}
                                    </p>

                                </div>


                                <ChevronRight
                                    className="tc-faq-check"
                                    size={18}
                                />

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
               FINAL CTA
            ================================================= */}

            <section className="tc-final-cta">

                <div className="tc-cta-grid" />

                <div className="tc-cta-glow" />


                <motion.div
                    className="tc-cta-content"

                    initial="hidden"

                    whileInView="visible"

                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}

                    variants={fadeUp}
                >

                    <motion.div
                        className="tc-cta-icon"

                        animate={{
                            y: [0, -5, 0],
                        }}

                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >

                        <Headphones size={24} />

                    </motion.div>


                    <span className="tc-cta-label">
                        HAVE A TECHNOLOGY CHALLENGE?
                    </span>


                    <h2>
                        Let's find the

                        <span>
                            right way forward.
                        </span>
                    </h2>


                    <p>
                        Talk to our technology experts about your product,
                        architecture, cloud infrastructure, AI strategy,
                        technical challenges, or next big idea.
                    </p>


                    <motion.button
                        className="tc-cta-button"

                        onClick={goToContact}

                        whileHover={{
                            y: -4,
                            scale: 1.02,
                        }}

                        whileTap={{
                            scale: 0.98,
                        }}
                    >

                        Schedule a Consultation

                        <ArrowRight size={17} />

                    </motion.button>


                    <div className="tc-cta-note">

                        <ShieldCheck size={13} />

                        Practical advice. Clear strategy. No unnecessary
                        complexity.

                    </div>

                </motion.div>

            </section>

        </main>
    );
}