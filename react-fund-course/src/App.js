import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';

function App() {
  const [value, setValue] = useState('Text in an inpit'); // it's hook

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;

