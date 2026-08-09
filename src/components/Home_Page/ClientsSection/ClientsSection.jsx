import "./ClientsSection.css";

import BeeHaz from "../../../assets/ClientSectionLogos/BeeHaz.png";
import BullsEyes from "../../../assets/ClientSectionLogos/BullsEyes_engagement.png";
import EasyCredits from "../../../assets/ClientSectionLogos/EasyCredits.png";
import Fireworks from "../../../assets/ClientSectionLogos/fireworks.png";
import GulfUniversity from "../../../assets/ClientSectionLogos/Gulf_University.png";
import Petalinks from "../../../assets/ClientSectionLogos/petalinks.png";
import Piston from "../../../assets/ClientSectionLogos/Piston.png";
import SOSStudios from "../../../assets/ClientSectionLogos/SOSStudios.png";

function ClientsSection() {
  const logos = [
    BeeHaz,
    BullsEyes,
    EasyCredits,
    Fireworks,
    GulfUniversity,
    Petalinks,
    Piston,
    SOSStudios,
  ];

  return (
    <section className="clients-section">
      <div className="clients-content">

        <div className="clients-text">
          <h2>
            Collabs based on
            <br />
            trust only.
          </h2>

          <p>
            Who we've served and partnered with to build innovative digital
            solutions, scalable products, and growth-driven systems.
          </p>
        </div>

        <div className="clients-logos">
          {logos.map((logo, index) => (
            <div className="logo-box" key={index}>
              <img src={logo} alt="Client Logo" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ClientsSection;