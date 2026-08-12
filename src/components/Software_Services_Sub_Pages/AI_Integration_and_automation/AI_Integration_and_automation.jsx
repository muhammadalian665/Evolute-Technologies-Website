import { useMemo } from "react";

import { AnimatedList } from "../../ui/animated-list";

import "./AI_Integration_and_automation.css";


/* =====================================================
   AI INTEGRATION & AUTOMATION SERVICES
===================================================== */

const notifications = [
    {
        number: "01",
        name: "AI Automation",
        description:
            "Automate repetitive workflows and business processes with intelligent AI-driven systems.",
        status: "Automation Ready",
        color: "#3CD2F9",
    },

    {
        number: "02",
        name: "AI Chatbots",
        description:
            "Deploy intelligent AI assistants that engage customers and provide instant support 24/7.",
        status: "Always Online",
        color: "#3CD2F9",
    },

    {
        number: "03",
        name: "Document Processing",
        description:
            "Extract, classify, and process information from documents automatically using AI.",
        status: "Processing Automated",
        color: "#60A5FA",
    },

    {
        number: "04",
        name: "AI-Powered Analytics",
        description:
            "Turn your business data into actionable insights with intelligent AI-powered analytics.",
        status: "Insights Generated",
        color: "#3CD2F9",
    },

    {
        number: "05",
        name: "Predictive AI",
        description:
            "Analyze historical data to forecast trends, demand, risks, and future business outcomes.",
        status: "Prediction Ready",
        color: "#818CF8",
    },

    {
        number: "06",
        name: "Custom AI Solutions",
        description:
            "Build tailored AI solutions designed around your unique business requirements and workflows.",
        status: "Custom Built",
        color: "#3CD2F9",
    },

    {
        number: "07",
        name: "AI Recommendations",
        description:
            "Deliver personalized recommendations based on customer behavior, preferences, and data.",
        status: "Personalization Active",
        color: "#22D3EE",
    },

    {
        number: "08",
        name: "AI Content Generation",
        description:
            "Generate high-quality content aligned with your brand, audience, and business objectives.",
        status: "Generation Active",
        color: "#38BDF8",
    },

    {
        number: "09",
        name: "Voice AI",
        description:
            "Build AI voice agents that handle conversations, support customers, and automate communication.",
        status: "Voice Active",
        color: "#67E8F9",
    },

    {
        number: "10",
        name: "AI System Integration",
        description:
            "Connect AI capabilities with your existing software, APIs, CRMs, ERPs, and business platforms.",
        status: "Integration Connected",
        color: "#3CD2F9",
    },

    {
        number: "11",
        name: "AI Security & Monitoring",
        description:
            "Add intelligent monitoring and security capabilities to help protect your AI-powered systems.",
        status: "Monitoring Active",
        color: "#34D399",
    },

    {
        number: "12",
        name: "Continuous AI Optimization",
        description:
            "Continuously analyze and improve AI performance as your business, data, and requirements evolve.",
        status: "Optimization Active",
        color: "#60A5FA",
    },
];


/* =====================================================
   NOTIFICATION CARD
===================================================== */

const Notification = ({
    number,
    name,
    description,
    color,
    status,
}) => {

    return (
        <div className="ai-notification">

            {/* =================================================
               NOTIFICATION NUMBER
            ================================================= */}

            <div
                className="ai-notification-number"
                style={{
                    "--notification-color": color,
                }}
            >
                {number}
            </div>


            {/* =================================================
               CONTENT
            ================================================= */}

            <div className="ai-notification-content">

                <div className="ai-notification-top">

                    <h4>
                        {name}
                    </h4>

                    <span className="ai-notification-status">
                        {status}
                    </span>

                </div>


                <p>
                    {description}
                </p>

            </div>

        </div>
    );
};


/* =====================================================
   AI INTEGRATION & DEVELOPMENT
===================================================== */

function AI_Integration_and_automation() {

    /* =================================================
       NOTIFICATIONS

       Each service appears only once.
       Nothing is duplicated.
    ================================================= */

    const animatedNotifications = useMemo(
        () => notifications,
        []
    );


    return (

        <section className="ai-integration-development">

            {/* =================================================
               HERO CONTENT
            ================================================= */}

            <div className="ai-integration-content">

                <span className="ai-integration-eyebrow">
                    AI INTEGRATION & DEVELOPMENT
                </span>


                <h1>
                    Turn AI Into a
                    <br />
                    Real Business Advantage.
                </h1>


                <p>
                    We integrate intelligent AI solutions into
                    your existing systems and build custom AI
                    applications that automate workflows,
                    enhance decision-making, and help your
                    business operate smarter, faster, and
                    more efficiently.
                </p>


                {/* =================================================
                   CTA
                ================================================= */}

                <div className="ai-integration-buttons">

                    <button
                        type="button"
                        className="ai-primary-button"
                    >
                        Build With AI
                    </button>

                </div>

            </div>


            {/* =================================================
               AI SERVICES AREA
            ================================================= */}

            <div className="ai-notification-area">

                {/* =================================================
                   DECORATIVE GLOW
                ================================================= */}

                <div className="ai-notification-glow" />


                {/* =================================================
                   SERVICES HEADER
                ================================================= */}

                <div className="ai-notification-header">

                    <div className="ai-status-indicator" />

                    <span>
                        AI CAPABILITIES
                    </span>

                </div>


                {/* =================================================
                   ANIMATED SERVICES
                ================================================= */}

                <div className="ai-notification-list">

                    <AnimatedList
                        delay={2500}
                        direction="up"
                    >

                        {animatedNotifications.map(
                            (notification) => (

                                <Notification
                                    {...notification}
                                    key={notification.number}
                                />

                            )
                        )}

                    </AnimatedList>

                </div>

            </div>

        </section>
    );
}


export default AI_Integration_and_automation;