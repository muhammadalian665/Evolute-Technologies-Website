import AboutHero from "./About_Hero/AboutHero";
import ServiceCTA from "./ServiceCTA/ServiceCTA";
import CEOMessage from "./CEO_Message/CEO_Message";
import OurVision from "./OurVision/OurVision";
import OurImpactfulMission from "./Our_Impactful_Mission/Our_Impactful_Mission";
import HubOfExpertise from "./Hub_of_Expertise/Hub_of_Expertise";
import CompanyMetrics from "./Company_Metrics/Company_Metrics";
import CustomizedSolutions from "./Customized_Solutions_Tigger/Customized_Solutions";
import GotAProject from "./Got_A_Project/Got_A_Project";

function AboutPage() {
  return (
    <>
      <AboutHero />
      <ServiceCTA />
      <CEOMessage />
      <OurVision />
      <OurImpactfulMission />
      <HubOfExpertise />
      <CompanyMetrics />
      <CustomizedSolutions />
      <GotAProject />
    </>
  );
}

export default AboutPage;