import { useNavigate } from "react-router-dom";
import "./Got_A_Project.css";

function GotAProject() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact-us");
  };

  return (
    <section className="got-a-project">
      <div className="got-a-project-container">

        {/* ROW 1 */}
        <div className="got-a-project-top">

          {/* LEFT */}
          <div className="got-a-project-heading">
            <span>Let's talk</span>
            <h2>Got a project?</h2>
          </div>

          {/* RIGHT */}
          <div className="got-a-project-action">
            <button
              type="button"
              className="got-a-project-button"
              onClick={handleContactClick}
            >
              Contact Us
              <span>→</span>
            </button>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="got-a-project-divider"></div>

        {/* ROW 2 */}
        <div className="got-a-project-bottom">
          <p>
            We’re{" "}
            <strong>a team of technologists and growth specialists</strong>{" "}
            who turn ambitious ideas into scalable digital products and help
            businesses{" "}
            <strong>accelerate growth</strong> through custom software, AI,
            cloud solutions, and strategic sales enablement.
          </p>
        </div>

      </div>
    </section>
  );
}

export default GotAProject;