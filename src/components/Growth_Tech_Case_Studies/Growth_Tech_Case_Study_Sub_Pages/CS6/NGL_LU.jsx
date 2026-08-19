import "./NGL_LU.css";
import { motion } from "framer-motion";

function NGL_LU() {
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

                        <span className="growth-case-label">CASE STUDY 06</span>

                        <h1 className="growth-case-title">
                            LinkedIn Outreach for
                            <span> Leadership Development</span>
                        </h1>

                        <div className="growth-case-line" />

                        <section className="growth-case-section">
                            <h2>Client / Industry</h2>
                            <p>
                                NGL &amp; LU — Leadership Development / Professional Training
                            </p>
                            <p>
                                The campaign targeted HR leaders and decision-makers in growing organizations to generate conversations around leadership development, manager training, and employee growth.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Objective</h2>
                            <p>
                                We aimed to identify companies showing growth or hiring signals, reach relevant HR decision-makers, and generate qualified conversations around:
                            </p>
                            <ul>
                                <li>First-time manager development</li>
                                <li>Leadership development for experienced managers</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Challenges</h2>
                            <ul>
                                <li>Finding companies with genuine leadership-development needs</li>
                                <li>Identifying the right HR decision-makers</li>
                                <li>Using company-specific triggers instead of generic outreach</li>
                                <li>Maintaining personalized follow-ups</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Strategy &amp; Execution</h2>

                            <h3>Targeted Research</h3>
                            <p>
                                We researched companies based on headcount growth, hiring activity, expanding teams, and other relevant business signals before identifying HR Directors and Heads of HR.
                            </p>

                            <h3>Trigger-Based Targeting</h3>
                            <p>
                                We used company growth signals as a reason for outreach.
                            </p>
                            <p>
                                For example: Generali Global Assistance showed increased hiring across key functions, while Mawson Infrastructure Group demonstrated strong Operations and HR growth.
                            </p>

                            <h3>Personalized LinkedIn Outreach</h3>
                            <p>
                                We developed separate messaging for first-time and experienced managers.
                            </p>
                            <p>The messaging focused on areas such as:</p>
                            <ul>
                                <li>Delegation</li>
                                <li>Coaching</li>
                                <li>Team leadership</li>
                                <li>Strategic decision-making</li>
                                <li>Talent development</li>
                            </ul>

                            <h3>Follow-Up &amp; Tracking</h3>
                            <p>
                                We managed follow-ups and tracked connections, messages, responses, and outcomes through structured tracking sheets.
                            </p>

                            <h3>Tools Used</h3>
                            <ul>
                                <li>LinkedIn Sales Navigator</li>
                                <li>LinkedIn</li>
                                <li>Google Sheets</li>
                                <li>Company and prospect research</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Results &amp; Impact</h2>
                            <ul>
                                <li>Built targeted prospect lists using growth signals</li>
                                <li>Reached relevant HR decision-makers</li>
                                <li>Generated meaningful conversations</li>
                                <li>Secured a meeting with Mawson Infrastructure Group's Head of Human Resources</li>
                                <li>Created a repeatable LinkedIn outreach process</li>
                            </ul>
                        </section>

                        <section className="growth-case-section growth-case-takeaway">
                            <h2>Key Learning</h2>
                            <p>
                                Leadership-development outreach performs better when connected to a real business trigger.
                            </p>
                            <p>
                                Personalizing messaging around company growth and adapting the conversation for first-time versus experienced managers made the outreach more relevant and engaging.
                            </p>
                        </section>

                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default NGL_LU;

