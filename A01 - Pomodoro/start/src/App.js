import React, { useRef, useState } from 'react';
import './App.css';

const timerTime = 25;

function addPad(timer) {
  return timer.toString().padStart(2 , 0);
}

export default function App() {
  const [title, setTitle] = useState("Let the countdown begin!!!")
  const [timer, setTimer] = useState(5);

  const [timer, setTimer] = useState(timerTime * 60);
  const intervalRef = useRef(null);

  function startTimer() {
    setInterval(() => {
      setTimer(timer => {
        if(timer>=1) return timer - 1;

        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if(intervalRef.current === null) return;
    setTitle(`Keep it up!`);
    clearInterval(intervalRef.current);
  }
  function resetTimer() {
    clearInterval(intervalRef.current);
    setTitle(`Ready to go another round?`);
    setTimer(timerTime * 60);
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
        <button onClick={startTimer}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
