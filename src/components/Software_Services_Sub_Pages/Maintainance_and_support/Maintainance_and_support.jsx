import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    ShieldCheck,
    Clock3,
    Bug,
    Gauge,
    Wrench,
    RefreshCw,
    CloudCog,
    Database,
    MonitorSmartphone,
    LockKeyhole,
    Activity,
    Headphones,
    Zap,
    Settings2,
    SearchCheck,
    Rocket,
    CircleCheck,
    LifeBuoy,
} from "lucide-react";

import "./Maintainance_and_support.css";


/* =====================================================
   SUPPORT SERVICES
===================================================== */

const supportServices = [
    {
        icon: Bug,
        number: "01",
        title: "Bug Fixing & Troubleshooting",
        description:
            "Identify, diagnose and resolve functional, performance and compatibility issues across your applications.",
        points: [
            "Critical bug resolution",
            "Functional issue diagnosis",
            "Cross-browser troubleshooting",
            "Regression testing",
        ],
    },
    {
        icon: Gauge,
        number: "02",
        title: "Performance Optimization",
        description:
            "Improve application speed, responsiveness and reliability so your users get a smoother digital experience.",
        points: [
            "Application performance audits",
            "Database optimization",
            "API performance improvements",
            "Frontend optimization",
        ],
    },
    {
        icon: ShieldCheck,
        number: "03",
        title: "Security & Reliability",
        description:
            "Keep your software secure and dependable through proactive monitoring, updates and security improvements.",
        points: [
            "Security updates",
            "Dependency upgrades",
            "Vulnerability fixes",
            "Reliability improvements",
        ],
    },
    {
        icon: RefreshCw,
        number: "04",
        title: "Application Modernization",
        description:
            "Modernize aging applications and infrastructure without disrupting your existing business operations.",
        points: [
            "Legacy code modernization",
            "Technology upgrades",
            "Architecture improvements",
            "Cloud migration support",
        ],
    },
    {
        icon: CloudCog,
        number: "05",
        title: "Cloud & Infrastructure Support",
        description:
            "Maintain the infrastructure behind your applications with ongoing cloud, server and deployment support.",
        points: [
            "Cloud environment management",
            "Server monitoring",
            "Deployment support",
            "Infrastructure optimization",
        ],
    },
    {
        icon: Database,
        number: "06",
        title: "Database Maintenance",
        description:
            "Keep your databases healthy, optimized and reliable with structured maintenance and performance monitoring.",
        points: [
            "Query optimization",
            "Database health checks",
            "Backup management",
            "Performance tuning",
        ],
    },
];


/* =====================================================
   SUPPORT CAPABILITIES
===================================================== */

const capabilities = [
    {
        icon: Clock3,
        title: "24/7 Monitoring",
        description:
            "Proactive monitoring helps identify issues before they become major business problems.",
    },
    {
        icon: Wrench,
        title: "Continuous Maintenance",
        description:
            "Keep your software updated, stable and ready for changing business requirements.",
    },
    {
        icon: LockKeyhole,
        title: "Security Updates",
        description:
            "Regular security improvements help reduce vulnerabilities and protect your digital assets.",
    },
    {
        icon: Activity,
        title: "Performance Tracking",
        description:
            "Monitor system performance and continuously identify opportunities for optimization.",
    },
];


/* =====================================================
   SUPPORT PLANS
===================================================== */

const supportPlans = [
    {
        label: "ESSENTIAL",
        title: "Keep It Stable",
        description:
            "For businesses that need reliable ongoing maintenance and issue resolution.",
        features: [
            "Bug fixes & troubleshooting",
            "Security updates",
            "Application health checks",
            "Performance monitoring",
            "Technical assistance",
        ],
    },
    {
        label: "GROWTH",
        title: "Keep It Improving",
        description:
            "For growing products that need continuous optimization and technical improvements.",
        features: [
            "Everything in Essential",
            "Performance optimization",
            "Database optimization",
            "Feature enhancements",
            "Infrastructure support",
            "Priority technical support",
        ],
        featured: true,
    },
    {
        label: "ENTERPRISE",
        title: "Keep It Running",
        description:
            "For mission-critical applications requiring proactive, dedicated technical support.",
        features: [
            "Dedicated support team",
            "Proactive monitoring",
            "Advanced security support",
            "Cloud & infrastructure management",
            "Priority issue resolution",
            "Continuous modernization",
        ],
    },
];


/* =====================================================
   PROCESS
===================================================== */

