import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Forms from './components/inputForms';

function App() {
 
  

  return (
    <div className="App">
      <Forms/>
     {/* <p>HI!!!</p>
     <form onSubmit={handleSubmit}>
     <label>Enter value : </label>
       <textarea
          value={textAreaValue}
          onChange={handleChange}
        />
        <button type="submit">send</button>
        </form> */}
    </div>
  );
}

export default App;
