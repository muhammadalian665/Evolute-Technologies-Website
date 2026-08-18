import "./Elite_Class.css";
import { motion } from "framer-motion";

function EliteClass() {
    return (
        <main className="elite-class-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="elite-class-hero">
                <div className="elite-class-container">

                    <motion.div
                        className="elite-class-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="elite-class-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            Elite-Class LMS
                        </motion.h1>


                        <motion.div
                            className="elite-class-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="elite-class-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            Elite-Class LMS is a cutting-edge eLearning platform
                            developed for a leading educational institution in
                            Kuwait to meet the surging demand for accessible
                            digital education. Designed with a
                            <strong> user-first approach,</strong> this Learning
                            Management System offers seamless functionality across
                            <strong> web, Android, and iOS,</strong> empowering
                            educators and learners with an all-in-one solution.
                        </motion.p>


                        <motion.p
                            className="elite-class-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            Built on a robust technology stack including
                            <strong> Laravel, React Native, and Next.js,</strong>
                            it integrates features like
                            <strong> live classes, DRM-protected content,</strong>
                            installment-based payment models, and a powerful
                            instructor dashboard to enhance
                            <strong> learning engagement and accessibility.</strong>
                        </motion.p>


                        <motion.p
                            className="elite-class-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5
                            }}
                        >
                            This dynamic platform facilitates comprehensive
                            <strong> course management, real-time video conferencing,</strong>
                            in-video quizzes, and in-person session bookings,
                            making it a scalable and secure digital education
                            system tailored for the
                            <strong> EdTech industry.</strong>
                        </motion.p>


                        <motion.p
                            className="elite-class-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            Scalable and interactive LMS platform built for seamless
                            multi-platform education experiences in the EdTech space.
                        </motion.p>

                    </motion.div>

                </div>
            </section>


            {/* =========================================
                TASK + STRATEGY
            ========================================= */}

            <section className="elite-class-details">
                <div className="elite-class-container elite-class-details-grid">

                    {/* TASK */}

                    <motion.div
                        className="elite-class-card"
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
                        <span className="elite-class-card-label">
                            Task
                        </span>

                        <p>
                            <strong>
                                Implementing secure Digital Rights Management
                                (DRM) to protect educational content across platforms.
                            </strong>
                        </p>
                    </motion.div>


                    {/* STRATEGY */}

                    <motion.div
                        className="elite-class-card"
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
                        <span className="elite-class-card-label">
                            Strategy
                        </span>

                        <p>
                            UI/UX Design, Laravel Development, React Native,
                            Next.js, MySQL, BigBlueButton, BunnyCDN, MVP Approach
                        </p>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default EliteClass;