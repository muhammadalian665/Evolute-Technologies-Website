import "./SoftwareHiring.css";

import WorkingLady from "../assets/SoftwareHiring/Working_lady.png";
import Patterns from "../assets/SoftwareHiring/Patterns.png";

function SoftwareHiring() {
  return (
    <section className="software-hiring-section">
      <div className="software-hiring-grid">

        {/* Left Side */}
        <div
          className="software-hiring-column"
          style={{
            backgroundImage: `url(${WorkingLady})`,
          }}
        >
          <div className="software-hiring-overlay"></div>

          <div className="software-hiring-content">
            <h2>
              I want to Hire Dedicated Development Team
            </h2>

            <p>
              Hire a dedicated development team for your project.
              Enjoy seamless collaboration and top-quality results.
            </p>

            <a href="#contact" className="software-hiring-button">
              Discuss Your Needs
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="software-hiring-column"
          style={{
            backgroundImage: `url(${Patterns})`,
          }}
        >
          <div className="software-hiring-overlay"></div>

          <div className="software-hiring-content">
            <h2>
              I Need Project-Based Delivery
            </h2>

            <p>
              Get reliable project-based delivery tailored to your needs.
              Our expert team ensures timely and high-quality results
              for every project.
            </p>

            <a href="#contact" className="software-hiring-button">
              Get a Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SoftwareHiring;