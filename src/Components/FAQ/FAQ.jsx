import React, { useState } from "react";
// ` faq data
const faqData = [
  {
    question: "What is Fanta?",
    answer:
      "Fanta is a popular fruit-flavored carbonated soft drink created by The Coca-Cola Company.",
  },
  {
    question: "What flavors does Fanta offer?",
    answer:
      "Fanta offers a variety of flavors including orange, grape, pineapple, and more!",
  },
  {
    question: "Is Fanta gluten-free?",
    answer:
      "Yes, Fanta is gluten-free, making it suitable for those with gluten intolerance.",
  },
  {
    question: "How many calories are in a can of Fanta?",
    answer: "A 12 oz can of Fanta Orange contains about 160 calories.",
  },
];

const FAQ = () => {
  // ` active click state
  const [active, setActive] = useState(null);

  // ` handle click
  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };
  // console.log(active);

  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 py-4">
      <h1 className="text-3xl font-bold text-center pb-8">
        Frequently Asked Questions
      </h1>

      {/* ` Loop through faq data */}
      {faqData.map((item, index) => (
        <div className="mb-4 py-4 border-b border-gray-300" key={index}>
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">{item.question}</h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>
          {/* show the answer  */}
          {active === index && <p className="text-gray-500">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
