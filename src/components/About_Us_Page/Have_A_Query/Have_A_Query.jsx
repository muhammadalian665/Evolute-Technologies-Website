import "./Have_A_Query.css";
import QueryImage from "../../../assets/About_Us_Images/Have_a_query.png";

function HaveAQuery() {
  return (
    <section
      className="have-a-query"
      style={{ backgroundImage: `url(${QueryImage})` }}
    >
      <div className="have-a-query-container">

        {/* CONTENT */}
        <div className="have-a-query-content">
          <span className="have-a-query-label">
            Contacts
          </span>

          <h2>
            Have a query
          </h2>

          <a
            href="mailto:info@evolutetechnologies.com"
            className="have-a-query-button"
          >
            Send an Email
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default HaveAQuery;