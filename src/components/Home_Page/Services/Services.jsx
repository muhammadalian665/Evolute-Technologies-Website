import "./Services.css";

import { Code2, Target } from "lucide-react";

import SoftwareServices from "../../../assets/Service_&_Growth_Card_images/Software_Services.png";
import GrowthServices from "../../../assets/Service_&_Growth_Card_images/Growth_Services.png";

import Software2 from "../../../assets/Service_&_Growth_Card_images/Software2.png";
import Growth2 from "../../../assets/Service_&_Growth_Card_images/Growth2.png";
function Services() {
  const services = [
    {
      title: "Software Services",
      description:
        "Build scalable software solutions, applications, SaaS products, AI solutions, and cloud systems designed to support your business.",
      icon: Code2,

      // Standby image
      image: Software2,

      // Hover image
      hoverImage: SoftwareServices
    },

    {
      title: "Growth Services",
      description:
        "Generate qualified opportunities and build predictable growth through targeted outreach, automation, and sales systems.",
      icon: Target,

      // Standby image
      image: Growth2,

      // Hover image
      hoverImage: GrowthServices
    }
  ];

  return (
    <section className="services-section">

      <div className="services-container">

        <div className="services-header">
          <h2>Our Services</h2>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
            >

              {/* Standby Image */}
              <div
                className="card-image card-image-default"
                style={{
                  backgroundImage: `url(${service.image})`
                }}
              ></div>

              {/* Hover Image */}
              <div
                className="card-image card-image-hover"
                style={{
                  backgroundImage: `url(${service.hoverImage})`
                }}
              ></div>

              {/* Overlay */}
              <div className="card-overlay"></div>

              {/* Icon */}
              <div className="service-icon">
                <service.icon size={24} />
              </div>

              {/* Content */}
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              {/* Arrow */}
              <a href="#">
                →
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;