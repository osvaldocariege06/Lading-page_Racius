
import HomePage from "./components/HomePage";
import { ConsultingVideoSection } from "./components/ConsultingVideoSection";
import { PartnersSection } from "./components/PartnersSection";
import { AboutUs } from "./components/boutUs";
import { ServicesSection } from "./components/ServicesSection";
import CarouselServices from "./components/CarouselServices";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";







export default function Home() {
  return (
    <div>
      <HomePage />
      <PartnersSection />
      <ConsultingVideoSection />
      <AboutUs />
      <ServicesSection />
      <CarouselServices />
      <LocationMap />
      <ContactSection />
      <Footer />
     

    </div>
  );
}
