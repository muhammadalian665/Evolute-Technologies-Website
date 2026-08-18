import "./Seeker.css";
import { motion } from "framer-motion";

function Seeker() {
    return (
        <main className="seeker-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="seeker-hero">
                <div className="seeker-container">

                    <motion.div
                        className="seeker-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="seeker-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            Seeker
                        </motion.h1>


                        <motion.div
                            className="seeker-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="seeker-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            Seeker is a personalized wellness mobile app developed
                            for the healthcare sector in Belgium. Designed to deliver
                            curated expert articles and concise research insights,
                            it empowers users to take charge of their
                            <strong> fitness, diet, mental wellness,</strong> and
                            <strong> overall lifestyle.</strong> Built using Laravel
                            and React-Native, the app features a robust
                            recommendation engine powered by Gorse and a scalable
                            backend infrastructure hosted on AWS.
                        </motion.p>


                        <motion.p
                            className="seeker-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            This solution has effectively enhanced
                            <strong> user engagement,</strong> improved
                            <strong> content relevance,</strong> and contributed
                            significantly to healthier behavioral changes across
                            a growing user base.
                        </motion.p>


                        <motion.p
                            className="seeker-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5
                            }}
                        >
                            The Seeker app bridges the gap between users and reliable
                            health information, offering a seamless experience backed
                            by a <strong>cross-platform mobile interface</strong> and
                            <strong> data-driven personalized recommendations.</strong>
                            Its success demonstrates how technology can elevate
                            healthcare experiences by catering to individual wellness
                            journeys through intelligent content delivery.
                        </motion.p>


                        <motion.p
                            className="seeker-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A personalized healthcare app delivering expert wellness
                            content and intelligent recommendations to empower
                            healthier living.
                        </motion.p>

                    </motion.div>

                </div>
            </section>


            {/* =========================================
                TASK + STRATEGY
            ========================================= */}

            <section className="seeker-details">
                <div className="seeker-container seeker-details-grid">

                    {/* TASK */}

                    <motion.div
                        className="seeker-card"
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
                        <span className="seeker-card-label">
                            Task
                        </span>

                        <p>
                            <strong>
                                Ensuring user trust in content credibility while
                                maintaining content variety and depth.
                            </strong>
                        </p>
                    </motion.div>


                    {/* STRATEGY */}

                    <motion.div
                        className="seeker-card"
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
                        <span className="seeker-card-label">
                            Strategy
                        </span>

                        <p>
                            UI/UX Design, Laravel Development, React-Native,
                            AWS Deployment, MySQL Integration, Recommendation System
                        </p>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default Seeker;