import { useNavigate } from "react-router-dom";
import "./Hero.css";
import heroVideo from "../../../assets/Videos/hero-video (2).mp4";

function Hero() {
    const navigate = useNavigate();

    const handleConsultationClick = () => {
        navigate("/contact-us");
    };

    const handleViewWorkClick = () => {
        navigate("/case-studies");
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
                    We Build Technology <br />
                    We Drive Growth.
                </h1>

                <p>
                    From intelligent software and AI solutions to lead generation and outbound growth systems, we help ambitious businesses build, connect, and scale.
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
                        onClick={handleViewWorkClick}
                    >
                        View Our Work
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Hero;