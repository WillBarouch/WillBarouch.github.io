'use client';
import React, { useState, useEffect } from 'react';

const ScrollDownIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowIndicator(!scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${
        showIndicator ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
};

export default ScrollDownIndicator;
