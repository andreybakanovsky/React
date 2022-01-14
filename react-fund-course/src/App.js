import React, { useState } from 'react';

function App() {
  const [stars, setStars] = useState(0); // it's hook
  const [value, setValue ] = useState('Text in an inpit'); // it's hook

  function increment() {
    setStars(stars + 1);
  }

  function decrement() {
    setStars(stars - 1);
  }

  return (
    <div className="App">
      <h1> Stars:  {stars} </h1>
      <h1> {value} </h1>
      <input 
      type="text"
       value={value}
       onChange={event => setValue(event.target.value)} // двухстороннее связывание
       />
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>
    </div>
  );
}

export default App;

