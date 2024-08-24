import React, { useState, useEffect } from 'react';

export function PomodoroClock() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Start with 25 minutes in seconds
  const [isActive, setIsActive] = useState(false); // Track if the timer is active
  const [isBreak, setIsBreak] = useState(false); // Track if it's break time

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      if (isBreak) {
        setTimeLeft(25 * 60); // Reset to 25 minutes
        setIsBreak(false); // Switch to work time
      } else {
        setTimeLeft(5 * 60); // Switch to 5-minute break
        setIsBreak(true);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(25 * 60); // Reset to 25 minutes
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="text-white font-serif text-5xl text-center">
        <div>{isBreak ? 'Break Time!' : 'Work Time!'}</div>
        <div className="mt-4">{formatTime(timeLeft)}</div>
        <button
          className={`${
            isActive ? 'bg-red-500' : 'bg-green-500'
          } text-white px-4 py-2 rounded-md mt-4`}
          onClick={toggleTimer}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4 ml-4"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
}