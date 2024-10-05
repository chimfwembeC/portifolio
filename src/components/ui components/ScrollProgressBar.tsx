import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const updateScrollPercent = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const totalHeight = scrollHeight - clientHeight;
    const percent = (scrollTop / totalHeight) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPercent);
    return () => window.removeEventListener('scroll', updateScrollPercent);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-2 bg-gray-800"
      style={{ width: `${scrollPercent}%` }}
    >
      {/* Progress bar background */}
      <div className="h-full bg-orange-500" style={{ width: `${scrollPercent}%` }} />
    </div>
  );
};

export default ScrollProgressBar;
