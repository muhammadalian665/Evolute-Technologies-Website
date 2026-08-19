import "./Multi_Channel_Clinic_Outreach.css";
import { motion } from "framer-motion";

function Multi_Channel_Clinic_Outreach() {
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

                        <span className="growth-case-label">CASE STUDY 04</span>

                        <h1 className="growth-case-title">
                            Multi-Channel Clinic
                            <span> Outreach &amp; Appointment Generation</span>
                        </h1>

                        <div className="growth-case-line" />

                        <section className="growth-case-section">
                            <h2>Client / Industry</h2>
                            <p>
                                We worked on outreach for UK-based healthcare clinics, targeting clinic owners, operators, and other key decision-makers.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Objective</h2>
                            <p>
                                The goal was to identify relevant clinic decision-makers, initiate meaningful conversations across multiple channels, and generate qualified appointment opportunities.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Challenges</h2>
                            <p>The campaign presented several practical challenges:</p>
                            <ul>
                                <li>Limited access to direct contact information</li>
                                <li>Reliance on generic email addresses in some cases</li>
                                <li>Operational interruptions</li>
                                <li>The campaign was paused before reaching its full optimization stage</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Strategy &amp; Execution</h2>

                            <h3>Targeted Prospect Research</h3>
                            <p>
                                We manually researched clinics using Google Maps and relevant online directories, focusing on owners, operators, and other decision-makers rather than creating broad, untargeted lists.
                            </p>

                            <h3>Multi-Channel Outreach</h3>
                            <p>We used a combination of:</p>
                            <ul>
                                <li>WhatsApp</li>
                                <li>Email</li>
                                <li>Social media</li>
                            </ul>
                            <p>
                                Messaging was adapted to each platform and personalized wherever possible rather than using identical copy across every channel.
                            </p>

                            <h3>Daily Outreach &amp; Follow-Up</h3>
                            <p>
                                We maintained consistent daily outreach, followed up with prospects, and tracked conversations and responses through an organized tracking system.
                            </p>

                            <h3>Tools Used</h3>
                            <ul>
                                <li>Google Maps</li>
                                <li>Online directories</li>
                                <li>Email</li>
                                <li>WhatsApp</li>
                                <li>Social media</li>
                                <li>Google Sheets / tracking sheets</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Results &amp; Impact</h2>
                            <ul>
                                <li>Maintained consistent outreach across targeted clinics</li>
                                <li>Generated initial positive responses and callbacks</li>
                                <li>Created an organized prospect tracking system</li>
                                <li>Built an initial pipeline of interested prospects</li>
                                <li>Established a foundation for a longer-term appointment-generation process</li>
                            </ul>
                        </section>

                        <section className="growth-case-section growth-case-takeaway">
                            <h2>Key Learning</h2>
                            <p>
                                This campaign reinforced the value of combining multiple outreach channels instead of depending on a single contact method.
                            </p>
                            <p>
                                Personalized messaging, consistent follow-up, and accurate tracking were particularly important for turning initial outreach into genuine conversations.
                            </p>
                        </section>

                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default Multi_Channel_Clinic_Outreach;

