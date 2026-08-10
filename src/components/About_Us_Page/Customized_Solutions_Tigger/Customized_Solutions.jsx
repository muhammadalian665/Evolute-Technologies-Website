import "./Customized_Solutions.css";

function CustomizedSolutions() {
  return (
    <section className="customized-solutions">
      <div className="customized-solutions-container">

        {/* LEFT COLUMN - TICKER */}
        <div className="customized-solutions-ticker-wrapper">
          <div className="customized-solutions-ticker">
            <div className="customized-solutions-ticker-track">
              <span>
                Find A Perfect Fit With Our Customized Solutions Today!
              </span>

              <span>
                Find A Perfect Fit With Our Customized Solutions Today!
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - BUTTON */}
        <div className="customized-solutions-button-column">
          <a
            href="/contact"
            className="customized-solutions-button"
          >
            <span>Discover Your Advantage</span>
            <span className="customized-solutions-arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default CustomizedSolutions;