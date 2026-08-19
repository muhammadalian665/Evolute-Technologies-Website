import "./Be_Top_Local.css";
import { motion } from "framer-motion";

function Be_Top_Local() {
    return (
        <main className="growth-case-study">
            <section className="growth-case-hero">
                <div className="growth-case-container">

                    <motion.div
                        className="growth-case-content"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="growth-case-label">CASE STUDY 07</span>

                        <h1 className="growth-case-title">
                            Cold Email Outreach for
                            <span> Be Top Local</span>
                        </h1>

                        <div className="growth-case-line" />

                        <section className="growth-case-section">
                            <h2>Client / Industry</h2>
                            <p>
                                Be Top Local — Digital Marketing for Functional &amp; Integrated Medical Clinics
                            </p>
                            <p>
                                The company helps clinics generate qualified patients through Facebook and Instagram campaigns, with a focus on connecting marketing activity to booked appointments and patient revenue.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Objective</h2>
                            <p>
                                The goal was to create a cold email campaign targeting clinic owners and highlighting Be Top Local's approach while generating conversations with practices seeking more predictable patient acquisition.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Challenges</h2>
                            <ul>
                                <li>Standing out in a competitive healthcare marketing market</li>
                                <li>Avoiding generic "we run ads" messaging</li>
                                <li>Demonstrating the difference between leads and actual patient revenue</li>
                                <li>Keeping follow-ups useful without becoming repetitive</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Strategy &amp; Execution</h2>

                            <h3>Targeted Messaging</h3>
                            <p>We built messaging around problems clinic owners actually care about:</p>
                            <ul>
                                <li>Qualified patients</li>
                                <li>Booked appointments</li>
                                <li>Marketing ROI</li>
                                <li>Patient acquisition</li>
                            </ul>

                            <h3>Three-Step Email Sequence</h3>
                            <p>The sequence included:</p>
                            <ol>
                                <li>An initial value-focused email</li>
                                <li>A follow-up explaining the importance of tracking beyond leads</li>
                                <li>A final low-pressure follow-up</li>
                            </ol>

                            <h3>Personalization</h3>
                            <p>
                                Instead of using a generic agency pitch, we tailored the messaging specifically for functional and integrated medical clinics and focused on measurable business outcomes.
                            </p>

                            <h3>Tools Used</h3>
                            <ul>
                                <li>Cold email outreach</li>
                                <li>Email sequencing</li>
                                <li>Prospect research</li>
                                <li>Google Sheets / tracking</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Results &amp; Impact</h2>
                            <ul>
                                <li>Built a structured three-step outreach sequence</li>
                                <li>Created messaging specific to clinic decision-makers</li>
                                <li>Positioned Be Top Local around measurable patient growth</li>
                                <li>Established a repeatable cold email framework</li>
                            </ul>
                        </section>

                        <section className="growth-case-section growth-case-takeaway">
                            <h2>Key Learning</h2>
                            <p>
                                Clinic owners care more about qualified patients and revenue than clicks or leads alone.
                            </p>
                            <p>
                                Focusing the messaging on these outcomes created a stronger reason for prospects to engage in a conversation.
                            </p>
                        </section>

                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default Be_Top_Local;

