import "./Tipsy_Scoop.css";
import { motion } from "framer-motion";

function TipsyScoop() {
    return (
        <main className="tipsy-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="tipsy-hero">
                <div className="tipsy-container">

                    <motion.div
                        className="tipsy-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="tipsy-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            Tipsy Scoop Liquor Infused Ice Cream
                        </motion.h1>


                        <motion.div
                            className="tipsy-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="tipsy-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            Tipsy Scoop is a distinctive dessert brand known
                            for combining premium ice cream with sophisticated
                            cocktail-inspired flavors. The digital experience
                            was designed to bring the brand's playful identity
                            to life while making it easier for customers to
                            discover unique flavors, explore products, and
                            engage with the Tipsy Scoop experience.
                        </motion.p>


                        <motion.p
                            className="tipsy-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            The platform creates an engaging journey around
                            the brand's liquor-infused ice cream collection,
                            combining compelling product presentation with
                            intuitive navigation and a visually rich
                            experience. From discovering signature flavors to
                            learning more about the brand, every interaction
                            was structured to capture the fun, premium, and
                            unconventional character of Tipsy Scoop.
                        </motion.p>


                        <motion.p
                            className="tipsy-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            A bold digital experience bringing Tipsy Scoop's
                            playful cocktail-inspired ice cream brand to life.
                        </motion.p>

                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default TipsyScoop;