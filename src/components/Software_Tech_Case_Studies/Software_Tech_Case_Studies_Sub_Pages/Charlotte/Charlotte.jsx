import "./Charlotte.css";
import { motion } from "framer-motion";

function Charlotte() {
    return (
        <main className="charlotte-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="charlotte-hero">
                <div className="charlotte-container">

                    <motion.div
                        className="charlotte-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="charlotte-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            By Charlotte
                        </motion.h1>


                        <motion.div
                            className="charlotte-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="charlotte-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            By Charlotte is a distinctive jewellery
                            brand built around timeless design, refined
                            craftsmanship, and elegant personal expression.
                            The digital experience was created to showcase
                            the brand's collections through a sophisticated
                            and visually engaging platform that makes it easy
                            for customers to discover pieces that complement
                            their individual style.
                        </motion.p>


                        <motion.p
                            className="charlotte-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            The platform combines premium product presentation
                            with a seamless browsing experience, allowing
                            visitors to explore jewellery collections, discover
                            detailed product information, and connect with the
                            brand effortlessly. The overall experience
                            reinforces Charlotte Jewellery's elegant identity
                            while creating a stronger digital connection with
                            its customers.
                        </motion.p>


                        <motion.p
                            className="charlotte-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A sophisticated digital jewellery experience
                            designed to showcase timeless collections and
                            elevate the Charlotte brand online.
                        </motion.p>

                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default Charlotte;