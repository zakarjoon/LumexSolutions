import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Benefits />
        <Gallery />
        <Testimonials />
        <About />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
