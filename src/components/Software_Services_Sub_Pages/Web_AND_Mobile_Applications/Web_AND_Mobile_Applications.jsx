import "./Web_AND_Mobile_Applications.css";

/* =====================================================
   TECHNOLOGIES
===================================================== */

const technologies = [
    "React",
    "Next.js",
    "React Native",
    "Flutter",
    "Node.js",
    ".NET",
    "Laravel",
    "MongoDB",
    "MySQL",
    "AWS",
];


/* =====================================================
   SERVICES
===================================================== */

const services = [
    {
        number: "01",
        title: "Web Applications",
        description:
            "Business platforms, dashboards, portals, and customer-facing applications built around your workflows.",
        className: "service-large",
    },

    {
        number: "02",
        title: "Mobile Applications",
        description:
            "Native-quality mobile experiences designed for iOS and Android users.",
        className: "service-medium",
    },

    {
        number: "03",
        title: "Cross-Platform Apps",
        description:
            "Build once and deliver consistent experiences across multiple platforms.",
        className: "service-medium",
    },

    {
        number: "04",
        title: "Progressive Web Apps",
        description:
            "Fast, installable web experiences that feel like native applications.",
        className: "service-small",
    },

    {
        number: "05",
        title: "API & Backend Development",
        description:
            "Reliable backend systems and APIs that power your applications.",
        className: "service-small",
    },

    {
        number: "06",
        title: "Application Modernization",
        description:
            "Upgrade legacy applications with modern architecture, interfaces, and technologies.",
        className: "service-wide",
    },
];


/* =====================================================
   PROCESS
===================================================== */

const processSteps = [
    {
        number: "01",
        title: "Discover",
        description:
            "We understand your product, users, goals, and technical requirements.",
    },

    {
        number: "02",
        title: "Design",
        description:
            "We turn requirements into intuitive interfaces and a clear product experience.",
    },

    {
        number: "03",
        title: "Develop",
        description:
            "Our team builds the product using scalable and maintainable technologies.",
    },

    {
        number: "04",
        title: "Test",
        description:
            "We test functionality, performance, responsiveness, and real-world usability.",
    },

    {
        number: "05",
        title: "Launch",
        description:
            "Your application is deployed and prepared for real users.",
    },

    {
        number: "06",
        title: "Scale",
        description:
            "We continuously improve and scale the product as your business grows.",
    },
];


/* =====================================================
   PRODUCT FEATURES
===================================================== */

const features = [
    {
        number: "01",
        title: "High Performance",
        description:
            "Fast-loading interfaces and optimized application architecture.",
    },

    {
        number: "02",
        title: "Secure Architecture",
        description:
            "Security-conscious development across application and backend layers.",
    },

    {
        number: "03",
        title: "Responsive Experience",
        description:
            "Interfaces designed to work beautifully across every screen size.",
    },

    {
        number: "04",
        title: "Scalable Foundation",
        description:
            "Technology choices that support growing users, features, and data.",
    },
];


/* =====================================================
   WEB & MOBILE APPLICATIONS
===================================================== */

