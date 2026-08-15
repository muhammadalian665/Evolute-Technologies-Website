import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
    ArrowRight,
    ArrowUpRight,
    Cloud,
    CloudLightning,
    Database,
    Globe2,
    Server,
    ShieldCheck,
    Zap,
    Layers3,
    Activity,
    LockKeyhole,
    CheckCircle2,
    Network,
    Gauge,
    Settings2,
} from "lucide-react";

import "./Scalable_Cloud_Solution.css";


/* =====================================================
   SCALABLE CLOUD SOLUTIONS
===================================================== */

const cloudServices = [
    {
        icon: Cloud,
        number: "01",
        title: "Cloud Infrastructure",
        description:
            "Secure and scalable cloud infrastructure designed to support your applications and business growth.",
    },
    {
        icon: Layers3,
        number: "02",
        title: "Cloud Migration",
        description:
            "Move applications, databases, and workloads to the cloud with minimal disruption and downtime.",
    },
    {
        icon: Server,
        number: "03",
        title: "Cloud Architecture",
        description:
            "Design resilient cloud architectures optimized for performance, reliability, security, and scale.",
    },
    {
        icon: Database,
        number: "04",
        title: "Cloud Database Solutions",
        description:
            "Build highly available databases with reliable storage, backup, recovery, and performance strategies.",
    },
    {
        icon: ShieldCheck,
        number: "05",
        title: "Cloud Security",
        description:
            "Protect your cloud environment through secure access, encryption, monitoring, and infrastructure controls.",
    },
    {
        icon: Activity,
        number: "06",
        title: "Monitoring & Optimization",
        description:
            "Monitor infrastructure continuously and optimize performance, reliability, and cloud resource usage.",
    },
];


/* =====================================================
   CLOUD ADVANTAGES
===================================================== */

const cloudAdvantages = [
    {
        icon: Globe2,
        title: "Multi-Cloud & Hybrid",
        text:
            "Create flexible environments across cloud platforms and on-premise infrastructure.",
    },
    {
        icon: Zap,
        title: "Automatic Scaling",
        text:
            "Automatically adapt cloud resources according to traffic and application demand.",
    },
    {
        icon: LockKeyhole,
        title: "Security First",
        text:
            "Implement secure access, encryption, monitoring, and infrastructure controls.",
    },
    {
        icon: Gauge,
        title: "Performance Focused",
        text:
            "Optimize applications and infrastructure for speed, reliability, and efficiency.",
    },
    {
        icon: Network,
        title: "High Availability",
        text:
            "Build fault-tolerant systems designed to minimize downtime and service disruption.",
    },
    {
        icon: Settings2,
        title: "DevOps Automation",
        text:
            "Automate deployment, infrastructure provisioning, testing, and operational workflows.",
    },
];


/* =====================================================
   PROCESS
===================================================== */

const processSteps = [
    {
        number: "01",
        title: "Assess",
        description:
            "We understand your existing infrastructure, applications, requirements, and business goals.",
    },
    {
        number: "02",
        title: "Architect",
        description:
            "We design a cloud architecture focused on scalability, security, reliability, and cost efficiency.",
    },
    {
        number: "03",
        title: "Deploy",
        description:
            "We build the environment, migrate workloads, configure services, and establish deployment workflows.",
    },
    {
        number: "04",
        title: "Optimize",
        description:
            "We continuously monitor and improve your cloud environment as your business evolves.",
    },
];


/* =====================================================
   TRUST STATS
===================================================== */

