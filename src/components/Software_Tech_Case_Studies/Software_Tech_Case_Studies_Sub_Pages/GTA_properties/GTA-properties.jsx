import "./GTA-properties.css";
import { motion } from "framer-motion";

function GTAProperties() {
    return (
        <main className="gta-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="gta-hero">
                <div className="gta-container">

                    <motion.div
                        className="gta-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="gta-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            GTA Properties
                        </motion.h1>


                        <motion.div
                            className="gta-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="gta-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            GTAProperties, a prominent real estate firm in the UAE,
                            sought a powerful multi-site <strong>real estate CMS platform</strong>
                            to streamline the launch and management of multiple property
                            websites. The system had to ensure <strong>data synchronization</strong>,
                            <strong> customizable themes</strong>, and <strong>SEO optimization</strong>
                            while supporting scalable operations.
                        </motion.p>


                        <motion.p
                            className="gta-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            We developed a Laravel-based CMS tailored to their needs, featuring
                            <strong> multi-site management</strong>,
                            <strong> automated updates</strong>, and
                            <strong> search engine optimized templates</strong>.
                            With real-time data syncing and customizable layouts for different
                            market segments, the platform significantly improved
                            <strong> online visibility</strong>,
                            <strong> user engagement</strong>, and
                            <strong> operational efficiency</strong> in property marketing.
                        </motion.p>


                        <motion.p
                            className="gta-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            Multi-site CMS platform for real estate built to optimize SEO,
                            streamline management, and scale effortlessly across property markets.
                        </motion.p>

                    </motion.div>

                </div>
            </section>


            {/* =========================================
                TASK + STRATEGY
            ========================================= */}

            <section className="gta-details">
                <div className="gta-container gta-details-grid">

                    {/* TASK */}

                    <motion.div
                        className="gta-card"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.7
                        }}
                    >
                        <span className="gta-card-label">
                            Task
                        </span>

                        <p>
                            <strong>
                                Developing a unified CMS to manage multiple property websites with real-time data synchronization.
                            </strong>
                        </p>
                    </motion.div>


                    {/* STRATEGY */}

                    <motion.div
                        className="gta-card"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15
                        }}
                    >
                        <span className="gta-card-label">
                            Strategy
                        </span>

                        <p>
                            UI/UX Design, Laravel Development, MySQL, jQuery,
                            SEO Optimization, Data Synchronization, MVP Approach
                        </p>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default GTAProperties;