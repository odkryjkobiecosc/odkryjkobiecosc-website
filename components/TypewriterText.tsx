// components/TypewriterText.tsx

"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterTextProps = {
  text: string;
  speed?: number;
};

export default function TypewriterText({
  text,
  speed = 42,
}: TypewriterTextProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setStarted(true);
      setVisibleLength(text.length);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setStarted(true);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (!started) return;
    if (visibleLength >= text.length) return;

    const timeout = window.setTimeout(() => {
      setVisibleLength((current) => current + 1);
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [started, visibleLength, text.length, speed]);

  const finished = visibleLength >= text.length;

  return (
    <span
      ref={wrapperRef}
      className="typewriterShell"
      aria-label={text}
    >
      <span className="typewriterMeasure" aria-hidden="true">
        {text}
      </span>

      <span className="typewriterVisible" aria-hidden="true">
        {text.slice(0, visibleLength)}

        {started && !finished && (
          <span className="typewriterCursor">|</span>
        )}
      </span>
    </span>
  );
}
