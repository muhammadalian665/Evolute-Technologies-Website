import "./Have_A_Query.css";

function HaveAQuery() {
  return (
    <section className="have-a-query">
      <div className="have-a-query-overlay"></div>

      <div className="have-a-query-container">

        {/* CONTENT */}
        <div className="have-a-query-content">
          <span className="have-a-query-label">Contacts</span>

          <h2>Have a query</h2>

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