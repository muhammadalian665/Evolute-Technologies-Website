import { useNavigate } from "react-router-dom";

import CardSwap, {
    Card,
} from "./CardSwap";

import "./SAAS_product_development.css";


function SAAS_product_development() {

    const navigate = useNavigate();


    return (

        <section className="saas-product-development">


            {/* =================================================
               HERO CONTENT
            ================================================= */}

            <div className="saas-product-development-content">


                <span className="saas-product-development-eyebrow">

                    SAAS PRODUCT DEVELOPMENT

                </span>


                <h1>

                    Build Scalable SaaS

                    Products That Grow

                    With Your Business

                </h1>


                <p>

                    We design and develop powerful,

                    scalable SaaS products that turn

                    complex ideas into reliable,

                    high-performing digital platforms.

                </p>


                <div className="saas-product-development-buttons">


                    {/* =================================================
                       START YOUR PROJECT
                       → CONTACT US
                    ================================================= */}

                    <button
                        type="button"
                        onClick={() =>
                            navigate("/contact-us")
                        }
                    >

                        Start Your Project

                    </button>


                    {/* =================================================
                       EXPLORE OUR SERVICES
                       → SOFTWARE SERVICES
                    ================================================= */}

                    <button
                        type="button"
                        className="secondary-button"
                        onClick={() =>
                            navigate("/software-services")
                        }
                    >

                        Explore Our Services

                    </button>


                </div>


            </div>


            {/* =================================================
               CARD SWAP
            ================================================= */}

            <div className="saas-product-development-cards">


                <CardSwap

                    width={500}

                    height={400}

                    cardDistance={70}

                    verticalDistance={70}

                    skewAmount={6}

                    easing="elastic"

                >


                    {/* =================================================
                       CARD 01
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                01
                            </span>

                            <h3>
                                Cloud-Native Architecture
                            </h3>

                            <p>
                                Build SaaS products on modern cloud
                                infrastructure for flexibility,
                                reliability, and seamless access
                                from anywhere.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 02
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                02
                            </span>

                            <h3>
                                Multi-Tenant Systems
                            </h3>

                            <p>
                                Serve multiple customers through a
                                secure architecture while keeping
                                every organization's data isolated
                                and protected.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 03
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                03
                            </span>

                            <h3>
                                Subscription & Billing
                            </h3>

                            <p>
                                Implement flexible pricing plans,
                                recurring subscriptions, trials,
                                upgrades, cancellations, and
                                automated billing workflows.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 04
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                04
                            </span>

                            <h3>
                                Scalable Infrastructure
                            </h3>

                            <p>
                                Engineer systems that scale smoothly
                                as users, transactions, and workloads
                                grow without compromising performance.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 05
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                05
                            </span>

                            <h3>
                                User & Role Management
                            </h3>

                            <p>
                                Create powerful authentication,
                                permissions, teams, roles, and
                                access-control systems tailored
                                to your business.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 06
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                06
                            </span>

                            <h3>
                                Secure Data Management
                            </h3>

                            <p>
                                Protect sensitive customer data with
                                encryption, secure APIs, backups,
                                access controls, and industry-standard
                                security practices.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 07
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                07
                            </span>

                            <h3>
                                API-First Development
                            </h3>

                            <p>
                                Build robust APIs that allow your SaaS
                                platform to connect seamlessly with
                                third-party tools, applications,
                                and services.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 08
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                08
                            </span>

                            <h3>
                                Real-Time Analytics
                            </h3>

                            <p>
                                Turn product and customer activity
                                into actionable insights through
                                dashboards, reports, metrics,
                                and real-time data.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 09
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                09
                            </span>

                            <h3>
                                Third-Party Integrations
                            </h3>

                            <p>
                                Connect your SaaS product with CRMs,
                                payment platforms, communication tools,
                                productivity apps, and other business
                                systems.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 10
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                10
                            </span>

                            <h3>
                                Automated Workflows
                            </h3>

                            <p>
                                Reduce manual work with intelligent
                                workflows, triggers, notifications,
                                scheduled tasks, and process automation.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 11
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                11
                            </span>

                            <h3>
                                Continuous Updates
                            </h3>

                            <p>
                                Deliver new features, improvements,
                                bug fixes, and security updates without
                                requiring customers to install new
                                versions.
                            </p>

                        </div>

                    </Card>


                    {/* =================================================
                       CARD 12
                    ================================================= */}

                    <Card>

                        <div className="saas-card-content">

                            <span>
                                12
                            </span>

                            <h3>
                                High Availability
                            </h3>

                            <p>
                                Design reliable SaaS platforms with
                                monitoring, backups, redundancy, and
                                recovery strategies to minimize downtime.
                            </p>

                        </div>

                    </Card>


                </CardSwap>


            </div>


        </section>

    );
}


export default SAAS_product_development;