const stats = [
    {
        value: "99.9%",
        label: "Target Availability",
    },
    {
        value: "24/7",
        label: "Infrastructure Monitoring",
    },
    {
        value: "3x",
        label: "Faster Scaling",
    },
    {
        value: "40%",
        label: "Potential Cost Optimization",
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


/* =====================================================
   MAIN COMPONENT
===================================================== */

const Scalable_Cloud_Solution = () => {
    const navigate = useNavigate();

    /*
     * ===================================================
     * CONTACT PAGE NAVIGATION
     * ===================================================
     *
     * App.jsx mein Contact Us ka route:
     *
     * /contact-us
     *
     * Isliye Cloud page ke tamam CTA buttons
     * isi route par navigate karenge.
     */

    const goToContact = () => {
        navigate("/contact-us");
    };


    return (
        <main className="scalable-cloud-solution">

            {/* =================================================
                HERO
            ================================================= */}

            <section className="cloud-hero">

                {/* Background Elements */}

                <div className="cloud-hero-grid"></div>

                <div className="cloud-glow cloud-glow-one"></div>

                <div className="cloud-glow cloud-glow-two"></div>


                {/* Floating Background Dots */}

                <motion.div
                    className="cloud-floating-dot dot-one"
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="cloud-floating-dot dot-two"
                    animate={{
                        y: [0, 18, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />


                {/* =================================================
                    HERO CONTENT
                ================================================= */}

                <div className="cloud-hero-content">

                    <motion.div
                        className="cloud-eyebrow"
                        initial={{
                            opacity: 0,
                            y: 18,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >

                        <span className="eyebrow-dot"></span>

                        SCALABLE CLOUD SOLUTIONS

                        <span className="eyebrow-line"></span>

                    </motion.div>


                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                        }}
                    >

                        Build for Today.

                        <span>
                            Scale for Tomorrow.
                        </span>

                    </motion.h1>


                    <motion.p
                        className="cloud-hero-description"
                        initial={{
                            opacity: 0,
                            y: 22,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                        }}
                    >
                        We design secure, reliable, and scalable cloud
                        environments that help businesses modernize
                        infrastructure, improve performance, and grow
                        without unnecessary complexity.
                    </motion.p>


                    {/* Hero Actions */}

                    <motion.div
                        className="cloud-hero-actions"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3,
                        }}
                    >

                        {/* =================================================
                            BUILD YOUR CLOUD
                            CONNECTED TO CONTACT US
                        ================================================= */}

                        <motion.button
                            type="button"
                            className="cloud-primary-btn"
                            onClick={goToContact}
                            whileHover={{
                                y: -3,
                                scale: 1.02,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                        >

                            Build Your Cloud

                            <ArrowRight size={18} />

                        </motion.button>


                        {/* =================================================
                            EXPLORE SERVICES
                            CONNECTED TO SOFTWARE SERVICES
                        ================================================= */}

                        <motion.button
                            type="button"
                            className="cloud-secondary-btn"
                            onClick={() => navigate("/software-services")}
                            whileHover={{
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                        >

                            Explore Services

                            <ArrowUpRight size={18} />

                        </motion.button>

                    </motion.div>


                    {/* Trust Indicators */}

                    <motion.div
                        className="cloud-trust-row"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                        }}
                    >

                        <div>
                            <CheckCircle2 size={16} />
                            Secure Infrastructure
                        </div>

                        <div>
                            <CheckCircle2 size={16} />
                            Cloud Native
                        </div>

                        <div>
                            <CheckCircle2 size={16} />
                            Built to Scale
                        </div>

                    </motion.div>

                </div>


                {/* =================================================
                    HERO VISUAL
                ================================================= */}

                <motion.div
                    className="cloud-hero-visual"
                    initial={{
                        opacity: 0,
                        x: 60,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                    }}
                >

                    {/* Animated Orbits */}

                    <motion.div
                        className="cloud-orbit orbit-one"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 24,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    <motion.div
                        className="cloud-orbit orbit-two"
                        animate={{
                            rotate: -360,
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    <motion.div
                        className="cloud-orbit orbit-three"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 32,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />


                    {/* Main Cloud */}

                    <motion.div
                        className="cloud-core"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >

                        <div className="cloud-core-glow"></div>

                        <Cloud
                            size={72}
                            strokeWidth={1.4}
                        />

                        <span>
                            Cloud
                        </span>

                        <strong>
                            Infrastructure
                        </strong>

                    </motion.div>


                    {/* Security Card */}

                    <motion.div
                        className="cloud-floating-card card-security"
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >

                        <div className="floating-card-icon">
                            <ShieldCheck size={19} />
                        </div>

                        <div>

                            <small>
                                Security
                            </small>

                            <strong>
                                Protected
                            </strong>

                        </div>

                    </motion.div>


                    {/* Performance Card */}

                    <motion.div
                        className="cloud-floating-card card-performance"
                        animate={{
                            y: [0, 9, 0],
                        }}
                        transition={{
                            duration: 3.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >

                        <div className="floating-card-icon">
                            <Activity size={19} />
                        </div>

                        <div>

                            <small>
                                Performance
                            </small>

                            <strong>
                                Optimized
                            </strong>

                        </div>

                    </motion.div>


                    {/* Scaling Card */}

                    <motion.div
                        className="cloud-floating-card card-scaling"
                        animate={{
                            y: [0, -7, 0],
                        }}
                        transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >

                        <div className="floating-card-icon">
                            <Zap size={19} />
                        </div>

                        <div>

                            <small>
                                Scaling
                            </small>

                            <strong>
                                Automatic
                            </strong>

                        </div>

                    </motion.div>


                    {/* Cloud Nodes */}

                    <motion.div
                        className="cloud-node node-one"
                        animate={{
                            scale: [1, 1.12, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Server size={17} />
                    </motion.div>


                    <motion.div
                        className="cloud-node node-two"
                        animate={{
                            scale: [1, 1.12, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Database size={17} />
                    </motion.div>


                    <motion.div
                        className="cloud-node node-three"
                        animate={{
                            scale: [1, 1.12, 1],
                        }}
                        transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Globe2 size={17} />
                    </motion.div>

                </motion.div>

            </section>


            {/* =================================================
                TRUST STATS
            ================================================= */}

            <section className="cloud-stats-section">

                <motion.div
                    className="cloud-stats"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >

                    {stats.map((stat) => (

                        <motion.div
                            className="cloud-stat"
                            variants={fadeUp}
                            key={stat.label}
                            whileHover={{
                                y: -5,
                            }}
                        >

                            <strong>
                                {stat.value}
                            </strong>

                            <span>
                                {stat.label}
                            </span>

                        </motion.div>

                    ))}

                </motion.div>

            </section>


            {/* =================================================
                WHAT WE OFFER
            ================================================= */}

            <section className="cloud-services">

                <motion.div
                    className="cloud-section-heading centered"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                >

                    <span className="section-label">
                        WHAT WE OFFER
                    </span>

                    <h2>
                        Cloud solutions built for growth.
                    </h2>

                    <p>
                        From infrastructure and migration to security and
                        optimization, we provide the cloud expertise
                        your business needs to scale confidently.
                    </p>

                </motion.div>


                <motion.div
                    className="cloud-services-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                >

                    {cloudServices.map((service) => {

                        const Icon = service.icon;

                        return (

                            <motion.article
                                className="cloud-service-card"
                                variants={fadeUp}
                                key={service.number}
                                whileHover={{
                                    y: -8,
                                }}
                            >

                                <div className="service-card-top">

                                    <span>
                                        {service.number}
                                    </span>

                                    <motion.div
                                        whileHover={{
                                            x: 4,
                                            y: -4,
                                        }}
                                    >
                                        <ArrowUpRight size={18} />
                                    </motion.div>

                                </div>


                                <motion.div
                                    className="service-icon"
                                    whileHover={{
                                        rotate: -5,
                                        scale: 1.08,
                                    }}
                                >

                                    <Icon size={25} />

                                </motion.div>


                                <h3>
                                    {service.title}
                                </h3>


                                <p>
                                    {service.description}
                                </p>


                                <div className="service-card-line"></div>

                            </motion.article>

                        );

                    })}

                </motion.div>

            </section>


            {/* =================================================
                WHY EVOLUTE
            ================================================= */}

            <section className="cloud-advantages">

                <div className="advantages-background-shape"></div>


                <div className="advantages-layout">

                    {/* Left Content */}

                    <motion.div
                        className="advantages-content"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                    >

                        <span className="section-label">
                            WHY EVOLUTE
                        </span>


                        <h2>
                            Cloud infrastructure

                            <span>
                                built around your business.
                            </span>
                        </h2>


                        <p>
                            We don't just move workloads to the cloud.
                            We engineer environments that are secure,
                            scalable, reliable, and ready for your next
                            stage of growth.
                        </p>


                        <motion.div
                            className="advantages-highlight"
                            whileHover={{
                                x: 5,
                            }}
                        >

                            <div className="highlight-icon">

                                <CloudLightning size={22} />

                            </div>

                            <div>

                                <strong>
                                    Built to scale
                                </strong>

                                <span>
                                    Infrastructure that grows with your business.
                                </span>

                            </div>

                        </motion.div>

                    </motion.div>


                    {/* Right Capabilities */}

                    <motion.div
                        className="capabilities-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                    >

                        {cloudAdvantages.map((item) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    className="capability-item"
                                    variants={fadeUp}
                                    key={item.title}
                                    whileHover={{
                                        x: 6,
                                    }}
                                >

                                    <motion.div
                                        className="capability-icon"
                                        whileHover={{
                                            scale: 1.08,
                                        }}
                                    >

                                        <Icon size={21} />

                                    </motion.div>


                                    <div>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.text}
                                        </p>

                                    </div>

                                </motion.div>

                            );

                        })}

                    </motion.div>

                </div>

            </section>


            {/* =================================================
                PROCESS
            ================================================= */}

            <section className="cloud-process">

                <motion.div
                    className="cloud-section-heading centered"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                >

                    <span className="section-label">
                        OUR PROCESS
                    </span>

                    <h2>

                        From infrastructure

                        <span>
                            to impact.
                        </span>

                    </h2>

                    <p>
                        A clear and structured process keeps your cloud
                        transformation secure, efficient, and aligned
                        with your business goals.
                    </p>

                </motion.div>


                <div className="cloud-process-wrapper">

                    <div className="process-progress-line"></div>


                    {processSteps.map((step, index) => (

                        <motion.div
                            className="cloud-process-step"
                            key={step.number}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                        >

                            <motion.div
                                className="process-number"
                                whileHover={{
                                    scale: 1.08,
                                }}
                            >
                                {step.number}
                            </motion.div>


                            <div className="process-content">

                                <h3>
                                    {step.title}
                                </h3>

                                <p>
                                    {step.description}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </section>


            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="cloud-cta">

                <div className="cta-grid-pattern"></div>

                <div className="cta-glow"></div>


                <motion.div
                    className="cloud-cta-content"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >

                    <motion.div
                        className="cta-icon"
                        animate={{
                            y: [0, -5, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >

                        <CloudLightning size={28} />

                    </motion.div>


                    <span className="cta-label">
                        READY TO SCALE?
                    </span>


                    <h2>

                        Let's build your

                        <span>
                            cloud advantage.
                        </span>

                    </h2>


                    <p>
                        Whether you're migrating to the cloud, modernizing
                        your infrastructure, or preparing for rapid growth,
                        Evolute Technologies can help you build a secure
                        and scalable foundation for what's next.
                    </p>


                    {/* =================================================
                        FINAL CTA
                        CONNECTED TO CONTACT US
                    ================================================= */}

                    <motion.button
                        type="button"
                        className="cta-button"
                        onClick={goToContact}
                        whileHover={{
                            y: -3,
                            scale: 1.02,
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                    >

                        Start Your Cloud Journey

                        <ArrowRight size={19} />

                    </motion.button>

                </motion.div>

            </section>

        </main>
    );
};


export default Scalable_Cloud_Solution;