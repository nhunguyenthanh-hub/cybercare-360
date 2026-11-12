import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndividualInsurance } from './components/IndividualInsurance';
import { BusinessInsurance } from './components/BusinessInsurance';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <IndividualInsurance />
        <BusinessInsurance />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
