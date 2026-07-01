import LegalPage from "@/components/legal-page";

export const metadata = {
  title: "Privacy Policy | Inline Freight Systems",
};

// PLACEHOLDER STRUCTURE — replace body text with the client's actual policy.
const SECTIONS = [
  {
    heading: "Information we collect",
    body: "[Client's policy text — typically: contact details submitted through forms (name, email, phone, company), shipment details provided for quotes, and standard website analytics data.]",
  },
  {
    heading: "How we use your information",
    body: "[Client's policy text — typically: to respond to quote and contact requests, arrange transportation services, send invoices, and improve the website.]",
  },
  {
    heading: "Sharing of information",
    body: "[Client's policy text — typically: shared with carriers and agents only as needed to move your freight; never sold to third parties.]",
  },
  {
    heading: "Data retention",
    body: "[Client's policy text]",
  },
  {
    heading: "Your rights",
    body: "[Client's policy text — access, correction, deletion requests, and how to make them.]",
  },
  {
    heading: "Contact",
    body: "Questions about this policy: [client email address].",
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="[DATE]" sections={SECTIONS} />;
}