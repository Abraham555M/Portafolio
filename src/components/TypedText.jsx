import { useState, useEffect } from 'react';

const TypedText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span
      className="font-mono text-base font-semibold text-gray-400 break-words sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
    >
      {displayedText}
      <span className="custom-cursor">|</span>
    </span>
  );
};

export default TypedText;
