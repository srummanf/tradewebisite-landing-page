"use client";

import React, { useState } from "react";

// Define the FAQ type
interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  // State to manage which FAQ is currently open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    // Toggle the FAQ: if already open, close it; if closed, open it.
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQs array
  const faqs: FAQ[] = [
    {
      question: "What tools are included to simplify trading?",
      answer:
        "Our platform provides multi-timeframe support & resistance zones, AI-powered signals, and auto golden pocket calculations to help you trade with confidence.",
    },
    {
      question: "How does the trading confirmation system work?",
      answer:
        "The confirmation system uses advanced analytics and real-time data to validate buy and sell points, giving traders clear and actionable insights.",
    },
    {
      question: "Can beginners use this platform effectively?",
      answer:
        "Absolutely! Our platform is designed with simplicity in mind, offering intuitive tools and guidance to help traders of all levels elevate their performance.",
    },
    {
      question: "What results can I expect from using this trading platform?",
      answer:
        "Results may vary based on individual strategies, but many users have reported improved accuracy and profitability using our powerful confirmation tools.",
    },
    {
      question: "Is customer support available for trading assistance?",
      answer:
        "Yes, we offer 24/7 customer support to assist you with any questions or challenges you might face while using our platform.",
    },
  ];


  return (
    <section>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <p className="font-inter mb-2 text-center text-sm font-medium">FAQs</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <p className="font-inter mt-4 max-w-xl px-5 text-base font-light text-gray-500 lg:max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col">
          {faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <div className="relative my-3 w-full rounded-md px-12 py-8">
                <div className="max-w-2xl">
                  <h2
                    className="text-xl font-bold text-black cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </h2>
                  {openFAQ === index && (
                    <p className="font-inter mt-4 text-base font-light text-gray-500">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <button
                  className="absolute right-5 top-9 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white"></circle>
                    <path
                      d="M7.04688 11.9999H16.9469"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    {openFAQ !== index && (
                      <path
                        d="M12 7.05005V16.95"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>
              <div className="mr-4 ml-8 border border-gray-200"></div>
            </React.Fragment>
          ))}
        </div>
        <p className="font-inter mx-auto mt-12 text-center text-base text-gray-500">
          Can't find the answer you're looking for? Reach out to our
          <a href="#" className="text-black font-bold">
            {" "}
            customer support team.
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQs;
