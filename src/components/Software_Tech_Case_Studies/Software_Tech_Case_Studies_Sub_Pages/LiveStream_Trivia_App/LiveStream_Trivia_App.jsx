import "./LiveStream_Trivia_App.css";
import { motion } from "framer-motion";

function LiveStreamTriviaApp() {
    return (
        <main className="livestream-trivia-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="livestream-trivia-hero">
                <div className="livestream-trivia-container">

                    <motion.div
                        className="livestream-trivia-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="livestream-trivia-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            Live-Stream Trivia App
                        </motion.h1>


                        <motion.div
                            className="livestream-trivia-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="livestream-trivia-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            Our client from the Media & Entertainment industry
                            envisioned a real-time, interactive trivia platform
                            to deliver high-quality live-stream experiences
                            with mass concurrency. The goal was to build a
                            scalable trivia app supporting up to
                            <strong> 500,000 concurrent users,</strong>
                            combining smooth video playback, real-time
                            interaction, and seamless performance across
                            mobile platforms.
                        </motion.p>


                        <motion.p
                            className="livestream-trivia-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            We developed a robust live-streaming solution
                            using <strong>Laravel and MySQL,</strong>
                            integrated with <strong>Socket.IO</strong> for
                            instant communication and adaptive bitrate
                            streaming for optimal viewing. The platform
                            drastically cut streaming costs by
                            <strong> 400%</strong> compared to Red5/Wowza
                            and significantly boosted user engagement through
                            synchronous playback and detailed behavioral
                            analytics.
                        </motion.p>


                        <motion.p
                            className="livestream-trivia-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A high-performance trivia app delivering real-time
                            streaming, instant interaction, and smart
                            engagement at scale.
                        </motion.p>

                    </motion.div>

                </div>
            </section>


            {/* =========================================
                TASK + STRATEGY
            ========================================= */}

            <section className="livestream-trivia-details">
                <div className="livestream-trivia-container livestream-trivia-details-grid">

                    {/* TASK */}

                    <motion.div
                        className="livestream-trivia-card"
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
                        <span className="livestream-trivia-card-label">
                            Task
                        </span>

                        <p>
                            <strong>
                                Enabling seamless real-time communication
                                and video synchronization across 500,000
                                users.
                            </strong>
                        </p>
                    </motion.div>


                    {/* STRATEGY */}

                    <motion.div
                        className="livestream-trivia-card"
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
                        <span className="livestream-trivia-card-label">
                            Strategy
                        </span>

                        <p>
                            UI/UX Design, Laravel Development, MySQL
                            Integration, Real-Time Communication, Media
                            Streaming, Mobile Development
                        </p>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default LiveStreamTriviaApp;