import { useNavigate } from "react-router-dom";
import "./Case_Studies_Calling_Page.css";

import SoftwareImage
    from "../../assets/CaseStudiesCallingPageImages/Software.png";

import GrowthImage
    from "../../assets/CaseStudiesCallingPageImages/Growth.png";


function Case_Studies_Calling_Page() {

    const navigate = useNavigate();

    const handleSoftwareCaseStudies = () => {
        navigate("/case-studies/software-tech");
    };

    const handleGrowthCaseStudies = () => {
        navigate("/case-studies/growth");
    };

    return (
        <main className="case-studies-calling-page">

            {/* =========================================
                HERO
            ========================================= */}

            <section className="case-studies-calling-hero">

                <div className="case-studies-calling-container">

                    <span className="case-studies-eyebrow">
                        OUR WORK
                    </span>

                    <h1>
                        Case Studies
                    </h1>

                    <p>
                        Explore how we build powerful technology solutions
                        and create scalable growth systems for ambitious
                        businesses.
                    </p>

                </div>

            </section>


            {/* =========================================
                CASE STUDY OPTIONS
            ========================================= */}

            <section className="case-studies-options">

                <div className="case-studies-options-container">


                    {/* =========================================
                        SOFTWARE CARD
                    ========================================= */}

                    <div
                        className="case-study-option software-option"
                        onClick={handleSoftwareCaseStudies}
                    >

                        {/* IMAGE */}

                        <div className="case-study-image-wrapper">

                            <img
                                src={SoftwareImage}
                                alt="Software Case Studies"
                                className="case-study-image"
                            />

                            <div className="case-study-image-overlay"></div>

                        </div>


                        {/* CONTENT */}

                        <div className="case-study-option-content">

                            <span className="case-study-number">
                                01
                            </span>

                            <h2>
                                Software Case Studies
                            </h2>

                            <p>
                                Discover software products, web platforms,
                                mobile applications and custom technology
                                solutions we've built for businesses.
                            </p>

                            <button
                                className="case-study-option-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSoftwareCaseStudies();
                                }}
                            >
                                Explore Software Work
                                <span>→</span>
                            </button>

                        </div>

                        <div className="case-study-option-glow"></div>

                    </div>


                    {/* =========================================
                        GROWTH CARD
                    ========================================= */}

                    <div
                        className="case-study-option growth-option"
                        onClick={handleGrowthCaseStudies}
                    >

                        {/* IMAGE */}

                        <div className="case-study-image-wrapper">

                            <img
                                src={GrowthImage}
                                alt="Growth Case Studies"
                                className="case-study-image"
                            />

                            <div className="case-study-image-overlay"></div>

                        </div>


                        {/* CONTENT */}

                        <div className="case-study-option-content">

                            <span className="case-study-number">
                                02
                            </span>

                            <h2>
                                Growth Case Studies
                            </h2>

                            <p>
                                Explore lead generation, outbound sales,
                                appointment setting and growth systems
                                designed to help businesses scale.
                            </p>

                            <button
                                className="case-study-option-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleGrowthCaseStudies();
                                }}
                            >
                                Explore Growth Work
                                <span>→</span>
                            </button>

                        </div>

                        <div className="case-study-option-glow"></div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Case_Studies_Calling_Page;