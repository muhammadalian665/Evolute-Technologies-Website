import "./TapVax.css";
import { motion } from "framer-motion";

function TapVax() {
    return (
        <main className="tapvax-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="tapvax-hero">
                <div className="tapvax-container">

                    <motion.div
                        className="tapvax-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="tapvax-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            TapVax
                        </motion.h1>


                        <motion.div
                            className="tapvax-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="tapvax-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            To modernize outdated loyalty and membership
                            systems in Kuwait’s IoT landscape, we developed
                            a smart, NFC-enabled digital card platform.
                            This advanced solution replaces traditional
                            physical cards with fully customizable,
                            interactive digital alternatives. The
                            transformation enhanced user engagement and
                            significantly reduced operational inefficiencies
                            for businesses.
                        </motion.p>


                        <motion.p
                            className="tapvax-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            Leveraging technologies like
                            <strong>
                                {" "}Laravel, jQuery, HTML, and CSS,
                            </strong>
                            the system enables users to simply tap their
                            cards on NFC-supported devices and access
                            personalized content instantly. With an emphasis
                            on personalization and seamless integration,
                            the platform offers a scalable solution for
                            businesses looking to digitize customer
                            experiences in the smart device era.
                        </motion.p>


                        <motion.p
                            className="tapvax-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            An NFC-enabled digital card platform redefining
                            how businesses interact with customers in the
                            IoT space.
                        </motion.p>

                    </motion.div>

                </div>
            </section>


            {/* =========================================
                TASK + STRATEGY
            ========================================= */}

            <section className="tapvax-details">
                <div className="tapvax-container tapvax-details-grid">

                    {/* TASK */}

                    <motion.div
                        className="tapvax-card"
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
                        <span className="tapvax-card-label">
                            Task
                        </span>

                        <p>
                            <strong>
                                Designing a fully customizable digital
                                homepage that adapts to individual user
                                preferences.
                            </strong>
                        </p>
                    </motion.div>


                    {/* STRATEGY */}

                    <motion.div
                        className="tapvax-card"
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
                        <span className="tapvax-card-label">
                            Strategy
                        </span>

                        <p>
                            UI/UX Design, Laravel Development, HTML Integration,
                            jQuery Scripting, NFC Integration,
                            Cross-functional Collaboration
                        </p>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default TapVax;