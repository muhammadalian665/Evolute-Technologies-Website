import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
    ArrowRight,
    ArrowUpRight,
    Users,
    Code2,
    Layers3,
    Smartphone,
    BrainCircuit,
    Cloud,
    ShieldCheck,
    CheckCircle2,
    Zap,
    MessageSquare,
    Rocket,
    Settings2,
    Database,
    Server,
    Palette,
    TestTube2,
    BriefcaseBusiness,
    TrendingUp,
} from "lucide-react";

import "./Dedicated_Development_Teams.css";


/* =====================================================
   ANIMATION VARIANTS
===================================================== */

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
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
            staggerChildren: 0.08,
        },
    },
};


/* =====================================================
   TECHNOLOGY STACKS
===================================================== */

const technologyStacks = [
    {
        icon: Code2,
        title: "Frontend Development",

        description:
            "Build fast, responsive and scalable user experiences with modern frontend technologies.",

        technologies: [
            "React.js",
            "Next.js",
            "Angular",
            "Vue.js",
            "JavaScript",
            "TypeScript",
        ],
    },

    {
        icon: Server,
        title: "Backend Development",

        description:
            "Robust APIs, business logic and enterprise-grade backend systems built for scale.",

        technologies: [
            "Node.js",
            ".NET",
            "ASP.NET",
            "Laravel",
            "PHP",
            "Python",
            "Java",
        ],
    },

    {
        icon: Smartphone,
        title: "Mobile Development",

        description:
            "Experienced mobile developers for native and cross-platform application development.",

        technologies: [
            "React Native",
            "Flutter",
            "Android",
            "Kotlin",
            "Java",
            "iOS",
        ],
    },

    {
        icon: Database,
        title: "Database & Data",

        description:
            "Design reliable data architectures for applications of every size and complexity.",

        technologies: [
            "MySQL",
            "PostgreSQL",
            "SQL Server",
            "MongoDB",
            "Redis",
            "Firebase",
        ],
    },

    {
        icon: Cloud,
        title: "Cloud & DevOps",

        description:
            "Deploy, automate and manage secure cloud infrastructure with experienced DevOps engineers.",

        technologies: [
            "AWS",
            "Microsoft Azure",
            "Docker",
            "Kubernetes",
            "CI/CD",
            "Linux",
        ],
    },

    {
        icon: BrainCircuit,
        title: "AI & Intelligent Solutions",

        description:
            "Build intelligent products using modern AI, automation and generative AI technologies.",

        technologies: [
            "Python",
            "Machine Learning",
            "Generative AI",
            "LLM Integration",
            "AI Automation",
            "Computer Vision",
        ],
    },

    {
        icon: TestTube2,
        title: "QA & Testing",

        description:
            "Keep your products reliable with dedicated quality assurance and testing professionals.",

        technologies: [
            "Manual Testing",
            "Automation Testing",
            "API Testing",
            "Regression Testing",
            "Performance Testing",
            "QA Strategy",
        ],
    },

    {
        icon: Palette,
        title: "UI/UX & Product Design",

        description:
            "Create intuitive product experiences backed by thoughtful user-centered design.",

        technologies: [
            "Figma",
            "UI Design",
            "UX Research",
            "Prototyping",
            "Design Systems",
            "Product Design",
        ],
    },
];


/* =====================================================
   TEAM TYPES
===================================================== */

