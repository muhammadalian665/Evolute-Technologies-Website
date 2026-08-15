import AboutHero from "./About_Hero/AboutHero";
import ServiceCTA from "./ServiceCTA/ServiceCTA";
import CEOMessage from "./CEO_Message/CEO_Message";
import OurVision from "./OurVision/OurVision";
import OurImpactfulMission from "./Our_Impactful_Mission/Our_Impactful_Mission";
import HubOfExpertise from "./Hub_of_Expertise/Hub_of_Expertise";
import CustomizedSolutions from "./Customized_Solutions_Tigger/Customized_Solutions";
import GotAProject from "./Got_A_Project/Got_A_Project";
import HaveAQuery from "./Have_A_Query/Have_A_Query";

function AboutPage() {
  return (
    <>
      <AboutHero />
      <ServiceCTA />
      <CEOMessage />
      <OurVision />
      <OurImpactfulMission />
      <HubOfExpertise />
      
      <CustomizedSolutions />
      <GotAProject />
      <HaveAQuery />
    </>
  );
}

export default AboutPage;