function Web_AND_Mobile_Applications() {
    return (
        <main className="web-mobile-page">

            {/* =================================================
               HERO
            ================================================= */}

            <section className="web-mobile-hero">

                <div className="web-mobile-hero-glow hero-glow-one" />
                <div className="web-mobile-hero-glow hero-glow-two" />


                {/* =================================================
                   HERO CONTENT
                ================================================= */}

                <div className="web-mobile-hero-content">

                    <span className="web-mobile-eyebrow">
                        WEB & MOBILE APPLICATIONS
                    </span>


                    <h1>
                        Digital Products
                        <span> Built to Perform.</span>
                    </h1>


                    <p>
                        We design and develop high-performance web and
                        mobile applications that deliver seamless
                        experiences, integrate with your business
                        ecosystem, and scale as your users and
                        requirements grow.
                    </p>


                    <div className="web-mobile-hero-actions">

                        <a
                            href="/contact-us"
                            className="web-mobile-primary-button"
                        >
                            Start Your Project
                            <span>→</span>
                        </a>


                        <a
                            href="#services"
                            className="web-mobile-secondary-button"
                        >
                            Explore Services
                        </a>

                    </div>


                    <div className="web-mobile-hero-meta">

                        <div>
                            <strong>01</strong>
                            <span>Product Focused</span>
                        </div>

                        <div>
                            <strong>02</strong>
                            <span>Scalable Architecture</span>
                        </div>

                        <div>
                            <strong>03</strong>
                            <span>Built for Growth</span>
                        </div>

                    </div>

                </div>


                {/* =================================================
                   PRODUCT MOCKUP
                ================================================= */}

                <div className="web-mobile-visual">

                    {/* Browser */}

                    <div className="browser-window">

                        <div className="browser-topbar">

                            <div className="browser-dots">
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="browser-address">
                                app.evolute.dev
                            </div>

                        </div>


                        <div className="browser-content">

                            <div className="dashboard-sidebar">

                                <div className="dashboard-logo">
                                    E
                                </div>

                                <span className="sidebar-active" />
                                <span />
                                <span />
                                <span />
                                <span />

                            </div>


                            <div className="dashboard-main">

                                <div className="dashboard-header">

                                    <div>
                                        <small>OVERVIEW</small>

                                        <h3>
                                            Welcome back
                                        </h3>
                                    </div>

                                    <div className="dashboard-avatar">
                                        A
                                    </div>

                                </div>


                                <div className="dashboard-stats">

                                    <div className="dashboard-stat">

                                        <span>
                                            Revenue
                                        </span>

                                        <strong>
                                            $84.2K
                                        </strong>

                                        <small>
                                            +18.4%
                                        </small>

                                    </div>


                                    <div className="dashboard-stat">

                                        <span>
                                            Customers
                                        </span>

                                        <strong>
                                            12,842
                                        </strong>

                                        <small>
                                            +12.8%
                                        </small>

                                    </div>

                                </div>


                                <div className="dashboard-chart">

                                    <div className="chart-heading">

                                        <span>
                                            Performance
                                        </span>

                                        <small>
                                            Last 30 days
                                        </small>

                                    </div>


                                    <div className="chart-lines">

                                        <span />
                                        <span />
                                        <span />
                                        <span />

                                    </div>


                                    <div className="chart-graph">

                                        <div className="graph-line" />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Mobile */}

                    <div className="mobile-device">

                        <div className="mobile-notch" />

                        <div className="mobile-screen">

                            <div className="mobile-header">

                                <span>
                                    Dashboard
                                </span>

                                <div>
                                    A
                                </div>

                            </div>


                            <div className="mobile-welcome">
                                <small>
                                    Good morning
                                </small>

                                <strong>
                                    Your overview
                                </strong>
                            </div>


                            <div className="mobile-card primary-mobile-card">

                                <small>
                                    Total Revenue
                                </small>

                                <strong>
                                    $24,860
                                </strong>

                                <span>
                                    +18.4% this month
                                </span>

                            </div>


                            <div className="mobile-mini-grid">

                                <div>
                                    <small>
                                        Orders
                                    </small>

                                    <strong>
                                        1,284
                                    </strong>
                                </div>

                                <div>
                                    <small>
                                        Users
                                    </small>

                                    <strong>
                                        8.4K
                                    </strong>
                                </div>

                            </div>


                            <div className="mobile-progress">

                                <span>
                                    Monthly target
                                </span>

                                <strong>
                                    78%
                                </strong>

                                <div>
                                    <i />
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Floating Status */}

                    <div className="floating-product-status">

                        <span className="status-dot" />

                        <div>
                            <strong>
                                System Online
                            </strong>

                            <small>
                                All services operational
                            </small>
                        </div>

                    </div>


                    <div className="floating-growth-card">

                        <small>
                            MONTHLY GROWTH
                        </small>

                        <strong>
                            +24.8%
                        </strong>

                        <span>
                            ↗
                        </span>

                    </div>

                </div>

            </section>


            {/* =================================================
               TECHNOLOGY STRIP
            ================================================= */}

            <section className="technology-strip">

                <div className="technology-label">
                    TECHNOLOGIES WE WORK WITH
                </div>


                <div className="technology-track">

                    {technologies.map((technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}

                </div>

            </section>


            {/* =================================================
               SERVICES
            ================================================= */}

            <section
                className="web-mobile-services"
                id="services"
            >

                <div className="section-heading">

                    <span>
                        WHAT WE BUILD
                    </span>

                    <h2>
                        From idea to
                        <br />
                        <em>digital product.</em>
                    </h2>

                    <p>
                        Whether you need a customer-facing application,
                        internal platform, or mobile product, we build
                        solutions around how your business actually works.
                    </p>

                </div>


                <div className="services-bento">

                    {services.map((service) => (

                        <article
                            className={`service-card ${service.className}`}
                            key={service.number}
                        >

                            <div className="service-card-top">

                                <span>
                                    {service.number}
                                </span>

                                <i>
                                    ↗
                                </i>

                            </div>


                            <div className="service-card-content">

                                <h3>
                                    {service.title}
                                </h3>

                                <p>
                                    {service.description}
                                </p>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* =================================================
               WEB VS MOBILE
            ================================================= */}

            <section className="web-mobile-comparison">

                <div className="comparison-heading">

                    <span>
                        ONE PRODUCT. EVERY SCREEN.
                    </span>

                    <h2>
                        Designed for web.
                        <br />
                        <em>Ready for mobile.</em>
                    </h2>

                </div>


                <div className="comparison-stage">

                    <div className="comparison-panel web-panel">

                        <div className="comparison-number">
                            01
                        </div>

                        <span>
                            WEB APPLICATIONS
                        </span>

                        <h3>
                            Powerful experiences
                            <br />
                            on every browser.
                        </h3>

                        <p>
                            Responsive dashboards, portals, SaaS products,
                            marketplaces, and business applications designed
                            for modern web users.
                        </p>


                        <div className="comparison-lines">

                            <div>
                                <span />
                                Responsive Interfaces
                            </div>

                            <div>
                                <span />
                                Scalable Frontends
                            </div>

                            <div>
                                <span />
                                Secure APIs
                            </div>

                        </div>

                    </div>


                    <div className="comparison-divider">

                        <span>
                            +
                        </span>

                    </div>


                    <div className="comparison-panel mobile-panel">

                        <div className="comparison-number">
                            02
                        </div>

                        <span>
                            MOBILE APPLICATIONS
                        </span>

                        <h3>
                            Native-quality
                            <br />
                            mobile experiences.
                        </h3>

                        <p>
                            iOS and Android applications that feel natural,
                            perform smoothly, and keep your users connected
                            wherever they are.
                        </p>


                        <div className="comparison-lines">

                            <div>
                                <span />
                                iOS & Android
                            </div>

                            <div>
                                <span />
                                Cross-Platform
                            </div>

                            <div>
                                <span />
                                Push & Device Features
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
               PROCESS
            ================================================= */}

            <section className="development-process">

                <div className="section-heading process-heading">

                    <span>
                        HOW WE WORK
                    </span>

                    <h2>
                        A clear path from
                        <br />
                        <em>concept to launch.</em>
                    </h2>

                </div>


                <div className="process-track">

                    <div className="process-line" />

                    {processSteps.map((step) => (

                        <article
                            className="process-step"
                            key={step.number}
                        >

                            <div className="process-marker">
                                {step.number}
                            </div>

                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.description}
                            </p>

                        </article>

                    ))}

                </div>

            </section>


            {/* =================================================
               PRODUCT SHOWCASE
            ================================================= */}

            <section className="product-showcase">

                <div className="showcase-content">

                    <span>
                        BUILT FOR REAL PRODUCTS
                    </span>

                    <h2>
                        Technology should
                        <br />
                        <em>move your business forward.</em>
                    </h2>

                    <p>
                        We combine thoughtful interface design with
                        solid engineering to create applications that
                        are useful today and ready for tomorrow.
                    </p>


                    <a
                        href="/contact-us"
                        className="showcase-link"
                    >
                        Discuss Your Product
                        <span>→</span>
                    </a>

                </div>


                <div className="showcase-visual">

                    <div className="showcase-window">

                        <div className="showcase-window-top">

                            <span />
                            <span />
                            <span />

                        </div>


                        <div className="showcase-interface">

                            <div className="showcase-interface-header">

                                <div>
                                    <small>
                                        PRODUCT ANALYTICS
                                    </small>

                                    <strong>
                                        Growth overview
                                    </strong>
                                </div>

                                <span>
                                    This Month
                                </span>

                            </div>


                            <div className="showcase-number">
                                $128,420
                            </div>


                            <div className="showcase-percentage">
                                <strong>
                                    +32.8%
                                </strong>

                                <span>
                                    compared to last month
                                </span>
                            </div>


                            <div className="showcase-bars">

                                <i style={{ height: "38%" }} />
                                <i style={{ height: "54%" }} />
                                <i style={{ height: "46%" }} />
                                <i style={{ height: "67%" }} />
                                <i style={{ height: "58%" }} />
                                <i style={{ height: "82%" }} />
                                <i style={{ height: "74%" }} />
                                <i style={{ height: "92%" }} />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
               FEATURES
            ================================================= */}

            <section className="application-features">

                <div className="features-intro">

                    <span>
                        ENGINEERED DIFFERENTLY
                    </span>

                    <h2>
                        Built for users.
                        <br />
                        <em>Engineered for scale.</em>
                    </h2>

                </div>


                <div className="features-grid">

                    {features.map((feature) => (

                        <article
                            className="feature-item"
                            key={feature.number}
                        >

                            <span className="feature-number">
                                {feature.number}
                            </span>

                            <div>

                                <h3>
                                    {feature.title}
                                </h3>

                                <p>
                                    {feature.description}
                                </p>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* =================================================
               FINAL CTA
            ================================================= */}

            <section className="web-mobile-final-cta">

                <div className="final-cta-glow" />

                <span>
                    HAVE A PRODUCT IN MIND?
                </span>

                <h2>
                    Let's turn your idea
                    <br />
                    into a <em>digital product.</em>
                </h2>

                <p>
                    Tell us what you're building. We'll help you
                    shape the right technology, experience, and
                    development path.
                </p>


                <a
                    href="/contact-us"
                    className="final-cta-button"
                >
                    Start a Conversation
                    <span>→</span>
                </a>

            </section>

        </main>
    );
}


export default Web_AND_Mobile_Applications;