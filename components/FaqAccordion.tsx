// components/FaqAccordion.tsx

"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({
  items,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <div className="faqGrid">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            className={`faqItem ${isOpen ? "isOpen" : ""}`}
            key={item.question}
          >
            <button
              type="button"
              className="faqQuestion"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{item.question}</span>

              <span className="faqToggleIcon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              className="faqAnswer"
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
