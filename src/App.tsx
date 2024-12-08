import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProfileSection from "./components/ProfileSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { DividerIcon } from "./components/Icons";
import ServicesOne from "./components/ServicesOne";
import ServicesTwo from "./components/ServicesTwo";
import ServicesThree from "./components/ServicesThree";
import RepeatingTextStrip from "./components/RepeatingStrip";

function App() {
  return (
    <div className="min-h-screen bg-purple-primary">
      <Navbar />
      <HeroSection />
      <RepeatingTextStrip />
      <ServicesOne />
      <DividerIcon />
      <ServicesTwo />
      <DividerIcon />
      <ServicesThree />
      <DividerIcon />
      <WhyChooseUs />
      <DividerIcon />
      <ProfileSection />
      <DividerIcon />
      <ContactForm />
      <DividerIcon />
      <Footer />
    </div>
  );
}

export default App;
