import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// write your Color component here

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState('no color selected');
  const selectColor = (colorName, string) => {
    setSelectedColor(colorName + string);
  }
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" selectColor={selectColor} setSelectedColor={setSelectedColor} />
        <Color color="blue" selectColor={selectColor} setSelectedColor={setSelectedColor} />
        <Color color="green" selectColor={selectColor} setSelectedColor={setSelectedColor} />
      </div>
    </div>
  )
}

const Color = ({ color, selectColor, setSelectedColor }) => {
  const border = ' selected';
  return (
    <div className={color} onClick={(e) => {
      selectColor(color, border);
      let selected = document.querySelectorAll('.selected')
      if (selected) {
        const allElements = document.querySelectorAll('.selected');
        allElements.forEach((element) => {
          console.log(element);
          element.classList.remove('selected');
        });
      }
      e.currentTarget.classList.add('selected')
    }} />
  )
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);