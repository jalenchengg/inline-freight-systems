import LegalPage from "@/components/legal-page";

export const metadata = {
  title: "Terms of Service | Inline Freight Systems",
};

// PLACEHOLDER STRUCTURE — replace body text with the client's actual terms.
const SECTIONS = [
  {
    heading: "Services",
    body: "[Client's terms — description of brokerage services provided.]",
  },
  {
    heading: "Quotes and rates",
    body: "[Client's terms — quote validity period, what can change a rate (reweighs, accessorials, fuel), etc.]",
  },
  {
    heading: "Payment terms",
    body: "[Client's terms — invoice due dates, accepted methods, late payment policy.]",
  },
  {
    heading: "Claims and liability",
    body: "[Client's terms — cargo claim procedure, time limits, liability limitations. This section especially should be reviewed by their attorney.]",
  },
  {
    heading: "Governing law",
    body: "[Client's terms — typically the state of California.]",
  },
  {
    heading: "Contact",
    body: "Questions about these terms: [client email address].",
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" updated="[DATE]" sections={SECTIONS} />;
}