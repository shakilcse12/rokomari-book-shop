import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'; 

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is React.js and explain the concept of 'components' in React.",
      answer:
        "React.js is a JavaScript library for building user interfaces. The concept of 'components' in React refers to reusable, independent pieces of UI that can be combined to create complex interfaces. Components allow for easier management and organization of the UI structure."
    },
    {
      question: "What is JSX in React, and how does it work?",
      answer:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like syntax directly in React. It works by transforming the JSX code into JavaScript functions, which in turn create React elements."
    },
    {
      question: "What is the Virtual DOM, and how does React use it to optimize performance?",
      answer:
        "The Virtual DOM is a lightweight representation of the real DOM. React uses the Virtual DOM to optimize performance by making updates in memory, then comparing it with the real DOM (via a process called reconciliation), and only updating the parts that have changed."
    },
    {
      question: "Explain the concept of 'props' in React and how they are used.",
      answer:
        "'Props' (short for properties) are used to pass data from one component to another in React. They are immutable, meaning they cannot be changed by the receiving component."
    },
    {
      question: "What is 'state' in React, and how does it differ from props?",
      answer:
        "The 'state' in React refers to data that can change over time, and it is managed within the component. Unlike props, which are passed to the component, the state is internal and managed by the component itself."
    },
    {
      question: "Explain the useState hook and provide an example of how it is used.",
      answer:
        "`useState` is a React hook that allows you to add state to functional components. It returns an array with two values: the current state and a function to update it. Example: `const [count, setCount] = useState(0);`"
    },
    {
      question: "What is the purpose of the useEffect hook in React, and when would you use it?",
      answer:
        "`useEffect` is a React hook used to handle side effects such as fetching data, setting up subscriptions, or manually changing the DOM. It is called after the render is committed to the screen and can optionally clean up by returning a function."
    }
  ];

  return (
    <div className="container mx-auto px-12 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full text-left flex justify-between items-center px-6 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-100 transition duration-300 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <HiChevronUp className="text-blue-600" size={24} />
              ) : (
                <HiChevronDown className="text-blue-600" size={24} />
              )}
            </button>
            <Collapse isOpened={openIndex === index}>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
