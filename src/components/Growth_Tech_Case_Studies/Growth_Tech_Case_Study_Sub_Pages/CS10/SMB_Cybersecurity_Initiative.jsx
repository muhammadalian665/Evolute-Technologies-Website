import "./SMB_Cybersecurity_Initiative.css";
import { motion } from "framer-motion";

function SMB_Cybersecurity_Initiative() {
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

                        <span className="growth-case-label">CASE STUDY 10</span>

                        <h1 className="growth-case-title">
                            LinkedIn &amp; Email Outreach
                            <span> for SMB Cybersecurity Initiative</span>
                        </h1>

                        <div className="growth-case-line" />

                        <section className="growth-case-section">
                            <h2>Client / Industry</h2>
                            <p>
                                Cybersecurity &amp; IT Resilience Initiative
                            </p>
                            <p>
                                The initiative focused on helping U.S. SMBs strengthen their cybersecurity fundamentals, including MFA, monitoring, backups, and recovery readiness.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Objective</h2>
                            <p>
                                The goal was to identify relevant U.S. SMB decision-makers, introduce the cybersecurity initiative, generate interest, and engage qualified prospects around a non-binding Letter of Interest (LOI).
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Challenges</h2>
                            <ul>
                                <li>Reaching SMB owners and relevant decision-makers</li>
                                <li>Communicating a technical cybersecurity initiative in simple language</li>
                                <li>Building trust around an unfamiliar program</li>
                                <li>Explaining the LOI without making it feel like a sales commitment</li>
                                <li>Maintaining engagement through follow-ups</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Strategy &amp; Execution</h2>

                            <h3>Targeted Prospecting</h3>
                            <p>
                                We focused on U.S. SMB decision-makers and used targeted research to identify prospects who could be relevant to the initiative.
                            </p>

                            <h3>LinkedIn Outreach</h3>
                            <p>
                                We created a structured sequence beginning with a personalized connection request, followed by an explanation of the initiative and its focus on:
                            </p>
                            <ul>
                                <li>MFA</li>
                                <li>Monitoring</li>
                                <li>Backup</li>
                                <li>Recovery readiness</li>
                            </ul>

                            <h3>Email Outreach</h3>
                            <p>
                                Where appropriate, we used concise email messaging to introduce the initiative and explain the non-binding LOI in straightforward language.
                            </p>

                            <h3>Follow-Up &amp; Qualification</h3>
                            <p>
                                We followed up with prospects who had not responded and adjusted the conversation according to their level of interest.
                            </p>
                            <p>
                                When prospects showed interest, we provided the initiative overview and LOI draft and assisted with questions.
                            </p>

                            <h3>Tools Used</h3>
                            <ul>
                                <li>LinkedIn</li>
                                <li>LinkedIn Sales Navigator</li>
                                <li>Email outreach</li>
                                <li>Prospect research</li>
                                <li>Google Sheets / tracking sheets</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Results &amp; Impact</h2>
                            <ul>
                                <li>Built a structured LinkedIn and email outreach process</li>
                                <li>Engaged relevant U.S. SMB decision-makers</li>
                                <li>Generated initial interest in the cybersecurity initiative</li>
                                <li>Created a clear process for moving interested prospects toward LOI review</li>
                                <li>Established a repeatable outreach framework for SMB cybersecurity campaigns</li>
                            </ul>
                        </section>

                        <section className="growth-case-section growth-case-takeaway">
                            <h2>Key Learning</h2>
                            <p>
                                Cybersecurity outreach works better when technical concepts are explained through practical business outcomes.
                            </p>
                            <p>
                                Keeping the messaging simple, clearly explaining the non-binding nature of the LOI, and maintaining consistent follow-ups made the conversation easier for prospects to understand and engage with.
                            </p>
                        </section>

                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default SMB_Cybersecurity_Initiative;

