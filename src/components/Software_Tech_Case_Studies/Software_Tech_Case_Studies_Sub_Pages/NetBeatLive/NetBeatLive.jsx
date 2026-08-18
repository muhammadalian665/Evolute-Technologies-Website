import "./NeatBeatLive.css";
import { motion } from "framer-motion";

function NetBeatLive() {
    return (
        <main className="netbeat-case-study">

            {/* =========================================
                CASE STUDY INTRO
            ========================================= */}

            <section className="netbeat-hero">
                <div className="netbeat-container">

                    <motion.div
                        className="netbeat-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >

                        {/* HEADING */}

                        <motion.h1
                            className="netbeat-heading"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1
                            }}
                        >
                            NetBeatLive
                        </motion.h1>


                        <motion.div
                            className="netbeat-heading-line"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3
                            }}
                        />


                        <motion.p
                            className="netbeat-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35
                            }}
                        >
                            In collaboration with Proximus and Netbeat.live,
                            we delivered Belgium’s first-ever
                            <strong> 8K Virtual Reality concert,</strong>
                            transforming the future of
                            <strong> on-demand entertainment.</strong>
                            The platform allowed users to stream immersive
                            concerts through Android, iOS, and Oculus devices,
                            supported by a low-latency backend and scalable
                            cloud infrastructure.
                        </motion.p>


                        <motion.p
                            className="netbeat-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45
                            }}
                        >
                            Designed to overcome pandemic restrictions, this
                            real-time VR experience combined stunning
                            <strong> 8K visuals,</strong>
                            seamless cross-device functionality, and
                            interactive features that redefined
                            <strong> live event engagement.</strong>
                        </motion.p>


                        <motion.p
                            className="netbeat-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5
                            }}
                        >
                            Powered by technologies like
                            <strong> React Native, Node.js, WebRTC,</strong>
                            and <strong>AWS,</strong> the system ensured
                            ultra-smooth streaming, robust performance on
                            <strong> 5G/Fiber,</strong> and high compatibility
                            across mobile and VR platforms, setting a new
                            benchmark in virtual concerts.
                        </motion.p>


                        <motion.p
                            className="netbeat-summary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55
                            }}
                        >
                            Revolutionary VR concert experience with 8K streaming,
                            cross-device support, and real-time audience engagement.
                        </motion.p>

                    </motion.div>

                </div>
            </section>


            {/* =========================================
                TASK + STRATEGY + CLIENT
            ========================================= */}

            <section className="netbeat-details">
                <div className="netbeat-container netbeat-details-grid">

                    {/* TASK */}

                    <motion.div
                        className="netbeat-card"
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
                        <span className="netbeat-card-label">
                            Task
                        </span>

                        <p>
                            <strong>
                                Building a real-time 8K streaming engine
                                compatible with Oculus, mobile devices,
                                and 5G/Fiber networks.
                            </strong>
                        </p>
                    </motion.div>


                    {/* STRATEGY */}

                    <motion.div
                        className="netbeat-card"
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
                        <span className="netbeat-card-label">
                            Strategy
                        </span>

                        <p>
                            UI/UX Design, Node.js Development, React Native,
                            Java, Swift, C++, MySQL, AWS, WebRTC, Socket.io
                        </p>
                    </motion.div>


                    {/* CLIENT */}

                    <motion.div
                        className="netbeat-card netbeat-client-card"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3
                        }}
                    >
                        <span className="netbeat-card-label">
                            Client
                        </span>

                        <p>
                            Proximus & Netbeat.live
                        </p>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}

export default NetBeatLive;