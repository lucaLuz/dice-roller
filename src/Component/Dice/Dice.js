import React from 'react';
import './Dice.css'

function Dice({ sides, onDiceRoll }) {
    const rollDice = async () => {
        try {
            const response = await fetch(`http://localhost:3001/roll?dice=${sides}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            onDiceRoll(data.result); 
        } catch (error) {
            console.error('A problem occurred when rolling the dice.', error);
        }
    };

    return (
        <div className='btn-roll'>
            <button className='btn' onClick={rollDice}>Jogar</button>
        </div>
    );
}

export default Dice;