const teamTypes = [
    {
        icon: Code2,
        number: "01",
        title: "Full-Stack Team",

        description:
            "A complete development team covering frontend, backend, database and deployment.",
    },

    {
        icon: Layers3,
        number: "02",
        title: "Web Development Team",

        description:
            "Dedicated specialists for modern web applications, SaaS platforms and enterprise systems.",
    },

    {
        icon: Smartphone,
        number: "03",
        title: "Mobile App Team",

        description:
            "Experienced developers for Android, iOS and cross-platform mobile applications.",
    },

    {
        icon: BrainCircuit,
        number: "04",
        title: "AI Development Team",

        description:
            "AI engineers and developers focused on automation, intelligent products and AI integrations.",
    },

    {
        icon: Cloud,
        number: "05",
        title: "Cloud & DevOps Team",

        description:
            "Engineers focused on cloud infrastructure, deployment, scalability and reliability.",
    },

    {
        icon: TestTube2,
        number: "06",
        title: "QA & Testing Team",

        description:
            "Quality-focused professionals who make sure your product performs reliably at every stage.",
    },
];


/* =====================================================
   BENEFITS
===================================================== */

const benefits = [
    {
        icon: Users,
        title: "Experienced Developers",

        description:
            "Work with skilled professionals who understand real-world products, architectures and business requirements.",
    },

    {
        icon: Layers3,
        title: "Any Technology Stack",

        description:
            "From modern JavaScript frameworks to .NET, PHP, Python, mobile, AI, cloud and DevOps.",
    },

    {
        icon: TrendingUp,
        title: "Scale Your Team",

        description:
            "Start with the team you need today and add developers as your project grows.",
    },

    {
        icon: MessageSquare,
        title: "Direct Communication",

        description:
            "Stay connected with your dedicated developers and maintain complete visibility throughout development.",
    },

    {
        icon: Zap,
        title: "Faster Development",

        description:
            "Skip lengthy hiring cycles and start working with an experienced development team faster.",
    },

    {
        icon: ShieldCheck,
        title: "Reliable Delivery",

        description:
            "Structured processes, quality practices and experienced teams help keep projects on track.",
    },
];


/* =====================================================
   TEAM COMPOSITION
===================================================== */

const teamComposition = [
    {
        role: "Product Manager",
        icon: BriefcaseBusiness,
        description: "Strategy & coordination",
    },

    {
        role: "UI/UX Designer",
        icon: Palette,
        description: "Product experience",
    },

    {
        role: "Frontend Developer",
        icon: Code2,
        description: "Web interfaces",
    },

    {
        role: "Backend Developer",
        icon: Server,
        description: "APIs & systems",
    },

    {
        role: "Mobile Developer",
        icon: Smartphone,
        description: "Mobile applications",
    },

    {
        role: "QA Engineer",
        icon: TestTube2,
        description: "Quality assurance",
    },

    {
        role: "DevOps Engineer",
        icon: Cloud,
        description: "Infrastructure & deployment",
    },
];


/* =====================================================
   PROCESS
===================================================== */

const processSteps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Tell Us Your Requirements",

        description:
            "Share your project goals, required skills, technology stack and team size.",
    },

    {
        number: "02",
        icon: Users,
        title: "We Build Your Team",

        description:
            "We identify the right developers and specialists based on your technical and business needs.",
    },

    {
        number: "03",
        icon: Rocket,
        title: "Start Building",

        description:
            "Your dedicated team starts working with your preferred workflow, tools and communication process.",
    },

    {
        number: "04",
        icon: TrendingUp,
        title: "Scale When Needed",

        description:
            "Add specialists, increase capacity or adjust your team as your product evolves.",
    },
];


/* =====================================================
   WHAT WE BUILD
===================================================== */

const solutions = [
    "SaaS Platforms",
    "Enterprise Applications",
    "Web Applications",
    "Mobile Applications",
    "AI Products",
    "E-commerce Platforms",
    "MVPs & Startups",
    "APIs & Backend Systems",
    "Cloud Solutions",
    "Business Automation",
    "Custom Software",
    "Digital Products",
];


/* =====================================================
   MAIN COMPONENT
===================================================== */

