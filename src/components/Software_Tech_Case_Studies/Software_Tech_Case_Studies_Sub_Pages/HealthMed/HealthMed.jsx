import "./HealthMed.css";
import { motion } from "framer-motion";

function HealthMed() {
    return (
        <main className="healthmed-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="healthmed-hero">
                <div className="healthmed-container">

                    <motion.div
                        className="healthmed-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="healthmed-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            HealthMed Affairs
                        </motion.h1>


                        <motion.div
                            className="healthmed-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="healthmed-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            HealthMed Affairs is a healthcare-focused
                            medical billing and revenue cycle management
                            company dedicated to helping healthcare providers
                            simplify complex financial operations. The digital
                            experience was designed to clearly communicate
                            its billing, coding, and RCM expertise while
                            building trust with medical practices and
                            healthcare organizations.
                        </motion.p>


                        <motion.p
                            className="healthmed-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            The platform presents HealthMed Affairs' services
                            through a professional and intuitive experience,
                            helping providers understand how efficient
                            billing workflows, accurate claims management,
                            and structured revenue cycle processes can improve
                            financial performance. The digital presence
                            strengthens the company's credibility while making
                            it easier for prospective clients to explore
                            solutions and connect with the team.
                        </motion.p>


                        <motion.p
                            className="healthmed-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A professional healthcare digital experience
                            focused on medical billing, revenue cycle
                            management, and financial efficiency.
                        </motion.p>

                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default HealthMed;