import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =========================================
            COLUMN 1 - COMPANY / PAKISTAN OFFICE
            ========================================= */}
        <div className="footer-column footer-company">

          {/* Company Description */}
          <p className="footer-description">
            We combine technology, product development, and growth strategies
            to help businesses launch smarter solutions, reach more customers,
            and build sustainable growth.
          </p>

          {/* Pakistan Office */}
          <div className="footer-contact">

            <h4>Pakistan Office</h4>

            <p>
              Lower Ground Floor, Sehgal Emporium
              <br />
              Rafiq Sehgal Street, Main Murree Road
              <br />
              Saddar, Rawalpindi, Pakistan
            </p>

            {/* Pakistan Call */}
            <p>
              <strong>Call</strong>
              <br />
              +92-333-6434689
              <br />
              +92-51-8890709
            </p>

          </div>

          {/* General Email */}
          <a
            href="mailto:hello@evolutetechnologies.com"
            className="footer-main-email"
          >
            hello@evolutetechnologies.com
          </a>

          {/* =========================================
              LOGO - COMPLETELY AT THE END
              ========================================= */}
          <div className="footer-logo">
            <img
              src={logo}
              alt="Evolute Technologies"
            />
          </div>

        </div>


        {/* =========================================
            COLUMN 2 - QUICK LINKS
            ========================================= */}
        <div className="footer-column">

          <h4>Quick Links</h4>

          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>

            <li>
              <a href="#contact">Contact Us</a>
            </li>

            <li>
              <a href="#work">Our Work</a>
            </li>

            <li>
              <a href="#blogs">Blogs</a>
            </li>

            <li>
              <a href="#careers">Careers</a>
            </li>

            <li>
              <a href="#contact">Get a Quote</a>
            </li>
          </ul>

          {/* General Questions */}
          <div className="footer-email-links">

            <h4>General Questions</h4>

            <a href="mailto:hello@evolutetechnologies.com">
              hello@evolutetechnologies.com
            </a>

          </div>

          {/* HR Inquiries */}
          <div className="footer-email-links">

            <h4>HR Inquiries</h4>

            <a href="mailto:hr@evolutetechnologies.com">
              hr@evolutetechnologies.com
            </a>

          </div>

        </div>


        {/* =========================================
            COLUMN 3 - INDUSTRIES / GROWTH
            ========================================= */}
        <div className="footer-column">

          <h4>Industries We Serve</h4>

          <ul>

            <li>
              <a href="#industries">
                Technology & SaaS
              </a>
            </li>

            <li>
              <a href="#industries">
                Real Estate
              </a>
            </li>

            <li>
              <a href="#industries">
                Healthcare
              </a>
            </li>

            <li>
              <a href="#industries">
                Education
              </a>
            </li>

            <li>
              <a href="#industries">
                Retail & E-commerce
              </a>
            </li>

            <li>
              <a href="#industries">
                Professional Services
              </a>
            </li>

            <li>
              <a href="#industries">
                Startups & SMEs
              </a>
            </li>

          </ul>

          {/* Growth & Sales */}
          <h4 className="footer-subheading">
            Growth & Sales Enablement
          </h4>

          <ul>

            <li>
              <a href="#growth">
                B2B Lead Generation
              </a>
            </li>

            <li>
              <a href="#growth">
                LinkedIn Prospecting & Outreach
              </a>
            </li>

            <li>
              <a href="#growth">
                Cold Email Campaigns
              </a>
            </li>

            <li>
              <a href="#growth">
                Appointment Setting
              </a>
            </li>

            <li>
              <a href="#growth">
                Sales Automation
              </a>
            </li>

            <li>
              <a href="#growth">
                Outbound Growth Strategies
              </a>
            </li>

          </ul>

        </div>


        {/* =========================================
            COLUMN 4 - TECHNOLOGY / US OFFICE
            ========================================= */}
        <div className="footer-column">

          <h4>Technology & Development</h4>

          <ul>

            <li>
              <a href="#services">
                Custom Software Development
              </a>
            </li>

            <li>
              <a href="#services">
                SaaS Product Development
              </a>
            </li>

            <li>
              <a href="#services">
                AI Integration & Automation
              </a>
            </li>

            <li>
              <a href="#services">
                Web & Mobile Applications
              </a>
            </li>

            <li>
              <a href="#services">
                Scalable Cloud Solutions
              </a>
            </li>

            <li>
              <a href="#services">
                Dedicated Development Teams
              </a>
            </li>

          </ul>

          {/* US Office */}
          <div className="footer-us-office">

            <h4>US Office</h4>

            <p>
              447 Broadway, 2nd Floor
              <br />
              Suite #1870
              <br />
              New York, NY 10013
              <br />
              United States
            </p>

            <p>
              <strong>Call</strong>
              <br />
              (+1) 346 3215956
            </p>

          </div>

        </div>

      </div>


      {/* =========================================
          FOOTER BOTTOM
          ========================================= */}
      <div className="footer-bottom">

        <p>
          © 2026 Evolute Technologies. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;