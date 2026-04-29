import { useState } from "react";

const faqData = [
  {
    question: "Living in Harmony with Nature",
    answer:
      "Rather than a science of experimentation or research, Ayurveda is what's known as a 'cognised' science. Highly enlightened ancient sages known as rishis attained higher states of consciousness and experienced the fundamental laws of nature that govern all of life.",
  },
  {
    question: "Are all ayurvedic retreats the same?",
    answer:
      "No. Every retreat has its own individual focuses. A good approach is making Ayurveda simple, practical and easily applicable for everyone, especially beginners.",
  },
  {
    question: "Is Ayurveda good for everyone?",
    answer:
      "Yes, Ayurveda can benefit everyone. Programs are customized to suit individual needs, helping promote healing, rejuvenation, and overall wellness.",
  },
  {
    question: "Is Ayurveda safe?",
    answer:
      "Yes, Ayurveda is safe when practiced traditionally. It focuses on natural healing through diet, lifestyle, and herbal remedies under proper guidance.",
  },
];

const AyurvedaFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#dcded2] py-16 md:py-24 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">

        {/* Top Label */}
        <p className="text-xs tracking-[3px] uppercase text-gray-600 mb-6">
          The Ayurvedic Approach to Health
        </p>

        {/* FAQ Box */}
        <div className="border border-gray-500">

          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-400">

              {/* Question Row */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left px-4 md:px-6 py-5"
              >
                <h3 className="text-lg md:text-xl font-serif text-gray-800">
                  {item.question}
                </h3>

                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-5 text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AyurvedaFAQ;