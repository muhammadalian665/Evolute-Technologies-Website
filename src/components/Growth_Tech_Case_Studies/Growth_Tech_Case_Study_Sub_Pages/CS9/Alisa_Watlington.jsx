import "./Alisa_Watlington.css";
import { motion } from "framer-motion";

function Alisa_Watlington() {
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

                        <span className="growth-case-label">CASE STUDY 09</span>

                        <h1 className="growth-case-title">
                            LinkedIn Outreach for
                            <span> Industrial Manufacturing</span>
                        </h1>

                        <div className="growth-case-line" />

                        <section className="growth-case-section">
                            <h2>Client / Industry</h2>
                            <p>
                                Alisa Watlington — B2B Marketing for Industrial Manufacturing
                            </p>
                            <p>
                                The campaign focused on manufacturers in the dust collection and industrial air filtration industry, with the goal of helping businesses generate qualified opportunities and build a more consistent sales pipeline.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Objective</h2>
                            <p>
                                The objective was to identify relevant manufacturing companies and decision-makers, initiate meaningful conversations, and create opportunities around lead generation and marketing support.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Challenges</h2>
                            <ul>
                                <li>Reaching the right decision-makers within manufacturing companies</li>
                                <li>Competing with established referral and dealer-based sales channels</li>
                                <li>Avoiding generic marketing pitches</li>
                                <li>Positioning outbound lead generation as a complement to existing marketing efforts</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Strategy &amp; Execution</h2>

                            <h3>Targeted Prospecting</h3>
                            <p>
                                We researched manufacturing companies and identified relevant decision-makers using LinkedIn, focusing on prospects that matched the target industry and business-fit criteria.
                            </p>

                            <h3>Personalized LinkedIn Outreach</h3>
                            <p>
                                The sequence started with a simple connection request and introduced Alisa's background and industry experience after the connection was accepted.
                            </p>

                            <h3>Value-Based Follow-Ups</h3>
                            <p>Follow-ups focused on:</p>
                            <ul>
                                <li>Predictable lead generation</li>
                                <li>Improving the sales pipeline</li>
                                <li>Complementing existing marketing efforts</li>
                            </ul>
                            <p>
                                The goal was not to replace existing channels that were already producing results.
                            </p>

                            <h3>Consistent Engagement</h3>
                            <p>
                                We maintained structured follow-ups across multiple touchpoints while keeping the messaging conversational and low-pressure.
                            </p>

                            <h3>Tools Used</h3>
                            <ul>
                                <li>LinkedIn</li>
                                <li>LinkedIn Sales Navigator</li>
                                <li>Prospect research</li>
                                <li>Google Sheets / tracking sheets</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Results &amp; Impact</h2>
                            <ul>
                                <li>Built a targeted prospect list within industrial manufacturing</li>
                                <li>Reached relevant business decision-makers</li>
                                <li>Established a structured LinkedIn outreach sequence</li>
                                <li>Generated initial conversations and engagement</li>
                                <li>Created a repeatable outreach process for ongoing lead generation</li>
                            </ul>
                        </section>

                        <section className="growth-case-section growth-case-takeaway">
                            <h2>Key Learning</h2>
                            <p>
                                Manufacturing prospects respond better when outreach acknowledges what is already working, including referrals, dealers, and internal marketing.
                            </p>
                            <p>
                                Positioning outbound lead generation as an additional growth channel rather than a replacement for existing strategies created a more natural conversation.
                            </p>
                        </section>

                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default Alisa_Watlington;

