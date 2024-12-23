import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");

  // Function to format the time
  const formatTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour time to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle 0 (midnight) case
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes} ${ampm}`;
  };

  useEffect(() => {
    // Set initial time
    setCurrentTime(formatTime());

    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);

    // Clean up timer
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
};

export default Clock;