const Dedicated_Development_Teams = () => {

    const navigate = useNavigate();


    /* =====================================================
       CONTACT CTA
       App.jsx route = /contact-us
    ===================================================== */

    const handleContact = () => {
        navigate("/contact-us");

        // Optional:
        // Scroll to top after navigation
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (

        <main className="dedicated-development-teams">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="ddt-hero">

                <div className="ddt-hero-background">

                    <div className="ddt-glow ddt-glow-one" />

                    <div className="ddt-glow ddt-glow-two" />

                    <div className="ddt-grid" />

                </div>


                <div className="ddt-hero-content">


                    <motion.div
                        className="ddt-hero-copy"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >


                        <motion.div
                            className="ddt-eyebrow"
                            variants={fadeUp}
                        >

                            <span className="ddt-eyebrow-icon">
                                <Users size={16} />
                            </span>

                            Dedicated Development Teams

                        </motion.div>


                        <motion.h1 variants={fadeUp}>

                            Build Your

                            <span>
                                {" "}
                                Dream Development Team.
                            </span>

                        </motion.h1>


                        <motion.p variants={fadeUp}>

                            Get access to experienced developers, engineers,
                            designers and technology specialists across
                            modern technology stacks — all working as an
                            extension of your team.

                        </motion.p>


                        <motion.div
                            className="ddt-hero-actions"
                            variants={fadeUp}
                        >

                            {/* CONTACT US */}

                            <button
                                type="button"
                                className="ddt-primary-btn"
                                onClick={handleContact}
                            >

                                Build Your Team

                                <ArrowRight size={18} />

                            </button>


                            {/* CONTACT US */}

                            <button
                                type="button"
                                className="ddt-secondary-btn"
                                onClick={handleContact}
                            >

                                Talk to an Expert

                                <ArrowUpRight size={18} />

                            </button>

                        </motion.div>


                        <motion.div
                            className="ddt-hero-trust"
                            variants={fadeUp}
                        >

                            <div className="ddt-trust-item">

                                <CheckCircle2 size={17} />

                                Experienced Developers

                            </div>


                            <div className="ddt-trust-item">

                                <CheckCircle2 size={17} />

                                Multiple Technology Stacks

                            </div>


                            <div className="ddt-trust-item">

                                <CheckCircle2 size={17} />

                                Flexible Team Scaling

                            </div>

                        </motion.div>


                    </motion.div>


                    {/* =================================================
                        HERO VISUAL
                    ================================================= */}

                    <motion.div
                        className="ddt-hero-visual"

                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            x: 50,
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}

                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <div className="ddt-orbit ddt-orbit-one" />

                        <div className="ddt-orbit ddt-orbit-two" />


                        <motion.div
                            className="ddt-team-core"

                            animate={{
                                y: [0, -12, 0],
                            }}

                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <div className="ddt-core-icon">

                                <Users size={42} />

                            </div>

                            <span>YOUR</span>

                            <strong>
                                DEVELOPMENT TEAM
                            </strong>

                            <div className="ddt-core-line" />

                            <small>
                                Built around your product
                            </small>

                        </motion.div>


                        <motion.div
                            className="ddt-floating-card ddt-card-react"

                            animate={{
                                y: [0, -10, 0],
                                rotate: [-2, 2, -2],
                            }}

                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <Code2 size={18} />

                            <span>
                                Frontend
                            </span>

                            <strong>
                                React / Next.js
                            </strong>

                        </motion.div>


                        <motion.div
                            className="ddt-floating-card ddt-card-backend"

                            animate={{
                                y: [0, 10, 0],
                                rotate: [2, -2, 2],
                            }}

                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <Server size={18} />

                            <span>
                                Backend
                            </span>

                            <strong>
                                .NET / Node.js
                            </strong>

                        </motion.div>


                        <motion.div
                            className="ddt-floating-card ddt-card-mobile"

                            animate={{
                                y: [0, -8, 0],
                            }}

                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <Smartphone size={18} />

                            <span>
                                Mobile
                            </span>

                            <strong>
                                Flutter / React Native
                            </strong>

                        </motion.div>


                        <motion.div
                            className="ddt-floating-card ddt-card-ai"

                            animate={{
                                y: [0, 8, 0],
                            }}

                            transition={{
                                duration: 4.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <BrainCircuit size={18} />

                            <span>
                                AI & Automation
                            </span>

                            <strong>
                                GenAI / ML
                            </strong>

                        </motion.div>


                    </motion.div>

                </div>

            </section>


            {/* =================================================
                INTRO / VALUE
            ================================================= */}

            <section className="ddt-intro section-padding">

                <motion.div
                    className="ddt-section-heading centered"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    variants={fadeUp}
                >

                    <span className="ddt-section-label">
                        ONE TEAM. EVERY TECHNOLOGY.
                    </span>

                    <h2>
                        Every Stack.
                        <span>
                            {" "}
                            One Experienced Team.
                        </span>
                    </h2>

                    <p>
                        You don't need to search for different developers
                        for every technology. Our experienced engineering
                        teams work across frontend, backend, mobile, cloud,
                        AI, databases, QA and product design.
                    </p>

                </motion.div>


                <motion.div
                    className="ddt-stat-strip"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                    }}
                    variants={staggerContainer}
                >

                    <motion.div
                        className="ddt-stat"
                        variants={fadeUp}
                    >

                        <strong>01</strong>

                        <span>
                            Dedicated Team
                        </span>

                    </motion.div>


                    <motion.div
                        className="ddt-stat"
                        variants={fadeUp}
                    >

                        <strong>∞</strong>

                        <span>
                            Technology Possibilities
                        </span>

                    </motion.div>


                    <motion.div
                        className="ddt-stat"
                        variants={fadeUp}
                    >

                        <strong>24/7</strong>

                        <span>
                            Project Support
                        </span>

                    </motion.div>


                    <motion.div
                        className="ddt-stat"
                        variants={fadeUp}
                    >

                        <strong>360°</strong>

                        <span>
                            Development Expertise
                        </span>

                    </motion.div>

                </motion.div>

            </section>


            {/* =================================================
                TECHNOLOGY STACKS
            ================================================= */}

            <section className="ddt-technologies section-padding">

                <div className="ddt-section-heading">

                    <span className="ddt-section-label">
                        TECHNOLOGY EXPERTISE
                    </span>

                    <h2>
                        Developers For
                        <span>
                            {" "}
                            Every Technology Need.
                        </span>
                    </h2>

                    <p>
                        Whatever your product requires, we can assemble
                        the right specialists around your technology stack.
                    </p>

                </div>


                <motion.div
                    className="ddt-tech-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    variants={staggerContainer}
                >

                    {technologyStacks.map((stack, index) => {

                        const Icon = stack.icon;

                        return (

                            <motion.article
                                className="ddt-tech-card"
                                key={stack.title}
                                variants={fadeUp}

                                whileHover={{
                                    y: -8,
                                }}

                                transition={{
                                    duration: 0.25,
                                }}
                            >

                                <div className="ddt-card-top">

                                    <div className="ddt-card-icon">

                                        <Icon size={23} />

                                    </div>

                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>


                                <h3>
                                    {stack.title}
                                </h3>


                                <p>
                                    {stack.description}
                                </p>


                                <div className="ddt-tech-tags">

                                    {stack.technologies.map(
                                        (technology) => (

                                            <span key={technology}>
                                                {technology}
                                            </span>

                                        )
                                    )}

                                </div>

                            </motion.article>

                        );

                    })}

                </motion.div>

            </section>


            {/* =================================================
                TEAM TYPES
            ================================================= */}

            <section className="ddt-team-types section-padding">

                <div className="ddt-section-heading centered">

                    <span className="ddt-section-label">
                        FLEXIBLE TEAM MODELS
                    </span>

                    <h2>
                        Choose The Team
                        <span>
                            {" "}
                            Your Product Needs.
                        </span>
                    </h2>

                    <p>
                        From a small specialist team to a complete
                        product engineering department, we can build
                        the right combination for you.
                    </p>

                </div>


                <motion.div
                    className="ddt-team-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    variants={staggerContainer}
                >

                    {teamTypes.map((team) => {

                        const Icon = team.icon;

                        return (

                            <motion.article
                                className="ddt-team-card"
                                key={team.title}
                                variants={fadeUp}

                                whileHover={{
                                    y: -7,
                                }}
                            >

                                <div className="ddt-team-number">
                                    {team.number}
                                </div>


                                <div className="ddt-team-icon">
                                    <Icon size={24} />
                                </div>


                                <h3>
                                    {team.title}
                                </h3>


                                <p>
                                    {team.description}
                                </p>


                                <ArrowUpRight
                                    className="ddt-team-arrow"
                                    size={20}
                                />

                            </motion.article>

                        );

                    })}

                </motion.div>

            </section>


            {/* =================================================
                WHY DEDICATED TEAM
            ================================================= */}

            <section className="ddt-benefits section-padding">

                <div className="ddt-benefits-layout">


                    <motion.div
                        className="ddt-benefits-copy"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={staggerContainer}
                    >

                        <motion.span
                            className="ddt-section-label"
                            variants={fadeUp}
                        >
                            WHY EVOLUTE
                        </motion.span>


                        <motion.h2 variants={fadeUp}>

                            More Than Developers.

                            <span>
                                {" "}
                                A Team That Grows With You.
                            </span>

                        </motion.h2>


                        <motion.p variants={fadeUp}>

                            A dedicated development team gives you the
                            flexibility of an in-house team without the
                            complexity of building and managing one from
                            scratch.

                        </motion.p>


                        {/* CONTACT US */}

                        <motion.button
                            type="button"
                            className="ddt-primary-btn"
                            variants={fadeUp}
                            onClick={handleContact}
                        >

                            Build Your Team

                            <ArrowRight size={18} />

                        </motion.button>

                    </motion.div>


                    <motion.div
                        className="ddt-benefits-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={staggerContainer}
                    >

                        {benefits.map((benefit) => {

                            const Icon = benefit.icon;

                            return (

                                <motion.article
                                    className="ddt-benefit-card"
                                    key={benefit.title}
                                    variants={fadeUp}
                                >

                                    <div className="ddt-benefit-icon">
                                        <Icon size={21} />
                                    </div>

                                    <h3>
                                        {benefit.title}
                                    </h3>

                                    <p>
                                        {benefit.description}
                                    </p>

                                </motion.article>

                            );

                        })}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                TEAM COMPOSITION
            ================================================= */}

            <section className="ddt-composition section-padding">

                <div className="ddt-section-heading centered">

                    <span className="ddt-section-label">
                        YOUR EXTENDED ENGINEERING TEAM
                    </span>

                    <h2>
                        We Build The Team
                        <span>
                            {" "}
                            Around Your Product.
                        </span>
                    </h2>

                    <p>
                        Your team can include exactly the specialists
                        your project requires. Nothing more, nothing less.
                    </p>

                </div>


                <div className="ddt-composition-wrapper">

                    <div className="ddt-composition-line" />


                    <motion.div
                        className="ddt-composition-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={staggerContainer}
                    >

                        {teamComposition.map((member, index) => {

                            const Icon = member.icon;

                            return (

                                <motion.div
                                    className="ddt-composition-card"
                                    key={member.role}
                                    variants={fadeUp}
                                >

                                    <div className="ddt-composition-index">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div className="ddt-composition-icon">
                                        <Icon size={22} />
                                    </div>

                                    <h3>
                                        {member.role}
                                    </h3>

                                    <span>
                                        {member.description}
                                    </span>

                                </motion.div>

                            );

                        })}

                    </motion.div>

                </div>


                <div className="ddt-composition-note">

                    <Settings2 size={19} />

                    <span>

                        Need a different combination?

                        <strong>
                            {" "}
                            We customize every team around your project.
                        </strong>

                    </span>

                </div>

            </section>


            {/* =================================================
                PROCESS
            ================================================= */}

            <section className="ddt-process section-padding">

                <div className="ddt-section-heading">

                    <span className="ddt-section-label">
                        SIMPLE PROCESS
                    </span>

                    <h2>
                        From Requirements
                        <span>
                            {" "}
                            To Your Development Team.
                        </span>
                    </h2>

                    <p>
                        A straightforward process to get the right people
                        working on your product without unnecessary delays.
                    </p>

                </div>


                <motion.div
                    className="ddt-process-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    variants={staggerContainer}
                >

                    {processSteps.map((step) => {

                        const Icon = step.icon;

                        return (

                            <motion.article
                                className="ddt-process-card"
                                key={step.number}
                                variants={fadeUp}
                            >

                                <div className="ddt-process-number">
                                    {step.number}
                                </div>

                                <div className="ddt-process-icon">
                                    <Icon size={23} />
                                </div>

                                <h3>
                                    {step.title}
                                </h3>

                                <p>
                                    {step.description}
                                </p>

                            </motion.article>

                        );

                    })}

                </motion.div>

            </section>


            {/* =================================================
                WHAT WE BUILD
            ================================================= */}

            <section className="ddt-solutions section-padding">

                <div className="ddt-solutions-layout">


                    <motion.div
                        className="ddt-solutions-copy"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        variants={staggerContainer}
                    >

                        <motion.span
                            className="ddt-section-label"
                            variants={fadeUp}
                        >
                            WHAT WE BUILD
                        </motion.span>


                        <motion.h2 variants={fadeUp}>

                            One Team.

                            <span>
                                {" "}
                                Unlimited Possibilities.
                            </span>

                        </motion.h2>


                        <motion.p variants={fadeUp}>

                            Our dedicated teams work across products,
                            industries and technical challenges — from
                            early-stage MVPs to complex enterprise systems.

                        </motion.p>

                    </motion.div>


                    <motion.div
                        className="ddt-solutions-list"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        variants={staggerContainer}
                    >

                        {solutions.map((solution, index) => (

                            <motion.div
                                className="ddt-solution-item"
                                key={solution}
                                variants={fadeUp}
                            >

                                <span className="ddt-solution-index">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span>
                                    {solution}
                                </span>

                                <ArrowUpRight size={17} />

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="ddt-final-cta">

                <div className="ddt-cta-glow" />


                <motion.div
                    className="ddt-cta-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    variants={staggerContainer}
                >


                    <motion.div
                        className="ddt-cta-icon"
                        variants={fadeUp}
                    >

                        <Rocket size={30} />

                    </motion.div>


                    <motion.span
                        className="ddt-section-label"
                        variants={fadeUp}
                    >

                        READY TO SCALE?

                    </motion.span>


                    <motion.h2 variants={fadeUp}>

                        Let's Build Your

                        <span>
                            {" "}
                            Perfect Development Team.
                        </span>

                    </motion.h2>


                    <motion.p variants={fadeUp}>

                        Tell us what you're building, and we'll help you
                        assemble the right team, skills and technology
                        stack to move your project forward.

                    </motion.p>


                    <motion.div
                        className="ddt-cta-actions"
                        variants={fadeUp}
                    >


                        {/* CONTACT US */}

                        <button
                            type="button"
                            className="ddt-primary-btn"
                            onClick={handleContact}
                        >

                            Hire a Dedicated Team

                            <ArrowRight size={18} />

                        </button>


                        {/* CONTACT US */}

                        <button
                            type="button"
                            className="ddt-cta-text-btn"
                            onClick={handleContact}
                        >

                            Discuss Your Project

                            <ArrowUpRight size={18} />

                        </button>


                    </motion.div>


                </motion.div>

            </section>


        </main>
    );
};


export default Dedicated_Development_Teams;