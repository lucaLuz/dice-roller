import React, { useState } from 'react';
import Dice from './Component/Dice/Dice';
import DiceSelector from './Component/DiceSelector/DiceSelector';

function App() {
  const [sides, setSides] = useState(null);
  const [result, setResult] = useState(null);

  const handleDiceSelect = (sides) => {
    setSides(sides);
    setResult(null); 
  };

  const handleDiceRoll = (result) => {
    setResult(result);
  };

  return (
    <section>
      <DiceSelector onDiceSelect={handleDiceSelect} />
      {result && <p className='result'>Este foi o resultado da sua jogada: {result}</p>}
      {sides && <Dice sides={sides} onDiceRoll={handleDiceRoll} />}
    </section>
  );
}

export default App;
