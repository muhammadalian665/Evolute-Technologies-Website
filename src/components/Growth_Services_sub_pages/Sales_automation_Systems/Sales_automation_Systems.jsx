import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    BellRing,
    Bot,
    Check,
    ChevronRight,
    CircleCheck,
    Clock3,
    Database,
    Filter,
    GitBranch,
    Layers3,
    Mail,
    MessageSquare,
    MousePointerClick,
    RefreshCw,
    Settings2,
    Target,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react";

import "./Sales_automation_Systems.css";

/* =====================================================
   ANIMATION CONFIG
===================================================== */

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 45,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease,
        },
    },
};

const fadeDown = {
    hidden: {
        opacity: 0,
        y: -30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease,
        },
    },
};

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease,
        },
    },
};

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease,
        },
    },
};

const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.88,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease,
        },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

const fastStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
        },
    },
};

const cardHover = {
    y: -12,
    scale: 1.015,
    transition: {
        duration: 0.3,
        ease,
    },
};

const cardTap = {
    scale: 0.985,
};

/* =====================================================
   DATA
===================================================== */

const capabilities = [
    {
        number: "01",
        icon: Target,
        title: "Lead Capture & Routing",
        description:
            "Capture leads from forms, campaigns, landing pages and other sources, then automatically route them to the right workflow or sales representative.",
        points: [
            "Multi-source lead capture",
            "Automatic assignment",
            "Lead routing rules",
        ],
    },
    {
        number: "02",
        icon: Filter,
        title: "Lead Qualification",
        description:
            "Turn raw contacts into meaningful opportunities using qualification logic, scoring rules and business-specific signals.",
        points: [
            "Lead scoring",
            "Qualification workflows",
            "Priority identification",
        ],
    },
    {
        number: "03",
        icon: Database,
        title: "CRM Automation",
        description:
            "Keep your CRM organized without relying on repetitive manual updates. Automate records, stages, tasks and sales activities.",
        points: [
            "Automatic CRM updates",
            "Pipeline stage movement",
            "Task creation",
        ],
    },
    {
        number: "04",
        icon: Mail,
        title: "Follow-up Automation",
        description:
            "Create structured follow-up journeys that keep prospects engaged without forcing your sales team to manually track every conversation.",
        points: [
            "Email sequences",
            "Follow-up triggers",
            "Personalized touchpoints",
        ],
    },
    {
        number: "05",
        icon: GitBranch,
        title: "Workflow Automation",
        description:
            "Connect different sales actions into intelligent workflows that respond to prospect behavior and move opportunities forward.",
        points: [
            "Trigger-based workflows",
            "Conditional logic",
            "Cross-system actions",
        ],
    },
    {
        number: "06",
        icon: BarChart3,
        title: "Sales Intelligence",
        description:
            "Bring your sales activity into one visible system so your team can understand what is happening across the pipeline.",
        points: [
            "Pipeline visibility",
            "Activity tracking",
            "Performance insights",
        ],
    },
];

const systems = [
    {
        icon: Users,
        title: "Lead Management",
        text: "Capture, organize, enrich and distribute prospects automatically.",
    },
    {
        icon: Settings2,
        title: "CRM Workflows",
        text: "Automate repetitive CRM operations and keep records consistent.",
    },
    {
        icon: MessageSquare,
        title: "Sales Outreach",
        text: "Build structured communication journeys around prospect behavior.",
    },
    {
        icon: RefreshCw,
        title: "Process Automation",
        text: "Replace repetitive manual sales operations with connected workflows.",
    },
    {
        icon: TrendingUp,
        title: "Pipeline Intelligence",
        text: "Give teams a clearer view of leads, opportunities and sales activity.",
    },
    {
        icon: Zap,
        title: "Smart Triggers",
        text: "Use events and conditions to automatically initiate the next action.",
    },
];

const process = [
    {
        step: "01",
        title: "Discover",
        description:
            "We map your current sales process, identify bottlenecks and understand where automation can create the biggest impact.",
    },
    {
        step: "02",
        title: "Design",
        description:
            "We design workflows around your sales model, CRM structure, customer journey and business rules.",
    },
    {
        step: "03",
        title: "Integrate",
        description:
            "Your CRM, forms, communication tools and other systems are connected into a unified sales workflow.",
    },
    {
        step: "04",
        title: "Automate",
        description:
            "We implement triggers, routing, qualification, follow-ups and operational workflows.",
    },
    {
        step: "05",
        title: "Optimize",
        description:
            "We monitor the system, identify friction and continuously improve automation performance.",
    },
];

