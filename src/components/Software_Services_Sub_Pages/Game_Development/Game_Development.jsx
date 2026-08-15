import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Gamepad2,
    Sparkles,
    Zap,
    ShieldCheck,
    Cpu,
    Layers3,
    Code2,
    Monitor,
    Smartphone,
    Globe2,
    Workflow,
    Lightbulb,
    Rocket,
    Settings2,
    Users,
    Target,
    Gauge,
    Box,
    Palette,
    Volume2,
    Server,
    Cloud,
    Database,
    ChevronRight,
    CircleCheck,
    Play,
    Joystick,
    Trophy,
    Crosshair,
    WandSparkles,
} from "lucide-react";

import "./Game_Development.css";

/* =====================================================
   ANIMATION VARIANTS
===================================================== */

const ease = [0.22, 1, 0.36, 1];

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
            ease,
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
            ease,
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
            ease,
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
   GAME DEVELOPMENT SERVICES
===================================================== */

const gameServices = [
    {
        number: "01",
        icon: Gamepad2,
        title: "Game Concept & Prototyping",
        description:
            "Turn your game idea into a playable concept with focused mechanics, core loops, interaction design, and rapid prototyping.",
        points: [
            "Game mechanics",
            "Playable prototypes",
            "Core gameplay loops",
        ],
    },
    {
        number: "02",
        icon: Layers3,
        title: "2D & 3D Game Development",
        description:
            "Build immersive 2D and 3D gaming experiences with responsive gameplay, polished interactions, and scalable architecture.",
        points: [
            "2D game experiences",
            "3D environments",
            "Gameplay systems",
        ],
    },
    {
        number: "03",
        icon: Globe2,
        title: "Cross-Platform Games",
        description:
            "Create engaging gaming experiences designed to reach players across web, desktop, mobile, and other target platforms.",
        points: [
            "Multi-platform experiences",
            "Responsive gameplay",
            "Platform optimization",
        ],
    },
    {
        number: "04",
        icon: Users,
        title: "Multiplayer Experiences",
        description:
            "Design connected gaming experiences with multiplayer functionality, player interactions, sessions, and scalable backend systems.",
        points: [
            "Multiplayer systems",
            "Player sessions",
            "Real-time interactions",
        ],
    },
    {
        number: "05",
        icon: Trophy,
        title: "Game Features & Systems",
        description:
            "Develop progression, achievements, inventories, leaderboards, rewards, player profiles, and other game systems.",
        points: [
            "Progression systems",
            "Leaderboards",
            "Rewards & achievements",
        ],
    },
    {
        number: "06",
        icon: Settings2,
        title: "Game Optimization & Support",
        description:
            "Improve gameplay performance, stability, responsiveness, and maintainability while continuously evolving your game.",
        points: [
            "Performance optimization",
            "Bug fixing",
            "Post-launch support",
        ],
    },
];

/* =====================================================
   GAME DEVELOPMENT EXPERTISE
===================================================== */

const expertise = [
    {
        icon: Joystick,
        title: "Gameplay Engineering",
        description:
            "Design responsive gameplay mechanics, interactions, controls, game states, progression, and player experiences.",
    },
    {
        icon: Palette,
        title: "Game Art & Visual Experience",
        description:
            "Create visually engaging environments, interfaces, assets, effects, and experiences aligned with your game's identity.",
    },
    {
        icon: Cpu,
        title: "Game Systems",
        description:
            "Build scalable gameplay systems, logic, AI behaviors, player progression, inventories, and interactive mechanics.",
    },
    {
        icon: Server,
        title: "Backend & Multiplayer",
        description:
            "Support connected experiences with backend services, player data, sessions, multiplayer functionality, and game infrastructure.",
    },
    {
        icon: Gauge,
        title: "Performance Engineering",
        description:
            "Optimize loading, rendering, memory usage, responsiveness, stability, and overall gameplay performance.",
    },
    {
        icon: ShieldCheck,
        title: "Security & Reliability",
        description:
            "Apply security-conscious engineering practices to protect game systems, player data, services, and online experiences.",
    },
];

/* =====================================================
   GAME DEVELOPMENT PROCESS
===================================================== */

