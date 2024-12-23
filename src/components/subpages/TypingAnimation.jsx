import React, { useState, useEffect } from "react";

const TypingAnimation = ({ texts, color }) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const typingSpeed = 100;
  const deletingSpeed = 50;

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = texts[textIndex];

      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentFullText.slice(0, currentText.length - 1));
        } else {
          // Move to next text
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts]);

  return (
    <span className="typing-container">
      <span id="typing-text" className={color}>{currentText}</span>
      <span id="cursor !text-chocolate">_</span>
    </span>
  );
};

export default TypingAnimation;