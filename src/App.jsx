import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ Get the number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [num2, setNum2] = useState(0);
  const handleClick = () => {
    setNum(randomNumberInRange(1, 5));
    setNum2(randomNumberInRange(1, 5));
  };
  return (
    <div>
      <h2>dice 1: {num}</h2>
      <h3>dice 2: {num2}</h3>
      <button onClick={() =>{handleClick(), handleClick2()}}>Roll dice</button>
    </div>
  );
  
}

export default App