const processSteps = [
    {
        number: "01",
        icon: Lightbulb,
        title: "Game Discovery",
        description:
            "We understand your game concept, target audience, gameplay vision, platforms, business goals, and project scope.",
    },
    {
        number: "02",
        icon: Target,
        title: "Game Design",
        description:
            "We define the core gameplay loop, mechanics, features, experience, visual direction, and technical requirements.",
    },
    {
        number: "03",
        icon: Box,
        title: "Prototype",
        description:
            "We create a focused playable prototype to validate the most important gameplay ideas before full production.",
    },
    {
        number: "04",
        icon: Code2,
        title: "Development",
        description:
            "Our engineering team builds the game systems, gameplay, interfaces, backend services, integrations, and required features.",
    },
    {
        number: "05",
        icon: Gauge,
        title: "Testing & Optimization",
        description:
            "We test gameplay, stability, responsiveness, compatibility, performance, and overall player experience.",
    },
    {
        number: "06",
        icon: Rocket,
        title: "Launch & Evolution",
        description:
            "We help prepare the game for release and continue improving features, performance, content, and player experience.",
    },
];

/* =====================================================
   GAME CAPABILITIES
===================================================== */

const capabilities = [
    {
        icon: Gamepad2,
        title: "Gameplay Systems",
    },
    {
        icon: Joystick,
        title: "Player Controls",
    },
    {
        icon: WandSparkles,
        title: "Visual Effects",
    },
    {
        icon: Volume2,
        title: "Audio Integration",
    },
    {
        icon: Users,
        title: "Multiplayer",
    },
    {
        icon: Trophy,
        title: "Achievements",
    },
    {
        icon: Target,
        title: "Leaderboards",
    },
    {
        icon: Database,
        title: "Player Data",
    },
    {
        icon: Cloud,
        title: "Cloud Services",
    },
    {
        icon: Smartphone,
        title: "Mobile Gaming",
    },
    {
        icon: Monitor,
        title: "Desktop Gaming",
    },
    {
        icon: Globe2,
        title: "Web Gaming",
    },
];

/* =====================================================
   GAME TYPES
===================================================== */

const gameTypes = [
    {
        icon: Gamepad2,
        title: "Casual Games",
        description:
            "Accessible and engaging games designed around simple mechanics and enjoyable gameplay loops.",
    },
    {
        icon: Crosshair,
        title: "Action Games",
        description:
            "Fast-paced experiences focused on responsive controls, combat, challenges, and player interaction.",
    },
    {
        icon: Trophy,
        title: "Competitive Games",
        description:
            "Competitive experiences featuring rankings, leaderboards, multiplayer mechanics, and progression.",
    },
    {
        icon: Sparkles,
        title: "Interactive Experiences",
        description:
            "Immersive interactive applications, simulations, gamified experiences, and digital entertainment.",
    },
];

/* =====================================================
   FAQ
===================================================== */

const faqs = [
    {
        number: "01",
        question: "What type of games can you develop?",
        answer:
            "We can work on a wide range of game experiences including 2D and 3D games, casual games, action experiences, multiplayer games, competitive games, simulations, interactive experiences, and custom gaming solutions.",
    },
    {
        number: "02",
        question: "Do you work with different game technologies?",
        answer:
            "Yes. We take a technology-agnostic approach and select the tools, frameworks, engines, platforms, and supporting technologies that best fit the project's requirements.",
    },
    {
        number: "03",
        question: "Can you develop both mobile and desktop games?",
        answer:
            "Yes. We can plan and develop gaming experiences for mobile, desktop, web, and other target platforms based on the project's requirements.",
    },
    {
        number: "04",
        question: "Can you build multiplayer functionality?",
        answer:
            "Yes. We can develop multiplayer and connected game experiences including player sessions, real-time interactions, player data, backend services, and supporting infrastructure.",
    },
    {
        number: "05",
        question: "Can you work on an existing game?",
        answer:
            "Absolutely. We can help with feature development, optimization, bug fixing, architecture improvements, backend integration, performance work, and ongoing game maintenance.",
    },
    {
        number: "06",
        question: "Can you help us turn an idea into a game?",
        answer:
            "Yes. We can help from the early concept and prototype stage through game design, development, testing, optimization, launch, and ongoing improvements.",
    },
];

/* =====================================================
   HERO GAME DASHBOARD
===================================================== */

