import "./Shopify_eCommerce_Growth.css";
import { motion } from "framer-motion";

function Shopify_eCommerce_Growth() {
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

                        <span className="growth-case-label">CASE STUDY 03</span>

                        <h1 className="growth-case-title">
                            Turning Cold Email into a
                            <span> Structured Growth Channel</span>
                        </h1>

                        <div className="growth-case-line" />

                        <section className="growth-case-section">
                            <h2>Client / Industry</h2>
                            <p>
                                We worked with a service provider targeting small to mid-sized Shopify eCommerce brands in the UK.
                            </p>
                            <p>
                                The client's services focused on helping brands improve revenue through paid advertising and conversion rate optimization (CRO).
                            </p>
                        </section>

                        <section className="growth-case-section">
                            <h2>Objective</h2>
                            <p>The main goal was to build a more effective outbound system that could:</p>
                            <ul>
                                <li>Generate relevant replies and sales conversations</li>
                                <li>Improve offer positioning</li>
                                <li>Personalize outreach around each prospect's situation</li>
                                <li>Establish a repeatable cold email process</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Challenges</h2>
                            <p>The existing outreach had several issues:</p>
                            <ul>
                                <li>Messaging was too generic</li>
                                <li>The value proposition was unclear</li>
                                <li>Emails lacked meaningful personalization</li>
                                <li>There was no consistent follow-up structure</li>
                                <li>Sending volume was prioritized over outreach quality</li>
                                <li>Existing performance data did not provide a clear picture of campaign effectiveness</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Our Approach</h2>

                            <h3>Targeting</h3>
                            <p>
                                We focused on Shopify/DTC brands that were realistic fits for the service and targeted decision-makers such as:
                            </p>
                            <ul>
                                <li>Founders</li>
                                <li>CEOs</li>
                                <li>Heads of Marketing</li>
                            </ul>

                            <h3>Messaging &amp; Outreach</h3>
                            <p>
                                Rather than sending broad sales pitches, we reworked the outreach around specific pain points commonly experienced by Shopify brands.
                            </p>
                            <p>
                                We also introduced multiple messaging angles and structured follow-ups, giving prospects several opportunities to engage.
                            </p>

                            <h3>Tools Used</h3>
                            <ul>
                                <li>Instantly — campaign management and email outreach</li>
                                <li>Email verification/validation tools — contact verification</li>
                                <li>Multiple sending inboxes — controlled campaign distribution</li>
                            </ul>

                            <h3>Execution Process</h3>
                            <p>
                                We first reviewed the existing campaign and identified weaknesses across targeting, messaging, personalization, and follow-up.
                            </p>
                            <p>From there, we:</p>
                            <ol>
                                <li>Built a more focused prospecting approach</li>
                                <li>Introduced a four-step email sequence with appropriate delays</li>
                                <li>Reduced sending volume to support better deliverability</li>
                                <li>Tested different pain-point and offer angles</li>
                                <li>Monitored campaign performance</li>
                                <li>Refined messaging based on campaign data</li>
                            </ol>
                        </section>

                        <section className="growth-case-section">
                            <h2>Impact</h2>
                            <p>The project helped establish a much more structured outbound foundation:</p>
                            <ul>
                                <li>Clearer positioning and messaging</li>
                                <li>Better-defined prospect targeting</li>
                                <li>A consistent follow-up framework</li>
                                <li>Improved campaign structure</li>
                                <li>A scalable cold email process for continued optimization</li>
                            </ul>
                        </section>

                        <section className="growth-case-section">
                            <h2>Business Value</h2>
                            <p>
                                The biggest improvement was moving the client away from random cold outreach toward a structured system built around relevant prospects, clear messaging, personalization, and consistent follow-up.
                            </p>
                            <p>
                                This created a stronger foundation for quality conversations while protecting deliverability and allowing future campaigns to scale more systematically.
                            </p>
                        </section>

                        <section className="growth-case-section growth-case-takeaway">
                            <h2>Key Learnings</h2>
                            <ul>
                                <li>Strong targeting and messaging matter more than simply increasing sending volume.</li>
                                <li>Follow-ups play an important role in converting initial outreach into conversations.</li>
                                <li>Specific, pain-point-focused offers create stronger reasons for prospects to respond.</li>
                                <li>Cold email works best as an ongoing optimization process rather than a one-time campaign.</li>
                            </ul>
                        </section>

                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default Shopify_eCommerce_Growth;

