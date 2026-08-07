import "./Services.css";

import {
  Code2,
  Layers,
  Bot,
  Smartphone,
  Cloud,
  Users,
  Target,
  Mail,
  CalendarCheck,
  Workflow
} from "lucide-react";


function Services() {


  const services = [
    {
      title: "Custom Software Development",
      description:
        "Build scalable software solutions tailored to your business needs with modern technologies.",
      icon: Code2
    },
    {
      title: "SaaS Product Development",
      description:
        "Transform ideas into powerful SaaS platforms designed for growth and scalability.",
      icon: Layers
    },
    {
      title: "AI Integration & Automation",
      description:
        "Automate workflows and unlock smarter business decisions with AI-powered solutions.",
      icon: Bot
    },
    {
      title: "Web & Mobile Applications",
      description:
        "Create high-performance web and mobile apps with seamless user experiences.",
      icon: Smartphone
    },
    {
      title: "Scalable Cloud Solutions",
      description:
        "Build secure and flexible cloud infrastructure that grows with your business.",
      icon: Cloud
    },
    {
      title: "Dedicated Development Teams",
      description:
        "Extend your capabilities with skilled engineers focused on your success.",
      icon: Users
    },
    {
      title: "B2B Lead Generation",
      description:
        "Generate qualified business opportunities through targeted growth strategies.",
      icon: Target
    },
    {
      title: "LinkedIn Prospecting & Outreach",
      description:
        "Connect with decision-makers through personalized LinkedIn campaigns.",
      icon: Users
    },
    {
      title: "Cold Email Campaigns",
      description:
        "Drive conversations with data-driven email campaigns built for conversions.",
      icon: Mail
    },
    {
      title: "Appointment Setting",
      description:
        "Turn prospects into qualified meetings with effective outreach systems.",
      icon: CalendarCheck
    },
    {
      title: "Sales Automation Systems",
      description:
        "Streamline sales processes with intelligent automation workflows.",
      icon: Workflow
    },
    {
      title: "Outbound Growth Strategies",
      description:
        "Build predictable growth engines that help businesses scale faster.",
      icon: Layers
    }
  ];


  return (

    <section className="services-section">

      <div className="services-container">


        <div className="services-header">

          <h2>
            Our Services
          </h2>


          <a href="#">
            See all our services →
          </a>

        </div>



        <div className="services-line"></div>



        <div className="services-grid">


          {services.map((service, index) => (

            <div className="service-card" key={index}>


              <div className="service-icon">
                <service.icon size={24} />
              </div>



              <h3>
                {service.title}
              </h3>



              <p>
                {service.description}
              </p>



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