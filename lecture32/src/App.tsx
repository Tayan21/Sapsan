import React from 'react';

import './App.css';
import { CountdownTimer } from './components/CountdownTimer';

export default function App() {
  const TIMER = 10 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTime = NOW_IN_MS + TIMER;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTime} />
    </div>
  );
}
