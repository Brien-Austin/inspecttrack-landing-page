"use client";
import React, { useEffect, useState } from "react";

interface TextRotatorProps {
  texts: string[];
  interval: number;
}

const TextRotator: React.FC<TextRotatorProps> = ({ texts, interval }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center lg:text-left leading-tight md:leading-tight lg:leading-tight tracking-tight break-words">
        {texts[index]}
      </h1>
    </div>
  );
};

export default TextRotator;
