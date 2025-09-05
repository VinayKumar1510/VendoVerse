'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 py-24 bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 sm:p-12 backdrop-blur">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-100 mb-6">
          Terms & Conditions
        </h1>
        <p className="text-center text-slate-400 mb-10">
          Last updated: August 6, 2025
        </p>

        <div className="space-y-10 text-base leading-relaxed">
          <Section title="1. Acceptance of Terms">
            By using VendorVerse, you agree to comply with these Terms and Conditions. If you disagree, please do not use our services.
          </Section>

          <Section title="2. Account Responsibilities">
            You are responsible for keeping your login information secure and for all activities under your account. Notify us immediately of any unauthorized access.
          </Section>

          <Section title="3. Use of the Platform">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Do not use VendorVerse for illegal purposes.</li>
              <li>Do not interfere with the platform&apos;s security or operations.</li>
              <li>Respect vendors, customers, and all users.</li>
            </ul>
          </Section>

          <Section title="4. Product Listings & Transactions">
            <p>
              VendorVerse is a marketplace. We are not responsible for the quality, safety, legality, or delivery of any items sold by vendors.
              Each vendor is solely responsible for their listings and transactions.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            All content on VendorVerse (logos, UI design, graphics, etc.) is protected and may not be used without written permission.
          </Section>

          <Section title="6. Termination of Accounts">
            We reserve the right to suspend or terminate accounts that violate these terms without prior notice.
          </Section>

          <Section title="7. Modifications to the Service">
            We may update or change features at any time to improve our services. Continued use after changes means you accept them.
          </Section>

          <Section title="8. Limitation of Liability">
            VendorVerse is not liable for any indirect, incidental, or consequential damages arising from the use of the platform.
          </Section>

          <Section title="9. Governing Law">
            These terms are governed by the laws of India. Any disputes will be handled in courts within jurisdiction.
          </Section>

          <Section title="10. Contact Us">
            If you have any questions about these Terms, contact us at:
            <br />
            <a
              href="mailto:support@vendorverse.com"
              className="text-indigo-400 underline hover:text-indigo-300"
            >
              vinaysharaya1@gmail.com
            </a>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 shadow-sm">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-3">{title}</h2>
      <div className="text-slate-300">{children}</div>
    </section>
  );
}
