'use client';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 py-24 bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 sm:p-12 backdrop-blur">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-100 mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-slate-400 mb-10">
          Last updated: August 6, 2025
        </p>

        <div className="space-y-10 text-base leading-relaxed">
          <Section title="1. Introduction">
            Welcome to <strong>VendorVerse</strong>. Your privacy is critically important to us.
            This policy explains how we collect, use, and protect your personal information when you use our platform.
          </Section>

          <Section title="2. Information We Collect">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>Personal Information:</strong> Name, email, phone number, billing and shipping addresses.</li>
              <li><strong>Account Information:</strong> Username, encrypted password, and profile details.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, access time, and page interactions.</li>
              <li><strong>Transaction Data:</strong> Order history and payment details (no card data stored).</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Data">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Manage your account and orders</li>
              <li>Send confirmations, updates, and support messages</li>
              <li>Personalize your VendorVerse experience</li>
              <li>Improve our platform and prevent fraud</li>
            </ul>
          </Section>

          <Section title="4. Sharing of Information">
            <p>We do not sell your data. We only share it with:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Trusted service providers (e.g., payments, delivery)</li>
              <li>Law enforcement if legally required</li>
              <li>Analytics tools (only non-identifiable data)</li>
            </ul>
          </Section>

          <Section title="5. Data Security">
            We use industry-standard security to protect your data. While we do our best, no system is 100% secure.
            Please safeguard your account credentials.
          </Section>

          <Section title="6. Your Rights">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Access and update your personal data</li>
              <li>Request deletion or correction</li>
              <li>Withdraw consent or request data export</li>
            </ul>
          </Section>

          <Section title="7. Cookies">
            We use cookies to improve functionality and performance. You can manage cookies in your browser settings.
          </Section>

          <Section title="8. Third-Party Links">
            Our platform may link to other websites. We are not responsible for their privacy practices or content.
          </Section>

          <Section title="9. Policy Changes">
            We may update this policy occasionally. Changes will appear on this page with a new update date.
          </Section>

          <Section title="10. Contact Us">
            If you have any questions, contact us at:
            <br />
            <a
              href="mailto:privacy@vendorverse.com"
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
