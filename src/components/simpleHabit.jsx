import React, { useState } from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div className='habit'>
      <span className='habit-name'>READING</span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </div>
  );  
};

export default SimpleHabit;