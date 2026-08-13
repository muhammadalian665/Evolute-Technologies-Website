

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import {
    ArrowUpRight,
    ArrowRight,
    Check,
    Code2,
    Smartphone,
    Globe2,
    Layers3,
    Zap,
    ShieldCheck,
    TrendingUp,
    Target,
    Plug,
    Cloud,
    Database,
    Rocket,
    Search,
    PenTool,
    Settings2,
    TestTube2,
    BarChart3,
    MousePointer2,
    Sparkles,
} from "lucide-react";

import "./Web_AND_Mobile_Applications.css";

/* =====================================================
   IMAGES
===================================================== */

import WebApplication
    from "../../../assets/Images for web and app page/Web Appliaction.png";

import MobileApplication
    from "../../../assets/Images for web and app page/Mobile Application.png";

import CrossPlatformApps
    from "../../../assets/Images for web and app page/Cross_Platform_apps.png";

import ProgressiveWebApp
    from "../../../assets/Images for web and app page/Progressive web app.png";

import ApplicationModernization
    from "../../../assets/Images for web and app page/Application modernization.png";

import APIIntegration
    from "../../../assets/Images for web and app page/API.png";


/* =====================================================
   SERVICES
===================================================== */

const services = [
    {
        number: "01",
        title: "Web Applications",
        shortTitle: "Web Apps",
        description:
            "High-performance web applications designed around your users, workflows, and business objectives.",
        image: WebApplication,
        icon: Globe2,
        tags: ["Responsive", "Scalable", "Secure"],
    },

    {
        number: "02",
        title: "Mobile Applications",
        shortTitle: "Mobile Apps",
        description:
            "Native-quality mobile experiences that make your product accessible wherever your customers are.",
        image: MobileApplication,
        icon: Smartphone,
        tags: ["iOS", "Android", "UX"],
    },

    {
        number: "03",
        title: "Cross-Platform Applications",
        shortTitle: "Cross Platform",
        description:
            "Launch across multiple platforms with a unified codebase without compromising the user experience.",
        image: CrossPlatformApps,
        icon: Layers3,
        tags: ["Efficient", "Flexible", "Scalable"],
    },

    {
        number: "04",
        title: "Progressive Web Apps",
        shortTitle: "PWA",
        description:
            "Fast, installable and reliable digital experiences that combine the reach of the web with app-like functionality.",
        image: ProgressiveWebApp,
        icon: Zap,
        tags: ["Fast", "Installable", "Reliable"],
    },

    {
        number: "05",
        title: "Application Modernization",
        shortTitle: "Modernization",
        description:
            "Transform legacy applications into modern, maintainable and scalable digital platforms.",
        image: ApplicationModernization,
        icon: TrendingUp,
        tags: ["Legacy", "Modern", "Performance"],
    },

    {
        number: "06",
        title: "API Development & Integration",
        shortTitle: "API & Integration",
        description:
            "Connect applications, platforms and business systems through secure and reliable APIs.",
        image: APIIntegration,
        icon: Plug,
        tags: ["REST", "Integrations", "Secure"],
    },
];


/* =====================================================
   CAPABILITIES
===================================================== */

const capabilities = [
    {
        icon: Zap,
        title: "Performance",
        text: "Fast, responsive applications engineered for smooth real-world usage.",
    },

    {
        icon: ShieldCheck,
        title: "Security",
        text: "Security-conscious architecture designed to protect your users and data.",
    },

    {
        icon: TrendingUp,
        title: "Scalability",
        text: "Flexible technology foundations that can evolve with your business.",
    },

    {
        icon: Target,
        title: "User Experience",
        text: "Interfaces designed around real people, real workflows and real goals.",
    },

    {
        icon: Plug,
        title: "Integrations",
        text: "Connect CRMs, payment systems, APIs, databases and third-party platforms.",
    },

    {
        icon: Cloud,
        title: "Cloud Ready",
        text: "Modern deployment architectures built for reliability and growth.",
    },
];


/* =====================================================
   PROCESS
===================================================== */

