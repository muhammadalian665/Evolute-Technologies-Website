import "./Bavari.css";
import { motion } from "framer-motion";

function Bavari() {
    return (
        <main className="bavari-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="bavari-hero">
                <div className="bavari-container">

                    <motion.div
                        className="bavari-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="bavari-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            Bavari
                        </motion.h1>


                        <motion.div
                            className="bavari-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="bavari-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            Bavari is a premium perfume brand dedicated to
                            creating sophisticated fragrances that reflect
                            individuality, elegance, and modern luxury. The
                            digital experience was designed to showcase the
                            brand's fragrance collection through a refined and
                            visually immersive platform that captures the
                            essence of premium perfumery.
                        </motion.p>


                        <motion.p
                            className="bavari-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            The platform provides an engaging journey through
                            Bavari's fragrances, allowing customers to explore
                            distinctive scents and discover products that match
                            their personal style. With elegant presentation,
                            intuitive navigation, and a strong focus on brand
                            storytelling, the digital experience strengthens
                            Bavari's premium identity and creates a memorable
                            connection with fragrance enthusiasts.
                        </motion.p>


                        <motion.p
                            className="bavari-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A refined digital fragrance experience crafted to
                            showcase Bavari's premium perfumes and distinctive
                            brand identity.
                        </motion.p>

                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default Bavari;