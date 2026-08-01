import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Services from "./components/Services";
import Methodology from "./components/Methodology";
import BusinessModel from "./components/BusinessModel";
import About from "./components/About";
import IdealClient from "./components/IdealClient";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-grid fixed inset-0 -z-50 opacity-[0.06]" />
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,107,26,0.08),transparent)]" />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Services />
        <Methodology />
        <BusinessModel />
        <About />
        <IdealClient />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
