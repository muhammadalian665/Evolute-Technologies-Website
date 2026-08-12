
import CardSwap, {
    Card,
} from "./CardSwap";

import "./SAAS_product_development.css";


function SAAS_product_development() {
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

                    <button type="button">
                        Start Your Project
                    </button>

                    <button
                        type="button"
                        className="secondary-button"
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
                    delay={5000}
                    pauseOnHover={false}
                    skewAmount={6}
                    easing="elastic"
                >

                    {/* CARD 01 */}

                    <Card>
                        <div className="saas-card-content">

                            <span>
                                01
                            </span>

                            <h3>
                                SaaS Strategy
                            </h3>

                            <p>
                                We transform your SaaS idea
                                into a clear product strategy
                                and development roadmap.
                            </p>

                        </div>
                    </Card>


                    {/* CARD 02 */}

                    <Card>
                        <div className="saas-card-content">

                            <span>
                                02
                            </span>

                            <h3>
                                UI/UX Design
                            </h3>

                            <p>
                                Create intuitive, modern and
                                conversion-focused SaaS
                                experiences your users love.
                            </p>

                        </div>
                    </Card>


                    {/* CARD 03 */}

                    <Card>
                        <div className="saas-card-content">

                            <span>
                                03
                            </span>

                            <h3>
                                SaaS Development
                            </h3>

                            <p>
                                Build secure, scalable and
                                high-performance SaaS
                                applications using modern
                                technologies.
                            </p>

                        </div>
                    </Card>


                    {/* CARD 04 */}

                    <Card>
                        <div className="saas-card-content">

                            <span>
                                04
                            </span>

                            <h3>
                                Cloud & Scaling
                            </h3>

                            <p>
                                Deploy and scale your SaaS
                                platform with reliable cloud
                                infrastructure and DevOps
                                practices.
                            </p>

                        </div>
                    </Card>

                </CardSwap>

            </div>

        </section>
    );
}


export default SAAS_product_development;