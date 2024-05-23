import React, { useState } from 'react'
import './index.css'
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [calcDisplay, setCalcDisplay] = useState('0')

  const handleEquals = () => {
    const result = evaluate(calcDisplay)
    setCalcDisplay(String(result))
  }

  const handleClear = () => {
    setCalcDisplay('0')
  }

  const handleKeyPress = (key) => {
    setCalcDisplay((prevDisplay) => prevDisplay + key)
  }

  return (
    <div className="calculator">
      <div id="display">{calcDisplay}</div>
      <div className="button-grid">
        <button id="clear" onClick={handleClear}>AC</button>
        <button className="empty"></button>
        <button className="empty"></button>
        <button id="divide" className="operator" onClick={() => handleKeyPress('/')}>/</button>
        <button id="seven" onClick={() => handleKeyPress('7')}>7</button>
        <button id="eight" onClick={() => handleKeyPress('8')}>8</button>
        <button id="nine" onClick={() => handleKeyPress('9')}>9</button>
        <button id="multiply" className="operator" onClick={() => handleKeyPress('*')}>*</button>
        <button id="four" onClick={() => handleKeyPress('4')}>4</button>
        <button id="five" onClick={() => handleKeyPress('5')}>5</button>
        <button id="six" onClick={() => handleKeyPress('6')}>6</button>
        <button id="subtract" className="operator" onClick={() => handleKeyPress('-')}>-</button>
        <button id="one" onClick={() => handleKeyPress('1')}>1</button>
        <button id="two" onClick={() => handleKeyPress('2')}>2</button>
        <button id="three" onClick={() => handleKeyPress('3')}>3</button>
        <button id="add" className="operator" onClick={() => handleKeyPress('+')}>+</button>
        <button id="zero" style={{ gridColumn: 'span 2' }} onClick={() => handleKeyPress('0')}>0</button>
        <button id="decimal" onClick={() => handleKeyPress('.')}>.</button>
        <button id="equals" onClick={handleEquals}>=</button>
      </div>
    </div>
  )
}

export default Calculator
