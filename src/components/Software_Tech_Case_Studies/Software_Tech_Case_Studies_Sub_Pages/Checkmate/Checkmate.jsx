import "./Checkmate.css";
import { motion } from "framer-motion";

function Checkmate() {
    return (
        <main className="checkmate-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="checkmate-hero">
                <div className="checkmate-container">

                    <motion.div
                        className="checkmate-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="checkmate-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            Checkmate
                        </motion.h1>


                        <motion.div
                            className="checkmate-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="checkmate-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            Checkmate is a modern clothing brand focused on
                            delivering stylish, high-quality apparel for
                            customers who value contemporary fashion and
                            distinctive personal style. The digital experience
                            was designed to showcase the brand's collections
                            through a clean, engaging, and visually appealing
                            online presence.
                        </motion.p>


                        <motion.p
                            className="checkmate-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            The platform creates an intuitive shopping
                            experience where customers can explore clothing
                            collections, discover new styles, and connect
                            with the brand's identity. With a strong focus on
                            visual presentation and easy navigation, the
                            experience helps Checkmate communicate its fashion
                            offering while building a stronger digital
                            connection with its audience.
                        </motion.p>


                        <motion.p
                            className="checkmate-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A modern fashion experience designed to showcase
                            Checkmate's clothing collections and elevate its
                            digital brand presence.
                        </motion.p>

                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default Checkmate;