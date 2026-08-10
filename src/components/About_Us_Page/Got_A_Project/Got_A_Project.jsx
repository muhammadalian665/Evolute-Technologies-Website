import "./Got_A_Project.css";

function GotAProject() {
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
            <a href="/contact" className="got-a-project-button">
              Contact Us
              <span>→</span>
            </a>
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