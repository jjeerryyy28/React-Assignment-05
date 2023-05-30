import React, { useState } from 'react';

const Store = () => {
  const [inputValue, setInputValue] = useState('');
  const [storedValues, setStoredValues] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setStoredValues([...storedValues, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Store Value</button>
      <ul>
        {storedValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
