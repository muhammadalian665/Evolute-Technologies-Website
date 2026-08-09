import "./OurVision.css";
import VisionImage from "../../../assets/About_Us_Images/Vision.png";

function OurVision() {
  return (
    <section className="our-vision">
      <div className="our-vision-container">

        {/* Left Column */}
        <div className="our-vision-image-column">
          <div className="our-vision-image-card">
            <img
              src={VisionImage}
              alt="Evolute Technologies Vision"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="our-vision-content">

          <span className="our-vision-label">
            Our Vision
          </span>

          <h2>
            Building a Smarter Future Through Technology
          </h2>

          <p>
            At Evolute Technologies, our vision is to build a future where technology and growth work together to help businesses become smarter, more efficient, and more competitive. We aim to turn ambitious ideas into scalable digital solutions that create lasting business impact.
          </p>

          <p>
          We envision becoming a trusted technology and growth partner for businesses worldwide by combining innovative engineering, AI, digital products, and strategic growth solutions.
          </p>

          <p>
           Our goal is not just to build software, but to create technology that solves real business challenges, unlocks new opportunities, and helps organizations grow with confidence.
          </p>

        </div>

      </div>
    </section>
  );
}

export default OurVision;