const process = [
    {
        number: "01",
        title: "Discover",
        icon: Search,
        text: "We understand your business, users, goals and technical requirements.",
    },

    {
        number: "02",
        title: "Design",
        icon: PenTool,
        text: "We turn requirements into intuitive experiences and purposeful interfaces.",
    },

    {
        number: "03",
        title: "Build",
        icon: Code2,
        text: "Our engineers transform the approved experience into a scalable product.",
    },

    {
        number: "04",
        title: "Test",
        icon: TestTube2,
        text: "We test usability, performance, responsiveness, security and reliability.",
    },

    {
        number: "05",
        title: "Launch",
        icon: Rocket,
        text: "Your product goes live with deployment and launch support from our team.",
    },

    {
        number: "06",
        title: "Scale",
        icon: BarChart3,
        text: "We continuously improve and evolve your product as your business grows.",
    },
];


/* =====================================================
   FLOATING HERO CARD
===================================================== */

const FloatingCard = ({
    className,
    children,
    delay = 0,
}) => {
    return (
        <motion.div
            className={`hero-floating-card ${className}`}
            initial={{
                opacity: 0,
                y: 25,
            }}
            animate={{
                opacity: 1,
                y: [0, -10, 0],
            }}
            transition={{
                opacity: {
                    duration: 0.8,
                    delay,
                },

                y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                },
            }}
        >
            {children}
        </motion.div>
    );
};


/* =====================================================
   HERO VISUAL
===================================================== */

const HeroVisual = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(
        useTransform(
            mouseY,
            [-300, 300],
            [8, -8]
        ),
        {
            stiffness: 120,
            damping: 20,
        }
    );

    const rotateY = useSpring(
        useTransform(
            mouseX,
            [-300, 300],
            [-8, 8]
        ),
        {
            stiffness: 120,
            damping: 20,
        }
    );

    const handleMouseMove = (event) => {
        const rect =
            event.currentTarget.getBoundingClientRect();

        mouseX.set(
            event.clientX -
            rect.left -
            rect.width / 2
        );

        mouseY.set(
            event.clientY -
            rect.top -
            rect.height / 2
        );
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            className="hero-visual"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            <div className="hero-visual-grid"></div>


            <motion.div
                className="hero-orbit hero-orbit-one"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />


            <motion.div
                className="hero-orbit hero-orbit-two"
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
                className="hero-main-device"
                style={{
                    rotateX,
                    rotateY,
                }}
            >

                <div className="device-browser-bar">

                    <div className="browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="browser-address">
                        evolute.tech / dashboard
                    </div>

                </div>


                <div className="device-interface">

                    <div className="interface-sidebar">

                        <div className="interface-logo">
                            E
                        </div>

                        <span className="sidebar-active">
                            <BarChart3 size={16} />
                        </span>

                        <span>
                            <Layers3 size={16} />
                        </span>

                        <span>
                            <Database size={16} />
                        </span>

                        <span>
                            <Settings2 size={16} />
                        </span>

                    </div>


                    <div className="interface-main">

                        <div className="interface-header">

                            <div>
                                <small>
                                    OVERVIEW
                                </small>

                                <h4>
                                    Business Dashboard
                                </h4>
                            </div>

                            <div className="interface-user">
                                AL
                            </div>

                        </div>


                        <div className="interface-stat-grid">

                            <div>
                                <small>
                                    REVENUE
                                </small>

                                <strong>
                                    $84.2K
                                </strong>

                                <span>
                                    +18.4%
                                </span>
                            </div>


                            <div>
                                <small>
                                    USERS
                                </small>

                                <strong>
                                    24.8K
                                </strong>

                                <span>
                                    +12.8%
                                </span>
                            </div>


                            <div>
                                <small>
                                    ORDERS
                                </small>

                                <strong>
                                    8,492
                                </strong>

                                <span>
                                    +24.1%
                                </span>
                            </div>

                        </div>


                        <div className="interface-chart">

                            <div className="chart-heading">

                                <span>
                                    Growth Overview
                                </span>

                                <small>
                                    Last 30 days
                                </small>

                            </div>


                            <div className="chart-lines">

                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>

                            </div>


                            <svg
                                viewBox="0 0 500 130"
                                preserveAspectRatio="none"
                                className="chart-svg"
                            >

                                <defs>

                                    <linearGradient
                                        id="chartGradient"
                                        x1="0"
                                        y1="0"
                                        x2="1"
                                        y2="0"
                                    >

                                        <stop
                                            offset="0%"
                                            stopColor="#0950CD"
                                        />

                                        <stop
                                            offset="100%"
                                            stopColor="#3CD2F9"
                                        />

                                    </linearGradient>

                                </defs>


                                <path
                                    d="M0 105 C45 92 55 98 90 78 C125 58 145 82 180 62 C220 38 235 60 275 46 C315 32 325 52 360 35 C400 15 420 40 455 18 C475 8 490 10 500 4"
                                    fill="none"
                                    stroke="url(#chartGradient)"
                                    strokeWidth="4"
                                />

                            </svg>

                        </div>

                    </div>

                </div>

            </motion.div>


            <FloatingCard
                className="floating-web-card"
                delay={0.3}
            >

                <Globe2 size={18} />

                <div>
                    <strong>
                        WEB
                    </strong>

                    <span>
                        Applications
                    </span>
                </div>

            </FloatingCard>


            <FloatingCard
                className="floating-mobile-card"
                delay={0.6}
            >

                <Smartphone size={18} />

                <div>
                    <strong>
                        MOBILE
                    </strong>

                    <span>
                        Experiences
                    </span>
                </div>

            </FloatingCard>


            <FloatingCard
                className="floating-api-card"
                delay={0.9}
            >

                <Plug size={17} />

                <div>
                    <strong>
                        API
                    </strong>

                    <span>
                        Connected
                    </span>
                </div>

            </FloatingCard>


            <div className="hero-micro-label label-top">
                <span></span>
                DIGITAL PRODUCT
            </div>


            <div className="hero-micro-label label-bottom">
                <Sparkles size={14} />
                BUILT FOR GROWTH
            </div>

        </div>
    );
};


