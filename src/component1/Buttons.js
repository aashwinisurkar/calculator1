import React from 'react'
import './Buttons.css';
const Buttons = ({ symbol, handleButtonClick })  => {




  
  return (
    <div className='buton-wrap'
       onClick={() => handleButtonClick(symbol)} >
      {symbol}
    </div>
  )
}

export default Buttons;