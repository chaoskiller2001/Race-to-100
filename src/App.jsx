import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [score, setScore] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ Get the number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  const handleClick = () => {
    setNum(randomNumberInRange(1, 6));
    setNum2(randomNumberInRange(1, 6));
    setScore(score+num+num2);
  };
  return (
    <div>
      <div>dice 1: {num}</div>
      <div>dice 2: {num2}</div>
      <div>score= {score}</div>
      <button onClick={handleClick}>Roll dice</button>
    </div>
  );
  
}

export default App
