
import HomePage from "./components/HomePage";
import { ConsultingVideoSection } from "./components/ConsultingVideoSection";
import { PartnersSection } from "./components/PartnersSection";
import { AboutUs } from "./components/AboutUs";
import { ServicesSection } from "./components/ServicesSection";
import CarouselServices from "./components/CarouselServices";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import MoreServicesCarousel from "./components/MoreServicesCarousel";
import NavBar from "./components/NavBar";


export default function Home() {
  return (
    <div className="bg-black">

      <NavBar />
      <HomePage />
      <AboutUs/>
      <ServicesSection />
      <CarouselServices />
      <MoreServicesCarousel />
      <ConsultingVideoSection />
      <LocationMap />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
