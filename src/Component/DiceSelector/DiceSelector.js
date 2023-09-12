import React from 'react';
import dado1 from '../../assets/6l.svg';
import dado2 from '../../assets/16l.svg';
import dado3 from '../../assets/20l.svg';

import './DiceSelector.css'

function DiceSelector({ onDiceSelect }) {
  return (
    <div id='ofertas'>
      <h1>Selecione um dado para começar</h1>
      <div className='ofertas__container'>
        <article className='ofertas__item'>
          <div className='ofertas__item-image'>
            <img src={dado1} alt="" />
          </div>
          <div className='ofertas__item-cta' >
            <button className='btn' onClick={() => onDiceSelect(6)}>6 Lados</button>
            <h3></h3>
          </div>
        </article>
        <article className='ofertas__item'>
          <div className='ofertas__item-image'>
            <img src={dado2} alt="" />
          </div>
          <div className='ofertas__item-cta' >
            <button className='btn' onClick={() => onDiceSelect(16)}>16 Lados</button>
            <h3></h3>
          </div>
        </article>
        <article className='ofertas__item'>
          <div className='ofertas__item-image'>
            <img src={dado3} alt="" />
          </div>
          <div className='ofertas__item-cta' >
            <button className='btn' onClick={() => onDiceSelect(20)}>20 Lados</button>
            <h3></h3>
          </div>
        </article>
      </div>
    </div>
  );
}

export default DiceSelector;
