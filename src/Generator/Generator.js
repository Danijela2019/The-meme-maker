import React from 'react';
import './Generator.css';

const generator = (props) => {
  return (
    <div className="input-section">
      <input className="text-input"
          type="text"
          name="userInput"
          placeholder="Your text here"
          onChange={props.changed}
          value={props.currentText}
        />
      <input className="font-size-input"
          type="number"
          name="sizeFont"
          placeholder="Text size"  
          onChange={props.changed}
          value={props.currentFont}
        />
      <button className="meme-button" onClick={props.clicked}>NEW MEME</button>
    </div>  
  );
}

export default generator;