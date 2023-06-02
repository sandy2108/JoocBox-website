import React, { useEffect, useState } from "react";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}H:${minutes}M:${seconds}S`;
  };

  return (
    <div className="time-display">
      <p>{formatTime(currentTime)}</p>
    </div>
  );
};

export default TimeDisplay;
