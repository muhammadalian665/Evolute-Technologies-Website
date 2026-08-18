import "./Fluvana.css";
import { motion } from "framer-motion";

function Fluvana() {
    return (
        <main className="fluvana-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="fluvana-hero">
                <div className="fluvana-container">

                    <motion.div
                        className="fluvana-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="fluvana-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            Fluvanna Dive Center
                        </motion.h1>


                        <motion.div
                            className="fluvana-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="fluvana-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            Fluvanna Dive Center is a professional scuba diving
                            center serving diving enthusiasts across
                            Charlottesville, Albemarle, and Fluvanna. The
                            platform was designed to provide visitors with an
                            engaging digital experience where they can explore
                            diving services, discover available training
                            opportunities, and connect with the center for
                            their next underwater adventure.
                        </motion.p>


                        <motion.p
                            className="fluvana-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            The website brings together essential information
                            about scuba diving, certifications, training, and
                            diving experiences in a clear and accessible
                            format. With an emphasis on user-friendly
                            navigation and engaging content, the digital
                            experience helps both beginners and experienced
                            divers discover the right opportunities and take
                            the next step toward exploring the underwater
                            world.
                        </motion.p>


                        <motion.p
                            className="fluvana-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A professional digital experience connecting
                            diving enthusiasts with scuba training, services,
                            and underwater adventures across Virginia.
                        </motion.p>

                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default Fluvana;