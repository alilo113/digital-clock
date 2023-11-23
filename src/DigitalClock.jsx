import React, { useState, useEffect } from 'react';

export function DigitalClock() {
  const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' });
  const [intervalId, setIntervalId] = useState(null); // State to hold interval ID

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date();
      const hours = newTime.getHours().toString().padStart(2, '0');
      const minutes = newTime.getMinutes().toString().padStart(2, '0');
      const seconds = newTime.getSeconds().toString().padStart(2, '0');
      setTime({ hours, minutes, seconds });
    }, 1000); 

    setIntervalId(interval);

    return () => clearInterval(interval);
  }, []);

  function stopClock() {
    clearInterval(intervalId);
  }

  const { hours, minutes, seconds } = time;

  return (
    <div className="bg-blue-900 h-screen flex justify-center items-center">
      <div className="con text-white font-serif text-5xl">
        <span id="hou">{hours}</span>
        <span className="mx-1">:</span>
        <span id="min">{minutes}</span>
        <span className="mx-1">:</span>
        <span id="sec">{seconds}</span>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
          onClick={stopClock}
        >
          Stop
        </button>
      </div>
    </div>
  );
}