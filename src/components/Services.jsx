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

import CustomSoftwareDevelopment from "../assets/CardPictures/CustomSoftwareDevelopment.jpg";
import SaasProductDevelopment from "../assets/CardPictures/SaasProductDevelopment.jpg";
import AIIntegrationAndAutomation from "../assets/CardPictures/AIIntegrationAndAutomation.jpg";
import WebMobileApplication from "../assets/CardPictures/Web&MobileApplicationDevelopment.jpg";
import ScalableCloudSolutions from "../assets/CardPictures/ScalableCloudSolutions.jpg";
import DedicatedDevelopmentTeams from "../assets/CardPictures/DedicatedDevelopmentTeams.jpg";
import B2BLeadGeneration from "../assets/CardPictures/B2B Lead Generation.jpg";
import LinkedinProspecting from "../assets/CardPictures/Linkedin.png";
import ColdEmailCampaign from "../assets/CardPictures/ColdEmail.jpg";
import AppointmentSetting from "../assets/CardPictures/Appointment.webp";
import SalesAutomation from "../assets/CardPictures/SalesAutomation.jpg";
import OutboundGrowth from "../assets/CardPictures/OutboundGrowth.jpeg";

function Services() {

const services = [

{
title: "Custom Software Development",
description:
"Build scalable software solutions tailored to your business needs with modern technologies.",
icon: Code2,
image: CustomSoftwareDevelopment
},

{
title: "SaaS Product Development",
description:
"Transform ideas into powerful SaaS platforms designed for growth and scalability.",
icon: Layers,
image: SaasProductDevelopment
},

{
title: "AI Integration & Automation",
description:
"Automate workflows and unlock smarter business decisions with AI-powered solutions.",
icon: Bot,
image: AIIntegrationAndAutomation
},

{
title: "Web & Mobile Applications",
description:
"Create high-performance web and mobile apps with seamless user experiences.",
icon: Smartphone,
image: WebMobileApplication
},

{
title: "Scalable Cloud Solutions",
description:
"Build secure and flexible cloud infrastructure that grows with your business.",
icon: Cloud,
image: ScalableCloudSolutions
},

{
title: "Dedicated Development Teams",
description:
"Extend your capabilities with skilled engineers focused on your success.",
icon: Users,
image: DedicatedDevelopmentTeams
},

{
title: "B2B Lead Generation",
description:
"Generate qualified business opportunities through targeted growth strategies.",
icon: Target,
image: B2BLeadGeneration
},

{
title: "LinkedIn Prospecting & Outreach",
description:
"Connect with decision-makers through personalized LinkedIn campaigns.",
icon: Users,
image: LinkedinProspecting
},

{
title: "Cold Email Campaigns",
description:
"Drive conversations with data-driven email campaigns built for conversions.",
icon: Mail,
image: ColdEmailCampaign
},

{
title: "Appointment Setting",
description:
"Turn prospects into qualified meetings with effective outreach systems.",
icon: CalendarCheck,
image: AppointmentSetting
},

{
title: "Sales Automation Systems",
description:
"Streamline sales processes with intelligent automation workflows.",
icon: Workflow,
image: SalesAutomation
},

{
title: "Outbound Growth Strategies",
description:
"Build predictable growth engines that help businesses scale faster.",
icon: Layers,
image: OutboundGrowth
}

];

return (

<section className="services-section">


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

<div 
className="service-card" 
key={index}
>


<div 
className="card-image"
style={{
backgroundImage: `url(${service.image})`
}}
></div>


<div className="card-overlay"></div>



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

</section>

);

}

export default Services;