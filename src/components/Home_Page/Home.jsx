import Hero from "./Hero/Hero";
import IntroSection from "./IntroSection/IntroSection";
import Services from "./Services/Services";
import CircularGallery from "./Circular_Gallery/Circular_Gallery";
import ClientsSection from "./ClientsSection/ClientsSection";
import SoftwareHiring from "./SoftwareHiring/SoftwareHiring";
import GrowthHiring from "./GrowthHiring/GrowthHiring";
import Philosphy from "./Philosphy/Philosphy";

function Home() {
    return (
        <>
            <Hero />

            <IntroSection />

            <Services />

            <CircularGallery />

            <ClientsSection />

            <SoftwareHiring />

            <GrowthHiring />

            <Philosphy />

        </>
    );
}

export default Home;