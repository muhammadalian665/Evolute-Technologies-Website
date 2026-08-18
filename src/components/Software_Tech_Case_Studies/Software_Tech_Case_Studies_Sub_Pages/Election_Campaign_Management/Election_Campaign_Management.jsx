import "./Election_Campaign_Management.css";
import { motion } from "framer-motion";

function ElectionCampaignManagement() {
    return (
        <main className="election-campaign-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="election-campaign-hero">
                <div className="election-campaign-container">

                    <motion.div
                        className="election-campaign-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="election-campaign-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            Jarah Alfazoun Election Campaign Management System
                        </motion.h1>


                        <motion.div
                            className="election-campaign-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="election-campaign-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            In the dynamic landscape of political technology,
                            we developed a
                            <strong>
                                {" "}Digital Election Campaign Management System (DECMS)
                            </strong>
                            {" "}to empower modern political campaigns with
                            advanced IT infrastructure. This all-in-one platform
                            centralized campaign management, voter engagement,
                            real-time data analytics, and regulatory compliance
                            into a streamlined solution tailored for
                            political operations in Kuwait.
                        </motion.p>


                        <motion.p
                            className="election-campaign-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            By integrating technologies such as
                            <strong>
                                {" "}ASP.NET, Vue.js, React Native, and MySQL,
                            </strong>
                            the system enabled campaign teams to automate
                            outreach, analyze voter behavior using machine
                            learning, and maintain robust cybersecurity.
                            The platform personalized communication,
                            increased participation, and simplified compliance,
                            setting a new standard for election tech platforms.
                        </motion.p>


                        <motion.p
                            className="election-campaign-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A powerful digital campaign platform transforming
                            political strategy through real-time analytics
                            and personalized voter engagement.
                        </motion.p>

                    </motion.div>

                </div>
            </section>


            {/* =========================================
                TASK + STRATEGY
            ========================================= */}

            <section className="election-campaign-details">
                <div className="election-campaign-container election-campaign-details-grid">

                    {/* TASK */}

                    <motion.div
                        className="election-campaign-card"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.7
                        }}
                    >
                        <span className="election-campaign-card-label">
                            Task
                        </span>

                        <p>
                            <strong>
                                Implementing real-time data processing and
                                analytics to predict voter behavior and adjust
                                strategies dynamically.
                            </strong>
                        </p>
                    </motion.div>


                    {/* STRATEGY */}

                    <motion.div
                        className="election-campaign-card"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15
                        }}
                    >
                        <span className="election-campaign-card-label">
                            Strategy
                        </span>

                        <p>
                            UI/UX Design, ASP.NET Development, Vue.js Frontend,
                            React Native Mobile App, MySQL Database,
                            OpenVidu Integration
                        </p>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default ElectionCampaignManagement;