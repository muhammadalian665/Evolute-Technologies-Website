import "./High_Ticket_B2B_Services.css";
import { motion } from "framer-motion";

function High_Ticket_B2B_Services() {
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

                        <span className="growth-case-label">CASE STUDY 02</span>

                        <h1 className="growth-case-title">
                            Multi-Channel LinkedIn &amp; Email Campaign for
                            <span> High-Ticket B2B Services</span>
                        </h1>

                        <div className="growth-case-line" />

                        <section className="growth-case-section">
                            <h2>Client Overview</h2>
                            <p>
                                We worked with a high-ticket B2B service provider offering Google Ads and CustomerOS solutions to businesses in the construction, restoration, and energy sectors across international markets.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Objective</h2>
                            <p>
                                The objective was to generate qualified conversations with decision-makers while creating a repeatable LinkedIn and email outreach process that could scale without compromising personalization.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Challenges</h2>
                            <p>
                                The campaign required careful targeting across multiple industries while working within LinkedIn's daily outreach limits and maintaining strong email deliverability.
                            </p>
                            <p>
                                Personalization was also critical because the same messaging approach could not be applied across different industries.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Strategy &amp; Execution</h2>

                            <h3>Targeting</h3>
                            <p>We:</p>
                            <ul>
                                <li>Refined the ICP around industries with strong potential demand</li>
                                <li>Focused on CEOs, Directors, and relevant marketing decision-makers</li>
                                <li>Used LinkedIn Sales Navigator to research companies and identify prospects</li>
                            </ul>

                            <h3>Outreach</h3>
                            <p>We:</p>
                            <ul>
                                <li>Combined LinkedIn outreach with targeted cold email</li>
                                <li>Engaged with prospect content where appropriate before pitching</li>
                                <li>Segmented prospects according to engagement levels</li>
                                <li>Personalized messaging around the prospect's company, role, and potential business needs</li>
                                <li>Used follow-ups to gradually develop the conversation</li>
                            </ul>

                            <h3>Tools</h3>
                            <ul>
                                <li>LinkedIn Sales Navigator</li>
                                <li>Email infrastructure and domain warm-up</li>
                                <li>Notion for campaign tracking</li>
                                <li>AI tools to support research and personalization</li>
                            </ul>

                            <h3>Execution Process</h3>
                            <p>
                                We managed approximately 30–90 targeted LinkedIn connection requests per day, along with meaningful engagement with prospect content.
                            </p>
                            <p>
                                Email campaigns were introduced through a proper warm-up process, while messaging was continuously reviewed based on prospect engagement and responses.
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Impact</h2>
                            <p>
                                The campaign established a structured multi-channel outreach system that improved targeting, created more relevant conversations, and provided a scalable foundation for ongoing lead generation.
                            </p>
                        </section>

                        <section className="growth-case-section growth-case-takeaway">
                            <h2>Key Takeaway</h2>
                            <p>
                                Effective B2B outreach is not about sending the highest possible volume.
                            </p>
                            <p>
                                Strong ICP research, relevant personalization, consistent engagement, and a well-managed multi-channel process create significantly better opportunities for meaningful conversations.
                            </p>
                        </section>

                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default High_Ticket_B2B_Services;

