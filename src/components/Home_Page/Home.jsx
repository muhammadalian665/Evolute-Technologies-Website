import Hero from "./Hero/Hero";
import IntroSection from "./IntroSection/IntroSection";
import ClientsSection from "./ClientsSection/ClientsSection";
import Services from "./Services/Services";
import SoftwareHiring from "./SoftwareHiring/SoftwareHiring";
import GrowthHiring from "./GrowthHiring/GrowthHiring";
import Philosphy from "./Philosphy/Philosphy";

function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      
      <Services />
      <ClientsSection />
      <SoftwareHiring />
      <GrowthHiring />
      <Philosphy />
    </>
  );
}

export default Home;