import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "Contact | Inline Freight Systems",
  description: "Get in touch with Inline Freight Systems — questions, quotes, and support.",
};

export default function ContactPage() {
  return (
    <div style={{ background: brand.base }}>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-12">
        {/* Left: direct info */}
        <div className="lg:col-span-2">
          <p className="mono text-xs tracking-[0.25em] mb-4" style={{ color: brand.accent }}>
            CONTACT
          </p>
          <h1 className="display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Talk to a real person.
          </h1>
          <p className="mb-10" style={{ color: brand.steel }}>
            Questions about a shipment, a quote, or working with us — send a message or reach us
            directly.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="mono text-xs tracking-widest mb-1" style={{ color: brand.steel }}>
                EMAIL
              </p>
              <a href="mailto:info@inlinefreightsystems.com" className="text-white hover:underline">
                info@inlinefreightsystems.com
              </a>
            </div>
            <div>
              <p className="mono text-xs tracking-widest mb-1" style={{ color: brand.steel }}>
                PHONE
              </p>
              <a href="tel:+10000000000" className="text-white hover:underline">
                (000) 000-0000
              </a>
            </div>
            <div>
              <p className="mono text-xs tracking-widest mb-1" style={{ color: brand.steel }}>
                OFFICE
              </p>
              <p className="text-white">
                Street address here
                <br />
                City, CA 00000
              </p>
            </div>
            <div>
              <p className="mono text-xs tracking-widest mb-1" style={{ color: brand.steel }}>
                HOURS
              </p>
              <p className="text-white">Mon–Fri, 8am–5pm PT</p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}