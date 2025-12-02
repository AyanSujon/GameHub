import React, { useState } from "react";

const faqs = [
  {
    question: "What is GameHub?",
    answer: "GameHub is a modern and interactive online game library where users can discover, explore, and support game developers. You can browse popular and indie games, view detailed game information, rate your favorites, and manage your profile, all in a sleek, responsive interface."
  },
  {
    question: "How do I create an account?",
    answer: "Click on the 'Sign Up' button at the top-right corner of the website, enter your email, username, and password, and confirm your email address. Once verified, you can start using all GameHub features."
  },
  {
    question: "Can I rate and review games?",
    answer: "Yes! Once you are logged in, you can rate games using the star system and leave detailed reviews. Your feedback helps other gamers and supports the developers."
  },
  {
    question: "How do I find new games?",
    answer: "You can explore our curated sections such as 'Popular Games,' 'Trending Indie Games,' and use the search or category filters to find new titles. GameHub also recommends games based on your interests and play history."
  },
  {
    question: "Can I save games to my personal list?",
    answer: "Yes! You can create a personal library or wishlist by clicking the 'Add to Library' or 'Add to Wishlist' buttons on each game page. This helps you keep track of games you want to play later."
  },
  {
    question: "Is GameHub free to use?",
    answer: "GameHub is free to browse, rate, and review games. Certain premium features, such as exclusive content or early access games, may require subscriptions or purchases."
  },
  {
    question: "How do I support game developers?",
    answer: "You can support developers by rating their games, leaving reviews, sharing their games on social media, or purchasing games or in-game items directly through GameHub links."
  },
  {
    question: "Is my data safe on GameHub?",
    answer: "Absolutely. GameHub uses industry-standard encryption and privacy protocols to ensure your data and account information remain secure."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
        <div className="divider py-10 text-primary uppercase font-bold text-3xl">Frequently Asked Questions</div>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 font-semibold text-lg transition-colors duration-300 hover-black"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