/* =====================================================
   MAIN COMPONENT
===================================================== */

const Web_AND_Mobile_Applications = () => {

    return (
        <main className="web-mobile-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="web-mobile-hero">

                <div className="hero-background-glow hero-glow-left"></div>

                <div className="hero-background-glow hero-glow-right"></div>


                <div className="web-mobile-hero-container">


                    <motion.div
                        className="web-mobile-hero-content"
                        initial={{
                            opacity: 0,
                            x: -35,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >

                        <div className="eyebrow">

                            <span className="eyebrow-dot"></span>

                            WEB & MOBILE APPLICATIONS

                            <span className="eyebrow-line"></span>

                        </div>


                        <h1>
                            Digital products
                            <br />

                            <span>
                                built to move
                            </span>

                            <br />

                            your business forward.
                        </h1>


                        <p className="hero-description">
                            We design and develop high-performance web and
                            mobile applications that turn ideas into digital
                            products people actually want to use.
                        </p>


                        <div className="hero-buttons">

                            <a
                                href="/contact-us"
                                className="primary-button"
                            >
                                Start Your Project

                                <ArrowUpRight size={19} />
                            </a>


                            <a
                                href="/work"
                                className="text-button"
                            >
                                Explore Our Work

                                <ArrowRight size={17} />
                            </a>

                        </div>


                        <div className="hero-proof">

                            <div className="proof-item">
                                <strong>
                                    01
                                </strong>

                                <span>
                                    Business-first
                                </span>
                            </div>


                            <div className="proof-divider"></div>


                            <div className="proof-item">
                                <strong>
                                    02
                                </strong>

                                <span>
                                    User-focused
                                </span>
                            </div>


                            <div className="proof-divider"></div>


                            <div className="proof-item">
                                <strong>
                                    03
                                </strong>

                                <span>
                                    Built to scale
                                </span>
                            </div>

                        </div>

                    </motion.div>


                    <motion.div
                        className="web-mobile-hero-visual-wrapper"
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            x: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                    >

                        <HeroVisual />

                    </motion.div>

                </div>


                <div className="hero-bottom-scroll">

                    <MousePointer2 size={15} />

                    <span>
                        Scroll to explore
                    </span>

                </div>

            </section>


            {/* =================================================
                INTRO
            ================================================= */}

            <section className="application-intro">

                <div className="intro-container">


                    <motion.div
                        className="intro-label"
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
                        WHAT WE DO
                    </motion.div>


                    <motion.div
                        className="intro-content"
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
                            delay: 0.1,
                        }}
                    >

                        <h2>
                            Your application should do
                            <span>
                                {" "}more than just work.
                            </span>
                        </h2>


                        <p>
                            It should make complex things simple, create
                            meaningful experiences for your customers, and
                            give your business an advantage.
                        </p>

                    </motion.div>


                    <div className="intro-values">

                        <div className="intro-value">
                            <span>
                                01
                            </span>

                            <strong>
                                Understand
                            </strong>

                            <p>
                                We understand the problem before choosing
                                the technology.
                            </p>
                        </div>


                        <div className="intro-value">
                            <span>
                                02
                            </span>

                            <strong>
                                Design
                            </strong>

                            <p>
                                We create experiences people can understand
                                and enjoy.
                            </p>
                        </div>


                        <div className="intro-value">
                            <span>
                                03
                            </span>

                            <strong>
                                Engineer
                            </strong>

                            <p>
                                We build reliable technology designed for
                                real-world growth.
                            </p>
                        </div>


                        <div className="intro-value">
                            <span>
                                04
                            </span>

                            <strong>
                                Evolve
                            </strong>

                            <p>
                                We keep improving your product after launch.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                SERVICES
            ================================================= */}

            <section className="application-services">

                <div className="services-container">


                    <div className="section-heading-row">

                        <div>

                            <span className="section-kicker">
                                OUR EXPERTISE
                            </span>

                            <h2>
                                One partner.
                                <br />

                                <span>
                                    Every digital experience.
                                </span>
                            </h2>

                        </div>


                        <p>
                            From customer-facing applications to complex
                            business platforms, we create digital products
                            designed around your goals.
                        </p>

                    </div>


                    <div className="services-list">

                        {services.map((service) => {

                            const Icon = service.icon;

                            const contactUrl =
                                `/contact-us?service=${encodeURIComponent(
                                    service.title
                                )}`;

                            return (

                                <motion.article
                                    className="service-row"
                                    key={service.number}
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
                                        margin: "-80px",
                                    }}
                                    transition={{
                                        duration: 0.65,
                                    }}
                                >

                                    <div className="service-number">
                                        {service.number}
                                    </div>


                                    <div className="service-information">

                                        <div className="service-icon">
                                            <Icon size={22} />
                                        </div>


                                        <h3>
                                            {service.title}
                                        </h3>


                                        <p>
                                            {service.description}
                                        </p>


                                        <div className="service-tags">

                                            {service.tags.map((tag) => (

                                                <span key={tag}>
                                                    {tag}
                                                </span>

                                            ))}

                                        </div>


                                        {/* SERVICE CONTACT LINK */}

                                        <a
                                            href={contactUrl}
                                            className="service-contact-link"
                                            aria-label={`Discuss ${service.title}`}
                                        >
                                            Discuss This Service

                                            <ArrowRight
                                                size={16}
                                            />
                                        </a>

                                    </div>


                                    <div className="service-image-wrapper">

                                        <motion.img
                                            src={service.image}
                                            alt={service.title}
                                            whileHover={{
                                                scale: 1.06,
                                                y: -6,
                                            }}
                                            transition={{
                                                duration: 0.45,
                                            }}
                                        />

                                    </div>


                                    {/* SERVICE CONTACT ARROW */}

                                    <a
                                        href={contactUrl}
                                        className="service-arrow"
                                        aria-label={`Contact us about ${service.title}`}
                                        title={`Discuss ${service.title}`}
                                    >
                                        <ArrowUpRight size={23} />
                                    </a>

                                </motion.article>

                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =================================================
                DIGITAL PRODUCT ECOSYSTEM
            ================================================= */}

            <section className="ecosystem-section">

                <div className="ecosystem-container">


                    <div className="ecosystem-copy">

                        <span className="section-kicker">
                            THE DIGITAL ECOSYSTEM
                        </span>


                        <h2>
                            Your product isn't
                            <span>
                                {" "}just one screen.
                            </span>
                        </h2>


                        <p>
                            Modern digital products connect experiences,
                            data, services and systems. We bring those pieces
                            together into one cohesive ecosystem.
                        </p>


                        <div className="ecosystem-checks">

                            <div>
                                <Check size={16} />
                                Web applications
                            </div>

                            <div>
                                <Check size={16} />
                                Mobile experiences
                            </div>

                            <div>
                                <Check size={16} />
                                APIs & integrations
                            </div>

                            <div>
                                <Check size={16} />
                                Cloud infrastructure
                            </div>

                        </div>

                    </div>


                    <div className="ecosystem-visual">

                        <div className="ecosystem-ring ring-one"></div>

                        <div className="ecosystem-ring ring-two"></div>

                        <div className="ecosystem-ring ring-three"></div>


                        <motion.div
                            className="ecosystem-center"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <Code2 size={29} />

                            <strong>
                                DIGITAL
                                <br />
                                PRODUCT
                            </strong>

                        </motion.div>


                        <motion.div
                            className="ecosystem-node node-web"
                            animate={{
                                y: [0, -7, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                        >

                            <Globe2 size={20} />

                            <span>
                                WEB
                            </span>

                        </motion.div>


                        <motion.div
                            className="ecosystem-node node-mobile"
                            animate={{
                                y: [0, 7, 0],
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                            }}
                        >

                            <Smartphone size={20} />

                            <span>
                                MOBILE
                            </span>

                        </motion.div>


                        <motion.div
                            className="ecosystem-node node-api"
                            animate={{
                                y: [0, -6, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                        >

                            <Plug size={19} />

                            <span>
                                API
                            </span>

                        </motion.div>


                        <motion.div
                            className="ecosystem-node node-cloud"
                            animate={{
                                y: [0, 6, 0],
                            }}
                            transition={{
                                duration: 4.2,
                                repeat: Infinity,
                            }}
                        >

                            <Cloud size={19} />

                            <span>
                                CLOUD
                            </span>

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =================================================
                CLIENT FIRST
            ================================================= */}

            <section className="client-first-section">

                <div className="client-first-container">


                    <div className="client-first-visual">

                        <div className="focus-grid"></div>


                        <motion.div
                            className="focus-core"
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 35,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >

                            <div className="focus-core-inner">
                                <Target size={30} />
                            </div>

                        </motion.div>


                        <div className="focus-card focus-user-card">

                            <div className="focus-card-icon">
                                <Smartphone size={18} />
                            </div>

                            <strong>
                                Your Users
                            </strong>

                            <span>
                                Come first
                            </span>

                        </div>


                        <div className="focus-card focus-business-card">

                            <div className="focus-card-icon">
                                <TrendingUp size={18} />
                            </div>

                            <strong>
                                Your Business
                            </strong>

                            <span>
                                Drives decisions
                            </span>

                        </div>


                        <div className="focus-card focus-tech-card">

                            <div className="focus-card-icon">
                                <Code2 size={18} />
                            </div>

                            <strong>
                                Technology
                            </strong>

                            <span>
                                Enables growth
                            </span>

                        </div>

                    </div>


                    <div className="client-first-copy">

                        <span className="section-kicker">
                            OUR APPROACH
                        </span>


                        <h2>
                            Technology is only
                            <span>
                                {" "}powerful when it solves the right problem.
                            </span>
                        </h2>


                        <p>
                            We don't build applications just because a
                            technology is trending.
                        </p>


                        <p>
                            We start by understanding your business,
                            customers and objectives. Then we choose the
                            technology that makes the most sense for your
                            product.
                        </p>


                        <div className="client-points">

                            <div>
                                <span>
                                    <Check size={15} />
                                </span>

                                <p>
                                    Business objectives first
                                </p>
                            </div>


                            <div>
                                <span>
                                    <Check size={15} />
                                </span>

                                <p>
                                    User experience at the center
                                </p>
                            </div>


                            <div>
                                <span>
                                    <Check size={15} />
                                </span>

                                <p>
                                    Scalable engineering underneath
                                </p>
                            </div>


                            <div>
                                <span>
                                    <Check size={15} />
                                </span>

                                <p>
                                    Continuous improvement after launch
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                CAPABILITIES
            ================================================= */}

            <section className="capabilities-section">

                <div className="capabilities-container">


                    <div className="capabilities-heading">

                        <span className="section-kicker">
                            ENGINEERED DIFFERENTLY
                        </span>


                        <h2>
                            Built to perform.
                            <span>
                                {" "}Designed to grow.
                            </span>
                        </h2>


                        <p>
                            We combine thoughtful product design with solid
                            engineering to create applications that continue
                            delivering value long after launch.
                        </p>

                    </div>


                    <div className="capabilities-grid">

                        {capabilities.map((capability) => {

                            const Icon = capability.icon;

                            return (

                                <motion.div
                                    className="capability-card"
                                    key={capability.title}
                                    whileHover={{
                                        y: -8,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                >

                                    <div className="capability-top">

                                        <div className="capability-icon">
                                            <Icon size={22} />
                                        </div>


                                        <ArrowUpRight
                                            size={18}
                                            className="capability-arrow"
                                        />

                                    </div>


                                    <h3>
                                        {capability.title}
                                    </h3>


                                    <p>
                                        {capability.text}
                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =================================================
                PROCESS
            ================================================= */}

            <section className="process-section">

                <div className="process-container">


                    <div className="process-heading">

                        <span className="section-kicker">
                            HOW WE WORK
                        </span>


                        <h2>
                            From idea
                            <span>
                                {" "}to impact.
                            </span>
                        </h2>


                        <p>
                            A clear process keeps your project aligned,
                            transparent and moving forward.
                        </p>

                    </div>


                    <div className="process-track">

                        <div className="process-progress-line"></div>


                        {process.map((item) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    className="process-card"
                                    key={item.number}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                >

                                    <div className="process-number">
                                        {item.number}
                                    </div>


                                    <div className="process-icon">
                                        <Icon size={21} />
                                    </div>


                                    <h3>
                                        {item.title}
                                    </h3>


                                    <p>
                                        {item.text}
                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =================================================
                CTA
            ================================================= */}

            <section className="web-mobile-cta">

                <div className="cta-background-grid"></div>

                <div className="cta-glow"></div>


                <div className="cta-content">

                    <span className="section-kicker">
                        HAVE AN IDEA?
                    </span>


                    <h2>
                        Let's build something
                        <span>
                            {" "}worth using.
                        </span>
                    </h2>


                    <p>
                        Whether you have a complete product specification or
                        simply an idea, we'll help you turn it into a digital
                        experience your customers remember.
                    </p>


                    <div className="cta-buttons">

                        <a
                            href="/contact-us"
                            className="primary-button"
                        >
                            Start Your Project

                            <ArrowUpRight size={19} />
                        </a>


                        <a
                            href="/contact-us"
                            className="cta-talk-button"
                        >
                            Talk to Our Team

                            <ArrowRight size={17} />
                        </a>

                    </div>

                </div>


                <div className="cta-floating-object object-one">
                    <Globe2 size={21} />
                </div>


                <div className="cta-floating-object object-two">
                    <Code2 size={20} />
                </div>


                <div className="cta-floating-object object-three">
                    <Smartphone size={19} />
                </div>


                <div className="cta-footer-line">

                    WEB

                    <span>
                        •
                    </span>

                    MOBILE

                    <span>
                        •
                    </span>

                    API

                    <span>
                        •
                    </span>

                    CLOUD

                    <span>
                        •
                    </span>

                    DIGITAL PRODUCTS

                </div>

            </section>

        </main>
    );
};


export default Web_AND_Mobile_Applications;