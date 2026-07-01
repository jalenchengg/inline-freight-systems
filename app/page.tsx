import Header from "@/components/header";
import Hero from "@/components/hero";
import Ticker from "@/components/ticker";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import StatsBand from "@/components/stats-band";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import { brand } from "@/lib/brand";

export default function Home() {
  return (
    <div style={{ background: brand.base }}>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <HowItWorks />
        <StatsBand />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}