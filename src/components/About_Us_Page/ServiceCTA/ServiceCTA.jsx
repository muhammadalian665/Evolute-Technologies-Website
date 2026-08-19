import { useNavigate } from "react-router-dom";
import "./ServiceCTA.css";

function ServiceCTA() {

  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate("/case-studies");
  };

  return (
    <section className="service-cta">

      <div className="service-cta-content">

        <h2>
          Ready To Explore Our Services & Client Stories?
        </h2>

        <button
          className="service-cta-button"
          onClick={handlePortfolioClick}
        >
          Dive Into Our Portfolio
        </button>

      </div>

    </section>
  );
}

export default ServiceCTA;