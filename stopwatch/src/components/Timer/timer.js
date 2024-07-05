import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer;

    const startTimer = () => {
      timer = setTimeout(() => {
        setElapsedTime(prevTime => prevTime + 1);
        startTimer();
      }, 1000);
    };

    if (isRunning) {
      startTimer();
    } else {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const handleReset = () => {
    setElapsedTime(0);
  };

  return (
    <div className="timer-container">
    <h2 className="timer-text">Elapsed Time:</h2>
    <div className="timer-time">{elapsedTime} seconds</div>
    <div className="timer-buttons">
      <button className="timer-button" onClick={handleStartPause}>{isRunning ? 'Pause' : 'Start'}</button>
      <button className="timer-button" onClick={handleStop}>Stop</button>
      <button className="timer-button" onClick={handleReset}>Reset</button>
    </div>
  </div>
  );
};

export default Timer;
