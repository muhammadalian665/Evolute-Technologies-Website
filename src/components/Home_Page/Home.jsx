import Hero from "./Hero/Hero";
import TrustBar from "./TrustBar/TrustBar";
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
      <TrustBar />
      <IntroSection />
      <ClientsSection />
      <Services />
      <SoftwareHiring />
      <GrowthHiring />
      <Philosphy />
    </>
  );
}

export default Home;