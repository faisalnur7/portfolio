import React, { useEffect, useRef } from "react";

const Bounce = ({ children, threshold = 0.5, className = "" }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            target.classList.add("bounce-once");

            // Remove the class after animation completes
            target.addEventListener(
              "animationend",
              () => {
                target.classList.remove("bounce-once");
              },
              { once: false }
            );
          }
        });
      },
      { threshold } // Trigger when the specified portion of the element is visible
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect(); // Clean up on unmount
  }, [threshold]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default Bounce;
