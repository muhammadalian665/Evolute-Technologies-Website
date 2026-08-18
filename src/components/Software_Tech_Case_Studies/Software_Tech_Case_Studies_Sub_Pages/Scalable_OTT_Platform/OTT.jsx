import "./OTT.css";
import { motion } from "framer-motion";

function ScalableOTTPlatform() {
    return (
        <main className="ott-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="ott-hero">
                <div className="ott-container">

                    <motion.div
                        className="ott-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="ott-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            Building a Cost-Effective, Scalable OTT Platform for Telfaz
                        </motion.h1>


                        <motion.div
                            className="ott-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="ott-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            Telfaz.net, a digital entertainment platform,
                            needed a high-performance
                            <strong>
                                {" "}OTT (Over-the-Top) streaming solution
                            </strong>
                            {" "}capable of supporting millions of users
                            across mobile, web, and smart TV platforms.
                            With the critical goal of launching before
                            <strong> Ramadan 2025,</strong>
                            the platform demanded cost-effective content
                            delivery, multi-platform accessibility, and a
                            resilient backend for peak traffic.
                        </motion.p>


                        <motion.p
                            className="ott-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            We developed a robust, scalable
                            <strong> streaming platform</strong>
                            using a custom CDN strategy, Java Spring Boot,
                            Docker, and a multi-cloud environment, achieving
                            <strong> 90%+ cache efficiency</strong>
                            and reducing CDN costs by over
                            <strong> 75%.</strong>
                            Telfaz.net now delivers over
                            <strong> 45 TB/month</strong>
                            while maintaining a seamless viewing experience.
                        </motion.p>


                        <motion.p
                            className="ott-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            Scalable OTT platform delivering high-speed video
                            streaming across mobile, web, and smart TVs with
                            optimized infrastructure.
                        </motion.p>

                    </motion.div>

                </div>
            </section>


            {/* =========================================
                TASK + STRATEGY
            ========================================= */}

            <section className="ott-details">
                <div className="ott-container ott-details-grid">

                    {/* TASK */}

                    <motion.div
                        className="ott-card"
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
                        <span className="ott-card-label">
                            Task
                        </span>

                        <p>
                            <strong>
                                Replacing traditional CDNs with a custom
                                cost-optimized hybrid CDN + object storage
                                setup.
                            </strong>
                        </p>
                    </motion.div>


                    {/* STRATEGY */}

                    <motion.div
                        className="ott-card"
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
                        <span className="ott-card-label">
                            Strategy
                        </span>

                        <p>
                            UI/UX Design, Java Spring Boot Development,
                            Docker, Redis, Kotlin, Swift, Vue.JS, Custom CDN,
                            Performance Monitoring
                        </p>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default ScalableOTTPlatform;