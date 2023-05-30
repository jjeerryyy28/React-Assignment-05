import React, { useState } from 'react';
import './input.css'

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log(inputValue);
  };

  return (
    <div className='input'>
      <input type="text" placeholder="Enter some text here" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Show</button>
      <p>{inputValue}</p>
    </div>
  );
};

export default InputBox;
