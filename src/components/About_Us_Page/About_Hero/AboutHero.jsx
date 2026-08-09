import "./AboutHero.css";
import heroImage from "../../../assets/About_Us_Images/Evolute Technologies.png";

function AboutHero() {
  return (
    <section className="about-hero">
      <img
        src={heroImage}
        alt="Evolute Technologies"
        className="about-hero-image"
      />

      <div className="about-hero-overlay">
        <div className="about-hero-content">
          <h1>We Accelerate Your Business With Technology & Growth</h1>

          <p>
            At Evolute Technologies, we combine technology and growth to help businesses build and scale. From custom software, SaaS, AI, web and mobile apps to B2B lead generation, sales automation, and outbound growth, we turn ideas into scalable solutions and measurable results.
          </p>

          <button className="about-hero-button">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
