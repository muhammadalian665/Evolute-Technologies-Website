import { useMemo } from "react";

import { AnimatedList } from "../../ui/animated-list";

import "./AI_Integration_and_automation.css";

/* =====================================================
   AI NOTIFICATIONS
===================================================== */

const notifications = [
    {
        name: "Workflow Automated",
        description:
            "Repetitive tasks are now handled automatically by AI.",
        status: "Automation Active",
        icon: "⚡",
        color: "#3CD2F9",
    },

    {
        name: "AI Assistant Online",
        description:
            "Your AI assistant is responding to customer queries 24/7.",
        status: "Online",
        icon: "🤖",
        color: "#3CD2F9",
    },

    {
        name: "Document Processed",
        description:
            "AI extracted key information from the uploaded document.",
        status: "Analysis Complete",
        icon: "📄",
        color: "#60A5FA",
    },

    {
        name: "New Insight Detected",
        description:
            "AI identified a significant trend in your business data.",
        status: "Insight Ready",
        icon: "📊",
        color: "#3CD2F9",
    },

    {
        name: "Prediction Generated",
        description:
            "AI analyzed historical data and generated a predictive forecast.",
        status: "Prediction Ready",
        icon: "🔮",
        color: "#818CF8",
    },

    {
        name: "AI Model Deployed",
        description:
            "Your custom AI model is now running in production.",
        status: "Deployment Successful",
        icon: "🧠",
        color: "#3CD2F9",
    },

    {
        name: "Recommendation Ready",
        description:
            "AI analyzed user behavior and generated personalized recommendations.",
        status: "Updated Just Now",
        icon: "✨",
        color: "#22D3EE",
    },

    {
        name: "Content Generated",
        description:
            "AI created new content based on your requirements and brand guidelines.",
        status: "Generation Complete",
        icon: "✍️",
        color: "#38BDF8",
    },

    {
        name: "Voice Agent Active",
        description:
            "Your AI voice agent is handling conversations automatically.",
        status: "Listening",
        icon: "🎙️",
        color: "#67E8F9",
    },

    {
        name: "Integration Connected",
        description:
            "AI is now connected with your existing business systems and APIs.",
        status: "Connected",
        icon: "🔗",
        color: "#3CD2F9",
    },

    {
        name: "Security Check Complete",
        description:
            "AI-powered monitoring detected no suspicious activity.",
        status: "System Secure",
        icon: "🛡️",
        color: "#34D399",
    },

    {
        name: "Model Optimization Complete",
        description:
            "AI performance has been analyzed and optimization recommendations are ready.",
        status: "Optimization Ready",
        icon: "⚙️",
        color: "#60A5FA",
    },
];

/* =====================================================
   NOTIFICATION CARD
===================================================== */

const Notification = ({
    name,
    description,
    icon,
    color,
    status,
}) => {

    return (
        <div className="ai-notification">

            {/* =================================================
               ICON
            ================================================= */}

            <div
                className="ai-notification-icon"
                style={{
                    "--notification-color": color,
                }}
            >
                <span>
                    {icon}
                </span>
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

    /*
     * Repeat notifications so the AnimatedList
     * continuously has enough items to animate.
     */

    const animatedNotifications = useMemo(
        () =>
            Array.from(
                {
                    length: 3,
                },
                () => notifications
            ).flat(),

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
                    We integrate intelligent AI capabilities
                    into your existing systems and build custom
                    AI solutions that automate processes,
                    improve decisions, and create better
                    customer experiences.
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
               AI NOTIFICATION AREA
            ================================================= */}

            <div className="ai-notification-area">

                {/* Decorative glow */}

                <div className="ai-notification-glow" />


                {/* Notification header */}

                <div className="ai-notification-header">

                    <div className="ai-status-indicator" />

                    <span>
                        AI SYSTEM ACTIVITY
                    </span>

                </div>


                {/* Animated notifications */}

                <div className="ai-notification-list">

                    <AnimatedList>

                        {animatedNotifications.map(
                            (notification, index) => (

                                <Notification
                                    {...notification}
                                    key={index}
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