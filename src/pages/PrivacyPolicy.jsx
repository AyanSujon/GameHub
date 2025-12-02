import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

      <div className="max-w-4xl mx-auto space-y-6 text-gray-200">
        <p>
          At <strong>GameHub</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Personal information you provide (name, email, username).</li>
          <li>Account activity such as ratings, reviews, and game libraries.</li>
          <li>Technical data including IP address, browser type, and device information.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To provide and maintain our services, including account management.</li>
          <li>To personalize your experience and recommend games.</li>
          <li>To communicate updates, promotions, and important notices.</li>
          <li>To improve our website functionality and security.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">3. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. We may share data with trusted third-party service providers to help operate the website or provide services, always under strict confidentiality.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">4. Cookies & Tracking</h2>
        <p>
          GameHub uses cookies and similar tracking technologies to enhance your browsing experience, remember preferences, and analyze site traffic. You can control cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">5. Data Security</h2>
        <p>
          We implement industry-standard measures to protect your data from unauthorized access, disclosure, or misuse. However, no method is completely secure, so please use a strong password and keep your account information private.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">6. Your Rights</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Access and update your personal information.</li>
          <li>Request deletion of your account and data.</li>
          <li>Opt-out of marketing communications.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page, and we encourage you to review it periodically.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">8. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at: <br/>
          <span className="font-medium text-red-500">support@gamehub.com</span>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
