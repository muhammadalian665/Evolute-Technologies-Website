import "./Codergize.css";
import { motion } from "framer-motion";

function Codergize() {
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

                        <span className="growth-case-label">CASE STUDY 05</span>

                        <h1 className="growth-case-title">
                            LinkedIn &amp; Email Outreach
                            <span> for Codergize</span>
                        </h1>

                        <div className="growth-case-line" />

                        <section className="growth-case-section">
                            <h2>Client / Industry</h2>
                            <p>
                                Codergize — Software Development &amp; Technology Services
                            </p>
                            <p>
                                Codergize provides custom software development, web and mobile applications, AI solutions, cloud services, digital transformation, and UI/UX design for startups and growing businesses.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Objective</h2>
                            <p>
                                The objective was to help Codergize build a targeted B2B pipeline by identifying relevant companies and decision-makers and engaging them through personalized LinkedIn and email outreach.
                            </p>
                            <p>
                                The campaign focused on founders, business owners, and senior decision-makers who could potentially need custom software, application development, AI solutions, cloud services, or additional engineering support.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Challenges</h2>
                            <p>
                                The main challenge was positioning a broad range of technical services in a way that remained relevant to each prospect rather than sending generic software development pitches.
                            </p>
                            <p>Additional challenges included:</p>
                            <ul>
                                <li>Identifying the right companies and decision-makers</li>
                                <li>Finding accurate prospect information</li>
                                <li>Personalizing outreach for different businesses</li>
                                <li>Creating messaging that encouraged conversations</li>
                                <li>Maintaining consistent LinkedIn and email follow-ups</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Strategy &amp; Execution</h2>

                            <h3>Targeted Prospect Research</h3>
                            <p>
                                We used LinkedIn Sales Navigator and Apollo to research companies, identify decision-makers, and build targeted prospect lists based on business fit and potential technology requirements.
                            </p>

                            <h3>LinkedIn Outreach</h3>
                            <p>
                                We created a structured LinkedIn sequence beginning with personalized connection requests, followed by introductions and value-based follow-ups.
                            </p>
                            <p>
                                The messaging focused on understanding the prospect's technology priorities rather than immediately pushing Codergize's services.
                            </p>

                            <h3>Email Outreach</h3>
                            <p>
                                We developed complementary cold email messaging highlighting relevant capabilities across:
                            </p>
                            <ul>
                                <li>Custom software</li>
                                <li>Web and mobile applications</li>
                                <li>AI</li>
                                <li>Cloud services</li>
                                <li>Digital transformation</li>
                            </ul>
                            <p>
                                Different messaging angles were used to keep outreach relevant and conversational.
                            </p>

                            <h3>Follow-Up &amp; Tracking</h3>
                            <p>
                                We managed follow-ups across both channels and maintained organized tracking of prospects, outreach activity, responses, and engagement.
                            </p>

                            <h3>Tools Used</h3>
                            <ul>
                                <li>LinkedIn Sales Navigator</li>
                                <li>Apollo</li>
                                <li>LinkedIn</li>
                                <li>Email outreach</li>
                                <li>Google Sheets / tracking sheets</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Results &amp; Impact</h2>
                            <ul>
                                <li>Built targeted prospect lists based on company and decision-maker criteria</li>
                                <li>Established a structured LinkedIn and email outreach workflow</li>
                                <li>Reached founders, business owners, and relevant decision-makers</li>
                                <li>Generated initial prospect engagement and business conversations</li>
                                <li>Created a repeatable multi-channel outreach process</li>
                                <li>Built a foundation for ongoing B2B lead generation and appointment setting</li>
                            </ul>
                        </section>

                        <section className="growth-case-section growth-case-takeaway">
                            <h2>Key Learning</h2>
                            <p>
                                Selling technical services requires relevance before pitching.
                            </p>
                            <p>
                                Rather than leading with a generic list of technical capabilities, we focused on the prospect's business context and positioned Codergize around potential technology needs.
                            </p>
                            <p>
                                Combining LinkedIn and email created multiple touchpoints, while Sales Navigator and Apollo improved prospect research and targeting.
                            </p>
                        </section>

                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default Codergize;

