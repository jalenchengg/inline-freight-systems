import Header from "@/components/header";
import Footer from "@/components/footer";
import { brand } from "@/lib/brand";

type Section = {
  heading: string;
  body: string;
};

export default function LegalPage(props: {
  title: string;
  updated: string;
  sections: Section[];
}) {
  const { title, updated, sections } = props;

  return (
    <div style={{ background: brand.base }}>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="display text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
          {title}
        </h1>
        <p className="mono text-xs tracking-widest mb-12" style={{ color: brand.steel }}>
          LAST UPDATED: {updated}
        </p>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="display text-xl font-bold text-white mb-3">{s.heading}</h2>
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: brand.steel }}>
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}