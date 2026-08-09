import Navbar from "./components/NavBar/Navbar";

import Hero from "./components/Home_Page/Hero/Hero";
import TrustBar from "./components/Home_Page/TrustBar/TrustBar";
import IntroSection from "./components/Home_Page/IntroSection/IntroSection";
import ClientsSection from "./components/Home_Page/ClientsSection/ClientsSection";
import Services from "./components/Home_Page/Services/Services";
import SoftwareHiring from "./components/Home_Page/SoftwareHiring/SoftwareHiring";
import GrowthHiring from "./components/Home_Page/GrowthHiring/GrowthHiring";
import Philosphy from "./components/Home_Page/Philosphy/Philosphy";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <TrustBar />
      <IntroSection />
      <ClientsSection />
      <Services />
      <SoftwareHiring />
      <GrowthHiring />
      <Philosphy />

      <Footer />
    </>
  );
}

export default App;