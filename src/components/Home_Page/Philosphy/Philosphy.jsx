import "./Philosphy.css";

import Team from "../../../assets/Philosophy/Team.png";

function Philosphy() {
  return (
    <section className="philosphy-section">
      <div className="philosphy-container">

        {/* Left Side - Philosophy Text */}
        <div className="philosphy-content">
          <h2>
            We combine technology, product development, and growth strategies
            to help businesses launch smarter solutions, reach more customers,
            and build sustainable growth.
          </h2>
        </div>

        {/* Right Side - Team Image */}
        <div className="philosphy-image">
          <img src={Team} alt="Our Team" />
        </div>

      </div>
    </section>
  );
}

export default Philosphy;