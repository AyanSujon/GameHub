import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h1>

      <div className="max-w-4xl mx-auto space-y-6 text-gray-200">
        <p>
          Welcome to <strong>GameHub</strong>. By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">1. Acceptance of Terms</h2>
        <p>
          By using GameHub, you accept these terms in full. If you disagree with any part, you must not use the website.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">2. User Accounts</h2>
        <p>
          To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">3. Use of the Website</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You may use the website only for lawful purposes.</li>
          <li>Do not attempt to hack, disrupt, or damage GameHub or its servers.</li>
          <li>Respect other users; harassment or abuse is strictly prohibited.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">4. Intellectual Property</h2>
        <p>
          All content on GameHub, including game information, logos, and designs, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use content without proper authorization.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">5. Third-Party Links</h2>
        <p>
          GameHub may provide links to third-party websites. We are not responsible for the content, privacy practices, or policies of those sites. Use them at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">6. Limitation of Liability</h2>
        <p>
          GameHub is provided "as is." We are not liable for any damages arising from your use of the website, including loss of data, revenue, or any indirect, incidental, or consequential damages.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">7. Termination</h2>
        <p>
          We may suspend or terminate your access to GameHub if you violate these Terms & Conditions or engage in prohibited conduct.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">8. Changes to Terms</h2>
        <p>
          GameHub reserves the right to update or modify these Terms & Conditions at any time. Changes will be posted on this page, and continued use constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">9. Governing Law</h2>
        <p>
          These Terms & Conditions are governed by and construed in accordance with the laws of your country. Any disputes will be resolved under the jurisdiction of the applicable courts.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">10. Contact Us</h2>
        <p>
          For any questions about these Terms & Conditions, please contact us at: <br />
          <span className="font-medium text-red-500">support@gamehub.com</span>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
