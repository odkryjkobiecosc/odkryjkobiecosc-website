// components/StaggeredList.tsx

"use client";

import { useEffect, useRef, useState } from "react";

type StaggeredListProps = {
  items: string[];
};

export default function StaggeredList({
  items,
}: StaggeredListProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = listRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);

        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ul
      ref={listRef}
      className={`premiumList staggeredPremiumList ${
        isVisible ? "isVisible" : ""
      }`}
    >
      {items.map((item, index) => (
        <li
          key={item}
          className="staggeredPremiumItem"
          style={{
            transitionDelay: `${index * 150}ms`,
          }}
        >
          <span
            className="experienceNumber"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="experienceText">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
