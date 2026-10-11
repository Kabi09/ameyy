'use client';

import { useState } from 'react';
import styles from './ServiceFaq.module.scss';

export default function ServiceFaq({ items }) {
  const [openIndex, setOpenIndex] = useState(0); // open the first item by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqAccordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
          >
            <button
              type="button"
              id={headingId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={styles.faqQuestionButton}
              onClick={() => toggleItem(index)}
            >
              <span className={styles.questionText}>{item.question}</span>
              <span className={styles.chevronIcon} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={`${styles.faqAnswerWrapper} ${isOpen ? styles.expanded : ''}`}
            >
              <div className={styles.faqAnswerContent}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
