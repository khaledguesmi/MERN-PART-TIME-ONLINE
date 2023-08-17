import './App.css';
import React, { useState } from 'react';
import Form from './components/form';
import Display from './components/Display';
import NinjaForm from './components/NinjaForm';
import NinjaDisplay from './components/NinjaDisplay';

function App() {
  const [ boxColorArray, setBoxColorArray ] = useState([]);
  const [ ninjaBoxArray, setNinjaBoxArray ] = useState([]);

  return (
    <div className="App">
      
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
      <hr />
    </div>
  );
}
export default App;