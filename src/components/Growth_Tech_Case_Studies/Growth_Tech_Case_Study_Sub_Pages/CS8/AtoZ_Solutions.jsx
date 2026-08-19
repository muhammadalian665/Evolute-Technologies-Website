import "./AtoZ_Solutions.css";
import { motion } from "framer-motion";

function AtoZ_Solutions() {
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

                        <span className="growth-case-label">CASE STUDY 08</span>

                        <h1 className="growth-case-title">
                            Multi-Company LinkedIn &amp;
                            <span> Email Outreach for AtoZ Solutions</span>
                        </h1>

                        <div className="growth-case-line" />

                        <section className="growth-case-section">
                            <h2>Client / Industry</h2>
                            <p>
                                AtoZ Solutions is a student-focused marketing company helping brands reach college students through direct-to-dorm marketing campaigns.
                            </p>
                            <p>
                                The campaign focused on identifying brands with strong college-student audiences and reaching marketing decision-makers through personalized LinkedIn and email outreach.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Objective</h2>
                            <p>
                                The goal was to identify high-fit companies, connect with relevant marketing decision-makers, and generate conversations around AtoZ's campus-based acquisition model.
                            </p>
                            <p>
                                The campaign focused on companies such as Nourish, BetterHelp, and Factor75, where college students represented a relevant customer segment.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Challenges</h2>
                            <ul>
                                <li>Finding brands where college students were a strong commercial fit</li>
                                <li>Identifying relevant marketing decision-makers</li>
                                <li>Differentiating AtoZ from traditional digital marketing channels</li>
                                <li>Creating personalized messaging across industries</li>
                                <li>Maintaining consistent follow-ups</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Strategy &amp; Execution</h2>

                            <h3>Targeted Prospect Research</h3>
                            <p>We researched companies based on:</p>
                            <ul>
                                <li>Student audience</li>
                                <li>Acquisition strategy</li>
                                <li>Product-market fit</li>
                                <li>Potential for campus-based marketing</li>
                            </ul>

                            <h3>Decision-Maker Identification</h3>
                            <p>We targeted:</p>
                            <ul>
                                <li>CMOs</li>
                                <li>VPs of Marketing</li>
                                <li>Directors of Marketing</li>
                                <li>Social Media leaders</li>
                                <li>Other relevant decision-makers</li>
                            </ul>

                            <h3>LinkedIn + Email Outreach</h3>
                            <p>
                                We created personalized LinkedIn sequences and four-step email campaigns for each company.
                            </p>
                            <p>
                                Messaging was based on specific business opportunities rather than generic service pitches.
                            </p>
                            <p>For example:</p>
                            <ul>
                                <li>Nourish: student health and campus acquisition</li>
                                <li>BetterHelp: student mental health access</li>
                                <li>Factor75: student marketing and dorm-living relevance</li>
                            </ul>

                            <h3>Follow-Up &amp; Tracking</h3>
                            <p>
                                We maintained structured follow-ups and tracked prospects to keep outreach organized and identify engagement opportunities.
                            </p>

                            <h3>Tools Used</h3>
                            <ul>
                                <li>LinkedIn Sales Navigator</li>
                                <li>Apollo</li>
                                <li>LinkedIn</li>
                                <li>Cold email</li>
                                <li>Google Sheets / tracking</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Results &amp; Impact</h2>
                            <ul>
                                <li>Built targeted prospecting campaigns around high-fit companies</li>
                                <li>Reached relevant marketing decision-makers through LinkedIn and email</li>
                                <li>Developed company-specific messaging and sequences</li>
                                <li>Created a repeatable multi-channel outreach framework</li>
                                <li>Built a qualified pipeline for AtoZ's campus marketing services</li>
                            </ul>
                        </section>

                        <section className="growth-case-section growth-case-takeaway">
                            <h2>Key Learning</h2>
                            <p>
                                The strongest outreach came from connecting AtoZ's service directly to something the prospect was already doing or already cared about.
                            </p>
                            <p>
                                Instead of simply pitching dorm-room marketing, we connected the outreach to existing student acquisition efforts, customer demographics, and opportunities to add campus outreach as another acquisition channel.
                            </p>
                        </section>

                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default AtoZ_Solutions;

