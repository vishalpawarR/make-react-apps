import React, { useRef, useState } from 'react';
import './App.css';

const timerTime = 25;

function addPad(timer) {
  return timer.toString().padStart(2 , 0);
}

export default function App() {
  const [title, setTitle] = useState("Let the countdown begin!!!")
  const [timer, setTimer] = useState(timerTime * 60);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  function startTimer() {
    setIsRunning(true);
    if(intervalRef.current !== null) return;
    setTitle(`You're doing great!`)
    intervalRef.current = setInterval(() => {
      setTimer(timer => {
        if(timer>=1) return timer - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    setIsRunning(false);
    if(intervalRef.current === null) return;
    setTitle(`Keep it up!`);
    clearInterval(intervalRef.current);
    intervalRef.current = null; //To make restart the timer when the timer stops
  }

  function resetTimer() {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTitle(`Ready to go another round?`);
    setTimer(timerTime * 60);
    intervalRef.current = null; //To make restart the timer when the timer stops
  }

  const minutes = addPad(Math.floor(timer / 60));
  const seconds = addPad(timer - minutes * 60);

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        {isRunning && <button onClick={resetTimer}>Reset</button>}
      </div>
    </div>
  );
}
