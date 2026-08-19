import "./Have_A_Query.css";
import { useNavigate } from "react-router-dom";

function HaveAQuery() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact-us");
  };

  return (
    <section className="have-a-query">
      <div className="have-a-query-container">
        {/* CONTENT */}
        <div className="have-a-query-content">
          <span className="have-a-query-label">
            Contacts
          </span>

          <h2>Have a query</h2>

          <button
            className="have-a-query-button"
            onClick={handleContactClick}
          >
            Contact Us
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HaveAQuery;