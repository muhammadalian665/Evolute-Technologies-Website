import Navbar from "./components/NavBar/Navbar";

import Hero from "./components/Home_Page/Hero/Hero";
import IntroSection from "./components/IntroSection";
import ClientsSection from "./components/Home_Page/ClientsSection/ClientsSection";
import Services from "./components/Services";
import SoftwareHiring from "./components/SoftwareHiring";
import GrowthHiring from "./components/Home_Page/GrowthHiring/GrowthHiring";
import Philosphy from "./components/Philosphy";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
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