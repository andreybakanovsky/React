import React, { useState } from 'react';
import Counter from './components/counter';

function App() {
  const [value, setValue] = useState('Text in an inpit'); // it's hook

  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;

