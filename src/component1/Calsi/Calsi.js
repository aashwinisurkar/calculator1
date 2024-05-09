import React, { useState } from 'react'
import Buttons from '../Buttons'
import './Calsi.css';
const Calsi = () => {
   

 
    const [inputVal, setInputVal] = useState('');

  const addButton= (symbol)  => {
    setInputVal((btvalue) =>[...Text, btvalue + symbol]);
  };

  const handleButtonClick = (symbol) => {
    if (symbol === 'DE') {
      setInputVal((btvalue) => btvalue.slice(0, -1));
    } else if (symbol === 'AC') {
      setInputVal('');
    } else {
      addButton(symbol);
    }
  };
    
  return (
    <div className='main-header'>
      <div className='calculator'>
        <div className='inputWrap'>
          <input type='text'value={inputVal} readOnly />
        </div>
        <div className='parent row'>
          <Buttons symbol='DE' buttonClick={handleButtonClick} />
          <Buttons symbol='AC' buttonClick={handleButtonClick} />
          <Buttons symbol='/' buttonClick={handleButtonClick} />
          <Buttons symbol='*' buttonClick={handleButtonClick} />
        </div>
        <div className='parent row '>
          <Buttons symbol='7' buttonClick={handleButtonClick} />
          <Buttons symbol='8' buttonClick={handleButtonClick} />
          <Buttons symbol='9' buttonClick={handleButtonClick} />
          <Buttons symbol='-' buttonClick={handleButtonClick} />
        </div>
        <div className='parent row'>
          <Buttons symbol='4' buttonClick={handleButtonClick} />
          <Buttons symbol='5' buttonClick={handleButtonClick} />
          <Buttons symbol='6' buttonClick={handleButtonClick} />
          <Buttons symbol='+' buttonClick={handleButtonClick} />
        </div>
        <div className='parent row'>
          <Buttons symbol='1' buttonClick={handleButtonClick} />
          <Buttons symbol='2' buttonClick={handleButtonClick} />
          <Buttons symbol='3' buttonClick={handleButtonClick} />
          <Buttons symbol='=' buttonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Calsi;