import React, { useState } from 'react';
import './App.css';

function addPad(timer) {
  return timer.toString().padStart(2 , 0);
}

export default function App() {
  const [title, setTitle] = useState("Let the countdown begin!!!")
  const [timer, setTimer] = useState(5);


  function startTimer() {
    setInterval(() => {
      setTimer(timer => {
        if(timer>=1) return timer - 1;

        return 0;
      });
    }, 1000);
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
      </div>
    </div>
  );
}