function GameDevelopmentDashboard() {
    return (
        <motion.div
            className="gd-hero-visual"
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
                delay: 0.2,
                ease,
            }}
        >
            {/* Decorative rings */}

            <motion.div
                className="gd-orbit gd-orbit-one"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="gd-orbit gd-orbit-two"
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="gd-orbit gd-orbit-three"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 38,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Main game interface */}

            <motion.div
                className="gd-game-dashboard"
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

                <div className="gd-dashboard-header">
                    <div className="gd-dashboard-brand">
                        <div className="gd-dashboard-icon">
                            <Gamepad2 size={20} />
                        </div>

                        <div>
                            <strong>GAME SYSTEM</strong>
                            <span>Development Console</span>
                        </div>
                    </div>

                    <div className="gd-live-status">
                        <span />
                        LIVE BUILD
                    </div>
                </div>

                {/* Game Screen */}

                <div className="gd-game-screen">
                    <div className="gd-screen-grid" />
                    <div className="gd-screen-scanline" />

                    <motion.div
                        className="gd-crosshair"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <Crosshair size={54} />
                    </motion.div>

                    <div className="gd-screen-title">
                        <span>PROJECT</span>
                        <strong>NEXUS</strong>
                    </div>

                    <div className="gd-screen-bottom">
                        <span>BUILD 0.9.8</span>
                        <span>PLAYABLE</span>
                    </div>
                </div>

                {/* Metrics */}

                <div className="gd-dashboard-metrics">
                    <div className="gd-metric">
                        <div className="gd-metric-icon">
                            <Gauge size={15} />
                        </div>

                        <div>
                            <span>Performance</span>
                            <strong>96%</strong>
                        </div>
                    </div>

                    <div className="gd-metric">
                        <div className="gd-metric-icon">
                            <Zap size={15} />
                        </div>

                        <div>
                            <span>Response</span>
                            <strong>Fast</strong>
                        </div>
                    </div>

                    <div className="gd-metric">
                        <div className="gd-metric-icon">
                            <ShieldCheck size={15} />
                        </div>

                        <div>
                            <span>Stability</span>
                            <strong>99%</strong>
                        </div>
                    </div>
                </div>

                {/* Development Progress */}

                <div className="gd-progress-section">
                    <div className="gd-progress-heading">
                        <span>DEVELOPMENT PROGRESS</span>
                        <strong>78%</strong>
                    </div>

                    <div className="gd-progress-bar">
                        <motion.span
                            initial={{
                                width: 0,
                            }}
                            animate={{
                                width: "78%",
                            }}
                            transition={{
                                duration: 1.6,
                                delay: 0.7,
                                ease,
                            }}
                        />
                    </div>

                    <div className="gd-progress-items">
                        <span>
                            <CheckCircle2 size={12} />
                            Gameplay
                        </span>

                        <span>
                            <CheckCircle2 size={12} />
                            Systems
                        </span>

                        <span>
                            <CheckCircle2 size={12} />
                            UI
                        </span>

                        <span className="gd-progress-active">
                            <Play size={11} />
                            Testing
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Floating Feature Card */}

            <motion.div
                className="gd-floating-card gd-floating-feature"
                animate={{
                    y: [0, -9, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="gd-floating-icon">
                    <Joystick size={17} />
                </div>

                <div>
                    <strong>Gameplay Ready</strong>
                    <span>Core systems active</span>
                </div>
            </motion.div>

            {/* Floating Performance Card */}

            <motion.div
                className="gd-floating-card gd-floating-performance"
                animate={{
                    y: [0, 7, 0],
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Gauge size={15} />

                <div>
                    <strong>96 FPS</strong>
                    <span>Optimized</span>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function Game_Development() {
    const navigate = useNavigate();

    /* =================================================
       CONTACT US NAVIGATION
       
       ALL CTA BUTTONS USE THIS FUNCTION
    ================================================= */

    const goToContact = () => {
        navigate("/contact-us");
    };

    return (
        <main className="game-development-page">

            {/* =================================================
               HERO
            ================================================= */}

            <section className="gd-hero">
                <div className="gd-hero-grid" />

                <div className="gd-hero-glow gd-glow-one" />
                <div className="gd-hero-glow gd-glow-two" />
                <div className="gd-hero-glow gd-glow-three" />

                {/* Floating Particles */}

                <motion.span
                    className="gd-particle gd-particle-one"
                    animate={{
                        y: [0, -25, 0],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                    }}
                />

                <motion.span
                    className="gd-particle gd-particle-two"
                    animate={{
                        y: [0, 30, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                    }}
                />

                <div className="gd-hero-content">

                    {/* Hero Copy */}

                    <motion.div
                        className="gd-hero-copy"
                        variants={fadeLeft}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="gd-eyebrow"
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
                            <span className="gd-eyebrow-dot" />
                            GAME DEVELOPMENT
                        </motion.div>

                        <h1>
                            Build Games
                            <span>Players Remember.</span>
                        </h1>

                        <p>
                            Transform ambitious game ideas into immersive,
                            interactive, and high-performance experiences
                            designed around gameplay, technology, creativity,
                            and the players who matter.
                        </p>

                        {/* HERO CTA BUTTONS */}

                        <div className="gd-hero-actions">

                            <motion.button
                                className="gd-primary-btn"
                                onClick={goToContact}
                                whileHover={{
                                    y: -3,
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                            >
                                Start Your Game
                                <ArrowRight size={17} />
                            </motion.button>

                            <motion.button
                                className="gd-secondary-btn"
                                onClick={goToContact}
                                whileHover={{
                                    y: -3,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                            >
                                Discuss Your Idea
                                <ArrowUpRight size={16} />
                            </motion.button>

                        </div>

                        <div className="gd-hero-trust">
                            <div className="gd-trust-item">
                                <CheckCircle2 size={15} />
                                2D & 3D Experiences
                            </div>

                            <div className="gd-trust-item">
                                <Zap size={15} />
                                Performance Focused
                            </div>

                            <div className="gd-trust-item">
                                <Globe2 size={15} />
                                Multi-Platform
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Visual */}

                    <GameDevelopmentDashboard />

                </div>
            </section>

            {/* =================================================
               INTRO
            ================================================= */}

            <motion.section
                className="gd-intro"
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                variants={staggerContainer}
            >
                <div className="gd-container gd-intro-grid">

                    <motion.div
                        className="gd-intro-heading"
                        variants={fadeLeft}
                    >
                        <span className="gd-section-label">
                            <Sparkles size={14} />
                            FROM IDEA TO EXPERIENCE
                        </span>

                        <h2>
                            Your vision.
                            <span>Our game engineering.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="gd-intro-text"
                        variants={fadeRight}
                    >
                        <p>
                            Great games sit at the intersection of creative
                            vision, engaging gameplay, thoughtful design,
                            engineering, performance, and technology.
                        </p>

                        <p>
                            We help turn your concept into a complete gaming
                            experience — from early prototypes and gameplay
                            systems to polished releases and continuous
                            evolution.
                        </p>
                    </motion.div>

                </div>
            </motion.section>

            {/* =================================================
               STATS
            ================================================= */}

            <section className="gd-stats">
                <div className="gd-container gd-stats-grid">

                    {[
                        ["2D + 3D", "Game Experiences"],
                        ["Multi", "Platform Development"],
                        ["End-to-End", "Game Development"],
                        ["Player", "Experience Focused"],
                    ].map(([title, subtitle], index) => (
                        <motion.div
                            className="gd-stat"
                            key={title}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.6,
                                ease,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <strong>{title}</strong>
                            <span>{subtitle}</span>
                        </motion.div>
                    ))}

                </div>
            </section>

            {/* =================================================
               SERVICES
            ================================================= */}

            <section className="gd-services">
                <div className="gd-container">

                    <motion.div
                        className="gd-section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeUp}
                    >
                        <span className="gd-section-label">
                            <Settings2 size={14} />
                            GAME DEVELOPMENT SERVICES
                        </span>

                        <h2>
                            Everything you need to
                            <span>build the game.</span>
                        </h2>

                        <p>
                            From the first playable prototype to production
                            and post-launch support, we combine game thinking
                            with serious engineering.
                        </p>
                    </motion.div>

                    <motion.div
                        className="gd-services-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.12,
                        }}
                    >
                        {gameServices.map((service) => {
                            const Icon = service.icon;

                            return (
                                <motion.article
                                    className="gd-service-card"
                                    key={service.number}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -8,
                                    }}
                                >
                                    <div className="gd-service-card-top">
                                        <div className="gd-service-icon">
                                            <Icon size={21} />
                                        </div>

                                        <span className="gd-service-number">
                                            {service.number}
                                        </span>
                                    </div>

                                    <h3>{service.title}</h3>

                                    <p>{service.description}</p>

                                    <div className="gd-service-points">
                                        {service.points.map((point) => (
                                            <div
                                                className="gd-service-point"
                                                key={point}
                                            >
                                                <CheckCircle2 size={14} />
                                                {point}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="gd-service-line" />
                                </motion.article>
                            );
                        })}
                    </motion.div>

                </div>
            </section>

            {/* =================================================
               EXPERTISE
            ================================================= */}

            <section className="gd-expertise">
                <div className="gd-container gd-expertise-layout">

                    <motion.div
                        className="gd-expertise-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        variants={fadeLeft}
                    >
                        <span className="gd-section-label">
                            <Cpu size={14} />
                            GAME ENGINEERING
                        </span>

                        <h2>
                            More than gameplay.
                            <span>
                                Built for the whole experience.
                            </span>
                        </h2>

                        <p>
                            A successful game requires more than mechanics.
                            We think about performance, player experience,
                            systems, backend services, reliability, interfaces,
                            and the technical foundation behind the game.
                        </p>

                        {/* CONTACT CTA */}

                        <motion.button
                            className="gd-text-btn"
                            onClick={goToContact}
                            whileHover={{
                                x: 5,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                        >
                            Discuss your game
                            <ArrowRight size={16} />
                        </motion.button>

                    </motion.div>

                    <motion.div
                        className="gd-expertise-grid"
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
                                    className="gd-expertise-card"
                                    key={item.title}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -6,
                                    }}
                                >
                                    <div className="gd-expertise-icon">
                                        <Icon size={19} />
                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </section>

            {/* =================================================
               GAME TYPES
            ================================================= */}

            <section className="gd-game-types">
                <div className="gd-container">

                    <motion.div
                        className="gd-section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeUp}
                    >
                        <span className="gd-section-label">
                            <Gamepad2 size={14} />
                            WHAT WE BUILD
                        </span>

                        <h2>
                            Different games.
                            <span>Same obsession with quality.</span>
                        </h2>

                        <p>
                            Whether you have a simple game concept or an
                            ambitious interactive product, we build around
                            the experience you want players to have.
                        </p>
                    </motion.div>

                    <motion.div
                        className="gd-game-types-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                    >
                        {gameTypes.map((type, index) => {
                            const Icon = type.icon;

                            return (
                                <motion.article
                                    className="gd-game-type-card"
                                    key={type.title}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -7,
                                    }}
                                >
                                    <div className="gd-game-type-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div className="gd-game-type-icon">
                                        <Icon size={22} />
                                    </div>

                                    <h3>{type.title}</h3>

                                    <p>{type.description}</p>

                                    <ArrowUpRight
                                        className="gd-game-type-arrow"
                                        size={19}
                                    />
                                </motion.article>
                            );
                        })}
                    </motion.div>

                </div>
            </section>

            {/* =================================================
               CAPABILITIES
            ================================================= */}

            <section className="gd-capabilities">
                <div className="gd-container gd-capabilities-box">

                    <motion.div
                        className="gd-capabilities-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeLeft}
                    >
                        <span className="gd-section-label">
                            <Layers3 size={14} />
                            GAME CAPABILITIES
                        </span>

                        <h2>
                            Build the features
                            <span>players expect.</span>
                        </h2>

                        <p>
                            We can integrate the systems and capabilities
                            your game needs while keeping the architecture
                            flexible for future features and growth.
                        </p>

                        <div className="gd-capability-note">
                            <div className="gd-capability-note-icon">
                                <ShieldCheck size={18} />
                            </div>

                            <div>
                                <strong>
                                    Built around your game.
                                </strong>

                                <span>
                                    We select the right approach based on
                                    your project's gameplay, platform,
                                    performance, and business requirements.
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="gd-capabilities-list"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                    >
                        {capabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    className="gd-capability-pill"
                                    key={item.title}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -4,
                                        scale: 1.02,
                                    }}
                                >
                                    <Icon size={17} />
                                    <span>{item.title}</span>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </section>

            {/* =================================================
               PROCESS
            ================================================= */}

            <section className="gd-process">
                <div className="gd-container">

                    <motion.div
                        className="gd-section-heading gd-process-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeUp}
                    >
                        <span className="gd-section-label">
                            <Workflow size={14} />
                            OUR GAME DEVELOPMENT PROCESS
                        </span>

                        <h2>
                            From concept to
                            <span>playable reality.</span>
                        </h2>

                        <p>
                            A structured development process designed to
                            validate ideas early, build intelligently, and
                            continuously improve the player experience.
                        </p>
                    </motion.div>

                    <div className="gd-process-line" />

                    <motion.div
                        className="gd-process-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                    >
                        {processSteps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    className="gd-process-step"
                                    key={step.number}
                                    variants={fadeUp}
                                >
                                    <span className="gd-process-number">
                                        {step.number}
                                    </span>

                                    <motion.div
                                        className="gd-process-icon"
                                        whileHover={{
                                            rotate: 5,
                                            scale: 1.08,
                                        }}
                                    >
                                        <Icon size={20} />
                                    </motion.div>

                                    <h3>{step.title}</h3>

                                    <p>{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </section>

            {/* =================================================
               TECHNOLOGY APPROACH
            ================================================= */}

            <section className="gd-technology">
                <div className="gd-tech-glow" />

                <div className="gd-container gd-tech-box">

                    <motion.div
                        className="gd-tech-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeLeft}
                    >
                        <span className="gd-section-label">
                            <Cpu size={14} />
                            TECHNOLOGY APPROACH
                        </span>

                        <h2>
                            No forced stack.
                            <span>
                                The right technology for your game.
                            </span>
                        </h2>

                        <p>
                            Every game has different requirements. Instead of
                            forcing every project into the same technology
                            stack, we evaluate the gameplay, platform,
                            performance, scalability, team, budget, and
                            long-term goals before choosing the right tools.
                        </p>

                        <div className="gd-tech-highlight">
                            <div className="gd-tech-highlight-icon">
                                <Target size={19} />
                            </div>

                            <div>
                                <strong>
                                    Technology follows the experience.
                                </strong>

                                <span>
                                    We work across different technologies,
                                    engines, frameworks, platforms, and
                                    supporting systems based on what your
                                    project actually needs.
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="gd-tech-visual"
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.8,
                            ease,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <div className="gd-tech-console">

                            <div className="gd-console-top">
                                <span>TECHNOLOGY MATRIX</span>

                                <span className="gd-console-live">
                                    ONLINE
                                </span>
                            </div>

                            <div className="gd-console-lines">
                                <div>
                                    <span>GAMEPLAY</span>
                                    <strong>READY</strong>
                                </div>

                                <div>
                                    <span>GRAPHICS</span>
                                    <strong>OPTIMIZED</strong>
                                </div>

                                <div>
                                    <span>NETWORK</span>
                                    <strong>CONNECTED</strong>
                                </div>

                                <div>
                                    <span>PLATFORM</span>
                                    <strong>FLEXIBLE</strong>
                                </div>

                                <div>
                                    <span>BACKEND</span>
                                    <strong>SCALABLE</strong>
                                </div>

                                <div>
                                    <span>SECURITY</span>
                                    <strong>ACTIVE</strong>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </section>

            {/* =================================================
               FAQ
            ================================================= */}

            <section className="gd-faq">
                <div className="gd-container">

                    <motion.div
                        className="gd-section-heading gd-faq-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeUp}
                    >
                        <span className="gd-section-label">
                            <CircleCheck size={14} />
                            COMMON QUESTIONS
                        </span>

                        <h2>
                            Game development,
                            <span>simplified.</span>
                        </h2>

                        <p>
                            A few answers to common questions about our game
                            development services.
                        </p>
                    </motion.div>

                    <motion.div
                        className="gd-faq-list"
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
                                className="gd-faq-item"
                                key={faq.number}
                                variants={fadeUp}
                                whileHover={{
                                    x: 4,
                                }}
                            >
                                <span className="gd-faq-number">
                                    {faq.number}
                                </span>

                                <div className="gd-faq-content">
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>

                                <ChevronRight
                                    className="gd-faq-arrow"
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

            <section className="gd-final-cta">

                <div className="gd-cta-grid" />
                <div className="gd-cta-glow" />

                <motion.div
                    className="gd-cta-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    variants={fadeUp}
                >
                    <motion.div
                        className="gd-cta-icon"
                        animate={{
                            y: [0, -6, 0],
                            rotate: [0, 4, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Gamepad2 size={25} />
                    </motion.div>

                    <span className="gd-cta-label">
                        HAVE A GAME IDEA?
                    </span>

                    <h2>
                        Let's build something
                        <span>players can't put down.</span>
                    </h2>

                    <p>
                        Tell us about your game concept, gameplay vision,
                        platform, audience, or technical challenge. We'll help
                        turn the idea into a real gaming experience.
                    </p>

                    {/* FINAL CONTACT CTA */}

                    <motion.button
                        className="gd-cta-button"
                        onClick={goToContact}
                        whileHover={{
                            y: -4,
                            scale: 1.02,
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                    >
                        Start Your Game Project
                        <ArrowRight size={17} />
                    </motion.button>

                    <div className="gd-cta-note">
                        <ShieldCheck size={13} />
                        Creative thinking. Serious engineering. Player-first
                        experiences.
                    </div>

                </motion.div>
            </section>

        </main>
    );
}