const outcomes = [
    "Reduce repetitive sales administration",
    "Respond to qualified leads faster",
    "Maintain consistent follow-up",
    "Improve pipeline visibility",
    "Reduce missed sales opportunities",
    "Create a scalable sales operation",
];

/* =====================================================
   COMPONENT
===================================================== */

function Sales_automation_Systems() {
    return (
        <main className="sales-auto-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="sales-auto-hero">

                <div className="sales-auto-hero-grid" />

                <motion.div
                    className="sales-auto-glow sales-auto-glow-one"
                    animate={{
                        x: [0, 35, 0],
                        y: [0, -25, 0],
                        scale: [1, 1.12, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="sales-auto-glow sales-auto-glow-two"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 25, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <div className="sales-auto-container sales-auto-hero-inner">

                    {/* HERO CONTENT */}

                    <motion.div
                        className="sales-auto-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >

                        <motion.div
                            className="sales-auto-eyebrow"
                            variants={fadeDown}
                        >
                            <motion.span
                                className="sales-auto-eyebrow-line"
                                initial={{ width: 0 }}
                                animate={{ width: 42 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.25,
                                    ease,
                                }}
                            />

                            SALES AUTOMATION SYSTEMS
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            whileHover={{
                                x: 3,
                                transition: { duration: 0.25 },
                            }}
                        >
                            Turn your sales process into a

                            <motion.span
                                animate={{
                                    backgroundPosition: [
                                        "0% 50%",
                                        "100% 50%",
                                        "0% 50%",
                                    ],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                {" "}
                                system that runs.
                            </motion.span>
                        </motion.h1>

                        <motion.p variants={fadeUp}>
                            Build a connected sales engine that captures leads,
                            qualifies opportunities, automates follow-ups and
                            keeps your pipeline moving without relying on
                            repetitive manual work.
                        </motion.p>

                        <motion.div
                            className="sales-auto-hero-actions"
                            variants={fadeUp}
                        >

                            {/* CTA → CONTACT US */}

                            <motion.a
                                href="/contact-us"
                                className="sales-auto-btn sales-auto-btn-primary"
                                whileHover={{
                                    y: -4,
                                    scale: 1.025,
                                }}
                                whileTap={cardTap}
                                transition={{
                                    duration: 0.2,
                                    ease,
                                }}
                            >
                                Build Your Sales System

                                <motion.span
                                    whileHover={{
                                        x: 4,
                                        y: -3,
                                        rotate: 8,
                                    }}
                                >
                                    <ArrowUpRight size={18} />
                                </motion.span>
                            </motion.a>

                            {/* CTA → CONTACT US */}

                            <motion.a
                                href="/contact-us"
                                className="sales-auto-btn sales-auto-btn-secondary"
                                whileHover={{
                                    y: -4,
                                    x: 3,
                                }}
                                whileTap={cardTap}
                            >
                                Explore Capabilities

                                <motion.span
                                    whileHover={{ x: 4 }}
                                >
                                    <ArrowRight size={18} />
                                </motion.span>
                            </motion.a>

                        </motion.div>

                        <motion.div
                            className="sales-auto-hero-note"
                            variants={fadeUp}
                            whileHover={{
                                x: 5,
                            }}
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <CircleCheck size={17} />
                            </motion.div>

                            Designed around your existing sales process
                        </motion.div>

                    </motion.div>


                    {/* HERO VISUAL */}

                    <motion.div
                        className="sales-auto-hero-visual"
                        initial={{
                            opacity: 0,
                            scale: 0.86,
                            x: 70,
                            rotateY: 8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            rotateY: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.25,
                            ease,
                        }}
                    >

                        <motion.div
                            className="sales-auto-visual-frame"
                            animate={{
                                y: [0, -6, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <div className="sales-auto-visual-top">

                                <div className="sales-auto-window-dots">
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <span>SALES ENGINE / LIVE</span>

                                <motion.div
                                    className="sales-auto-live"
                                    animate={{
                                        opacity: [0.65, 1, 0.65],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    <i />
                                    ACTIVE
                                </motion.div>

                            </div>


                            {/* FLOW */}

                            <div className="sales-auto-flow">

                                <motion.div
                                    className="sales-auto-flow-node node-lead"
                                    animate={{
                                        y: [0, -8, 0],
                                        rotate: [0, 0.5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    whileHover={{
                                        scale: 1.06,
                                    }}
                                >
                                    <Target size={19} />

                                    <div>
                                        <small>01</small>
                                        <strong>New Lead</strong>
                                    </div>
                                </motion.div>


                                <motion.div
                                    className="sales-auto-flow-line"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 1,
                                    }}
                                >
                                    <motion.span
                                        animate={{
                                            x: ["0%", "100%"],
                                        }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />
                                </motion.div>


                                <motion.div
                                    className="sales-auto-flow-node node-score"
                                    animate={{
                                        y: [0, 7, 0],
                                    }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    whileHover={{
                                        scale: 1.06,
                                    }}
                                >
                                    <Filter size={19} />

                                    <div>
                                        <small>02</small>
                                        <strong>Qualified</strong>
                                    </div>
                                </motion.div>


                                <motion.div
                                    className="sales-auto-flow-line"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 1.2,
                                    }}
                                >
                                    <motion.span
                                        animate={{
                                            x: ["0%", "100%"],
                                        }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: 0.3,
                                        }}
                                    />
                                </motion.div>


                                <motion.div
                                    className="sales-auto-flow-node node-crm"
                                    animate={{
                                        y: [0, -7, 0],
                                    }}
                                    transition={{
                                        duration: 3.2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    whileHover={{
                                        scale: 1.06,
                                    }}
                                >
                                    <Database size={19} />

                                    <div>
                                        <small>03</small>
                                        <strong>CRM Updated</strong>
                                    </div>
                                </motion.div>


                                <motion.div
                                    className="sales-auto-flow-line"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 1.4,
                                    }}
                                >
                                    <motion.span
                                        animate={{
                                            x: ["0%", "100%"],
                                        }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: 0.6,
                                        }}
                                    />
                                </motion.div>


                                <motion.div
                                    className="sales-auto-flow-node node-follow"
                                    animate={{
                                        y: [0, 8, 0],
                                    }}
                                    transition={{
                                        duration: 3.4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    whileHover={{
                                        scale: 1.06,
                                    }}
                                >
                                    <Mail size={19} />

                                    <div>
                                        <small>04</small>
                                        <strong>Follow-up</strong>
                                    </div>
                                </motion.div>

                            </div>


                            {/* STATS */}

                            <motion.div
                                className="sales-auto-mini-stats"
                                variants={fastStagger}
                                initial="hidden"
                                animate="visible"
                            >

                                <motion.div
                                    variants={scaleIn}
                                    whileHover={{
                                        y: -4,
                                        scale: 1.03,
                                    }}
                                >
                                    <span>ACTIVE LEADS</span>
                                    <strong>248</strong>
                                    <small>+18.4%</small>
                                </motion.div>

                                <motion.div
                                    variants={scaleIn}
                                    whileHover={{
                                        y: -4,
                                        scale: 1.03,
                                    }}
                                >
                                    <span>AUTOMATED TASKS</span>
                                    <strong>1,842</strong>
                                    <small>THIS MONTH</small>
                                </motion.div>

                                <motion.div
                                    variants={scaleIn}
                                    whileHover={{
                                        y: -4,
                                        scale: 1.03,
                                    }}
                                >
                                    <span>PIPELINE</span>
                                    <strong>+32%</strong>
                                    <small>GROWTH</small>
                                </motion.div>

                            </motion.div>

                        </motion.div>


                        {/* FLOATING CARD 1 */}

                        <motion.div
                            className="sales-auto-floating-card sales-auto-floating-card-one"
                            initial={{
                                opacity: 0,
                                x: -25,
                                y: 15,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, -10, 0],
                            }}
                            transition={{
                                opacity: {
                                    duration: 0.7,
                                    delay: 1,
                                },
                                x: {
                                    duration: 0.7,
                                    delay: 1,
                                },
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            whileHover={{
                                scale: 1.06,
                                rotate: -2,
                            }}
                        >

                            <div className="floating-icon">
                                <BellRing size={17} />
                            </div>

                            <div>
                                <small>TRIGGER</small>
                                <strong>Lead assigned</strong>
                            </div>

                        </motion.div>


                        {/* FLOATING CARD 2 */}

                        <motion.div
                            className="sales-auto-floating-card sales-auto-floating-card-two"
                            initial={{
                                opacity: 0,
                                x: 25,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, 10, 0],
                            }}
                            transition={{
                                opacity: {
                                    duration: 0.7,
                                    delay: 1.25,
                                },
                                x: {
                                    duration: 0.7,
                                    delay: 1.25,
                                },
                                y: {
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            whileHover={{
                                scale: 1.06,
                                rotate: 2,
                            }}
                        >

                            <div className="floating-icon">
                                <Zap size={17} />
                            </div>

                            <div>
                                <small>AUTOMATION</small>
                                <strong>Sequence started</strong>
                            </div>

                        </motion.div>

                    </motion.div>

                </div>
            </section>


            {/* =====================================================
                SYSTEM STRIP
            ===================================================== */}

            <section className="sales-auto-system-strip">

                <div className="sales-auto-container">

                    <motion.div
                        className="sales-auto-strip-label"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        ONE CONNECTED SALES SYSTEM
                    </motion.div>

                    <motion.div
                        className="sales-auto-strip-items"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        variants={stagger}
                    >

                        {[
                            [MousePointerClick, "Capture"],
                            [Filter, "Qualify"],
                            [Database, "Organize"],
                            [Mail, "Follow Up"],
                            [TrendingUp, "Convert"],
                        ].map(([Icon, text], index) => (
                            <motion.div
                                className="sales-auto-strip-step"
                                key={text}
                                variants={fadeUp}
                                whileHover={{
                                    y: -4,
                                    scale: 1.04,
                                }}
                            >
                                <span>
                                    <Icon size={17} />
                                    {text}
                                </span>

                                {index < 4 && (
                                    <motion.div
                                        animate={{
                                            x: [0, 4, 0],
                                        }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.15,
                                        }}
                                    >
                                        <ChevronRight />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}

                    </motion.div>

                </div>
            </section>


            {/* =====================================================
                INTRO
            ===================================================== */}

            <section className="sales-auto-intro">

                <div className="sales-auto-container">

                    <motion.div
                        className="sales-auto-section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={stagger}
                    >

                        <motion.div
                            className="sales-auto-eyebrow"
                            variants={fadeDown}
                        >
                            <span className="sales-auto-eyebrow-line" />
                            THE SYSTEM
                        </motion.div>

                        <motion.h2 variants={fadeUp}>
                            Your sales team should sell.

                            <span>
                                {" "}
                                Your system should handle the repetition.
                            </span>
                        </motion.h2>

                        <motion.p variants={fadeUp}>
                            Sales automation is not about removing people from
                            the process. It is about removing the repetitive
                            work that slows them down.
                        </motion.p>

                    </motion.div>

                </div>
            </section>


            {/* =====================================================
                CAPABILITIES
            ===================================================== */}

            <section
                className="sales-auto-capabilities"
                id="sales-auto-capabilities"
            >

                <motion.div
                    className="sales-auto-dark-pattern"
                    animate={{
                        backgroundPosition: [
                            "0px 0px",
                            "40px 40px",
                            "0px 0px",
                        ],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <div className="sales-auto-container">

                    <motion.div
                        className="sales-auto-section-heading light-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={stagger}
                    >

                        <motion.div
                            className="sales-auto-eyebrow"
                            variants={fadeDown}
                        >
                            <span className="sales-auto-eyebrow-line" />
                            WHAT WE AUTOMATE
                        </motion.div>

                        <motion.h2 variants={fadeUp}>
                            Every repetitive sales action

                            <span>
                                {" "}
                                can become a workflow.
                            </span>
                        </motion.h2>

                        <motion.p variants={fadeUp}>
                            We connect the moving parts of your sales operation
                            into one structured automation layer.
                        </motion.p>

                    </motion.div>


                    <motion.div
                        className="sales-auto-capability-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={stagger}
                    >

                        {capabilities.map((item) => {

                            const Icon = item.icon;

                            return (
                                <motion.article
                                    className="sales-auto-capability-card"
                                    key={item.number}
                                    variants={fadeUp}
                                    whileHover={cardHover}
                                    whileTap={cardTap}
                                >

                                    <motion.div
                                        className="sales-auto-card-number"
                                        whileHover={{
                                            x: 5,
                                        }}
                                    >
                                        {item.number}
                                    </motion.div>

                                    <motion.div
                                        className="sales-auto-card-icon"
                                        whileHover={{
                                            rotate: [0, -7, 7, 0],
                                            scale: 1.08,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                        }}
                                    >
                                        <Icon size={23} />
                                    </motion.div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                    <ul>
                                        {item.points.map((point) => (
                                            <motion.li
                                                key={point}
                                                whileHover={{
                                                    x: 5,
                                                }}
                                            >
                                                <Check size={15} />
                                                {point}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <motion.div
                                        className="sales-auto-card-arrow"
                                        whileHover={{
                                            x: 5,
                                            y: -5,
                                            rotate: 8,
                                        }}
                                    >
                                        <ArrowUpRight size={19} />
                                    </motion.div>

                                </motion.article>
                            );
                        })}

                    </motion.div>
                </div>
            </section>


            {/* =====================================================
                ARCHITECTURE
            ===================================================== */}

            <section className="sales-auto-architecture">

                <div className="sales-auto-container">

                    <motion.div
                        className="sales-auto-section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={stagger}
                    >

                        <motion.div
                            className="sales-auto-eyebrow"
                            variants={fadeDown}
                        >
                            <span className="sales-auto-eyebrow-line" />
                            AUTOMATION ARCHITECTURE
                        </motion.div>

                        <motion.h2 variants={fadeUp}>
                            From first interaction

                            <span>
                                {" "}
                                to sales-ready opportunity.
                            </span>
                        </motion.h2>

                    </motion.div>


                    <motion.div
                        className="sales-auto-architecture-box"
                        initial={{
                            opacity: 0,
                            y: 45,
                            scale: 0.96,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.85,
                            ease,
                        }}
                    >

                        <div className="architecture-grid-pattern" />

                        <motion.div
                            className="architecture-label"
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                            }}
                        >
                            <motion.span
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                            AUTOMATED SALES FLOW
                        </motion.div>


                        <motion.div
                            className="architecture-flow"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            variants={stagger}
                        >

                            {[
                                [MousePointerClick, "Traffic"],
                                [Users, "Lead Capture"],
                                [Filter, "Qualification"],
                                [Database, "CRM"],
                                [Mail, "Follow-up"],
                                [TrendingUp, "Conversion"],
                            ].map(([Icon, title], index) => (
                                <motion.div
                                    className="architecture-flow-group"
                                    key={title}
                                    variants={scaleIn}
                                >

                                    <motion.div
                                        className={`architecture-node ${
                                            index === 5
                                                ? "architecture-node-final"
                                                : ""
                                        }`}
                                        whileHover={{
                                            y: -7,
                                            scale: 1.06,
                                        }}
                                    >
                                        <Icon size={20} />
                                        <span>{title}</span>
                                    </motion.div>

                                    {index < 5 && (
                                        <motion.div
                                            className="architecture-connector"
                                            initial={{
                                                scaleX: 0,
                                            }}
                                            whileInView={{
                                                scaleX: 1,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.25 + index * 0.12,
                                            }}
                                        >
                                            <i />
                                        </motion.div>
                                    )}

                                </motion.div>
                            ))}

                        </motion.div>


                        <motion.div
                            className="architecture-bottom"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >

                            <motion.div variants={fadeUp}>
                                <span>TRIGGERS</span>
                                <strong>Behavior + Data</strong>
                            </motion.div>

                            <motion.div variants={fadeUp}>
                                <span>LOGIC</span>
                                <strong>Rules + Conditions</strong>
                            </motion.div>

                            <motion.div variants={fadeUp}>
                                <span>ACTIONS</span>
                                <strong>Automated Execution</strong>
                            </motion.div>

                        </motion.div>

                    </motion.div>

                </div>
            </section>


            {/* =====================================================
                SYSTEMS
            ===================================================== */}

            <section className="sales-auto-systems">

                <div className="sales-auto-container">

                    <div className="sales-auto-systems-layout">

                        <motion.div
                            className="sales-auto-systems-copy"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={stagger}
                        >

                            <motion.div
                                className="sales-auto-eyebrow"
                                variants={fadeDown}
                            >
                                <span className="sales-auto-eyebrow-line" />
                                CORE SYSTEMS
                            </motion.div>

                            <motion.h2 variants={fadeLeft}>
                                The infrastructure behind

                                <span>
                                    {" "}
                                    a smoother sales operation.
                                </span>
                            </motion.h2>

                            <motion.p variants={fadeUp}>
                                Instead of adding another disconnected tool,
                                we create an automation layer that connects
                                your existing sales stack and processes.
                            </motion.p>

                            {/* CTA → CONTACT US */}

                            <motion.a
                                href="/contact-us"
                                className="sales-auto-text-link"
                                variants={fadeUp}
                                whileHover={{
                                    x: 6,
                                }}
                            >
                                Talk to us about your workflow

                                <motion.span
                                    whileHover={{
                                        x: 5,
                                    }}
                                >
                                    <ArrowRight size={18} />
                                </motion.span>
                            </motion.a>

                        </motion.div>


                        <motion.div
                            className="sales-auto-systems-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            variants={stagger}
                        >

                            {systems.map((system) => {

                                const Icon = system.icon;

                                return (
                                    <motion.div
                                        className="sales-auto-system-card"
                                        key={system.title}
                                        variants={fadeRight}
                                        whileHover={{
                                            y: -9,
                                            x: 4,
                                            scale: 1.01,
                                        }}
                                        whileTap={cardTap}
                                    >

                                        <motion.div
                                            className="system-card-icon"
                                            whileHover={{
                                                rotate: 8,
                                                scale: 1.1,
                                            }}
                                        >
                                            <Icon size={21} />
                                        </motion.div>

                                        <div>
                                            <h3>{system.title}</h3>
                                            <p>{system.text}</p>
                                        </div>

                                        <motion.div
                                            whileHover={{
                                                x: 5,
                                                y: -5,
                                            }}
                                        >
                                            <ArrowUpRight
                                                className="system-card-arrow"
                                                size={18}
                                            />
                                        </motion.div>

                                    </motion.div>
                                );
                            })}

                        </motion.div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                PROCESS
            ===================================================== */}

            <section className="sales-auto-process">

                <div className="sales-auto-container">

                    <motion.div
                        className="sales-auto-section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={stagger}
                    >

                        <motion.div
                            className="sales-auto-eyebrow"
                            variants={fadeDown}
                        >
                            <span className="sales-auto-eyebrow-line" />
                            HOW WE BUILD IT
                        </motion.div>

                        <motion.h2 variants={fadeUp}>
                            Automation designed around

                            <span>
                                {" "}
                                your business.
                            </span>
                        </motion.h2>

                        <motion.p variants={fadeUp}>
                            We don't force your sales process into a template.
                            We build the system around the way your business
                            actually operates.
                        </motion.p>

                    </motion.div>


                    <div className="sales-auto-process-track">

                        <motion.div
                            className="sales-auto-process-line"
                            initial={{
                                scaleY: 0,
                                transformOrigin: "top",
                            }}
                            whileInView={{
                                scaleY: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 1.4,
                                ease,
                            }}
                        />

                        {process.map((item, index) => (

                            <motion.div
                                className="sales-auto-process-item"
                                key={item.step}
                                initial={{
                                    opacity: 0,
                                    y: 35,
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
                                    duration: 0.65,
                                    delay: index * 0.12,
                                    ease,
                                }}
                            >

                                <motion.div
                                    className="process-number"
                                    whileHover={{
                                        scale: 1.12,
                                        rotate: 5,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                >
                                    {item.step}
                                </motion.div>

                                <div className="process-content">
                                    <span>STEP {item.step}</span>

                                    <motion.h3
                                        whileHover={{
                                            x: 5,
                                        }}
                                    >
                                        {item.title}
                                    </motion.h3>

                                    <p>{item.description}</p>
                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>


            {/* =====================================================
                OUTCOMES
            ===================================================== */}

            <section className="sales-auto-outcomes">

                <div className="sales-auto-container">

                    <motion.div
                        className="sales-auto-outcomes-box"
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.97,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            ease,
                        }}
                    >

                        <motion.div
                            className="outcomes-pattern"
                            animate={{
                                x: [0, 25, 0],
                                y: [0, 15, 0],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <motion.div
                            className="outcomes-copy"
                            initial={{
                                opacity: 0,
                                x: -40,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.8,
                                ease,
                            }}
                        >

                            <div className="sales-auto-eyebrow light-eyebrow">
                                <span className="sales-auto-eyebrow-line" />
                                THE RESULT
                            </div>

                            <h2>
                                Less manual work.
                                <br />
                                <span>More momentum.</span>
                            </h2>

                            <p>
                                A well-designed sales automation system gives
                                your team more time to focus on conversations,
                                relationships and revenue.
                            </p>

                        </motion.div>


                        <motion.div
                            className="outcomes-list"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                            variants={stagger}
                        >

                            {outcomes.map((outcome) => (

                                <motion.div
                                    className="outcome-item"
                                    key={outcome}
                                    variants={fadeRight}
                                    whileHover={{
                                        x: 8,
                                    }}
                                >

                                    <motion.div
                                        className="outcome-check"
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: 8,
                                        }}
                                    >
                                        <Check size={15} />
                                    </motion.div>

                                    <span>{outcome}</span>

                                </motion.div>

                            ))}

                        </motion.div>

                    </motion.div>

                </div>
            </section>


            {/* =====================================================
                CTA
            ===================================================== */}

            <section
                className="sales-auto-contact"
                id="sales-auto-contact"
            >

                <motion.div
                    className="sales-auto-contact-pattern"
                    animate={{
                        backgroundPosition: [
                            "0px 0px",
                            "60px 40px",
                            "0px 0px",
                        ],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <motion.div
                    className="sales-auto-contact-orb orb-one"
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="sales-auto-contact-orb orb-two"
                    animate={{
                        x: [0, -35, 0],
                        y: [0, 25, 0],
                        scale: [1, 1.18, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />


                <motion.div
                    className="sales-auto-contact-content"
                    initial={{
                        opacity: 0,
                        y: 45,
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
                        duration: 0.8,
                        ease,
                    }}
                >

                    <motion.div
                        className="sales-auto-eyebrow light-eyebrow"
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        <span className="sales-auto-eyebrow-line" />
                        READY TO AUTOMATE?
                    </motion.div>

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease,
                        }}
                    >
                        Build a sales system

                        <span>
                            {" "}
                            that works while you work.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                            ease,
                        }}
                    >
                        Tell us where your sales process slows down. We'll help
                        you identify what can be automated, connected and
                        improved.
                    </motion.p>


                    <motion.div
                        className="sales-auto-contact-actions"
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.65,
                            delay: 0.3,
                            ease,
                        }}
                    >

                        {/* CTA → CONTACT US */}

                        <motion.a
                            href="/contact-us"
                            className="sales-auto-btn sales-auto-btn-contact"
                            whileHover={{
                                y: -5,
                                scale: 1.04,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                        >
                            Start a Conversation

                            <motion.span
                                whileHover={{
                                    x: 5,
                                    y: -4,
                                    rotate: 8,
                                }}
                            >
                                <ArrowUpRight size={18} />
                            </motion.span>
                        </motion.a>

                    </motion.div>

                </motion.div>


                <motion.div
                    className="sales-auto-contact-bottom"
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
                    transition={{
                        duration: 0.7,
                        delay: 0.45,
                    }}
                >

                    <motion.span whileHover={{ y: -3 }}>
                        <Clock3 size={15} />
                        Built for scalable sales operations
                    </motion.span>

                    <motion.span whileHover={{ y: -3 }}>
                        <Bot size={15} />
                        Automation-first workflows
                    </motion.span>

                    <motion.span whileHover={{ y: -3 }}>
                        <Layers3 size={15} />
                        Connected systems
                    </motion.span>

                </motion.div>

            </section>

        </main>
    );
}

export default Sales_automation_Systems;