import "./TrustBar.css";

import clientsLogo from "../assets/Trust-Bar-Logo-Images/clients_trust_bar_img.png";
import clutchLogo from "../assets/Trust-Bar-Logo-Images/Clutch_trust_bar_img.png";
import googleLogo from "../assets/Trust-Bar-Logo-Images/google_trust_bar_img.png";
import isoLogo from "../assets/Trust-Bar-Logo-Images/ISO_Trust_Bar_img.png";
import upworkLogo from "../assets/Trust-Bar-Logo-Images/upwork_trust_bar_img.png";


function TrustBar() {
  return (
    <section className="trust-bar">

      <div className="trust-item">
        <img src={clutchLogo} alt="Clutch Rating" />
        <h3>5.0 out of 5</h3>
      </div>


      <div className="trust-item">
        <img src={googleLogo} alt="Google Reviews" />
        <h3>4.7 out of 5</h3>
      </div>


      <div className="trust-item">
        <img src={upworkLogo} alt="Upwork Rating" />
        <h3>4.9 out of 5</h3>
      </div>


      <div className="trust-item">
        <img src={clientsLogo} alt="Clients" />
        <h3>100+</h3>
        <span>Clients</span>
      </div>


      <div className="trust-item">
        <img src={isoLogo} alt="ISO 27001 Certified" />
        <span>ISO-27001 Certified</span>
      </div>


    </section>
  );
}

export default TrustBar;