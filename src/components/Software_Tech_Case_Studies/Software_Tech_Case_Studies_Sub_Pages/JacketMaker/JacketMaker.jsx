import "./Jacketmaker.css";
import { motion } from "framer-motion";

function JacketMaker() {
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
                            JacketMaker
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
                            JacketMaker is a premium jacket manufacturing
                            brand specializing in high-quality outerwear
                            designed with exceptional attention to detail,
                            craftsmanship, and style. The digital experience
                            was created to showcase the brand's premium
                            collections and communicate the quality behind
                            every jacket to customers looking for distinctive
                            and expertly crafted apparel.
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
                            The platform brings JacketMaker's products,
                            craftsmanship, and premium positioning together
                            through a refined and engaging online experience.
                            From exploring different jacket styles to
                            discovering the brand's manufacturing capabilities,
                            the experience is designed to make premium
                            outerwear easier to discover while reinforcing
                            trust, quality, and timeless style.
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
                            A premium digital experience showcasing
                            JacketMaker's exceptional craftsmanship and
                            high-quality jacket collections.
                        </motion.p>

                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default JacketMaker;