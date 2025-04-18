'use client';

import { useEffect, useState } from 'react';

const words = ['Developer', 'ML Engineer', 'Freelancer', 'Creator'];

export default function TypewriterOverrideEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [tempChar, setTempChar] = useState('');
  const [asciiIndex, setAsciiIndex] = useState(97); // starts from 'a'
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, 300);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCharIndex(0);
        setAsciiIndex(97);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      const word = words[wordIndex];
      const targetChar = word[charIndex];

      if (!targetChar) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      }

      // ✅ Handle space directly (no animation)
      if (targetChar === ' ') {
        setCurrentText((prev) => prev + ' ');
        setCharIndex((prev) => prev + 1);
        setAsciiIndex(97);
        setTempChar('');
        return;
      }

      if (asciiIndex <= targetChar.toLowerCase().charCodeAt(0)) {
        const nextChar = String.fromCharCode(asciiIndex);
        setTempChar(nextChar);

        const timeout = setTimeout(() => {
          setAsciiIndex((prev) => prev + 1);
        }, 100);

        if (nextChar === targetChar.toLowerCase()) {
          setTimeout(() => {
            setCurrentText((prev) => prev + targetChar);
            setCharIndex((prev) => prev + 1);
            setAsciiIndex(97);
            setTempChar('');
          }, 150);
        }

        return () => clearTimeout(timeout);
      }
    }
  }, [asciiIndex, charIndex, isDeleting, currentText, wordIndex]);

  return (
    <p className="text-4xl sm:text-4xl font-semibold text-white mt-24">
      I am a <span className="text-pink-300">{currentText}{tempChar}</span>
      <span className="blinking-cursor text-6xl text-green-900">|</span>
    </p>
  );
}
