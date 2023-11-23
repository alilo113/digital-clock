import { useState,  } from 'react';

export function DigitalClock() {
  const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' });
  let intervalId = null;

  const updateTime = () => {
    const newTime = new Date();
    const hours = newTime.getHours().toString().padStart(2, '0');
    const minutes = newTime.getMinutes().toString().padStart(2, '0');
    const seconds = newTime.getSeconds().toString().padStart(2, '0');
    setTime({ hours, minutes, seconds });
  };
  
  setInterval(updateTime, 1000);

  const stopClock = () => {
    clearInterval(intervalId);
  };

  const resetClock = () => {
    clearInterval(intervalId);
    setTime({ hours: '00', minutes: '00', seconds: '00' });
    intervalId = setInterval(updateTime, 1000);
  };

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
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md ml-4"
          onClick={resetClock}
        >
          Reset
        </button>
      </div>
    </div>
  );
}