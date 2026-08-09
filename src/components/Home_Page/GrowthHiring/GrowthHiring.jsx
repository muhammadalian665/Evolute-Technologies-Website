import "./GrowthHiring.css";

import WorkingLady from "../../../assets/GrowthHiring/Professiona_lady.png";
import Patterns from "../../../assets/GrowthHiring/Patterns.png";

function GrowthHiring() {
  return (
    <section className="growth-hiring">
      <div className="software-hiring-container">

        {/* LEFT - Patterns + Blue Overlay */}
        <div
          className="software-hiring-column software-hiring-left"
          style={{
            backgroundImage: `linear-gradient(
              rgba(5, 35, 105, 0.78),
              rgba(5, 35, 105, 0.78)
            ), url(${Patterns})`,
          }}
        >
          <div className="software-hiring-content">
            <h2>I Want to Scale My Business</h2>

            <p>
              Build a stronger growth engine with targeted marketing,
              lead generation, and conversion strategies that turn
              opportunities into measurable business results.
            </p>

            <a href="#contact" className="software-hiring-button">
              Discuss Your Growth
            </a>
          </div>
        </div>

        {/* RIGHT - Working Lady */}
        <div
          className="software-hiring-column software-hiring-right"
          style={{
            backgroundImage: `url(${WorkingLady})`,
          }}
        >
          <div className="software-hiring-content">
            <h2>I Need a Growth Strategy</h2>

            <p>
              Get a tailored growth strategy designed to help your
              business attract more customers, increase revenue, and
              achieve sustainable growth.
            </p>

            <a href="#contact" className="software-hiring-button">
              Get a Growth Plan
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default GrowthHiring;