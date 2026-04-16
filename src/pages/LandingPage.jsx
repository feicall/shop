import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Ticker from '../components/sections/Ticker';
import Proof from '../components/sections/Proof';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import Benefits from '../components/sections/Benefits';
import Offer from '../components/sections/Offer';
import Testimonials from '../components/sections/Testimonials';
import Faq from '../components/sections/Faq';
import CallToAction from '../components/sections/CallToAction';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/ui/BackToTop';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Proof />
      <Problem />
      <Solution />
      <Benefits />
      <Offer />
      <Testimonials />
      <Faq />
      <CallToAction />
      <Footer />
      <BackToTop />
    </>
  );
}
