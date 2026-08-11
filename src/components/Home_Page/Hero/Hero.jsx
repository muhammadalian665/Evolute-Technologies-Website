import { useNavigate } from "react-router-dom";
import "./Hero.css";
import heroVideo from "../../../assets/Videos/hero-video (2).mp4";

function Hero() {
    const navigate = useNavigate();

    const handleConsultationClick = () => {
        navigate("/contact-us");
    };

    return (
        <section className="hero">

            {/* ================================
                HERO VIDEO
            ================================= */}

            <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source
                    src={heroVideo}
                    type="video/mp4"
                />
            </video>


            {/* ================================
                HERO OVERLAY
            ================================= */}

            <div className="hero-overlay"></div>


            {/* ================================
                HERO CONTENT
            ================================= */}

            <div className="hero-content">

                <h1>
                    Empowering Businesses Through AI,
                    Software & Digital Innovation
                </h1>

                <p>
                    We design scalable software solutions and
                    growth systems that help companies innovate,
                    automate, and scale globally.
                </p>


                {/* ================================
                    HERO BUTTONS
                ================================= */}

                <div className="hero-buttons">

                    <button
                        className="primary-btn"
                        onClick={handleConsultationClick}
                    >
                        Get a Free Consultation
                    </button>


                    <button
                        className="secondary-btn"
                    >
                        View Our Work
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Hero;