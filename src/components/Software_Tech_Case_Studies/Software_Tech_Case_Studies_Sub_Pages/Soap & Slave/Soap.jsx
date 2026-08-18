import "./Soap.css";
import { motion } from "framer-motion";

function Soap() {
    return (
        <main className="soap-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="soap-hero">
                <div className="soap-container">

                    <motion.div
                        className="soap-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="soap-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            Soap & Slave
                        </motion.h1>


                        <motion.div
                            className="soap-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="soap-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            Soap & Slave is a modern lifestyle brand focused
                            on creating distinctive personal care experiences
                            through thoughtfully presented products and a
                            strong digital identity. The platform was designed
                            to give customers an engaging and intuitive way to
                            discover the brand, explore its product collection,
                            and connect with its unique approach to everyday
                            self-care.
                        </motion.p>


                        <motion.p
                            className="soap-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            With a clean and engaging digital experience, the
                            platform brings together product discovery,
                            compelling brand presentation, and a seamless
                            browsing journey. Every element was structured to
                            strengthen the brand's online presence while making
                            it easier for customers to explore products and
                            interact with the Soap & Slave experience.
                        </motion.p>


                        <motion.p
                            className="soap-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A distinctive digital experience bringing Soap &
                            Slave's personal care brand and product journey to
                            life online.
                        </motion.p>

                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default Soap;