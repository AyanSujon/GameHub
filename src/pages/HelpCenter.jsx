import React, { useState } from "react";

const helpTopics = [
  {
    title: "Account & Profile",
    content: "Learn how to create, manage, and customize your GameHub account. Includes password reset, profile editing, and account security tips."
  },
  {
    title: "Finding Games",
    content: "Discover how to search for games, filter by category, browse popular titles, and explore indie gems on GameHub."
  },
  {
    title: "Ratings & Reviews",
    content: "Guidelines on rating and reviewing games, how reviews are displayed, and tips for writing helpful feedback for the community."
  },
  {
    title: "Purchases & Support",
    content: "Instructions on buying games, redeeming codes, handling refunds, and contacting support for any purchase-related issues."
  },
  {
    title: "Technical Issues",
    content: "Troubleshoot common technical problems, including login issues, browser compatibility, loading errors, and performance optimization tips."
  },
  {
    title: "Privacy & Security",
    content: "Information on how your data is collected, used, and protected. Learn about privacy settings and keeping your account secure."
  }
];

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleTopic = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-8">Help Center</h1>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8">
        Welcome to GameHub Help Center! Browse topics below to find answers to common questions or submit a request for personalized support.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {helpTopics.map((topic, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 font-semibold text-lg transition-colors duration-300 hover-black"
              onClick={() => toggleTopic(index)}
            >
              {topic.title}
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-800 border-t border-gray-700 text-gray-200">
                {topic.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="mb-4">
          Still need help? Contact our support team.
        </p>
        <a
          href="mailto:support@gamehub.com"
          className="inline-block px-6 py-3 font-semibold rounded-lg hover-red transition-colors duration-300"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default HelpCenter;
