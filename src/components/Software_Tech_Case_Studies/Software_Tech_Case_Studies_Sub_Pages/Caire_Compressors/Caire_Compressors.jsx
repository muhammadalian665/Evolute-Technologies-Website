import "./Caire_Compressors.css";
import { motion } from "framer-motion";

function CaireCompressors() {
    return (
        <main className="caire-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="caire-hero">
                <div className="caire-container">

                    <motion.div
                        className="caire-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="caire-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            C-Aire Compressors Digital Presence Revamp
                        </motion.h1>


                        <motion.div
                            className="caire-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="caire-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            C-Aire Compressors embarked on a digital
                            transformation to strengthen its online presence
                            and better communicate its expertise in industrial
                            compressed air solutions. The revamp focused on
                            creating a professional digital experience that
                            clearly presents the company, its products, and
                            its capabilities while making essential information
                            easier for customers and business partners to
                            discover.
                        </motion.p>


                        <motion.p
                            className="caire-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            The redesigned experience combines clear
                            information architecture, engaging visual
                            presentation, and intuitive navigation to create
                            a stronger connection between C-Aire Compressors
                            and its audience. By modernizing the company's
                            digital identity and organizing its industrial
                            solutions more effectively, the platform helps
                            communicate reliability, expertise, and value
                            across every stage of the customer journey.
                        </motion.p>


                        <motion.p
                            className="caire-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A modern digital presence designed to showcase
                            C-Aire Compressors' industrial expertise and
                            strengthen its connection with customers online.
                        </motion.p>

                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default CaireCompressors;