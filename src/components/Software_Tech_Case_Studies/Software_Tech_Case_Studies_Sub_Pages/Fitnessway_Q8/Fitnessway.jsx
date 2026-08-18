import "./Fitnessway.css";
import { motion } from "framer-motion";

function FitnesswayQ8() {
    return (
        <main className="fitnessway-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="fitnessway-hero">
                <div className="fitnessway-container">

                    <motion.div
                        className="fitnessway-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="fitnessway-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            FitnessWayQ8 Diet App
                        </motion.h1>


                        <motion.div
                            className="fitnessway-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="fitnessway-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            In response to Kuwait’s rising demand for
                            health-focused digital solutions, we developed
                            the <strong>FitnessWayQ8 Diet App,</strong> a
                            mobile platform that integrates personalized meal
                            planning, dietary goal tracking, and food delivery
                            services. The app empowers users to define their
                            fitness objectives, track progress, and receive
                            expert-crafted meal plans tailored to their unique
                            health profiles.
                        </motion.p>


                        <motion.p
                            className="fitnessway-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            Built using <strong>React Native, Laravel,
                            and MySQL,</strong> the app offers seamless
                            cross-platform performance, secure backend
                            operations, and scalable data management. With
                            features like allergy tracking, ingredient swaps,
                            subscription-based plans, and real-time progress
                            tracking, the solution has positioned FitnessWayQ8
                            as a leader in Kuwait’s health and wellness space.
                        </motion.p>


                        <motion.p
                            className="fitnessway-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A personalized meal planning and healthy food
                            delivery app tailored to Kuwait’s growing wellness
                            market.
                        </motion.p>

                    </motion.div>

                </div>
            </section>


            {/* =========================================
                TASK + STRATEGY
            ========================================= */}

            <section className="fitnessway-details">
                <div className="fitnessway-container fitnessway-details-grid">

                    {/* TASK */}

                    <motion.div
                        className="fitnessway-card"
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
                        <span className="fitnessway-card-label">
                            Task
                        </span>

                        <p>
                            <strong>
                                Implementing dynamic meal customization and
                                ingredient-swapping features aligned with
                                dietary restrictions.
                            </strong>
                        </p>
                    </motion.div>


                    {/* STRATEGY */}

                    <motion.div
                        className="fitnessway-card"
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
                        <span className="fitnessway-card-label">
                            Strategy
                        </span>

                        <p>
                            UI/UX Design, Laravel Development, React Native,
                            API Integration, MySQL, Cross-platform Mobile App
                        </p>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default FitnesswayQ8;