const processSteps = [
    {
        number: "01",
        icon: SearchCheck,
        title: "Assess",
        description:
            "We review your existing application, infrastructure, codebase and current technical challenges.",
    },
    {
        number: "02",
        icon: Settings2,
        title: "Plan",
        description:
            "We create a practical maintenance strategy based on your application's priorities and business needs.",
    },
    {
        number: "03",
        icon: Wrench,
        title: "Resolve",
        description:
            "Our team fixes issues, improves performance, applies updates and handles technical maintenance.",
    },
    {
        number: "04",
        icon: Activity,
        title: "Monitor",
        description:
            "We continuously monitor system health and identify potential issues before they affect users.",
    },
    {
        number: "05",
        icon: Rocket,
        title: "Improve",
        description:
            "Your application continuously evolves through optimization, modernization and feature improvements.",
    },
];


/* =====================================================
   TECHNOLOGIES
===================================================== */

const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "PHP",
    "ASP.NET",
    "Java",
    "Python",
    "MySQL",
    "MongoDB",
    "SQL Server",
    "AWS",
    "Azure",
    "Docker",
];


/* =====================================================
   FAQ
===================================================== */

const faqs = [
    {
        question:
            "Can you maintain an application developed by another team?",
        answer:
            "Yes. We can audit an existing application, understand its architecture and codebase, and take over ongoing maintenance and support.",
    },
    {
        question: "Do you provide emergency bug fixing?",
        answer:
            "Yes. We can provide priority technical support for critical issues that affect application availability, security or core business functionality.",
    },
    {
        question:
            "Can you improve the performance of an existing application?",
        answer:
            "Absolutely. We can analyze frontend performance, APIs, databases, infrastructure and application architecture to identify and resolve bottlenecks.",
    },
    {
        question: "Do you provide long-term maintenance?",
        answer:
            "Yes. Our maintenance services are designed for long-term partnerships, including continuous updates, monitoring, optimization and technical support.",
    },
];


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
            duration: 0.65,
            ease: "easeOut",
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
   MAIN COMPONENT
===================================================== */

