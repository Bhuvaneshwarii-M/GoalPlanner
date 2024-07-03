import React from 'react';
import { useState } from 'react';
import Box from './Box';
import  Textfield  from './Textfield';

function App() {
  const [textItem,settextItem]=useState('Empty Value');
  return (
    <div className='App'>
      <h1>FIRST MY OWN REACT PROJECT</h1>
      <Box textItem={textItem} settextItem={settextItem}/>
      <Textfield textItem={textItem} settextItem={settextItem}/>
    </div>
  );
}

export default App;