function Maintainance_and_support() {
    const navigate = useNavigate();

    /* =====================================================
       ALL CTA BUTTONS → CONTACT PAGE
    ===================================================== */

    const goToContact = () => {
        navigate("/contact-us");
    };

    return (
        <main className="maintenance-support-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="maintenance-hero">

                <div className="maintenance-hero-grid"></div>

                <div className="maintenance-hero-glow maintenance-glow-one"></div>
                <div className="maintenance-hero-glow maintenance-glow-two"></div>

                <div className="maintenance-hero-content">

                    <motion.div
                        className="maintenance-hero-copy"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >

                        <motion.div
                            className="maintenance-eyebrow"
                            variants={fadeUp}
                        >
                            <span className="eyebrow-dot"></span>
                            MAINTENANCE & SUPPORT
                        </motion.div>


                        <motion.h1 variants={fadeUp}>
                            Keep Your Software
                            <span> Running at Its Best.</span>
                        </motion.h1>


                        <motion.p variants={fadeUp}>
                            Reliable maintenance, proactive monitoring and
                            expert technical support to keep your digital
                            products secure, stable, fast and ready for growth.
                        </motion.p>


                        <motion.div
                            className="maintenance-hero-actions"
                            variants={fadeUp}
                        >

                            <button
                                type="button"
                                className="maintenance-primary-btn"
                                onClick={goToContact}
                            >
                                Get Support
                                <ArrowRight size={18} />
                            </button>

                            <button
                                type="button"
                                className="maintenance-secondary-btn"
                                onClick={goToContact}
                            >
                                Discuss Your Project
                                <ArrowUpRight size={18} />
                            </button>

                        </motion.div>


                        <motion.div
                            className="maintenance-hero-trust"
                            variants={fadeUp}
                        >

                            <div className="trust-item">
                                <CheckCircle2 size={17} />
                                <span>Fast Issue Resolution</span>
                            </div>

                            <div className="trust-item">
                                <CheckCircle2 size={17} />
                                <span>Proactive Monitoring</span>
                            </div>

                            <div className="trust-item">
                                <CheckCircle2 size={17} />
                                <span>Long-Term Support</span>
                            </div>

                        </motion.div>

                    </motion.div>


                    {/* =================================================
                        HERO VISUAL
                    ================================================= */}

                    <motion.div
                        className="maintenance-hero-visual"
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            x: 40,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >

                        <div className="maintenance-orbit orbit-one"></div>
                        <div className="maintenance-orbit orbit-two"></div>
                        <div className="maintenance-orbit orbit-three"></div>


                        <div className="maintenance-dashboard">

                            <div className="dashboard-top">

                                <div className="dashboard-title">

                                    <div className="dashboard-icon">
                                        <LifeBuoy size={20} />
                                    </div>

                                    <div>
                                        <strong>System Health</strong>
                                        <span>Live monitoring</span>
                                    </div>

                                </div>

                                <div className="dashboard-status">
                                    <span></span>
                                    All Systems Operational
                                </div>

                            </div>


                            <div className="health-score">

                                <div className="score-ring">

                                    <div className="score-inner">
                                        <strong>99.9%</strong>
                                        <span>Uptime</span>
                                    </div>

                                </div>


                                <div className="health-details">

                                    <div className="health-row">
                                        <span>Application</span>
                                        <b>Healthy</b>
                                    </div>

                                    <div className="health-bar">
                                        <span
                                            style={{
                                                width: "96%",
                                            }}
                                        ></span>
                                    </div>


                                    <div className="health-row">
                                        <span>Database</span>
                                        <b>Healthy</b>
                                    </div>

                                    <div className="health-bar">
                                        <span
                                            style={{
                                                width: "93%",
                                            }}
                                        ></span>
                                    </div>


                                    <div className="health-row">
                                        <span>Infrastructure</span>
                                        <b>Healthy</b>
                                    </div>

                                    <div className="health-bar">
                                        <span
                                            style={{
                                                width: "98%",
                                            }}
                                        ></span>
                                    </div>

                                </div>

                            </div>


                            <div className="dashboard-cards">

                                <div className="mini-status-card">

                                    <Activity size={17} />

                                    <div>
                                        <span>Performance</span>
                                        <strong>Excellent</strong>
                                    </div>

                                </div>


                                <div className="mini-status-card">

                                    <ShieldCheck size={17} />

                                    <div>
                                        <span>Security</span>
                                        <strong>Protected</strong>
                                    </div>

                                </div>

                            </div>


                            <div className="dashboard-log">

                                <div className="log-header">
                                    <span>Recent Activity</span>
                                    <span>Live</span>
                                </div>


                                <div className="log-item">
                                    <CircleCheck size={15} />
                                    <span>
                                        System health check completed
                                    </span>
                                    <small>2m</small>
                                </div>


                                <div className="log-item">
                                    <CircleCheck size={15} />
                                    <span>
                                        Database performance optimized
                                    </span>
                                    <small>14m</small>
                                </div>


                                <div className="log-item">
                                    <CircleCheck size={15} />
                                    <span>
                                        Security dependencies updated
                                    </span>
                                    <small>32m</small>
                                </div>

                            </div>

                        </div>


                        {/* FLOATING SUPPORT CARD */}

                        <motion.div
                            className="floating-support-card"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <div className="floating-card-icon">
                                <Headphones size={19} />
                            </div>

                            <div>
                                <strong>Expert Support</strong>
                                <span>Always ready to help</span>
                            </div>

                        </motion.div>


                        {/* FLOATING SECURITY CARD */}

                        <motion.div
                            className="floating-security-card"
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ShieldCheck size={18} />
                            <span>Protected</span>
                        </motion.div>

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                INTRO / VALUE
            ================================================= */}

            <section className="maintenance-intro">

                <div className="maintenance-container">

                    <motion.div
                        className="maintenance-intro-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeUp}
                    >

                        <span className="section-label">
                            BEYOND FIXING BUGS
                        </span>

                        <h2>
                            Your software needs more than
                            <span> occasional fixes.</span>
                        </h2>

                    </motion.div>


                    <motion.div
                        className="maintenance-intro-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeUp}
                    >

                        <p>
                            Software is never truly finished. Technologies
                            change, security threats evolve, users expect
                            better experiences and your business continues
                            to grow.
                        </p>

                        <p>
                            Our maintenance and support services help you
                            continuously improve your software while reducing
                            downtime, technical debt and unexpected problems.
                        </p>

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                STATS
            ================================================= */}

            <section className="maintenance-stats-section">

                <div className="maintenance-container">

                    <div className="maintenance-stats-grid">

                        <div className="maintenance-stat">
                            <strong>99.9%</strong>
                            <span>Target System Uptime</span>
                        </div>

                        <div className="maintenance-stat">
                            <strong>24/7</strong>
                            <span>Monitoring & Support</span>
                        </div>

                        <div className="maintenance-stat">
                            <strong>360°</strong>
                            <span>Technical Coverage</span>
                        </div>

                        <div className="maintenance-stat">
                            <strong>100%</strong>
                            <span>Focus on Reliability</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                SUPPORT SERVICES
            ================================================= */}

            <section className="maintenance-services">

                <div className="maintenance-container">

                    <motion.div
                        className="maintenance-section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={fadeUp}
                    >

                        <span className="section-label">
                            WHAT WE SUPPORT
                        </span>

                        <h2>
                            Complete technical support
                            <span> for your software.</span>
                        </h2>

                        <p>
                            From emergency fixes to continuous optimization,
                            our team takes care of the technical details so
                            you can focus on your business.
                        </p>

                    </motion.div>


                    <motion.div
                        className="maintenance-services-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={staggerContainer}
                    >

                        {supportServices.map((service) => {

                            const Icon = service.icon;

                            return (
                                <motion.article
                                    className="maintenance-service-card"
                                    key={service.number}
                                    variants={fadeUp}
                                >

                                    <div className="service-card-top">

                                        <div className="service-icon">
                                            <Icon size={23} />
                                        </div>

                                        <span className="service-number">
                                            {service.number}
                                        </span>

                                    </div>


                                    <h3>
                                        {service.title}
                                    </h3>


                                    <p>
                                        {service.description}
                                    </p>


                                    <div className="service-points">

                                        {service.points.map((point) => (

                                            <div
                                                className="service-point"
                                                key={point}
                                            >

                                                <CheckCircle2 size={15} />

                                                <span>
                                                    {point}
                                                </span>

                                            </div>

                                        ))}

                                    </div>


                                    <div className="service-card-line"></div>

                                </motion.article>
                            );

                        })}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                CAPABILITIES
            ================================================= */}

            <section className="maintenance-capabilities">

                <div className="maintenance-container">

                    <div className="capabilities-layout">

                        <motion.div
                            className="capabilities-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={fadeUp}
                        >

                            <span className="section-label">
                                PROACTIVE APPROACH
                            </span>

                            <h2>
                                We don't wait for
                                <span> problems to happen.</span>
                            </h2>

                            <p>
                                Reactive support fixes problems after they
                                occur. Our approach combines maintenance,
                                monitoring and optimization to help prevent
                                issues before they impact your users.
                            </p>


                            <button
                                type="button"
                                className="maintenance-text-btn"
                                onClick={goToContact}
                            >
                                Talk to our support team
                                <ArrowRight size={17} />
                            </button>

                        </motion.div>


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
                                        variants={fadeUp}
                                    >

                                        <div className="capability-icon">
                                            <Icon size={21} />
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

                </div>

            </section>


            {/* =================================================
                SUPPORT PLANS
            ================================================= */}

            <section className="maintenance-plans">

                <div className="maintenance-container">

                    <motion.div
                        className="maintenance-section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={fadeUp}
                    >

                        <span className="section-label">
                            FLEXIBLE SUPPORT
                        </span>

                        <h2>
                            Support that fits your
                            <span> business needs.</span>
                        </h2>

                        <p>
                            Choose the level of technical involvement your
                            product needs today — and scale your support as
                            your business grows.
                        </p>

                    </motion.div>


                    <motion.div
                        className="maintenance-plans-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={staggerContainer}
                    >

                        {supportPlans.map((plan) => (

                            <motion.article
                                className={`maintenance-plan-card ${
                                    plan.featured
                                        ? "maintenance-plan-featured"
                                        : ""
                                }`}
                                key={plan.title}
                                variants={fadeUp}
                            >

                                {plan.featured && (
                                    <div className="plan-badge">
                                        MOST POPULAR
                                    </div>
                                )}


                                <span className="plan-label">
                                    {plan.label}
                                </span>


                                <h3>
                                    {plan.title}
                                </h3>


                                <p>
                                    {plan.description}
                                </p>


                                <div className="plan-divider"></div>


                                <div className="plan-features">

                                    {plan.features.map((feature) => (

                                        <div
                                            className="plan-feature"
                                            key={feature}
                                        >

                                            <CheckCircle2 size={17} />

                                            <span>
                                                {feature}
                                            </span>

                                        </div>

                                    ))}

                                </div>


                                <button
                                    type="button"
                                    className={
                                        plan.featured
                                            ? "plan-button plan-button-primary"
                                            : "plan-button"
                                    }
                                    onClick={goToContact}
                                >
                                    Discuss Your Needs
                                    <ArrowRight size={16} />
                                </button>

                            </motion.article>

                        ))}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                PROCESS
            ================================================= */}

            <section className="maintenance-process">

                <div className="maintenance-container">

                    <motion.div
                        className="maintenance-section-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={fadeUp}
                    >

                        <span className="section-label">
                            HOW WE WORK
                        </span>

                        <h2>
                            A smarter approach to
                            <span> ongoing support.</span>
                        </h2>

                    </motion.div>


                    <div className="maintenance-process-line"></div>


                    <motion.div
                        className="maintenance-process-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={staggerContainer}
                    >

                        {processSteps.map((step) => {

                            const Icon = step.icon;

                            return (
                                <motion.div
                                    className="process-step"
                                    key={step.number}
                                    variants={fadeUp}
                                >

                                    <div className="process-number">
                                        {step.number}
                                    </div>

                                    <div className="process-icon">
                                        <Icon size={21} />
                                    </div>

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
                TECHNOLOGY SUPPORT
            ================================================= */}

            <section className="maintenance-tech">

                <div className="maintenance-container">

                    <div className="maintenance-tech-box">

                        <motion.div
                            className="tech-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={fadeUp}
                        >

                            <span className="section-label">
                                TECHNOLOGY COVERAGE
                            </span>

                            <h2>
                                Support for the technologies
                                <span> your product depends on.</span>
                            </h2>

                            <p>
                                Our engineers work across modern web,
                                application, database, cloud and infrastructure
                                technologies to keep your entire technical
                                ecosystem healthy.
                            </p>


                            <div className="tech-highlight">

                                <div className="tech-highlight-icon">
                                    <MonitorSmartphone size={21} />
                                </div>

                                <div>

                                    <strong>
                                        Full-Stack Support
                                    </strong>

                                    <span>
                                        Frontend, backend, database,
                                        infrastructure and deployment.
                                    </span>

                                </div>

                            </div>

                        </motion.div>


                        <motion.div
                            className="technology-list"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={staggerContainer}
                        >

                            {technologies.map((technology) => (

                                <motion.div
                                    className="technology-pill"
                                    key={technology}
                                    variants={fadeUp}
                                >

                                    <Zap size={14} />

                                    {technology}

                                </motion.div>

                            ))}

                        </motion.div>

                    </div>

                </div>

            </section>


            {/* =================================================
                FAQ
            ================================================= */}

            <section className="maintenance-faq">

                <div className="maintenance-container">

                    <motion.div
                        className="maintenance-section-heading faq-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={fadeUp}
                    >

                        <span className="section-label">
                            FAQ
                        </span>

                        <h2>
                            Questions about
                            <span> maintenance & support?</span>
                        </h2>

                    </motion.div>


                    <motion.div
                        className="faq-list"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={staggerContainer}
                    >

                        {faqs.map((faq, index) => (

                            <motion.div
                                className="faq-item"
                                key={faq.question}
                                variants={fadeUp}
                            >

                                <div className="faq-number">
                                    0{index + 1}
                                </div>


                                <div className="faq-content">

                                    <h3>
                                        {faq.question}
                                    </h3>

                                    <p>
                                        {faq.answer}
                                    </p>

                                </div>


                                <CheckCircle2
                                    className="faq-check"
                                    size={20}
                                />

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="maintenance-final-cta">

                <div className="maintenance-cta-grid"></div>

                <div className="maintenance-cta-glow"></div>


                <motion.div
                    className="maintenance-cta-content"
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
                        variants={fadeUp}
                    >
                        <Headphones size={25} />
                    </motion.div>


                    <motion.span
                        className="cta-label"
                        variants={fadeUp}
                    >
                        NEED TECHNICAL SUPPORT?
                    </motion.span>


                    <motion.h2 variants={fadeUp}>
                        Keep your software
                        <span> performing at its best.</span>
                    </motion.h2>


                    <motion.p variants={fadeUp}>
                        Whether you need emergency bug fixing, ongoing
                        maintenance or a long-term technical partner,
                        our team is ready to help.
                    </motion.p>


                    <motion.button
                        type="button"
                        className="maintenance-cta-button"
                        onClick={goToContact}
                        variants={fadeUp}
                    >
                        Contact Us
                        <ArrowRight size={19} />
                    </motion.button>


                    <motion.div
                        className="cta-note"
                        variants={fadeUp}
                    >
                        <ShieldCheck size={16} />

                        Reliable support. Continuous improvement.
                        Peace of mind.
                    </motion.div>

                </motion.div>

            </section>

        </main>
    );
}


export default Maintainance_and_support;